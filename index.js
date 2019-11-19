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

  let result = 0;
  console.log("compute function started")
  switch (mailType) {
    case 'stamped':
      console.log("switch statement started")
      if (weight <= 1) {
        result = 0.55;
        console.log("1");
      } else if (weight <= 2 && weight > 1) {
        result = 0.70;
        console.log("2");
      } else if (weight <= 3 && weight > 2) {
        result = 0.85;
        console.log("3");
      } else if (weigh <= 3.5 && weight > 3) {
        result = 1.00;
        console.log("4");
      } else {
        result = "There was an error";
      }
      break;

    case 'metered':
      break;
    case 'flats':
      break;
    case 'first-class':
      break;
    default:
      console.log(`There was an error with calculating`);
      break;
  }
  const params = {
    result: result
  };

  response.render('pages/result', params);

}
