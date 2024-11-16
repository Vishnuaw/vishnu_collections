mapboxgl.accessToken =
  "pk.eyJ1IjoidmlzaG51NTUiLCJhIjoiY2x5NW45c2hqMDFoZjJxcXVtcTcyazI5NiJ9.Ld98588HnqCkGH-dc4o7zw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([]);
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-left");
}
