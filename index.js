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

  let weight = Number(request.query.weight);
  let mailType = request.query.mailType;

  computePostal(response, weight, mailType);

}

function computePostal(response, weight, mailType) {

  let result;
  alert(result);
  if(mailType == 'stamped'){

    alert("if statement started");
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

  }

  let params = {
    result: result
  };

  response.render('pages/result', params);

}
