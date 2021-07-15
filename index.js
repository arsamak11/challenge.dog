

document.addEventListener('DOMContentLoaded', () => {
  
  
  
 
  
  // количество загружаемых изображени
  const IMAGES_COUNT = 4;

  // ссылка для загрузки изображений
  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  // ссылка для загрузки списка пород
  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  // узел, в котором будет список изображений
  const imagesContainer = document.querySelector('.images');

  // узел, в котором будет список пород
  const breedsContainer = document.querySelector('.breeds');

  // узел кнопки обновления
  const button = document.querySelector('button');

  // сразу загружаем изображения
  // fetchAndRenderImages();

  // загружаем список пород
  //  fetchBreedsList();

  // еще раз загружаем изображения, если кликнули на кнопку обновления
  button.addEventListener('click', () => {
    fetchAndRenderImages();
    fetchBreedsList()
  });
  //твой код
  

  function fetchAndRenderImages(){
  fetch(IMAGES_URL)
  .then(res => res.json())
  .then(obj => {
    for( let i = 0; i < obj.message.length ; i++){
      const img = document.createElement('img')
      const div = document.createElement('div')
      div.classList.add('images__item')
      img.setAttribute('src' , obj.message[i])
      div.prepend(img)
      imagesContainer.prepend(div)


    }
  });
}
 function fetchBreedsList(){
fetch(BREEDS_URL)
.then(res => res.json())
.then(obj => {
  for(let i = 0 ; i < obj.message.length ; i++){
    const li = document.createElement('li')
    li.append(obj.message[i])
    breedsContainer.prepend(li)
    
  }
})
}








})





