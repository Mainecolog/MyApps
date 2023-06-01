const  PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos/'
const selectedPhoto = [60, 12, 55];

getFastestLoadedPhoto = (ids) =>{
    const requests = ids.map((id) => fetch(`${PHOTO_URL}/${id}`));    
    Promise.race(requests)
        .then(response => response.json())
        .then ((photos)=>{
            const dataContainer = document.getElementById('data-container');
            const loadingData = document.getElementById('loader');
            dataContainer.removeChild(loadingData);
            const listOfPhotos = document.createElement('li');
            listOfPhotos.className = 'photo-item';
            const itemImage = document.createElement('img');
            itemImage.className = 'photo-item__image';
            itemImage.src = photos.url;
            const titleOfImage = document.createElement('h3');
            titleOfImage.className = 'photo-item__title';
            titleOfImage.innerText = photos.title;
            dataContainer.append(listOfPhotos);
            listOfPhotos.prepend(itemImage);
            listOfPhotos.append(titleOfImage)
        })
        .catch(error => {
            console.error(`error`,error)
        })
}
getFastestLoadedPhoto(selectedPhoto)