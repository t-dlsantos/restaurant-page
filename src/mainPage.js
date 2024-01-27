import './main.css';
import './mainPage.css';
import Image from './image.png'

function loadMainPage() {
  const section = document.createElement('section');
  const wonderful = document.createElement('h1');
  const image = document.createElement('img');
  
  image.src = Image;
  image.classList.add('image');
  
  wonderful.textContent = "Wonderful Restaurant";
  wonderful.classList.add('wonderful');

  section.classList.add('section');
  section.appendChild(wonderful);
  section.appendChild(image);

  
  return section;
}

export default loadMainPage;