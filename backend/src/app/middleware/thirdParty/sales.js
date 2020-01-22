const request = require('request');

class ShoppingCartMiddleware {
  getSaleList(code) {
    return new Promise((resolve, reject) => {
      let url = `https://jsonkeeper.com/b/${code}`;
      let response = {
        header: '',
        body: ''
      };
      request
        .get(url)
        .on('error', err => {
          reject(err);
          console.error(err);
        })
        .on('response', res => {
          response.header = res.statusCode;
          console.log(res.statusCode);
        })
        .on('data', chunk => {
          response.body += chunk;
          console.log(JSON.stringify(response));
          resolve(response);
        });
    });
  }
}

export default new ShoppingCartMiddleware();
