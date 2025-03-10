const sideMenu=document.querySelector('#sideMenu');
function openMenu(){
    sideMenu.style.transform= 'translateX(-296px)';
}
function closeMenu(){
    sideMenu.style.transform= 'translateX(256px)';
}





// const navBar=document.querySelector('nav')
// const navLinks=document.querySelector('nav ul')

// window.addEventListener('scroll',()=>{
//     if(scrollY >50){
//         navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
//         navLinks.classList.remove('bg-amber-50','shadow-sm','opacity-90' )
//     }else{
//         navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
//         navLinks.classList.add('bg-amber-50','shadow-sm','opacity-90' )
//     }
// })