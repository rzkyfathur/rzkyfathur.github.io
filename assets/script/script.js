/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*===== ADD SHADOW HEADER =====*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


/*===== SHOW SCROLL TOP=====*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*================================================== dark  light theme ==================================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*===== send email =====*/
function sendMail(params) {
    let name = document.getElementById('fromName').value;
    let toName = document.getElementById('toName').value;

    if (name == "" || toName == "") {
        alert("Please complete the message form!");
        return false;
    } else {
        let tempParams = {
            from_name: document.getElementById('fromName').value,
            to_name: document.getElementById('toName').value,
            message: document.getElementById('msg').value
        }

        emailjs.send('service_t8ignq9', 'template_wzr1jum', tempParams).then(function(res) {
            alert('E-mail sent successfully!', res.status)
        })
    }

}


/*===== GSAP =====*/
gsap.from('.nav__logo, .nav__toggle, .bxs-sun, .bxs-moon', {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: 'expo.out',
    stagger: .2
});
gsap.from('.nav__item', {
    opacity: 0,
    duration: 2,
    delay: 1.8,
    y: 25,
    ease: 'expo.out',
    stagger: .2
});

gsap.from('.hero-banner', {
    opacity: 0,
    duration: 2,
    delay: 1,
    x: 60
})
gsap.from('.hero-title, .button', {
    opacity: 0,
    duration: 2,
    delay: .5,
    x: -60
})

gsap.registerPlugin(TextPlugin);
gsap.to('.hero-title', {
    duration: 2.5,
    delay: 2,
    text: `Yoo I'm Fathur Rizky
    I 'm Web Developer`
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.contact-item, .portfolio-item, .skills-item, .certificate-item`, {
    interval: 100
})