// var geojsonLayer = L.GeoJSON.AJAX("features.geojson");       
// geojsonLayer.addTo(map);
function passMoney (dollars){
    var formular = dollars.split(" ")[1]
    var number = +formular.slice(0, formular.length - 3)
    var unit = formular.slice(formular.length - 3)
    var dollarMap = {"bil":10**9, "mil":10**6}
    return number * dollarMap[unit]}

var LogoIcon = L.Icon.extend({
    options: {
        iconUrl: locations[0],
        iconSize:     [45,50],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 25],
        shadowAnchor: [4, 62],
        popupAnchor:  [0,-25]
    }
});
function createLogoIcon(logoUrl){
  var icon = new LogoIcon({iconUrl: logoUrl})
  return icon
}
var cityMarkers = locations.map(location => L.marker(location.coordinates, {
    icon:createLogoIcon(location.Logo)
  }).bindPopup(`<b>Franchise Name:</b> ${location.Franchise}
                <br><b>Arena Name:</b> ${location.arenaName}
                <br><b>Capacity:</b> ${location.Capacity}
                <br><b>Championships:</b> ${location.Championships}
                <br><b>Value 2021:</b> ${location.Value}
                <br><b>Revenue 19/20:</b> ${location.Revenue}
                <br><b>Profit Margin :</b> ${(passMoney(location.operatingIncome)/passMoney(location.Revenue)*100).toFixed(2)+"%"}
                <br><b>Facebook:</b> <a href='${location.Facebook}'>${location.Facebook}</a>
                <br><b>Instagram:</b> <a href='${location.Instagram}'>${location.Instagram}</a>
                <br><b>Twitter:</b> <a href='${location.Twitter}'>${location.Twitter}</a>`)
)

var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
                              attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
                              tileSize: 512,
                              maxZoom: 18,
                              zoomOffset: -1,
                              id: "mapbox/streets-v11",
                              accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
                            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
                            maxZoom: 18,
                            id: "dark-v10",
                            accessToken: API_KEY
});

var cities = L.layerGroup(cityMarkers);

var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 5,
    layers: [streetmap, cities]
});

// L.control.layers(baseMaps, markerOverlay, {
//    collapsed: false
// }).addTo(myMap)

// var teams = d3.csv("Data/team.csv")

// var stats = d3.csv("Data/NBA Finals and MVP.csv")


// var allData = Promise.all([teams, stats])
// // var allData = Promise.all([teams])
// var teamData, championData

// allData.then(data => {
//     teamData = data[0]
//     championData = data[1]
//     console.log(data)
// })

// var stats

// stats.forEach((stats, idx) => {
//   var year = Object.assign({}, stats, NBAChampion[idx]);

//   if (!year.count) {

//   }
// }

var resize_map = {};
resize_map.mapmargin = 0;
resize_map.minHeight = 415;
resize_map.getHeight = function() {
    this.mapmargin = $('.container-fluid').height();
};

resize_map.getHeight();
$(window).bind("resize", resize);
resize();

function resize(){
    if($(window).width() >= resize_map.minHeight){
        $('#map').css("height", ($(window).height() - resize_map.mapmargin));
        // setTimeout, to Handle using the Maximize button which needs more time to respond correctly
        setTimeout(function() {
            $('#map').css("height", ($(window).height() - resize_map.mapmargin));
          }, 150);
    // Set the map size cannot be smaller than the width on mobile devices.
    }else{
        if($(window).height() <= resize_map.minHeight){
            $('#map').css("height", resize_map.minHeight);
        }else{
            $('#map').css("height", ($(window).height() - resize_map.mapmargin));
        }
    }
}

setTimeout(function(){ myMap.invalidateSize()}, 100);