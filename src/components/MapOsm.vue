<script setup>
// import éléments de vue
import { onMounted, ref } from 'vue'
// Import Leaflet
import * as Leaflet from 'leaflet'
// css leaflet
import 'leaflet/dist/leaflet.css'

// Canevas pour la carte
let tileLayer = Leaflet.tileLayer
// Initialisation de la carte sous forme d'une ref
let map = ref()

// Coordonnées de l'utilisateur
let coordMe = ref({
    latitude: 0,
    longitude: 0
})

// Lorsque le composant est monté dans la vue
onMounted(async () => {
    // Caractérisitques de la carte
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
    );

    // Création de la carte sur la div ayant l'id = 'map'
    map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle de Zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18,        // Zoom maxi autorisé
            minZoom: 6          // Zoom mini autorisé
        })
        // projetction de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([47.509449099433965, 6.798008481422332], 15)

    // Création d'un icone
    let myIcon = Leaflet.icon({
        iconUrl: '/marker-icon.png',       // Image de l'icone
        shadowUrl: '/marker-shadow.png',     // Ombre de l'icone
        iconSize: [25, 41],                       // Taille de l'icone
        shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
        iconAnchor: [-10, -10],                      // Ancrage de l'icone
        shadowAnchor: [-10, -10],                    // Ancrage de l'ombre de l'icone
        popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
    })

    // Ajout d'un marqueur
    let marker = Leaflet.marker([47.509449099433965, 6.798008481422332], { icon: myIcon }).addTo(map)

    let marker2 = Leaflet.marker([47.51153349739097, 6.79897801121781], { icon: myIcon }).addTo(map)

    // Ajouter une popup / infobulle
    marker.bindPopup('Boutique de lunettes Ta Vue Sud')
    marker2.bindPopup('Boutique de lunettes Ta Vue Nord')


}) // Fin onMounted

// Fonction de détection de la géolocalisation via le navigateur
const locMe = () => {
    // geolocalisation du navigateur 
    // => lorsque la geolocalisation a été faite 
    //          => appel d'une fonction showLocation
    navigator.geolocation.getCurrentPosition(showLocation)
}
// Fonction appelée par locMe pour charger les valeurs de géolocalisation
const showLocation = (position) => {
    console.log("postion", position)
    // Recuperation latitue longitude
    coordMe.value.latitude = position.coords.latitude
    coordMe.value.longitude = position.coords.longitude
    // Recentrage de la carte sur position utilisateur
    map.panTo([coordMe.value.latitude, coordMe.value.longitude])
    // Créer un marker
    let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map)
    // Ajouter une popup / infobulle
    
}

</script>


<template>
    <div class="py-[100px]" style="color:black;">
        <h5 class="font-bold flex justify-center text-[26px]">Trouvez votre magasin proche de chez vous</h5>
        <div class="grid grid-cols-6">
            <div></div>
            <div class="col-span-4">
                <div id="map">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
#map {
    width: 100%;
    height: 70vh;
}
</style>