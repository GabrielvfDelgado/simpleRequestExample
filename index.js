const axios = require('axios');

axios
  .get('https://viacep.com.br/ws/01001000/json/')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });