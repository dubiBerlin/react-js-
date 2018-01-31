export const INFO_FETCHED = 'INFO_FETCHED';

export function fetchInfo() {
  return dispatch => {
    fetch('http://www.json-generator.com/api/json/get/cgjmOLeGtK?indent=2', {
      method: 'GET'
    })
      .then(response => response.json()) // formats the response to a json object
      .then(json => {
        console.log(json);
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
    payload: results
  };
}
