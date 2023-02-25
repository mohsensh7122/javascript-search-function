let searchInput = document.getElementById('authorSearch');

searchInput.addEventListener('keyup', e => {
    let inputValue = e.target.value.toLowerCase();
    let authors = document.querySelectorAll('h1.title');

    authors.forEach(author => {
        if (author.textContent.toLowerCase().includes(inputValue)){
            author.parentNode.parentNode.style.display = 'block';
        } else {
            author.parentNode.parentNode.style.display = 'none';
        }
    })
})