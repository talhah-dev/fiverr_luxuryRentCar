const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav class="absolute top-0 left-0 w-full z-40 transition-all duration-300">

        <div data-aos="fade-down"
            class="border-b md:flex hidden items-center justify-between border-zinc-400 px-3 max-w-7xl mx-auto py-5">
            <div class="flex items-center gap-3">
                <h2 class="font-semibold text-zinc-100">Follow Us: </h2>
                <div class="flex items-center gap-5">
                    <a href="#"><i class="fa-brands text-zinc-100 text-lg fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter text-zinc-100 text-lg"></i></a>
                    <a href="#"><i class="fa-brands fa-skype text-zinc-100 text-lg"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram text-zinc-100 text-lg"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin text-zinc-100 text-lg"></i></a>
                </div>
            </div>
            <div class="">
                <a href="tel:+92123567" class="block text-zinc-100 flex items-center gap-3">
                    <i class="fa-solid text-lg fa-phone-volume"></i>
                    +92 1234567890
                </a>
            </div>
        </div>

        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-24 h-20">
            <a data-aos="fade-right" href="/index.html" class="flex items-center justify-center lg:justify-start">
                <!-- <img src="/docs/assets/images/LogoWhite.png" class="md:h-24 h-20" alt="logo"> -->
                <h2 class="text-white font-semibold text-2xl">Logo</h2>
            </a>
            <div data-aos="fade-left" class="md:flex hidden items-center gap-10">
                <div class="md:flex items-center gap-10 hidden">
                    <ul class="md:flex hidden items-center text-zinc-100 gap-10">
                        <li><a href="/index.html"
                                class="hover:text-[#ddb93e] tracking-wide font-medium text-lg transition-all duration-500">Home
                            </a>
                        </li>
                        <li><a href="/about.html"
                                class="hover:text-[#ddb93e] tracking-wide font-medium text-lg transition-all duration-500">About
                                Us</a>
                        </li>
                        <li class="relative group">
                            <a href="/services.html"
                                class="dropdownToggle hover:text-[#ddb93e] cursor-pointer flex items-center gap-2 tracking-wide font-medium transition-all duration-500">
                                Services
                                <i class="fa-solid fa-angle-down dropdownIcon transition-transform duration-500"></i>
                            </a>
                            <div
                                class="dropdownMenu absolute fadeIn group-hover:flex hidden w-60 top-6 left-0 bg-[#080909] z-30 flex-col">
                                <a href="/airport.html"
                                class="p-5 hover:bg-[#ddb93e] hover:text-white text-nowrap transition-all duration-500 block">Airport Transfer</a>
                                <a href="#"
                                class="p-5 hover:bg-[#ddb93e] hover:text-white text-nowrap transition-all duration-500 block">Weddings</a>
                                <a href="#"
                                class="p-5 hover:bg-[#ddb93e] hover:text-white text-nowrap transition-all duration-500 block">Meet & Greet</a>
                                <a href="#"
                                class="p-5 hover:bg-[#ddb93e] hover:text-white text-nowrap transition-all duration-500 block">Luxury Tours</a>
                                <a href="#"
                                class="p-5 hover:bg-[#ddb93e] hover:text-white text-nowrap transition-all duration-500 block">Lifestyle Mangment</a>
                            </div>
                        </li>
                       <li class="relative group">
                            <a href="/fleet.html"
                                class="dropdownToggle hover:text-[#ddb93e] cursor-pointer flex items-center gap-2 tracking-wide font-medium transition-all duration-500">
                                Fleet
                                <i class="fa-solid fa-angle-down dropdownIcon transition-transform duration-500"></i>
                            </a>
                            <div
                                class="dropdownMenu absolute fadeIn group-hover:flex hidden w-48 top-6 left-0 bg-[#080909] z-30 flex-col">
                                <a href="/bmwi7.html"
                                class="p-5 hover:bg-[#ddb93e] hover:text-white text-nowrap transition-all duration-500 block"> BMW I7</a>
                                <a href="#"
                                class="p-5 hover:bg-[#ddb93e] hover:text-white text-nowrap transition-all duration-500 block">Mercedes S class</a>
                              
                            </div>
                        </li>
                        <li><a href="/book-ride.html"
                                class="hover:text-[#ddb93e] tracking-wide font-medium text-lg transition-all duration-500">Book Ride</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md:flex items-center justify-center gap-3 hidden" data-aos="fade-left">
                <a href="/contact.html"
                    class="md:block hidden transition-all duration-500 hover:bg-white hover:text-black font-medium border-2 border-[#fff] px-8 py-3 rounded-lg text-white bg-transparent">Contact
                    Us</a>
            </div>

            <i data-aos="fade-left"
                class="fa-solid mobileMenuBtn text-zinc-200 fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-white max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-700 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-zinc-800 flex-col gap-7">
                <li><a href="/index.html"
                        class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Home </a>
                </li>
                <li><a href="/about.html"
                        class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">About Us</a>
                </li>
                <li><a href="/book-ride.html"
                        class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Book a Ride</a>
                </li>
                <li>
                    <button onclick="toggleAccordion(5)"
                        class="w-full cursor-pointer flex justify-between items-center">
                        <p class="text-lg text-start font-medium">Fleet</p>
                        <i id="icon-5"
                            class="fa-solid fa-angle-down text-gray-600 transition-transform duration-300"></i>
                    </button>
                    <div id="content-5" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <ul class="pt-3 text-zinc-600 pl-5 space-y-4">
                            <li><a href="/bmwi7.html"
                                    class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500"> BMW I7</a>
                            </li>
                            <li><a href="/fleet.html"
                                    class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Mercedes S class</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button onclick="toggleAccordion(6)"
                        class="w-full cursor-pointer flex justify-between items-center">
                        <p class="text-lg text-start font-medium">Services</p>
                        <i id="icon-6"
                            class="fa-solid fa-angle-down text-gray-600 transition-transform duration-300"></i>
                    </button>
                    <div id="content-6" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <ul class="pt-3 text-zinc-600 pl-5 space-y-4">
                            <li><a href="/airport.html"
                                    class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Airport Transfer</a>
                            </li>
                            <li><a href="/airport.html"
                                    class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Weddings</a>
                            </li>
                            <li><a href="/airport.html"
                                    class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Meet & Greet</a>
                            </li>
                            <li><a href="/airport.html"
                                    class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Luxury Tours</a>
                            </li>
                            <li><a href="/airport.html"
                                    class="hover:text-[#ddb93e] font-medium text-nowrap transition-all duration-500">Lifestyle Mangment</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <a href="/contact.html"
                class=" block transition-all font-medium  duration-500 hover:bg-zinc-800 hover:border-zinc-800 hover:text-white border-2 border-zinc-600 px-8 py-3 rounded-lg text-zinc-700 bg-transparent mt-5 text-nowrap text-center">Contact
                Us</a>
        </div>
    </div>
`


const mobileMenuBtn = document.querySelectorAll(".mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});

mobileMenuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "100%";
    });
});


// drop down
const dropdownToggles = document.querySelectorAll('.dropdownToggle');

dropdownToggles.forEach(toggle => {
    const parent = toggle.closest('li');
    const menu = parent.querySelector('.dropdownMenu');
    const icon = toggle.querySelector('.dropdownIcon');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent bubbling to document
        menu.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');

        // Close others if you want only one open at a time
        dropdownToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                const otherParent = otherToggle.closest('li');
                const otherMenu = otherParent.querySelector('.dropdownMenu');
                const otherIcon = otherToggle.querySelector('.dropdownIcon');
                otherMenu.classList.add('hidden');
                otherIcon.classList.remove('rotate-180');
            }
        });
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!parent.contains(event.target)) {
            menu.classList.add('hidden');
            icon.classList.remove('rotate-180');
        }
    });
});
