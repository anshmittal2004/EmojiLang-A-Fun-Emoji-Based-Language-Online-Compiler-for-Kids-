const tutorialModulesData = [
    {
        id: "intro-emojilang",
        icon: "👋",
        title: "Welcome to Emojilang!",
        subheading: "Coding Made Fun with Emojis ✨",
        textContentHTML: `
            <p>Hello, young coder! Welcome to Emojilang, a super cool way to learn coding with emojis. Coding is like telling a computer what to do, and with Emojilang, it’s as fun as playing with your favorite toys! You’ll use emojis like <span class="emoji-inline">🆕</span> to make variables, <span class="emoji-inline">💬</span> to show messages, and <span class="emoji-inline">🔄</span> to repeat things. This tutorial will teach you the basics step-by-step. Ready to become a coding star? Let’s get started! <span class="emoji-inline">🌟</span></p>
        `,
        codeContentHTML: `
            <div class="code-line"><span class="emojilang-syntax-note">This module is an introduction!</span></div>
            <div class="code-line"><span class="emojilang-syntax-note">Select other modules for code examples.</span></div>
            <div class="code-line"><span class="emoji-command">🚀</span> <span class="comment">// Explore and have fun!</span></div>
        `
    },
    {
        id: "module-variables",
        icon: "📦",
        title: "Variables – Storing Information",
        subheading: "Think of Variables as Magic Boxes!",
        textContentHTML: `
            <p>Variables are like little boxes where you can store stuff—like your name, a number, or even an emoji! In Emojilang, you make a variable with the <span class="emoji-inline">🆕</span> emoji. Check this out:</p>
            <p class="emojilang-inline-code"><span class="emoji-command">🆕</span> name <span class="operator">=</span> <span class="string">"Alex"</span></p>
            <p>This tells the computer to put "Alex" in a box called "name." You can use it later to do fun things!</p>
            <h4>Example:</h4>
            <p>Let’s store a number:</p>
            <p class="emojilang-inline-code"><span class="emoji-command">🆕</span> age <span class="operator">=</span> <span class="number">10</span></p>
            <p>Now, "age" holds the number 10. It’s like keeping your age in a secret box! <span class="emoji-inline">🤫</span></p>
        `,
        codeContentHTML: `
            <div class="code-line"><span class="comment">// Variable for a name (string)</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> name <span class="operator">=</span> <span class="string">"Alex"</span></div>
            <br>
            <div class="code-line"><span class="comment">// Variable for an age (number)</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> age <span class="operator">=</span> <span class="number">10</span></div>
            <br>
            <div class="code-line"><span class="comment">// Using the variables</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"Hello, "</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> name</div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"Your age is: "</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> age</div>
        `
    },
    {
        id: "module-io",
        icon: "🗣️",
        title: "Input & Output – Talking to the Computer",
        subheading: "Ask Questions and Share Answers!",
        textContentHTML: `
            <p>Want to talk to the computer? You can ask for info (like a name) with <span class="emoji-inline">⌨️</span> and show messages with <span class="emoji-inline">💬</span>. Here’s a program that asks for your name and says hi:</p>
            <div class="emojilang-code-example-inline"> <!-- Can style this similar to code block but for text area -->
                <span class="emoji-command">🆕</span> name <span class="operator">=</span> <span class="string">""</span><br>
                <span class="emoji-command">⌨️</span> name<br>
                <span class="emoji-command">💬</span> <span class="string">"Hello, "</span><br>
                <span class="emoji-command">💬</span> name
            </div>
            <p>When you run this, it waits for you to type your name, then says "Hello, [your name]!"</p>
            <h4>Example:</h4>
            <p>Try this one:</p>
            <div class="emojilang-code-example-inline">
                <span class="emoji-command">🆕</span> favoriteColor <span class="operator">=</span> <span class="string">""</span><br>
                <span class="emoji-command">⌨️</span> favoriteColor<br>
                <span class="emoji-command">💬</span> <span class="string">"Your favorite color is "</span><br>
                <span class="emoji-command">💬</span> favoriteColor
            </div>
            <p>This asks for your favorite color and repeats it back—like a chat with the computer! <span class="emoji-inline">🤖</span></p>
        `,
        codeContentHTML: `
            <div class="code-line"><span class="comment">// Program to ask for name and say hi</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> name <span class="operator">=</span> <span class="string">""</span></div>
            <div class="code-line"><span class="emoji-command">⌨️</span> name <span class="comment">// Ask the user for input</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"Hello, "</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> name <span class="comment">// Display the user's name</span></div>
            <br>
            <div class="code-line"><span class="comment">// Program to ask for favorite color</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> favoriteColor <span class="operator">=</span> <span class="string">""</span></div>
            <div class="code-line"><span class="emoji-command">⌨️</span> favoriteColor</div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"Your favorite color is "</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> favoriteColor</div>
        `
    },
    {
        id: "module-conditionals",
        icon: "🤔",
        title: "Conditionals – Making Decisions",
        subheading: "Tell the Computer What to Do Based on Conditions!",
        textContentHTML: `
            <p>Sometimes, you want the computer to choose between things. That’s where <span class="emoji-inline">❓</span> (if) and <span class="emoji-inline">❗</span> (else) help! Here’s an example to check if a number is big:</p>
            <div class="emojilang-code-example-inline">
              <span class="emoji-command">🆕</span> number <span class="operator">=</span> <span class="number">15</span><br>
              <span class="emoji-command">❓</span> number <span class="operator">></span> <span class="number">10</span><br>
              <span class="indent"><span class="emoji-control">▶️</span></span><br>
              <span class="indent-more"><span class="emoji-command">💬</span> <span class="string">"That’s a big number!"</span></span><br>
              <span class="indent"><span class="emoji-control">⏹️</span></span><br>
              <span class="emoji-command">❗</span><br>
              <span class="indent"><span class="emoji-control">▶️</span></span><br>
              <span class="indent-more"><span class="emoji-command">💬</span> <span class="string">"That’s a small number!"</span></span><br>
              <span class="indent"><span class="emoji-control">⏹️</span></span>
            </div>
            <p>If the number is more than 10, it says "That’s a big number!" If not, it says "That’s a small number!"</p>
            <h4>Example:</h4>
            <p>Let’s see if you can ride a rollercoaster:</p>
            <div class="emojilang-code-example-inline">
                <span class="emoji-command">🆕</span> age <span class="operator">=</span> <span class="number">0</span><br>
                <span class="emoji-command">⌨️</span> age<br>
                <span class="emoji-command">❓</span> age <span class="operator">>=</span> <span class="number">12</span><br>
                <span class="indent"><span class="emoji-control">▶️</span></span><br>
                <span class="indent-more"><span class="emoji-command">💬</span> <span class="string">"You can ride the rollercoaster!"</span></span><br>
                <span class="indent"><span class="emoji-control">⏹️</span></span><br>
                <span class="emoji-command">❗</span><br>
                <span class="indent"><span class="emoji-control">▶️</span></span><br>
                <span class="indent-more"><span class="emoji-command">💬</span> <span class="string">"Sorry, you’re too young."</span></span><br>
                <span class="indent"><span class="emoji-control">⏹️</span></span>
            </div>
            <p>Type your age, and it’ll tell you if you’re tall enough to ride! <span class="emoji-inline">🎢</span></p>
        `,
        codeContentHTML: `
            <div class="code-line"><span class="comment">// Check if a number is big</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> number <span class="operator">=</span> <span class="number">15</span></div>
            <div class="code-line"><span class="emoji-command">❓</span> number <span class="operator">></span> <span class="number">10</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> <span class="string">"That’s a big number!"</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
            <div class="code-line"><span class="emoji-command">❗</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> <span class="string">"That’s a small number!"</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
            <br>
            <div class="code-line"><span class="comment">// Rollercoaster ride eligibility</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> userAge <span class="operator">=</span> <span class="number">0</span></div>
            <div class="code-line"><span class="emoji-command">⌨️</span> userAge</div>
            <div class="code-line"><span class="emoji-command">❓</span> userAge <span class="operator">>=</span> <span class="number">12</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> <span class="string">"You can ride the rollercoaster!"</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
            <div class="code-line"><span class="emoji-command">❗</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> <span class="string">"Sorry, you’re too young."</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
        `
    },
    {
        id: "module-loops",
        icon: "🔄",
        title: "Loops – Repeating Actions",
        subheading: "Save Time by Repeating Code!",
        textContentHTML: `
            <p>Loops let you repeat stuff without typing it over and over. In Emojilang, use <span class="emoji-inline">🔄</span> to make a loop. Here’s how to say "Hello" three times:</p>
            <div class="emojilang-code-example-inline">
                <span class="emoji-command">🔄</span> <span class="number">3</span><br>
                <span class="indent"><span class="emoji-control">▶️</span></span><br>
                <span class="indent-more"><span class="emoji-command">💬</span> <span class="string">"Hello"</span></span><br>
                <span class="indent"><span class="emoji-control">⏹️</span></span>
            </div>
            <p>This prints "Hello" three times—easy peasy!</p>
            <h4>Example:</h4>
            <p>Let’s count from 1 to 5:</p>
            <div class="emojilang-code-example-inline">
                <span class="emoji-command">🆕</span> count <span class="operator">=</span> <span class="number">1</span><br>
                <span class="emoji-command">🔄</span> <span class="number">5</span><br>
                <span class="indent"><span class="emoji-control">▶️</span></span><br>
                <span class="indent-more"><span class="emoji-command">💬</span> count</span><br>
                <span class="indent-more">count <span class="operator">=</span> count <span class="operator">+</span> <span class="number">1</span></span><br>
                <span class="indent"><span class="emoji-control">⏹️</span></span>
            </div>
            <p>This shows the numbers 1, 2, 3, 4, 5—one per line! <span class="emoji-inline">🔢</span></p>
        `,
        codeContentHTML: `
            <div class="code-line"><span class="comment">// Say "Hello" three times</span></div>
            <div class="code-line"><span class="emoji-command">🔄</span> <span class="number">3</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> <span class="string">"Hello"</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
            <br>
            <div class="code-line"><span class="comment">// Count from 1 to 5</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> count <span class="operator">=</span> <span class="number">1</span></div>
            <div class="code-line"><span class="emoji-command">🔄</span> <span class="number">5</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> count</div>
            <div class="code-line indent-more">count <span class="operator">=</span> count <span class="operator">+</span> <span class="number">1</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
        `
    },
    {
        id: "fun-programs",
        icon: "🎉",
        title: "Putting It All Together: Fun Programs",
        subheading: "Try These Simple Programs to Practice",
        textContentHTML: `
            <p>You’ve learned a lot—now let’s mix it all up with some cool programs! Type these into Emojilang and see them work.</p>
            <h4>Program 1: Hello World <span class="emoji-inline">🌍</span></h4>
            <p class="emojilang-inline-code"><span class="emoji-command">💬</span> <span class="string">"Hello, World!"</span></p>
            <p><strong>What it does:</strong> This just says "Hello, World!"—a classic first program!</p>

            <h4>Program 2: If-Else Example <span class="emoji-inline">🏆</span></h4>
             <div class="emojilang-code-example-inline">
                <span class="emoji-command">🆕</span> score <span class="operator">=</span> <span class="number">85</span><br>
                <span class="emoji-command">❓</span> score <span class="operator">>=</span> <span class="number">60</span><br>
                <span class="indent"><span class="emoji-control">▶️</span></span><br>
                <span class="indent-more"><span class="emoji-command">💬</span> <span class="string">"You passed!"</span></span><br>
                <span class="indent"><span class="emoji-control">⏹️</span></span><br>
                <span class="emoji-command">❗</span><br>
                <span class="indent"><span class="emoji-control">▶️</span></span><br>
                <span class="indent-more"><span class="emoji-command">💬</span> <span class="string">"Try again!"</span></span><br>
                <span class="indent"><span class="emoji-control">⏹️</span></span>
            </div>
            <p><strong>What it does:</strong> Checks if a score is 60 or higher and says if you passed or need to try again.</p>

            <h4>Program 3: Printing 1 to 10 with Loops <span class="emoji-inline">🔟</span></h4>
             <div class="emojilang-code-example-inline">
                <span class="emoji-command">🆕</span> number <span class="operator">=</span> <span class="number">1</span><br>
                <span class="emoji-command">🔄</span> <span class="number">10</span><br>
                <span class="indent"><span class="emoji-control">▶️</span></span><br>
                <span class="indent-more"><span class="emoji-command">💬</span> number</span><br>
                <span class="indent-more">number <span class="operator">=</span> number <span class="operator">+</span> <span class="number">1</span></span><br>
                <span class="indent"><span class="emoji-control">⏹️</span></span>
            </div>
            <p><strong>What it does:</strong> Counts from 1 to 10 using a loop—great for practice!</p>
        `,
        codeContentHTML: `
            <div class="code-line"><span class="comment">// Program 1: Hello World</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"Hello, World!"</span></div>
            <br>
            <div class="code-line"><span class="comment">// Program 2: If-Else Example</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> score <span class="operator">=</span> <span class="number">85</span></div>
            <div class="code-line"><span class="emoji-command">❓</span> score <span class="operator">>=</span> <span class="number">60</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> <span class="string">"You passed!"</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
            <div class="code-line"><span class="emoji-command">❗</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> <span class="string">"Try again!"</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
            <br>
            <div class="code-line"><span class="comment">// Program 3: Printing 1 to 10 with Loops</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> numToPrint <span class="operator">=</span> <span class="number">1</span></div>
            <div class="code-line"><span class="emoji-command">🔄</span> <span class="number">10</span></div>
            <div class="code-line indent"><span class="emoji-control">▶️</span></div>
            <div class="code-line indent-more"><span class="emoji-command">💬</span> numToPrint</div>
            <div class="code-line indent-more">numToPrint <span class="operator">=</span> numToPrint <span class="operator">+</span> <span class="number">1</span></div>
            <div class="code-line indent"><span class="emoji-control">⏹️</span></div>
        `
    },
    {
        id: "practice-play",
        icon: "🎮",
        title: "Practice and Play",
        subheading: "Try These Challenges!",
        textContentHTML: `
            <p>Now it’s your turn to shine! Try these fun coding challenges in the <a href="code.html" class="text-link">Emojilang Editor</a>:</p>
            <ul>
                <li><strong><span class="emoji-inline">👤</span> Name and Age:</strong> Write a program that asks for a name and age, then says "Hello, [name]! You are [age] years old."</li>
                <li><strong><span class="emoji-inline">⚖️</span> Even or Odd:</strong> Ask for a number and use if-else to say if it’s even or odd (hint: use <span class="emojilang-inline-code">% 2 == 0</span> to check if it’s even).</li>
                <li><strong><span class="emoji-inline">🌟</span> Counting Stars:</strong> Use a loop to print "<span class="emoji-inline">⭐</span>" five times.</li>
            </ul>
            <p>Show off your skills and have fun coding! You're a true Emojilang Coder now! <span class="emoji-inline">🥳</span></p>
        `,
        codeContentHTML: `
            <div class="code-line"><span class="comment">// Challenge 1: Name and Age</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> myName <span class="operator">=</span> <span class="string">""</span></div>
            <div class="code-line"><span class="emoji-command">🆕</span> myAge <span class="operator">=</span> <span class="number">0</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"What is your name?"</span></div>
            <div class="code-line"><span class="emoji-command">⌨️</span> myName</div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"How old are you?"</span></div>
            <div class="code-line"><span class="emoji-command">⌨️</span> myAge</div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"Hello, "</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> myName</div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">"! You are "</span></div>
            <div class="code-line"><span class="emoji-command">💬</span> myAge</div>
            <div class="code-line"><span class="emoji-command">💬</span> <span class="string">" years old."</span></div>
            <br>
            <div class="code-line"><span class="emojilang-syntax-note">Head to the editor to try the other challenges!</span></div>
        `
    }
];