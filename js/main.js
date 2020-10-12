let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.967348, lng: 80.152687 },
    zoom: 14,
  });
}