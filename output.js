!function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){"use strict";n.r(o);n(1);mapboxgl.accessToken="pk.eyJ1IjoidG9jaXQiLCJhIjoiY2pzczY0bWh5MWJ3cDN6bzZieGl6ZzB1eSJ9.QuIC52CEfSwa5JI8yNVCtw";var t=new mapboxgl.Map({container:"map",style:"mapbox://styles/tocit/cjsqj6l569udg1fs4qh15mlzj",center:[15.473,49.8175],zoom:6});t.on("load",function(){var e,o=["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],n=["< 80 % (4 STK)","80-85 % (24 STK)","85-90 % (60 STK)","90-95 % (158 STK)","> 95 % (73 STK)"];for(e=0;e<n.length;e++){var r=n[e],p=o[e],a=document.createElement("div"),l=document.createElement("span");l.className="legend-key",l.style.backgroundColor=p;var c=document.createElement("span");c.innerHTML=r,a.appendChild(l),a.appendChild(c),legend.appendChild(a)}t.on("mousemove",function(e){var o=t.queryRenderedFeatures(e.point,{layers:["stk"]});o.length>0?document.getElementById("pd").innerHTML="<p><strong>"+o[0].properties.provozovatel+"</strong>, "+o[0].properties.mesto+", "+o[0].properties.ulice+"<br><strong>"+Math.round(o[0].properties.zpusobile_pocet/o[0].properties.prohlidky_celkem*1e4)/100+" % způsobilých k provozu </strong> | "+Math.round(o[0].properties.nezpusobile_pocet/o[0].properties.prohlidky_celkem*1e4)/100+" % nezpůsobilých | "+Math.round(o[0].properties.docasne_zpusoblile_pocet/o[0].properties.prohlidky_celkem*1e4)/100+" % dočasně způsobilých z "+o[0].properties.prohlidky_celkem+" pravidelných prohlídek osobních aut<br>průměrné počty závad: "+o[0].properties.prum_poc_zavad_nebezpecne+" nebezpečných | "+o[0].properties.prum_poc_zavad_vazne+" vážných | "+o[0].properties.prum_poc_zavad_lehke+" lehkých</p>":document.getElementById("pd").innerHTML="<p>Vyberte na mapě stanici technické kontroly!</p>"}),t.addControl(new MapboxGeocoder({accessToken:mapboxgl.accessToken,countries:"cz",placeholder:"Hledej"})),t.getCanvas().style.cursor="default",t.fitBounds([[12.09,51.06],[18.87,48.55]]),t.scrollZoom.disable(),t.on("click",function(e){t.scrollZoom.enable()}),t.addControl(new mapboxgl.NavigationControl,"top-left")})},function(e,o){document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByTagName("a");Array.prototype.forEach.call(e,function(e){e.hostname!==window.location.hostname&&(e.target="_blank",e.rel="noopener noreferrer")})})}]);