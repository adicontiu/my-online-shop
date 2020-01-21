import ShopActionTypes from './shop.types';


export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

//Thunks is an action creator that returns a function that gets the dispatch in it.
// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart);
//
//     collectionRef.get()
//       .then(snapshot => {
//         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionMap));
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   }
// };

//Saga is a function that conditionally runs, based on whether or not a specific action is coming into the saga
