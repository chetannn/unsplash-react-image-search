import { API_KEY, API_URL } from '../config';

 export const getPhotos =  async (query) => {
   const photosPromise = await fetch(`${API_URL}?client_id=${API_KEY}&query=${query}&page=1`)
    const photos = await photosPromise.json();

    return photos;
}
