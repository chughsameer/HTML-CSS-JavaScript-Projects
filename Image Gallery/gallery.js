let scrollContainer = document.querySelector('.gallery');
let backbtn = document.getElementById('back-btn');
let nextbtn = document.getElementById('next-btn');

scrollContainer.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'autov';
});

nextbtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900
})
backbtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900
})