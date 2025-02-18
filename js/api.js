const ServerAddress = {
  SEND_DATA_API: 'https://25.javascript.pages.academy/keksobooking',
  GET_DATA_API: 'https://25.javascript.pages.academy/keksobooking/data'
};

const GET_DATA_ALERT_MESSAGE = 'Не удалось получить данные с сервера. Обновите страницу';

const getData = (onSuccess, onError) => {
  fetch(ServerAddress.GET_DATA_API)
    .then((response) => response.json())
    .then((similarAds) => onSuccess(similarAds))
    .catch(() => onError(GET_DATA_ALERT_MESSAGE));
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    ServerAddress.SEND_DATA_API,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
