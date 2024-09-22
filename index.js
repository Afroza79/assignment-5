window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) { // You can adjust the scroll position threshold
        header.classList.remove('bg-nav_color');
        header.classList.add('bg-white', 'bg-opacity-30');
    } else {
        header.classList.remove('bg-white', 'bg-opacity-30');
        header.classList.add('bg-nav_color');
    }
});

console.log("hello")