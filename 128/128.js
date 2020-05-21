
var mapSW = [0, 4094],
    mapNE = [4094, 0];

var baseurl = "128/{z}/{x}/{y}.png",
    base = L.tileLayer(baseurl),

    map = new L.map("map", {
        center: [0, 0],
        zoom: 1,
        minZoom: 2,
        maxZoom: 4,
        noWrap: true,
        crs: L.CRS.Simple,
        //urlHash: true,
        layers: [base]
    });
map.setMaxBounds(new L.LatLngBounds(
    map.unproject(mapSW, map.getMaxZoom()),
    map.unproject(mapNE, map.getMaxZoom())
));

// markers and popups
var mapmarker = L.layerGroup().addTo(map);
var fate = L.layerGroup();
var vista = L.layerGroup();
var bg = L.layerGroup();
var fishingspot = L.layerGroup();
var EnvSpace = L.layerGroup();
var Sound = L.layerGroup();
var EventNPC = L.layerGroup();
var Vfx = L.layerGroup();
var aetheryte = L.layerGroup();
var gathering = L.layerGroup();
var PopRange = L.layerGroup();
var exitrange = L.layerGroup();
var EventObject = L.layerGroup();
var eventrange = L.layerGroup();
var questmarker = L.layerGroup();
var collisionbox = L.layerGroup();
var ClientPath = L.layerGroup();
var serverpath = L.layerGroup();
var targetmarker = L.layerGroup();
var CollisionBox = L.layerGroup();
var EventRange = L.layerGroup();
var MapRange = L.layerGroup();
var light = L.layerGroup();
var Gimmick = L.layerGroup();
var ChairMarker = L.layerGroup();
var EnvLocation = L.layerGroup();
var TargetMarker = L.layerGroup();

