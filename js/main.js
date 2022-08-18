/////////////////////TAB-VANILLA-JS//////////////////////////////
const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.choise-coffee__content');

const changeClass = el =>
{
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', function tabsNext(e)
{
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        if (contents[i].dataset.ctn === currTab) {
            contents[i].classList.add('active');
        };
    }
});

///////////////////SLIDER-VANILLA-JS/////////////////////////

const next = document.querySelector('.button__next'),
    prev = document.querySelector('.button__prev'),
    slides = document.querySelectorAll('.product-coffee__content'),
    dots = document.querySelectorAll('.dot');

let index = 0;


const activeSlide = n =>
{
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDots = n =>
{
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind =>
{
    activeSlide(index);
    activeDots(index);
}

const nextSlide = () =>
{
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}


dots.forEach((item, indexDot) =>
{
    item.addEventListener('click', () =>
    {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})


const prevSlide = () =>
{
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


/////////////////////////АВТОСМЕНА КАРТИНКИ///////////////////////////////
var offset = 0;
var sliderlineImg = document.querySelectorAll('.img_sld');

function nextImg()
{
    offset = offset + 59;
    if (offset > 199) {
        offset = 0;
    };
    sliderlineImg[0].style.left = -offset + 'rem';
    sliderlineImg[1].style.left = -offset + 'rem';
    sliderlineImg[2].style.left = -offset + 'rem';
    sliderlineImg[3].style.left = -offset + 'rem';
}
setInterval(nextImg, 4000);

///////////////////ПЛЕЕР//////////////////////
var musics = document.querySelectorAll('.music');
var current = musics[0].querySelector('audio');
var currentIndex = 0;
var pause = false;

for (let i = 0; i < musics.length; i++) {
    var btn = musics[i].querySelector('i');
    btn.onclick = function ()
    {
        if (this.classList.contains('fa-play')) {
            this.classList.remove('fa-play');
            this.classList.add('fa-pause');
            pause = true;
        } else {
            this.classList.remove('fa-pause');
            this.classList.add('fa-play');
        }
        if (current == musics[i].querySelector('audio') && !pause) {
            pause = true;
            pauseMusic();
        }
        else {
            pause = false;
            if (current != musics[i].querySelector('audio')) {
                musics[currentIndex].querySelector('i').classList.remove('fa-pause');
                musics[currentIndex].querySelector('i').classList.add('fa-play');
                stop();
            }
        }
        current = musics[i].querySelector('audio');
        currentIndex = i;
        if (!pause == true) {
            play();
        }
    }
}
function play()
{
    current.play();
}

function pauseMusic()
{
    current.pause();
}

function stop()
{
    pauseMusic();
    current.currentTime = 0;
}


//////////////////РАКЕТА////////////////////////////
let sliderindex = 0;
var slideSwipe = document.querySelector('.personalized-coffee__wrapper');
var dotNext = document.querySelector('.pc-dot-next');
dotNext.addEventListener('click', function rocket()
{
    sliderindex = sliderindex + 5;
    if (sliderindex > 100) {
        dotNext = false;
    }
    slideSwipe.style.left = -sliderindex + 'rem';
    document.getElementById("pc-dots").style.visibility = "hidden";
    setTimeout(rocket, 0.9)

});



//////////////////ЯКОРЬ/////////////////////////
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e)
    {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
};
