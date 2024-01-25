//darkmode
const toggle = document.getElementById('darkmode');
const body = document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('bxs-moon');
    if(this.classList.toggle('bxs-sun')){
         body.style.background = 'black';
         body.style.color ='rgba(152, 146, 146, 0.497)';
         body.style.transition= '2s';
    }else{
        body.style.background = 'rgba(152, 146, 146, 0.497)';
        body.style.color ='black';
        body.style.transition= '2s';
    }
})
//menu_icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let  id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        }
    });
}

//header_menu per lo scroll 
window.onscroll=()=> {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
  