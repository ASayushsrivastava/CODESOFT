document.getElementById('read-more-btn').addEventListener('click', function() {
    var fullContent = document.getElementById('full-content');
    var shortContent = document.getElementById('short-content');
    
    if (fullContent.classList.contains('hidden')) {
        fullContent.classList.remove('hidden');
        shortContent.classList.add('hidden');
        this.textContent = 'Read Less';
    } else {
        fullContent.classList.add('hidden');
        shortContent.classList.remove('hidden');
        this.textContent = 'Read More';
    }
});
