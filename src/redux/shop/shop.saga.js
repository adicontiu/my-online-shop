import {call, put, takeEvery} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";

export function* fetchCollectionAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();

    // we want to yield in case the call takes more than expected!!! --> must use call
    const collectionMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //put is the saga effect for dispatch, for creating actions
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync //generator function that will run in response to this takeEvery listener
  );
}