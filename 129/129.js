
var mapSW = [0, 4094],
    mapNE = [4094, 0];

var baseurl = "129/{z}/{x}/{y}.png",
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
var GimmickRange = L.layerGroup();
var ChairMarker = L.layerGroup();
var EnvLocation = L.layerGroup();
var TargetMarker = L.layerGroup();

var markericon720 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060441.png',iconAnchor: [16, 16], });
var markerraw720 = L.marker(map.unproject([2298, 2048], map.getMaxZoom()), {icon: markericon720}).on('click', function(){window.location = ("../134/134.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Middle La Noscea</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon721 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060446.png',iconAnchor: [16, 16], });
var markerraw721 = L.marker(map.unproject([2024, 2160], map.getMaxZoom()), {icon: markericon721}).on('click', function(){window.location = ("../128/128.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Upper Decks</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon722 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060446.png',iconAnchor: [16, 16], });
var markerraw722 = L.marker(map.unproject([1712, 1924], map.getMaxZoom()), {icon: markericon722}).on('click', function(){window.location = ("../128/128.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Upper Decks</span></center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon723 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060446.png',iconAnchor: [16, 16], });
var markerraw723 = L.marker(map.unproject([1692, 2488], map.getMaxZoom()), {icon: markericon723}).on('click', function(){window.location = ("../128/128.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Upper Decks</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon724 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060453.png',iconAnchor: [16, 16], });
var markerraw724 = L.marker(map.unproject([1720, 2046], map.getMaxZoom()), {icon: markericon724}).bindPopup("<center><span class='sptitle'>Aetheryte</span></center>Limsa Lominsa Aetheryte Plaza").bindTooltip("<center>Limsa Lominsa Aetheryte Plaza</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon725 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060430.png',iconAnchor: [16, 16], });
var markerraw725 = L.marker(map.unproject([706, 2266], map.getMaxZoom()), {icon: markericon725}).bindPopup("<center><span class='sptitle'>Aethernet Shard</span></center>Arcanists' Guild").bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon726 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060430.png',iconAnchor: [16, 16], });
var markerraw726 = L.marker(map.unproject([1330, 2780], map.getMaxZoom()), {icon: markericon726}).bindPopup("<center><span class='sptitle'>Aethernet Shard</span></center>Fishermen's Guild").bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon727 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060430.png',iconAnchor: [16, 16], });
var markerraw727 = L.marker(map.unproject([1188, 2254], map.getMaxZoom()), {icon: markericon727}).bindPopup("<center><span class='sptitle'>Aethernet Shard</span></center>Hawkers' Alley").bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon728 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060330.png',iconAnchor: [16, 16], });
var markerraw728 = L.marker(map.unproject([700, 2088], map.getMaxZoom()), {icon: markericon728}).bindTooltip("<center>Mealvaan's Gate<br>(Arcanists' Guild)</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon729 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060333.png',iconAnchor: [16, 16], });
var markerraw729 = L.marker(map.unproject([1392, 2696], map.getMaxZoom()), {icon: markericon729}).bindTooltip("<center>Fisherman's Bottom<br>(Fishermen's Guild)</center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7210 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060311.png',iconAnchor: [16, 16], });
var markerraw7210 = L.marker(map.unproject([2248, 2008], map.getMaxZoom()), {icon: markericon7210}).bindTooltip("<center>Chocobokeep</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7211 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060339.png',iconAnchor: [16, 16], });
var markerraw7211 = L.marker(map.unproject([476, 2232], map.getMaxZoom()), {icon: markericon7211}).bindTooltip("<center>Ferry Docks</center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7212 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060456.png',iconAnchor: [16, 16], });
var markerraw7212 = L.marker(map.unproject([1292, 2892], map.getMaxZoom()), {icon: markericon7212}).bindTooltip("<center>Lominsan Ferry Docks</center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7213 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7213 = L.marker(map.unproject([2048, 2044], map.getMaxZoom()), {icon: markericon7213}).bindTooltip("<center>Bulwark Hall</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7214 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7214 = L.marker(map.unproject([2092, 2120], map.getMaxZoom()), {icon: markericon7214}).bindTooltip("<center>Crow's Lift</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7215 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7215 = L.marker(map.unproject([1720, 2108], map.getMaxZoom()), {icon: markericon7215}).bindTooltip("<center>The Octant</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7216 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7216 = L.marker(map.unproject([1276, 2228], map.getMaxZoom()), {icon: markericon7216}).bindTooltip("<center>Hawkers' Round</center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7217 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7217 = L.marker(map.unproject([1452, 2084], map.getMaxZoom()), {icon: markericon7217}).bindTooltip("<center>East Hawkers' Alley</center>", {direction: 'top', permanent: true}).openPopup().addTo(mapmarker)
var markericon7218 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7218 = L.marker(map.unproject([1060, 2304], map.getMaxZoom()), {icon: markericon7218}).bindTooltip("<center>West Hawkers' Alley</center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7219 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7219 = L.marker(map.unproject([980, 2824], map.getMaxZoom()), {icon: markericon7219}).bindTooltip("<center>The <Emphasis>Astalicia</Emphasis></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7220 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7220 = L.marker(map.unproject([1510, 2100], map.getMaxZoom()), {icon: markericon7220}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7221 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7221 = L.marker(map.unproject([1420, 2138], map.getMaxZoom()), {icon: markericon7221}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7222 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7222 = L.marker(map.unproject([1524, 2156], map.getMaxZoom()), {icon: markericon7222}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7223 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7223 = L.marker(map.unproject([1488, 2172], map.getMaxZoom()), {icon: markericon7223}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7224 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7224 = L.marker(map.unproject([1446, 2184], map.getMaxZoom()), {icon: markericon7224}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7225 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7225 = L.marker(map.unproject([1104, 2202], map.getMaxZoom()), {icon: markericon7225}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7226 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7226 = L.marker(map.unproject([1060, 2200], map.getMaxZoom()), {icon: markericon7226}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7227 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7227 = L.marker(map.unproject([1104, 2260], map.getMaxZoom()), {icon: markericon7227}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7228 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060434.png',iconAnchor: [16, 16], });
var markerraw7228 = L.marker(map.unproject([1060, 2260], map.getMaxZoom()), {icon: markericon7228}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7229 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7229 = L.marker(map.unproject([1014, 2260], map.getMaxZoom()), {icon: markericon7229}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7230 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7230 = L.marker(map.unproject([1292, 2982], map.getMaxZoom()), {icon: markericon7230}).on('click', function(){window.location = ("../137/137.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Eastern La Noscea</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7231 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7231 = L.marker(map.unproject([1292, 3022], map.getMaxZoom()), {icon: markericon7231}).on('click', function(){window.location = ("../138/138.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Western La Noscea</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7232 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7232 = L.marker(map.unproject([416, 2220], map.getMaxZoom()), {icon: markericon7232}).on('click', function(){window.location = ("../140/140.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Western Thanalan</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7233 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7233 = L.marker(map.unproject([2278, 2150], map.getMaxZoom()), {icon: markericon7233}).on('click', function(){window.location = ("../128/128.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Limsa Lominsa Upper Decks</span></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7234 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7234 = L.marker(map.unproject([2294, 2180], map.getMaxZoom()), {icon: markericon7234}).bindTooltip("<center>Airship Landing</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7235 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060442.png',iconAnchor: [16, 16], });
var markerraw7235 = L.marker(map.unproject([2860, 2040], map.getMaxZoom()), {icon: markericon7235}).bindTooltip("<center>Zephyr Gate</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7236 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060425.png',iconAnchor: [16, 16], });
var markerraw7236 = L.marker(map.unproject([1452, 2128], map.getMaxZoom()), {icon: markericon7236}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7237 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060426.png',iconAnchor: [16, 16], });
var markerraw7237 = L.marker(map.unproject([1458, 2108], map.getMaxZoom()), {icon: markericon7237}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7238 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060412.png',iconAnchor: [16, 16], });
var markerraw7238 = L.marker(map.unproject([1796, 2084], map.getMaxZoom()), {icon: markericon7238}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7239 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060460.png',iconAnchor: [16, 16], });
var markerraw7239 = L.marker(map.unproject([1238, 2280], map.getMaxZoom()), {icon: markericon7239}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7240 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060425.png',iconAnchor: [16, 16], });
var markerraw7240 = L.marker(map.unproject([982, 2210], map.getMaxZoom()), {icon: markericon7240}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7241 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060425.png',iconAnchor: [16, 16], });
var markerraw7241 = L.marker(map.unproject([1552, 2132], map.getMaxZoom()), {icon: markericon7241}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7242 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060425.png',iconAnchor: [16, 16], });
var markerraw7242 = L.marker(map.unproject([1152, 2212], map.getMaxZoom()), {icon: markericon7242}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7243 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7243 = L.marker(map.unproject([1292, 3062], map.getMaxZoom()), {icon: markericon7243}).on('click', function(){window.location = ("../339/339.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Mist</span></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7244 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060570.png',iconAnchor: [16, 16], });
var markerraw7244 = L.marker(map.unproject([1566, 2090], map.getMaxZoom()), {icon: markericon7244}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7245 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060570.png',iconAnchor: [16, 16], });
var markerraw7245 = L.marker(map.unproject([1570, 2130], map.getMaxZoom()), {icon: markericon7245}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7246 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060570.png',iconAnchor: [16, 16], });
var markerraw7246 = L.marker(map.unproject([1380, 2164], map.getMaxZoom()), {icon: markericon7246}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7247 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060570.png',iconAnchor: [16, 16], });
var markerraw7247 = L.marker(map.unproject([1156, 2250], map.getMaxZoom()), {icon: markericon7247}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7248 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060570.png',iconAnchor: [16, 16], });
var markerraw7248 = L.marker(map.unproject([962, 2212], map.getMaxZoom()), {icon: markericon7248}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7249 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060570.png',iconAnchor: [16, 16], });
var markerraw7249 = L.marker(map.unproject([962, 2252], map.getMaxZoom()), {icon: markericon7249}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7250 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060581.png',iconAnchor: [16, 16], });
var markerraw7250 = L.marker(map.unproject([1716, 2140], map.getMaxZoom()), {icon: markericon7250}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7251 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060362.png',iconAnchor: [16, 16], });
var markerraw7251 = L.marker(map.unproject([1440, 3110], map.getMaxZoom()), {icon: markericon7251}).bindTooltip("<center>Dutiful Sisters of the Edelweiss<br>(Rogues' Guild)</center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7252 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060467.png',iconAnchor: [16, 16], });
var markerraw7252 = L.marker(map.unproject([2082, 2098], map.getMaxZoom()), {icon: markericon7252}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7253 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060467.png',iconAnchor: [16, 16], });
var markerraw7253 = L.marker(map.unproject([1432, 3022], map.getMaxZoom()), {icon: markericon7253}).bindTooltip("<center></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7254 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060910.png',iconAnchor: [16, 16], });
var markerraw7254 = L.marker(map.unproject([982, 2246], map.getMaxZoom()), {icon: markericon7254}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7255 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060935.png',iconAnchor: [16, 16], });
var markerraw7255 = L.marker(map.unproject([1020, 2198], map.getMaxZoom()), {icon: markericon7255}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7256 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060935.png',iconAnchor: [16, 16], });
var markerraw7256 = L.marker(map.unproject([1010, 2198], map.getMaxZoom()), {icon: markericon7256}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7257 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7257 = L.marker(map.unproject([2092, 1988], map.getMaxZoom()), {icon: markericon7257}).on('click', function(){window.location = ("../198/198.html")}).bindTooltip("<center><span class='w3-text-light-blue'></span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7258 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7258 = L.marker(map.unproject([616, 2230], map.getMaxZoom()), {icon: markericon7258}).on('click', function(){window.location = ("../680/680.html")}).bindTooltip("<center><span class='w3-text-light-blue'></span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7259 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7259 = L.marker(map.unproject([416, 2242], map.getMaxZoom()), {icon: markericon7259}).on('click', function(){window.location = ("../628/628.html")}).bindTooltip("<center><span class='w3-text-light-blue'>Kugane</span></center>", {direction: 'down', permanent: true}).openPopup().addTo(mapmarker)
var markericon7260 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/061751.png',iconAnchor: [16, 16], });
var markerraw7260 = L.marker(map.unproject([1684, 2134], map.getMaxZoom()), {icon: markericon7260}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7261 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/000000.png',iconAnchor: [16, 16], });
var markerraw7261 = L.marker(map.unproject([1440, 3110], map.getMaxZoom()), {icon: markericon7261}).on('click', function(){window.location = ("../129/129.html")}).bindTooltip("<center><span class='w3-text-light-blue'></span></center>", {direction: 'left', permanent: true}).openPopup().addTo(mapmarker)
var markericon7262 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060434.png',iconAnchor: [16, 16], });
var markerraw7262 = L.marker(map.unproject([454, 2370], map.getMaxZoom()), {icon: markericon7262}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)
var markericon7263 = L.icon({className: 'leaflet-div-icon2', iconUrl: '../assets/icons/060000/060935.png',iconAnchor: [16, 16], });
var markerraw7263 = L.marker(map.unproject([422, 2320], map.getMaxZoom()), {icon: markericon7263}).bindTooltip("<center></center>", {direction: 'right', permanent: true}).openPopup().addTo(mapmarker)

var overlays = {
    "Map Labels" : mapmarker,
    "<img src=../icons/060501.png width=18/>FATEs" : fate,
    "<img src=../icons/Map46_Icon.png width=18/>Fishingspots" : fishingspot,
    "<img src=../icons/8.png width=18/>NPCs" : EventNPC,
}
var devoverlays = {
    "<img src=../icons/060563.png width=18/>light" : light,
    "<img src=../icons/current.png width=18/>bg" : bg,
    "<img src=../icons/060408.png width=18/>EnvSpace" : EnvSpace,
    "<img src=../icons/51.png width=18/>Sound" : Sound,
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
}

// add layer control
var baseTree = [
  {
    label: 'Layers',
    children: [
      {label: 'Map Labels', layer: mapmarker},
      {label: '<img src=../icons/060501.png width=18/>FATEs', layer: fate},
      {label: '<img src=../icons/Map46_Icon.png width=18/>Fishing Spots', layer: fishingspot},
      {label: '<img src=../icons/060095.png width=18/><span title="Type = 51">Quest Markers</span>', layer: questmarker},
      {label: '<img src=../icons/8.png width=18/><span title="Type = 8">NPCs</span>', layer: EventNPC},
    ]
  },
  {
    label: 'Dev Layers',
    collapsed: true,
    children: [
      {label: '<img src=../icons/current.png width=18/><span title="Type = 1">BG Objects</span>', layer: bg},
      {label: '<img src=../icons/060563.png width=18/><span title="Type = 3">Lights</span>', layer: light},
      {label: '<img src=../icons/060433.png width=18/><span title="Type = 4">Vfx</span>', layer: Vfx},
      {label: '<img src=../icons/060953.png width=18/><span title="Type = 6">Gimmick</span>', layer: Gimmick},
      {label: '<img src=../icons/51.png width=18/><span title="Type = 7">Sounds</span>', layer: Sound},
      {label: '<img src=../icons/060408.png width=18/><span title="Type = 13">Env Space</span>', layer: EnvSpace},
      {label: '<img src=../icons/9.png width=18/><span title="Type = 40">PopRange</span>', layer: PopRange},
      {label: '<img src=../icons/060402.png width=18/><span title="Type = 41">Exit Range</span>', layer: exitrange},
      {label: '<img src=../icons/43.png width=18/><span title="Type = 43">Map Range</span>', layer: MapRange},
      {label: '<img src=../icons/45.png width=18/><span title="Type = 45">Event Objects</span>', layer: EventObject},
      {label: '<img src=../icons/43.png width=18/><span title="Type = 47">Env Locations</span>', layer: EnvLocation},
      {label: '<img src=../icons/060354.png width=18/><span title="Type = 49">Event Range</span>', layer: EventRange},
      {label: '<img src=../icons/060861.png width=18/><span title="Type = 57">Collision Boxs</span>', layer: CollisionBox},
      {label: '<img src=../icons/060952.png width=18/><span title="Type = 65">Client Paths</span>', layer: ClientPath},
      {label: '<img src=../icons/060953.png width=18/><span title="Type = 66">Server Paths</span>', layer: serverpath},
      {label: '<img src=../icons/43.png width=18/><span title="Type = 67">Gimmick Range</span>', layer: GimmickRange},
      {label: '<img src=../icons/060561.png width=18/><span title="Type = 68">Target Markers</span>', layer: targetmarker},
      {label: '<img src=../icons/43.png width=18/><span title="Type = 69">Chairs</span>', layer: ChairMarker},
    ]
  },
];

//mapswitch
var mapswitch = [
  {
    label: 'Eorzea',
    collapsed: true,
    children: [
      {label: '<a href="./basic.html">Kugane</a>'},    ]
  },
  {
    label: 'Far East',
    collapsed: true,
    children: [
      {label: '<a href="./basic.html">Kugane</a>'},
    ]
  },
  {
    label: 'Norvrandt',
    collapsed: true,
    children: [
      {label: '<a href="./basic.html">Kugane</a>'},
    ]
  },
  {
    label: '???',
    collapsed: true,
    children: [
      {label: '<a href="./basic.html">Kugane</a>'},
    ]
  },
];

L.control.layers.tree(baseTree, null, {collapsed:false}).addTo(map);
//left map switcher
var mapswitcher = L.control({position:'topleft'});
mapswitcher.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};
mapswitcher.update = function (props) {
    this._div.innerHTML = '<br><h4 class="w3-text-white">Map</h4>';
};
mapswitcher.addTo(map);
var layerControl = L.control.layers.tree(mapswitch, null, {position:'topleft'}).addTo(map);

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
    "MapRange": MapRange
};
var hash = new L.Hash(map, allMapLayers);
