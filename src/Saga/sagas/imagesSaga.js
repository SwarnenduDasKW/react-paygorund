import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from "../Constants/sagaconstants";
import { fetchImages } from "../../api/unsplashApi";
import { setImages, setError } from "../actions";

const getPage = (state) => state.nextPage;

function* handleImagesLoad() {
    try {
        console.log("handleImagesLoad --> Fetch images from unsplash");
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        console.log("handleImagesLoad --> page", page);
        console.log("handleImagesLoad --> images", images);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    console.log("watchImagesLoad --> Watching for action");
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
