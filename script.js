(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyA-b6FVTxupL9Ffejc9NgBOtbDNpZhp07w",
    v: "weekly",
});
var position = null;


async function init() {

    await google.maps.importLibrary('maps');
    const mapElement = document.querySelector('gmp-map');
    const innerMap = mapElement.innerMap;
    const position = innerMap.getCenter();
    var oasis = {lat: 34.2396201163904, lng: -118.52567442491922};
    var library = {lat: 34.240081325980746, lng: -118.52926858482937};
    var jacaranda = {lat: 34.24156250123056, lng: -118.52857121051845};
    var soraya = {lat: 34.24156250123056, lng: -118.52857121051845};
    var richfield = {lat: 34.24156250123056, lng: -118.52857121051845};


   innerMap.setOptions({
        disableDefaultUI: true,
        gestureHandling: "none",
        zoomControl: false,
    });

    innerMap.addListener('dblclick', (mapsMouseEvent) => {
        let position = mapsMouseEvent.latLng;
        console.log("you clicked!");
    })

    function questionOne() {
        var lineOne = document.createElement("p");
        lineOne = "Where is the Oasis Wellness Center?"
        if (position == oasis){
            let oasisCircle = new google.maps.Circle({
                strokeColor : "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.30,
                map: mapElement,
                center: oasis,
                radius: 500,
            });
        }
        else {
            let oasisCircle = new google.maps.Circle({
                strokeColor : "#a8323a",
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: "#a8323a",
                fillOpacity: 0.30,
                map: mapElement,
                center: oasis,
            });
        }
    }
    questionOne();
}
void init();
