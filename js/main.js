let menu = document.getElementById("menu-toggle");
let list = document.getElementById("list");

menu.onclick = function () {
    menu.classList.toggle("active");
    list.classList.toggle("active");
};

// animation section & elements
function restartAnimation(element) {
    element.style.animation = 'none'; 
    element.offsetHeight; 
    element.style.animation = ''; 
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && rect.bottom > 0) {
            if (!section.classList.contains('active')) {
                section.classList.add('active');
                const children = section.querySelectorAll('.animate-child');
                children.forEach(child => restartAnimation(child));
            }
        }
    });
});


// Function to activate links while scrolling
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-links a[href*=" + sectionId + "]")
                .classList.add("active");
        } else {
            document
                .querySelector(".nav-links a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}
window.addEventListener("scroll", scrollActive);
