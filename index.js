const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownList = dropdownMenu.querySelector('ul');
const dropdownElems = dropdownList.querySelectorAll('li');

dropdownMenu.classList.toggle('hidden');

dropdownBtn.addEventListener('mouseover', function() {
    dropdownMenu.classList.toggle('hidden')
})

dropdownMenu.addEventListener('mouseout', function() {
    dropdownMenu.classList.toggle('hidden')
})