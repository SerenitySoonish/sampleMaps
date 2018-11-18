var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios');
// var collect = require('@turf/collect');
var app = express();
var dotenv = require('dotenv').config();
app.use(express.static(__dirname + '/index'));
app.use(bodyParser.json());
// collect(points, polys, 'population', 'populationValues');

app.get('/coords', (req, res)=>{
  request('http://router.project-osrm.org/route/v1/driving/-90.071533000,29.951065000;-91.1871,30.4515?geometries=polyline',
  (err, response, body)=>{
    if (!err){
      body = JSON.parse(body)
      res.send(body.routes[0]);
    } else {
      res.send(err)
    }
  })
});

var coords = [
  [
    -90.071478,
    29.951052
  ],
  [
    -94.393901,
    29.827512
  ],
  [
    -99.843023,
    30.527213
  ],
  [
    -106.503865,
    31.76095
  ],
  [
    -109.028903,
    32.222576
  ],
  [
    -110.972962,
    32.188764
  ],
  [
    -114.076784,
    33.679161
  ],
]
// var line = turf.lineString(coords);
// var along = turf.along(line, 200, options);
// console.log(along);

app.get('/parks', (req, res)=>{
  // let results = []
  let funcs = coords.map(coord => {
    return axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=50000&key=${process.env.GOOGLE_API}&types=park&fields=photos,formatted_address,name,opening_hours&location=${coord[1]},${coord[0]}`)
  });
  console.log(funcs)
  axios.all(funcs)
    .then(axios.spread((response, response2) => {
      console.log(Array.from(arguments))
      res.send(200)
    }))
    .catch((err)=>{
      res.send(err);
    })
    })
// 'http://router.project-osrm.org/route/v1/driving/90.071533000,29.951065000;91.147385,30.471165?geometries=geojson'

let port = 3000;
app.listen(process.env.PORT || port, function () {
  console.log('listening on port 3000!');
});