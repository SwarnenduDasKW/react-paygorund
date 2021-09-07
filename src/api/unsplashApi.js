/**
 *
 *
 * Access Key: EHtR6v0NpiM1MkImUlhs-HORyv7MdDyBhKsM56ui0yw
 * Secret: imORywnAk0DE03GwPHpQG1jpwQJPJyUMECiWA9M95z4
 *
 *
 **/
const KEY = "?client_id=EHtR6v0NpiM1MkImUlhs-HORyv7MdDyBhKsM56ui0yw";
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
    const response = await fetch(`${URL}${KEY}&per_page=20&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    console.log("fetchImages --> data", data);
    return data;
};

const fetchImageStats = async (id) => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats };
