import { showDataError } from './api-get';
import { BASE_URL, Route } from './variables';

const getData = (onSuccess) => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch(() => showDataError());
};

const sendData = (formData) =>
  fetch(`${BASE_URL}`,
    {
      method: 'POST',
      body: formData
    }
  );

export { getData, sendData };
