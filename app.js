const numberOfLikes = document.querySelectorAll('.numbers');
const socialMediaContainers = document.querySelectorAll('.social-media-box');
const overviewContainers = document.querySelectorAll('.overview-boxes');
const body = document.querySelector('body');
const darkLightTheme = document.querySelector('.slider');
const headingTwo = document.querySelector('.heading-two');
const headingOne = document.querySelector('h1');
const darkModeText = document.querySelector('.dark-mode');
const lightModeText = document.querySelector('.light-mode');

darkLightTheme.addEventListener('click', () => 
{
    body.classList.toggle('light-bg');
    for(let socialMediaContainer of socialMediaContainers)
    {
        socialMediaContainer.classList.toggle('light-card-bg');
    }
    for(let numberOfLike of numberOfLikes)
    {
        numberOfLike.classList.toggle('light');
    }
    for(let overviewContainer of overviewContainers)
    {
        overviewContainer.classList.toggle('light-card-bg');
    }
    headingOne.classList.toggle('light');
    headingTwo.classList.toggle('light-h2');
    darkModeText.classList.toggle('d-none');
    lightModeText.classList.toggle('d-none');
})