// script.js
const sidebar = document.getElementById('side-bar');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const main = document.getElementById('main');

const toggleSidebar = () => {
    sidebar.classList.toggle('sidebar-open');
    // main.classList.toggle('shifted');
}

openBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
