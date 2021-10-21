mapboxgl.accessToken =
  "pk.eyJ1IjoiZW1tYS04OSIsImEiOiJja3V5d24xbnE3OGJpMzJuemNidTdqMWR1In0.zssWjk0QXWARFP4L4bVuVg";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-88.03229326591754, 42.061823519463445],
  zoom: 12,
});

var marker = new mapboxgl.Marker()
  .setLngLat([-88.03229326591754, 42.061823519463445])
  .addTo(map);

const stops = [
  [-88.033054, 42.063646],
  [-88.031058, 42.063136],
  [-88.028547, 42.06261],
  [-88.025736, 42.062005],
  [-88.021359, 42.061193],
  [-88.00302, 42.056856],
  [-87.999576, 42.055406],
  [-87.996282, 42.05304],
  [-87.993761, 42.051343],
  [-87.988547, 42.051343],
  [-87.976352, 42.051338],
];

var counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= stops.length) return;
    marker.setLngLat(stops[counter]);
    counter++;
    move();
  }, 1000);
}
