const dropdownBar = document.querySelector('.menu-bar');
const dropdownMenu = document.querySelector('.dropdown-menu');

// create css style \\
(function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.active { display: inline-block; }'
    document.getElementsByTagName('head')[0].appendChild(style);
})();

const toggleDropdown = (menu, bar) => {
    menu.style.display = 'none';
    bar.addEventListener('mouseover', function() {
        menu.style.display = 'inline-block';
    })
    bar.addEventListener('mouseout', function() {
        menu.style.display = 'none';
    })
}

toggleDropdown(dropdownMenu, dropdownBar);
