document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const codeBlocks = document.querySelectorAll('.sxcode');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');

            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            codeBlocks.forEach(block => {
                block.className = block.className.replace(/theme-\w+/g, '');
                block.classList.add(`theme-${theme}`);
            });
        });
    });
});