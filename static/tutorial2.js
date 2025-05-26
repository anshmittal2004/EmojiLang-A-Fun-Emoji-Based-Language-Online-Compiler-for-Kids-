document.addEventListener('DOMContentLoaded', () => {
    const moduleTabsContainer = document.getElementById('module-navigation-tabs');
    const activeModuleDisplayArea = document.getElementById('active-module-display-area');
    const moduleTemplate = document.getElementById('module-content-template');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressText = document.getElementById('progress-text');

    let currentModuleIndex = -1; // -1 means no module selected initially
    let completedModules = JSON.parse(localStorage.getItem('emojilangCompletedModules')) || [];

    function initializeTutorial() {
        renderModuleTabs();
        updateProgress();
        // Optionally, load the first incomplete module or the placeholder
        const firstIncomplete = tutorialModulesData.findIndex(m => !completedModules.includes(m.id));
        if(firstIncomplete !== -1) {
            loadModule(firstIncomplete);
        } else if (tutorialModulesData.length > 0) {
            loadModule(0); // Load first module if all are complete or no progress yet
        }
    }

    function renderModuleTabs() {
        moduleTabsContainer.innerHTML = ''; // Clear existing tabs
        tutorialModulesData.forEach((module, index) => {
            const tab = document.createElement('button');
            tab.classList.add('module-tab');
            tab.dataset.moduleId = module.id;
            tab.dataset.moduleIndex = index;
            tab.textContent = module.title.split('–')[0].trim(); // Short title for tab

            if (completedModules.includes(module.id)) {
                tab.classList.add('completed');
            }

            tab.addEventListener('click', () => loadModule(index));
            moduleTabsContainer.appendChild(tab);
        });
    }

    function loadModule(index) {
        if (index < 0 || index >= tutorialModulesData.length) return; // Invalid index

        currentModuleIndex = index;
        const moduleData = tutorialModulesData[index];

        // Update active tab
        document.querySelectorAll('.module-tab').forEach(t => t.classList.remove('active'));
        const activeTab = document.querySelector(`.module-tab[data-module-index="${index}"]`);
        if (activeTab) activeTab.classList.add('active');

        // Clone template and populate
        const moduleInstance = moduleTemplate.content.cloneNode(true);
        moduleInstance.querySelector('.module-icon-display').textContent = moduleData.icon;
        moduleInstance.querySelector('.module-title-display').textContent = moduleData.title;
        moduleInstance.querySelector('.module-subheading-display').textContent = moduleData.subheading;
        moduleInstance.querySelector('.module-text-content').innerHTML = moduleData.textContentHTML;
        moduleInstance.querySelector('.module-code-box').innerHTML = moduleData.codeContentHTML;

        const completeBtn = moduleInstance.querySelector('.complete-module-btn');
        completeBtn.dataset.moduleId = moduleData.id;
        if (completedModules.includes(moduleData.id)) {
            completeBtn.classList.add('completed');
            completeBtn.textContent = 'Module Complete!';
            completeBtn.disabled = true;
        }
        completeBtn.addEventListener('click', handleCompleteModule);

        // Prev/Next buttons
        const prevBtn = moduleInstance.querySelector('.prev-module-btn');
        const nextBtn = moduleInstance.querySelector('.next-module-btn');

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === tutorialModulesData.length - 1;

        prevBtn.addEventListener('click', () => loadModule(index - 1));
        nextBtn.addEventListener('click', () => loadModule(index + 1));


        activeModuleDisplayArea.innerHTML = ''; // Clear previous module
        activeModuleDisplayArea.appendChild(moduleInstance);

        // Scroll to the top of the active module display area for better UX
        activeModuleDisplayArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function handleCompleteModule(event) {
        const moduleId = event.target.dataset.moduleId;
        if (!completedModules.includes(moduleId)) {
            completedModules.push(moduleId);
            localStorage.setItem('emojilangCompletedModules', JSON.stringify(completedModules));
            event.target.classList.add('completed');
            event.target.textContent = 'Module Complete!';
            event.target.disabled = true;
            
            // Update corresponding tab
            const tab = document.querySelector(`.module-tab[data-module-id="${moduleId}"]`);
            if (tab) tab.classList.add('completed');
            
            updateProgress();

            // Auto-load next incomplete module if available
            const nextIncompleteIndex = tutorialModulesData.findIndex((m, idx) => idx > currentModuleIndex && !completedModules.includes(m.id));
            if (nextIncompleteIndex !== -1) {
                loadModule(nextIncompleteIndex);
            } else {
                 // If all are complete or no next incomplete, check if there is ANY incomplete before current one
                const anyIncompleteBefore = tutorialModulesData.findIndex((m, idx) => idx < currentModuleIndex && !completedModules.includes(m.id));
                 if (anyIncompleteBefore !== -1) {
                     loadModule(anyIncompleteBefore);
                 } else if (currentModuleIndex < tutorialModulesData.length -1) {
                    loadModule(currentModuleIndex + 1); // or just go to next sequential if no logic
                 }
            }
        }
    }

    function updateProgress() {
        const completedCount = completedModules.length;
        const totalModules = tutorialModulesData.length;
        const progressPercentage = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

        progressBarFill.style.width = `${progressPercentage}%`;
        progressText.textContent = `${Math.round(progressPercentage)}% Complete (${completedCount}/${totalModules})`;
    }
    
    // Add the same hero background emoji effect
    const heroBgInteractive = document.querySelector('.tutorial-header-section .hero-background-emojis');
    if (heroBgInteractive) {
        const bgEmojis = ['💻', '💡', '🚀', '✨', '😊', '🤔', '🎉', '👍', '🌟', '🎓', '🧩', '🎨'];
        const numEmojis = 25;

        for (let i = 0; i < numEmojis; i++) {
            let emojiSpan = document.createElement('span');
            // Reuse emoji-particle class if styles are shared or define new one
            emojiSpan.classList.add('emoji-particle'); // Assuming .emoji-particle is in style.css
            emojiSpan.textContent = bgEmojis[Math.floor(Math.random() * bgEmojis.length)];
            emojiSpan.style.left = `${Math.random() * 100}%`;
            emojiSpan.style.top = `${Math.random() * 100}%`;
            emojiSpan.style.animationDelay = `${Math.random() * 15}s`;
            emojiSpan.style.fontSize = `${0.7 + Math.random() * 1.2}rem`;
            heroBgInteractive.appendChild(emojiSpan);
        }
    }


    initializeTutorial();
});