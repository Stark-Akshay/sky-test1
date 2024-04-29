const banners = [
  {
    imgSrc: 'banner1.jpg',
    title: 'EMBRACE THE TRANQUIL HUES OF A BREATHTAKING SUNSET.',
    description: `Witness nature's masterpiece as the golden rays of the setting sun paint the sky with vibrant colors, casting a warm glow over the horizon. Let the serenity of the moment envelop you, offering a peaceful respite from the hustle and bustle of the day.`,
    buttonContent:'Learn More'
  },
  {
    imgSrc: 'banner2.jpg',
    title: 'FEEL THE INVIGORATING WARMTH OF A RADIANT SUNRISE.',
    description: 'Awaken your senses to the gentle embrace of dawn as the world comes alive with the promise of a new day. Bask in the golden light as it bathes the landscape, filling the air with renewed energy and optimism, inspiring you to seize the opportunities that lie ahead.',
    buttonContent: 'Connect More'
  },
  //Add any number of content here to render everything dynamically on to the main test.html
];

// Get elements
const bannerImg = document.querySelector('.banner-img');
const bannerTitle = document.querySelector('.banner-title');
const bannerDescription = document.querySelector('.banner-description');
const buttonTemp = document.querySelector('.cta-button');

// Initial index
let currentIndex = 0;

// Function to update banner content
function updateBanner(index) {
  const banner = banners[index];
  bannerImg.src = banner.imgSrc;
  bannerTitle.textContent = banner.title;
  bannerDescription.textContent = banner.description;
  buttonTemp.textContent = banner.buttonContent;
}

//Update banner according to the incremented index
updateBanner(currentIndex);

// GSAP animation
function animateBanner() {
  gsap.to('.banner', {
    duration: 1,
    opacity: 0,
    ease: "power2.inOut", 
    onComplete: () => {
      // Increment index
      currentIndex = (currentIndex + 1) % banners.length;
      
      // Update banner content
      updateBanner(currentIndex);
      
      //Reset animation
      gsap.fromTo('.banner', { opacity: 0 }, { duration: 3, opacity: 1, ease: "power2.inOut" }); 
    }
  });
}


// Start animation
setInterval(animateBanner, 6000); 
