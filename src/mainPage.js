import './main.css';
import Image from './image.png'

function loadPage() {
  const content = document.querySelector('#content');
  const section = document.createElement('section');
  const wonderful = document.createElement('h1');
  const image = document.createElement('img');
  
  image.src = Image;
  image.classList.add('image');
  
  wonderful.textContent = "WONDERFUL RESTAURANT";
  wonderful.classList.add('wonderful');

  section.classList.add('section');
  section.appendChild(image);
  section.appendChild(wonderful);

  content.appendChild(section);
}

export default loadPage();