


const moviesData = [
    {
        id: 1,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 2,
        image:  "Bliss-movie.webp",
        title: "Bliss",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 3,
        image:  "up-from-slavery.jpeg",
        title: "Up From Slavery",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 4,
        image:  "the-walking-dead.jpg",
        title: "The Walking Dead",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 5,
        image:  "fast-x.jpg",
        title: "Fast X",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 6,
        image:  "bad-boys_.jpg",
        title: "Bad Boys",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 7,
        image:  "godzilla-vs-kong.jpg",
        title: "Godzilla X Kong",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 8,
        image:  "bad-boys_.jpg",
        title: "Bad Boys",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 9,
        image:  "mortal-kombat.jpg",
        title: "Mortal Kombat",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 10,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 11,
        image:  "Bliss-movie.webp",
        title: "Bliss",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 12,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 13,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 14,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 15,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 16,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 17,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    },
    {
        id: 18,
        image:  "GOT-movie.jpg",
        title: "Game Of Thrones",
        date: "20 April",
        avgAge: "18+",
        languages: ["RU", "EN"]
    }

];

const moviesContainer = document.getElementById('movies-container');

const moviesHTML = moviesData.map(movie => {
    return `
        <div class="movie">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <span>${movie.date}</span>
                <span>${movie.avgAge}</span>
                <div class="langs">
                    ${movie.languages.map(lang => `<span class="lang">${lang}</span>`).join('')}
                </div>
            </div>
        </div>
    `
    ;

}).join(''); 

moviesContainer.innerHTML = moviesHTML;

const moviesSliderData = [
    {
        id: 1,
        image: "card1.png",
        title: "Game Of Thrones",
        backgroundImage: "game-of-thrones-bg.jpg",
        desc: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
        id: 2,
        image: "card2.png",
        title: "The Walking Dead",
        backgroundImage: "the-walking-dead-bg.jpg",
        desc: "A Walking Dead spinoff set in Los Angeles, California. Follows two families who must band together to survive the undead apocalypse."
    },
    {
        id: 3,
        image: "card3.png",
        title: "WandaVision",
        backgroundImage: "wandavision-bg.jpg",
        desc: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems."
    },
    {
        id: 4,
        image: "card4.png",
        title: "Mortal Kombat",
        backgroundImage: "mortal-kombat-bg.jpg",
        desc: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe."
    },
    {
        id: 5,
        image: "card5.png",
        title: "Peter Rabbit 2",
        backgroundImage: "peter-rabbit-bg.jpg",
        desc: "A rabbit sneaks into a garden to steal food, and they get a new challenge with a new owner."
    },
    {
        id: 6,
        image: "card6.png",
        title: "Thunder Force",
        backgroundImage: "thunder-force-bg.jpg",
        desc: "In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city."
    },
    {
        id: 7,
        image: "card7.png",
        title: "News Of The World",
        backgroundImage: "News-of-the-world-bg.jpg",
        desc: "A Civil War veteran agrees to deliver a girl taken by the Kiowa people years ago to her aunt and uncle against her will. They travel hundreds of miles and face grave dangers as they search for a place that either can call home."
    },
    {
        id: 8,
        image: "card8.png",
        title: "Bergen",
        backgroundImage: "Bergen-bg.jpg",
        desc: "Bergen, a valuable Turkish Arabesque singer, fights to stay afloat despite all the difficulties in her life."
    },
    {
        id: 9,
        image: "card9.jpg",
        title: "Avengers: Endgame",
        backgroundImage: "endgame-bg.jpg",
        desc: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
        id: 10,
        image: "card10.png",
        title: "Godzilla x Kong",
        backgroundImage: "gozilla-x-kong-bg.jpg",
        desc: "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries."
    },
    {
        id: 11,
        image: "card11.png",
        title: "The Lion King",
        backgroundImage: "the-lion-king-bg.jpg",
        desc: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."
    },
    {
        id: 12,
        image: "card12.png",
        title: "Spirited Away",
        backgroundImage: "spirited-away-bg.jpg",
        desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts."
    },
    {
        id: 13,
        image: "card13.png",
        title: "Justice League",
        backgroundImage: "justice-league-bg.jpg",
        desc: "Determined to ensure that Superman's ultimate sacrifice wasn't in vain, Bruce Wayne recruits a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
    },
    {
        id: 14,
        image: "card1.png",
        title: "Game Of Thrones",
        backgroundImage: "game-of-thrones-bg.jpg",
        desc: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."

    },
    {
        id: 15,
        image: "card2.png",
        title: "The Walking Dead",
        backgroundImage: "the-walking-dead-bg.jpg",
        desc: "A Walking Dead spinoff set in Los Angeles, California. Follows two families who must band together to survive the undead apocalypse."
    },
    {
        id: 16,
        image: "card3.png",
        title: "WandaVision",
        backgroundImage: "wandavision-bg.jpg",
        desc: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems."
    },
    {
        id: 17,
        image: "card4.png",
        title: "Mortal Kombat",
        backgroundImage: "mortal-kombat-bg.jpg",
        desc: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe."
    },
    {
        id: 18,
        image: "card5.png",
        title: "Peter Rabbit 2",
        backgroundImage: "peter-rabbit-bg.jpg",
        desc: "A rabbit sneaks into a garden to steal food, and they get a new challenge with a new owner."
    },
    {
        id: 19,
        image: "card6.png",
        title: "Thunder Force",
        backgroundImage: "thunder-force-bg.jpg",
        desc: "In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city."
    },

];

const swiperWrapper = document.getElementById("swiper-wrapper");

const movieTitleElement = document.getElementById("movie-title");


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        320:{
          slidesPerView: 2
        },
        375: {
            slidesPerView: 3
        },
        425:{
            slidesPerView: 3
        },
        715:{
            slidesPerView: 4
        },
        768:{
            slidesPerView: 5
        },
        1399: {
            slidesPerView: 8
        },
        1900: {
            slidesPerView: 10
        },
        2560:{
            slidesPerView: 12
        }
    },
    autoplay: {
        delay: 3500,
      },
    zoom: {
        maxRatio: 5,
      },
      on: {
        transitionStart: function () {
            updateTitle();
            updateBackground();
        }
    }
});




const slidesHTML = moviesSliderData.map(movie =>{
    return `<div class="swiper-slide">
            <img class="img-fluid" src="${movie.image}" alt="" data-title="${movie.title}" data-background="${movie.backgroundImage}" data-desc="${movie.desc}">
        </div>`
}).join('');

swiperWrapper.innerHTML = slidesHTML;

function updateTitle() {
    const activeSlide = document.querySelector('.swiper-slide-active img');
    const movieTitleElement = document.getElementById("movie-title");
    const movieDescElement = document.getElementById("movie-description");
    if (activeSlide) {
        movieTitleElement.textContent = activeSlide.getAttribute('data-title');
        movieDescElement.textContent = activeSlide.getAttribute('data-desc');
    
    }
}

function updateBackground(){
    const activeSlide = document.querySelector('.swiper-slide-active img');
    const heroBackground = document.getElementById("hero-background");
    if (activeSlide) {
        const backgroundImage = activeSlide.getAttribute('data-background');
        heroBackground.style.backgroundImage = `url(${backgroundImage})`;
    }
}

updateTitle();