const lenis = new Lenis({
    autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
 <div
                class="bo rder-2 fadeIn z-40 bottomToTop hover:border-[#efc360] border-transparent transition-all duration-500 hover:opacity-80 hover:-translate-y-3 flex rounded-lg items-center justify-center w-12 h-12 fixed bottom-5 right-5">
                <div
                    class="  w-10 cursor-pointer  bg-[#efc360] h-10  transition-all duration-500  text-zinc-100 flex items-center justify-center rounded-lg ">
                    <i class="fa-solid fa-angle-up"></i>
                </div>
            </div>`

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

AOS.init({
    once: true,
    duration: 1000
});

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180')
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180')
    }
}