import loadMainPage from './mainPage';
import loadMenuPage from './menuPage';

const home = document.querySelector('.home-button');
const about = document.querySelector('.about-button');
const menu = document.querySelector('.menu-button');
const content = document.querySelector('#content');

window.addEventListener('load', () => {
  content.appendChild(loadMainPage());
});

home.addEventListener('click', () => {
  content.textContent = '';
  content.appendChild(loadMainPage());
});

menu.addEventListener('click', () => {
  content.textContent = '';
  content.appendChild(loadMenuPage())
});

about.addEventListener('click', () => {
  content.textContent = '';
});