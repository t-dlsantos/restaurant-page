import '../css/main.css';
import '../css/aboutPage.css';

function loadAboutPage() {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const description = document.createElement('p');

  title.textContent = "About us";
  title.classList.add('title');

  description.textContent = "Indulge in the ultimate pasta experience at our charming restaurant, where passion for Italian cuisine meets a warm and inviting ambiance. Immerse yourself in a culinary journey that celebrates the artistry of pasta, expertly crafted with the finest ingredients. From classic favorites to inventive creations, our menu showcases a tantalizing array of pasta dishes, each a symphony of flavors and textures. Savor the richness of al dente perfection, complemented by savory sauces and delectable toppings. Whether you're a traditionalist or an adventurous palate, our pasta haven promises a delightful escape, where every bite transports you to the heart of Italy's culinary heritage. Welcome to a pasta paradise!"

  section.classList.add('section-flex');
  section.classList.add('section');
  
  section.appendChild(title);
  section.appendChild(description);

  return section;
}

export default loadAboutPage;