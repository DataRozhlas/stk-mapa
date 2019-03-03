import "./targetblank"; // pro otvírání odkazů v novém okně

mapboxgl.accessToken = 'pk.eyJ1IjoidG9jaXQiLCJhIjoiY2pzczY0bWh5MWJ3cDN6bzZieGl6ZzB1eSJ9.QuIC52CEfSwa5JI8yNVCtw';


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tocit/cjsqj6l569udg1fs4qh15mlzj',
    center: [15.4730, 49.8175],
    zoom: 6
});    


map.on('load', function() {
    //legenda
    var i;
    var colors = ['#d7191c', '#fdae61', '#ffffbf', '#a6d96a', '#1a9641'];
    var layers = ['< 80 % (4 STK)', '80-85 % (24 STK)', '85-90 % (60 STK)', '90-95 % (158 STK)', '> 95 % (73 STK)'];

    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
      

    //tooltip
    map.on('mousemove', function(e) {
        var stk = map.queryRenderedFeatures(e.point, {
          layers: ['stk']
        });
        if (stk.length > 0) {
            document.getElementById('pd').innerHTML = '<p><strong>' + stk[0].properties.provozovatel + '</strong>, ' + stk[0].properties.mesto + ', ' + stk[0].properties.ulice + '<br><strong>' + Math.round(stk[0].properties.zpusobile_pocet/stk[0].properties.prohlidky_celkem*10000)/100 + ' % způsobilých k provozu </strong> | '+ Math.round(stk[0].properties.nezpusobile_pocet/stk[0].properties.prohlidky_celkem*10000)/100 +' % nezpůsobilých | ' + Math.round(stk[0].properties.docasne_zpusoblile_pocet/stk[0].properties.prohlidky_celkem*10000)/100 + ' % dočasně způsobilých z ' + stk[0].properties.prohlidky_celkem + ' pravidelných prohlídek osobních aut<br>průměrné počty závad: ' + stk[0].properties.prum_poc_zavad_nebezpecne + ' nebezpečných | ' + stk[0].properties.prum_poc_zavad_vazne + ' vážných | ' + stk[0].properties.prum_poc_zavad_lehke + ' lehkých</p>';
          } else {
            document.getElementById('pd').innerHTML = '<p>Vyberte na mapě stanici technické kontroly!</p>';
        }        
    });
      
    //geocoder
    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: 'cz',
        placeholder: 'Hledej'
    }));
        
    map.getCanvas().style.cursor = 'default';

    map.fitBounds([[12.09,51.06],[18.87,48.55]]);

    // zoom myší teprve až po interakci s mapou
    map.scrollZoom.disable(); 
    map.on("click", (e) => {
        map.scrollZoom.enable();
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-left"); // buttonky pro zoom a rotaci

});

