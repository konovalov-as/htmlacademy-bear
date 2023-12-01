
const baseSuccessCallback = (event) => {
  event.preventDefault();

  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
  const formData = new FormData(event.target);
  const formBody = JSON.stringify(Object.fromEntries(formData.entries()));

  try {
    console.log('formData: ', formBody); // eslint-disable-line
    modals.open('send-order'); // eslint-disable-line

    let response = fetch('/order', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let responseData = response.json();
    console.log(responseData); // eslint-disable-line

  } catch (error) {
    console.dir('error: ', error); // eslint-disable-line
  }
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // const userName = event.target.querySelector('#user-name');
  // userName.focus();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};


const searchSuccessCallback = (event) => {
  event.preventDefault();

  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
  const formData = new FormData(event.target);
  const formBody = JSON.stringify(Object.fromEntries(formData.entries()));

  try {
    console.log('formData: ', formBody); // eslint-disable-line

    let response = fetch('/search', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let responseData = response.json();
    console.log(responseData); // eslint-disable-line

  } catch (error) {
    console.dir('error: ', error); // eslint-disable-line
  }
};

const searchErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};


export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
  search: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: searchSuccessCallback,
    errorCallback: searchErrorCallback,
  },
};
