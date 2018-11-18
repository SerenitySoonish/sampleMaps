// function initialize() {
//   var fenway = {
//     lat: 36.3338024,
//     lng: -119.6393227};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: fenway,
//       zoom: 14
//     });
//     var panorama = new google.maps.StreetViewPanorama(
//       document.getElementById('pano'), {
//         position: fenway,
//         pov: {
//           heading: 34,
//           pitch: 10
//         }
//       });
//     map.setStreetView(panorama);
//   }
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
}
initMap();