var markericon710 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060441.png',iconAnchor: [16, 16], });
var markerraw710 = L.marker(map.unproject([2148, 2770], map.getMaxZoom()), {icon: markericon710}).on('click', function(){window.location = ("../135/135.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Lower La Noscea</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon711 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060447.png',iconAnchor: [16, 16], });
var markerraw711 = L.marker(map.unproject([1758, 1558], map.getMaxZoom()), {icon: markericon711}).on('click', function(){window.location = ("../129/129.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Lower Decks</span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon712 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060447.png',iconAnchor: [16, 16], });
var markerraw712 = L.marker(map.unproject([2026, 1936], map.getMaxZoom()), {icon: markericon712}).on('click', function(){window.location = ("../129/129.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Lower Decks</span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon713 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060447.png',iconAnchor: [16, 16], });
var markerraw713 = L.marker(map.unproject([1652, 2450], map.getMaxZoom()), {icon: markericon713}).on('click', function(){window.location = ("../129/129.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Lower Decks</span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon714 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060430.png',iconAnchor: [16, 16], });
var markerraw714 = L.marker(map.unproject([2032, 1176], map.getMaxZoom()), {icon: markericon714}).bindPopup("<center><span class='sptitle'>Aetheryte</span></center>Marauders' Guild").bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon715 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060430.png',iconAnchor: [16, 16], });
var markerraw715 = L.marker(map.unproject([1822, 1522], map.getMaxZoom()), {icon: markericon715}).bindPopup("<center><span class='sptitle'>Aetheryte</span></center>Culinarians' Guild").bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon716 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060430.png',iconAnchor: [16, 16], });
var markerraw716 = L.marker(map.unproject([2110, 2338], map.getMaxZoom()), {icon: markericon716}).bindPopup("<center><span class='sptitle'>Aetheryte</span></center>The Aftcastle").bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon717 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060314.png',iconAnchor: [16, 16], });
var markerraw717 = L.marker(map.unproject([2060, 2060], map.getMaxZoom()), {icon: markericon717}).bindTooltip("<center>The Drowning Wench<br>(Adventurers' Guild)</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon718 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060436.png',iconAnchor: [16, 16], });
var markerraw718 = L.marker(map.unproject([2110, 2098], map.getMaxZoom()), {icon: markericon718}).bindTooltip("<center>Mizzenmast Inn</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon719 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060331.png',iconAnchor: [16, 16], });
var markerraw719 = L.marker(map.unproject([2020, 1020], map.getMaxZoom()), {icon: markericon719}).bindTooltip("<center>Coral Tower<br>(Marauders' Guild)</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7110 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060337.png',iconAnchor: [16, 16], });
var markerraw7110 = L.marker(map.unproject([1864, 2820], map.getMaxZoom()), {icon: markericon7110}).bindTooltip("<center>Naldiq & Vymelli's<br>(Blacksmiths' Guild)<br>(Armorers' Guild)</center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7111 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060334.png',iconAnchor: [16, 16], });
var markerraw7111 = L.marker(map.unproject([1924, 2880], map.getMaxZoom()), {icon: markericon7111}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7112 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060335.png',iconAnchor: [16, 16], });
var markerraw7112 = L.marker(map.unproject([1792, 1424], map.getMaxZoom()), {icon: markericon7112}).bindTooltip("<center>The Bismarck<br>(Culinarians' Guild)</center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7113 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060567.png',iconAnchor: [16, 16], });
var markerraw7113 = L.marker(map.unproject([2396, 2334], map.getMaxZoom()), {icon: markericon7113}).bindTooltip("<center>Maelstrom Command</center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7114 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7114 = L.marker(map.unproject([2076, 1436], map.getMaxZoom()), {icon: markericon7114}).bindTooltip("<center>The Seventh Sage</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7115 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7115 = L.marker(map.unproject([1882, 2534], map.getMaxZoom()), {icon: markericon7115}).bindTooltip("<center>The Hyaline</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7116 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7116 = L.marker(map.unproject([2090, 2116], map.getMaxZoom()), {icon: markericon7116}).bindTooltip("<center>Crow's Lift</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7117 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7117 = L.marker(map.unproject([2108, 2576], map.getMaxZoom()), {icon: markericon7117}).bindTooltip("<center>The Aftcastle</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7118 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7118 = L.marker(map.unproject([2368, 2580], map.getMaxZoom()), {icon: markericon7118}).bindTooltip("<center>The Missing Member</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7119 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7119 = L.marker(map.unproject([1310, 2732], map.getMaxZoom()), {icon: markericon7119}).bindTooltip("<center>Anchor Yard</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7120 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060434.png',iconAnchor: [16, 16], });
var markerraw7120 = L.marker(map.unproject([2118, 2058], map.getMaxZoom()), {icon: markericon7120}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7121 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060551.png',iconAnchor: [16, 16], });
var markerraw7121 = L.marker(map.unproject([2122, 2684], map.getMaxZoom()), {icon: markericon7121}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7122 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060427.png',iconAnchor: [16, 16], });
var markerraw7122 = L.marker(map.unproject([2084, 2674], map.getMaxZoom()), {icon: markericon7122}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7123 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7123 = L.marker(map.unproject([2276, 2146], map.getMaxZoom()), {icon: markericon7123}).on('click', function(){window.location = ("../129/129.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Lower Decks</span></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7124 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7124 = L.marker(map.unproject([2292, 2176], map.getMaxZoom()), {icon: markericon7124}).bindTooltip("<center>Airship Landing</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7125 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7125 = L.marker(map.unproject([3000, 3260], map.getMaxZoom()), {icon: markericon7125}).bindTooltip("<center>Tempest Gate</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7126 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7126 = L.marker(map.unproject([1934, 2834], map.getMaxZoom()), {icon: markericon7126}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7127 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7127 = L.marker(map.unproject([1930, 2840], map.getMaxZoom()), {icon: markericon7127}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7128 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7128 = L.marker(map.unproject([1792, 1398], map.getMaxZoom()), {icon: markericon7128}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7129 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060434.png',iconAnchor: [16, 16], });
var markerraw7129 = L.marker(map.unproject([2092, 2690], map.getMaxZoom()), {icon: markericon7129}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7130 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060460.png',iconAnchor: [16, 16], });
var markerraw7130 = L.marker(map.unproject([2406, 2294], map.getMaxZoom()), {icon: markericon7130}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7131 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060935.png',iconAnchor: [16, 16], });
var markerraw7131 = L.marker(map.unproject([2070, 2668], map.getMaxZoom()), {icon: markericon7131}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7132 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7132 = L.marker(map.unproject([2432, 2354], map.getMaxZoom()), {icon: markericon7132}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7133 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060935.png',iconAnchor: [16, 16], });
var markerraw7133 = L.marker(map.unproject([2436, 2296], map.getMaxZoom()), {icon: markericon7133}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7134 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060571.png',iconAnchor: [16, 16], });
var markerraw7134 = L.marker(map.unproject([2424, 2290], map.getMaxZoom()), {icon: markericon7134}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7135 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060467.png',iconAnchor: [16, 16], });
var markerraw7135 = L.marker(map.unproject([2076, 2114], map.getMaxZoom()), {icon: markericon7135}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7136 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060935.png',iconAnchor: [16, 16], });
var markerraw7136 = L.marker(map.unproject([2060, 2662], map.getMaxZoom()), {icon: markericon7136}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7137 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7137 = L.marker(map.unproject([2450, 2296], map.getMaxZoom()), {icon: markericon7137}).bindTooltip("<center>Maelstrom Barracks</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7138 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7138 = L.marker(map.unproject([2110, 2098], map.getMaxZoom()), {icon: markericon7138}).on('click', function(){window.location = ("../177/177.html")}).bindTooltip("<center><span class='w3-text-light-blue'></span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7139 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7139 = L.marker(map.unproject([2450, 2296], map.getMaxZoom()), {icon: markericon7139}).on('click', function(){window.location = ("../536/536.html")}).bindTooltip("<center><span class='w3-text-light-blue'></span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var overlays = {
    "<img src=../icons/060563.png width=18/>light" : light,
    "<img src=../icons/current.png width=18/>bg" : bg,
    "<img src=../icons/060501.png width=18/>FATEs" : fate,
    "<img src=../icons/Map46_Icon.png width=18/>Fishingspots" : fishingspot,
    "<img src=../icons/060408.png width=18/>EnvSpace" : EnvSpace,
    "<img src=../icons/51.png width=18/>Sound" : Sound,
    "<img src=../icons/8.png width=18/>EventNPC" : EventNPC,
    "<img src=../icons/9.png width=18/>PopRange" : PopRange,
    "<img src=../icons/060433.png width=18/>Vfx" : Vfx,
    "<img src=../icons/060401.png width=18/>PopRange" : PopRange,
    "<img src=../icons/060402.png width=18/>ExitRange" : exitrange,
    "<img src=../icons/45.png width=18/>EventObject" : EventObject,
    "<img src=../icons/060095.png width=18/>QuestMarker" : questmarker,
    "<img src=../icons/060861.png width=18/>CollisionBox" : CollisionBox,
    "<img src=../icons/060952.png width=18/>ClientPath" : ClientPath,
    "<img src=../icons/060953.png width=18/>ServerPath" : serverpath,
    "<img src=../icons/060561.png width=18/>TargetMarker" : targetmarker,
    "<img src=../icons/060354.png width=18/>EventRange" : EventRange,
    "<img src=../icons/43.png width=18/>MapRange" : MapRange,
    "<img src=../icons/43.png width=18/>Gimmick" : Gimmick,
    "<img src=../icons/43.png width=18/>EnvLocation" : EnvLocation,
    "<img src=../icons/43.png width=18/>ChairMarker" : ChairMarker,
    "<img src=../icons/43.png width=18/>TargetMarker" : TargetMarker,
    "Map Labels" : mapmarker,
//    "<img src=../icons/bg.png width=18/>TestData" : testdata,
    
}

// add layer control
L.control.layers(null, overlays,{collapsed:false}).addTo(map);


 var allMapLayers = {"base": base,
                        "vista": vista,
                        "bg": bg,
                        "fates": fate,
                        "fishingspot": fishingspot,
                        "EnvSpace": EnvSpace,
                        "Sound": Sound,
                        "EventNPC": EventNPC,
                        "PopRange": PopRange,
                        "Vfx": Vfx,
                        "exitrange": exitrange,
                        "EventObject": EventObject,
                        "questmarker": questmarker,
                        "CollisionBox": CollisionBox,
                        "ClientPath": ClientPath,
                        "serverpath": serverpath,
                        "targetmarker": targetmarker,
                        "EventRange": EventRange,
                        "Gimmick": Gimmick,
                        "EnvLocation": EnvLocation,
                        "ChairMarker": ChairMarker,
                        "TargetMarker": TargetMarker,
                        "MapRange": MapRange};
var hash = new L.Hash(map, allMapLayers);
