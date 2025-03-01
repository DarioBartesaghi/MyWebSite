// // function initMap() {
// //     let galbiate = {lat: -25.344, lng: 131.031 }
// //     let map = new google.maps.Map(
// //         document.getElementById("map"), {zoom: 4, centre: galbiate}
// //     );
// //     let marker= new google.maps.Marker({position: galbiate ,map:map})
// // 	};

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 45.81385162948743,  lng: 9.377864511119851 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();