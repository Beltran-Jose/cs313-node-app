const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/postal', postal)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function postal(request, response) {

  const weight = Number(request.query.weight);
  const mailType = request.query.mailType;

  computePostal(response, weight, mailType);

}

function computePostal(response, weight, mailType) {

  let result;

  if (mailType == 'stamped') {

    if (weight <= 1) {
      result = 0.55;

    } else if (weight <= 2 && weight > 1) {
      result = 0.70;

    } else if (weight <= 3 && weight > 2) {
      result = 0.85;

    } else if (weigh <= 3.5 && weight > 3) {
      result = 1.00;

    } else {
      result = "There was an error";
    }

  } else if (mailType == 'metered') {

    if (weight <= 1) {
      result = 0.50;

    } else if (weight <= 2 && weight > 1) {
      result = 0.65;

    } else if (weight <= 3 && weight > 2) {
      result = 0.80;

    } else if (weigh <= 3.5 && weight > 3) {
      result = 0.95;

    } else {
      result = "There was an error";
    }

  } else if (mailType == 'flats') {

    if (weight <= 1) {
      result = 1.00;

    } else if (weight <= 2 && weight > 1) {
      result = 1.15;

    } else if (weight <= 3 && weight > 2) {
      result = 1.30;

    } else if (weigh <= 4 && weight > 3) {
      result = 1.45;

    } else if (weigh <= 5 && weight > 4) {
      result = 1.60;

    } else if (weigh <= 6 && weight > 5) {
      result = 1.75;

    } else if (weigh <= 7 && weight > 6) {
      result = 1.90;

    } else if (weigh <= 8 && weight > 7) {
      result = 2.05;

    } else if (weigh <= 9 && weight > 8) {
      result = 2.20;

    } else if (weigh <= 10 && weight > 9) {
      result = 2.35;

    } else if (weigh <= 11 && weight > 10) {
      result = 2.50;

    } else if (weigh <= 12 && weight > 11) {
      result = 2.65;

    } else if (weigh <= 13 && weight > 12) {
      result = 2.80;

    } else {
      result = "There was an error";
    }
  }

  let params = {
    result: result
  };

  response.render('pages/result', params);

}
