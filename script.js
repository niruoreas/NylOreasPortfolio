$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
       
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){

        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed = new Typed(".typing", {
        strings: ["UI/UX Designer", "Video Editor", "Freelancer", "Gym Rat", "Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["UI/UX Designer", "Video Editor", "Freelancer", "Gym Rat", "Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
        
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


$(document).ready(function () {
    const carousel = $('.carousel');
    const dots = $('.dot');

    let currentIndex = 0;
    let totalItems = $('.carousel-item').length;

    function updateCarousel() {
        let offset = -currentIndex * 100; // Move by 100% per item
        carousel.css('transform', `translateX(${offset}%)`);
        updateIndicator(currentIndex);
    }

    function updateIndicator(index) {
        dots.removeClass('active');
        dots.eq(index).addClass('active'); // Ensure only the active dot is highlighted
    }

    $('.prev').click(function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    $('.next').click(function () {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Clicking a dot should move to the corresponding slide
    dots.each(function (i) {
        $(this).click(function () {
            currentIndex = i;
            updateCarousel();
        });
    });

    // Initialize first dot as active
    updateIndicator(currentIndex);
});


// Lightbox effect for enlarging images
const images = document.querySelectorAll('.sample-img');

images.forEach(image => {
    image.addEventListener('click', function () {
        // Create lightbox container
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        // Create image inside lightbox
        const img = document.createElement('img');
        img.src = this.src;
        img.classList.add('lightbox-img');

        // Append image to lightbox
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        // Close lightbox when clicking anywhere
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

function changeCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    updateCarousel();
}

