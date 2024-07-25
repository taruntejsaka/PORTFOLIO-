let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');  // corrected to querySelectorAll and 'section' instead of 'sections'
let navLinks = document.querySelectorAll('header nav a');  // corrected to querySelectorAll

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {  // corrected arrow function syntax and variable name
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  // corrected space in attribute selector
            });
        }
    });
};
