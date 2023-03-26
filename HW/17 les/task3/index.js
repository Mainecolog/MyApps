const ALBUMS_URL = `https://jsonplaceholder.typicode.com/albums`;

const renderAlbums = async () => {
  
  // 1. Создание html 
  const dataContainer = document.createElement('ol');
  const loading = document.createElement('span');
  document.body.prepend(dataContainer)
  dataContainer.className = 'data-container';
  loading.textContent ='Загрузка...'
  dataContainer.appendChild(loading);
  try{
  // 2. функционал распаковки и получения данных
  const response = await fetch(ALBUMS_URL);
    if(!response.ok){
      throw new Error 
      (dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...');
    };
  const albums = await response.json();
  console.log(albums);

  // 3. Иттерация и присвоение названия в HTML
    albums.map((album) =>{
    const item = document.createElement('li');
    item.textContent = album.title;
    dataContainer.appendChild(item);
    return item;
  });
  } catch {
      dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...';
  } finally {
    loading.remove()
    console.log(`Готово`);
  }
};

renderAlbums()