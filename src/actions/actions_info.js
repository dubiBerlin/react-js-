export const INFO_FETCHED = 'INFO_FETCHED';
export const NEW_INFO = 'NEW_INFO';

export function fetchInfo() {
  return dispatch => {
    fetch('http://www.json-generator.com/api/json/get/cgjmOLeGtK?indent=2', {
      method: 'GET'
    })
      .then(response => response.json()) // formats the response to a json object
      .then(json => {
        console.log(json);
        // dispatch alerts the reducer and gives him the action-info
        dispatch(loadInfo(json));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
/*
 * Info that goes to the store in order to inform that data has been fetched
 */
export function loadInfo(results) {
  return {
    type: INFO_FETCHED,
    payload: results // the payload has the info what came back with this action info
  };
}

// export function postInfo() {
//   return dispatch => {
//     fetch('http://www.json-generator.com/api/json/get/cgjmOLeGtK?indent=2', {
//       method: 'POST',
//       body: JSON.stringify({ hi: 'info' })
//     })
//       .then(response => response.json()) // formats the response to a json object
//       .then(json => {
//         console.log(json);
//         dispatch(loadInfo(json));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }

/*
 * Info that goes to the store in order to inform that data has been fetched
 */
// export function newInfo(results) {
//   return {
//     type: NEW_INFO,
//     payload: hi
//   };
// }
