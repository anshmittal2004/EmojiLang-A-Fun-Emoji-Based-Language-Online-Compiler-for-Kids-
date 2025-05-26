// Insert emoji into code editor on button click
document.querySelectorAll('.emoji-btn').forEach(button => {
    button.addEventListener('click', () => {
        const emoji = button.getAttribute('data-emoji');
        const codeInput = document.getElementById('codeInput');

        // Ensure textarea is focused
        codeInput.focus();

        // Get cursor position or default to end
        const startPos = codeInput.selectionStart !== undefined ? codeInput.selectionStart : codeInput.value.length;
        const endPos = codeInput.selectionEnd !== undefined ? codeInput.selectionEnd : codeInput.value.length;
        const text = codeInput.value;

        // Insert emoji at cursor position
        codeInput.value = text.substring(0, startPos) + emoji + text.substring(endPos);

        // Update cursor position
        const newPos = startPos + emoji.length;
        codeInput.selectionStart = codeInput.selectionEnd = newPos;

        // Scroll to cursor position
        codeInput.scrollTop = codeInput.scrollHeight;

        // Optional: Brief visual feedback (CSS handles hover/scale)
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 200);
    });
});

async function runCode() {
    const code = document.getElementById('codeInput').value;
    const outputElement = document.getElementById('output');
    const inputArea = document.getElementById('inputArea');
    const userInput = document.getElementById('userInput');
    const submitInputBtn = document.getElementById('submitInputBtn');

    // Clear previous output and hide input area
    outputElement.textContent = '';
    inputArea.style.display = 'none';
    userInput.value = '';

    let response = await fetch('/start_execution', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
    });
    let data = await response.json();

    if (data.error) {
        outputElement.textContent = data.error;
        return;
    }

    let output = data.output || '';
    let session_id = data.session_id;

    outputElement.textContent = output;

    while (data.need_input) {
        // Show input prompt in output area and enable input field
        outputElement.textContent += `\nEnter value for ${data.var_name}: `;
        inputArea.style.display = 'block';
        userInput.focus();

        // Wait for user to submit input
        const input_value = await new Promise(resolve => {
            const submitHandler = () => {
                const value = userInput.value.trim();
                if (value) {
                    userInput.value = ''; // Clear input field
                    inputArea.style.display = 'none'; // Hide input area
                    submitInputBtn.removeEventListener('click', submitHandler);
                    userInput.removeEventListener('keypress', keypressHandler);
                    resolve(value);
                }
            };

            const keypressHandler = (event) => {
                if (event.key === 'Enter') {
                    submitHandler();
                }
            };

            submitInputBtn.addEventListener('click', submitHandler);
            userInput.addEventListener('keypress', keypressHandler);
        });

        // Append the user's input to the output for a terminal-like experience
        outputElement.textContent += input_value;

        // Send input to server
        response = await fetch('/provide_input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ session_id, input_value })
        });
        data = await response.json();

        if (data.error) {
            outputElement.textContent += `\n${data.error}`;
            inputArea.style.display = 'none';
            return;
        }

        // Update output
        if (data.output) {
            outputElement.textContent = data.output;
        }
    }

    // Ensure input area is hidden when done
    inputArea.style.display = 'none';
}

document.getElementById('runBtn').addEventListener('click', runCode);