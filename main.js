navigator.geolocation.getCurrentPosition(success, error)
function success(position) {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
  renderMap([position.coords.longitude, position.coords.latitude])
}
function error(position) {
  console.log(position.message)
}
function renderMap(coords) {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibW9oYW1tZWR5YXNzZXIyMDIxIiwiYSI6ImNsMG13Mm82ZjAxNGYzY3F5ODNsbmYyMXAifQ.QDjbw55c7t13i1loUOVwYg'
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: coords, // starting position
    zoom: 9, // starting zoom
  })
  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl(), 'bottom-left')
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    'top-left',
  )
}
