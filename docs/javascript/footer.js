const footer = document.getElementById('footer')
footer.innerHTML = `
 <footer
        class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 p-5 mt-10 mx-auto max-w-7xl p-5">
        <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
            <h2 class="md:text-4xl text-3xl text-zinc-100 font-semibold ">Don’t Miss a Thing</h2>
            <p class="md:mt-5 mt-3 text-zinc-300">Subscribe to our newsletter for exclusive deals and updates.</p>
            <form action="" class="mt-5 flex flex-col items-end gap-3">
                <input type="text" class="border text-zinc-200 border-zinc-400 w-full rounded-full p-3"
                    placeholder="Enter email address for updates ">
                <button class="cursor-pointer text-zinc-200 transition-all duration-500 hover:opacity-80">Subscribe</button>
            </form>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" class="second">
            <h2 class="text-2xl text-zinc-100 font-semibold">Quick Link</h2>
            <ul class="mt-5 space-y-3 text-zinc-300 font-medium">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About us</a></li>
                <li><a href="/services.html">Services</a></li>
                <li><a href="/fleet.html">Fleet</a></li>
            </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="second">
            <h2 class="text-2xl text-zinc-100 font-semibold"> The Cars</h2>
            <ul class="mt-5 space-y-3 text-zinc-300 font-medium">
                <li><a href="#choose">Features</a></li>
                <li><a href="#theCars">Pick a Ride</a></li>
                <li><a href="#ready">Ready For Trip</a></li>
            </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" class="second">
            <h2 class="text-2xl text-zinc-100 font-semibold">Social Media</h2>
            <ul class="mt-5 space-y-3 text-zinc-300 font-medium">
                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.twitter.com/">Twitter</a></li>
            </ul>
        </div>
    </footer>

    <p class="text-center p-4 text-zinc-300 mt-5">
        Copyright © <span id="copyright"></span> Website Name. All rights reserved.
    </p>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year