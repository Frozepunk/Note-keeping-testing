function initWrite() {
    const editor = document.getElementById('editor');
    const saveDraftBtn = document.getElementById('save-draft');
    const publishBtn = document.getElementById('publish');
    const boldBtn = document.getElementById('bold');
    const italicBtn = document.getElementById('italic');
    const underlineBtn = document.getElementById('underline');

    saveDraftBtn.addEventListener('click', () => {
        const content = editor.innerHTML;
        localStorage.setItem('draft', content);
        alert('Draft saved!');
    });

    publishBtn.addEventListener('click', () => {
        const content = editor.innerHTML;
        // Here you would typically send the content to a server
        console.log('Published:', content);
        alert('Article published!');
    });

    boldBtn.addEventListener('click', () => {
        document.execCommand('bold', false, null);
    });

    italicBtn.addEventListener('click', () => {
        document.execCommand('italic', false, null);
    });

    underlineBtn.addEventListener('click', () => {
        document.execCommand('underline', false, null);
    });

    // Load draft if exists
    const savedDraft = localStorage.getItem('draft');
    if (savedDraft) {
        editor.innerHTML = savedDraft;
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initWrite);
