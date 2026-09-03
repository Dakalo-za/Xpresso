function togglemenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.burger-icon')
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

/* button to target the book table page */
const btnBook = document.getElementById('bookTable');

btnBook.addEventListener('click', () => {
    window.location.href = "book.html";
});
