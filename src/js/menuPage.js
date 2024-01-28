import '../css/main.css';
import '../css/menuPage.css';
import Image from '../images/image.png';

function loadMenuPage() {
  const section = document.createElement('section');
  const image = document.createElement('img');
  const title = document.createElement('h1');
  const description = document.createElement('p');
  const ctn = document.createElement('div');

  image.src = Image;
  
  title.textContent = "Wonderful Pasta";
  title.classList.add('title');

  description.textContent = "Savor the essence of Italy with our delectable pasta dish. Perfectly al dente noodles cradle a luscious blend of sun-kissed tomato sauce, garlic, and basil. Each bite is a harmony of flavors, complemented by your choice of savory Italian sausage or grilled vegetables. Topped with a generous sprinkle of Parmesan, it's a symphony of taste in every forkful, bringing the warmth and authenticity of Italian cuisine to your table.";
  section.classList.add('section');

  ctn.appendChild(title);
  ctn.appendChild(description);
  
  ctn.classList.add('container');

  section.appendChild(ctn);
  section.appendChild(image);

  return section;
}

export default loadMenuPage;