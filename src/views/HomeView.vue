<script setup>
import cards from '../components/cardproduits.vue';
import arrow from '../../public/icons/arrow.vue';
import star from '../../public/icons/star.vue';
import { RouterLink } from 'vue-router';

import MapOsm from '../components/MapOsm.vue';

import { isConnected } from '../views/Connexion.vue';
import { currentUser } from '../views/Connexion.vue';
import Connexion from '../views/Connexion.vue';
</script>

<template>
  <div class="container max-w-full" >

    <div class="flex flex-wrap max-w-full col-span-4">
      <img alt="Vue logo" class="w-1/2  md-w-1/4 lg:w-1/4 xl:w-1/4 " src="../../public/img/index/femmemur.webp" />
      <img alt="Vue logo" class="w-1/2  md-w-1/4 lg:w-1/4 xl:w-1/4" src="../../public/img/index/femmeblanc.webp" />
      <img alt="Vue logo" class="w-1  md-w-1/2 lg:w-1/2 xl:w-1/2 " src="../../public/img/index/34femmefemme.webp" />
    </div>

    <h1 class="ml-[100px] my-2 text-xl font-bold ">Les Lunettes tendances</h1>
    <div class="flex justify-center  ">
      <cards />
    </div>

    <div class="relative">
      <RouterLink to="/personnalisation">
      <div class="mx-[100px] mt-[100px] inset-0 absolute">
        <img alt="banniere" src="../../public/img/index/banniereperso.webp" />
      </div>
      <div class="grid grid-cols-3 mx-[200px] absolute inset-0 top-[170px] items-center">
        <div class="col-span-2">
          <h1 class="text-[30px] font-bold">Tu ne trouves pas la monture de tes rêves ? </h1>
          <p class="text-[24px] font-bold">Essaye de personnaliser ta paire ! </p>
        </div>
        <arrow  class="col-span-1"/>
      </div>
      </RouterLink>
    </div>


    <div class="grid grid-cols-3 gap-5 items-center mt-[400px]">
      <div class="col-span-2 ml-[100px]">
        <h1 class="text-[30px] font-bold">C’EST TA VUE PAS LA NÔTRE ! </h1>
        <h2 class="text-[26px] font-bold">Trouve la paire que toi seul portera </h2>
        <p class="py-5 text-[24px]">Dans un monde où la vue se dégrade, il est important de prendre soin de soi et de
          s’adapter pour continuer à vivre comme les autres.</p>
        <p class="py-5 text-[24px]">Ta Vue est une marque de lunettes Françaises, raffinées et épurées.
          La marque vous propose de joindre confort et style pour créer une paire de lunettes unique pour vous et vos
          goûts.</p>
        <p class="py-5 text-[24px]">Si vous ne trouvez pas la paire parfaite dans notre catalogue, essayez la
          personnalisation.</p>
        <div class="flex flex-justify justify-center py-5">
          <RouterLink to="/personnalisation">
          <button class="w-[300px] bg-black text-white text-[24px] p-2 rounded-lg">Personnalisation</button>
          </RouterLink>
        </div>
      </div>

      <img class="w-[300px]" alt="boys and lunettes" src="../../public/img/index/boyswithmusic.webp" />
    </div>


    <div class="grid grid-cols-3 gap-0 mx-10 mt-[100px]">
      <div class="w-[400px] bg-gris rounded-lg my-2 py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="items-center mx-5">
            <img class="w-[150px] " alt="avatar" src="../../public/img/index/mariejeanne.webp" />
            <div class="grid grid-cols-3 gap-0 my-1">
              <star />
              <star />
              <star />
            </div>
            <p class="font-light mt-2">a acheté des lunettes personnalisables</p>
            <p class="font-bold">2 photos jointes</p>
          </div>

          <div class="mx-1 mr-5 ">
            <h1 class="text-xl font-bold">Marie Jeanne</h1>
            <p class="text-[15px]">“J’ai reçu mes lunettes personnalisées la semaine dernière.
              En ouvrant le colis je les ai fait tomber et aucune rayure, vraiment très résistantes pour une personne
              maladroite comme moi !”</p>
          </div>
        </div>
      </div>

      <div class="w-[400px] bg-gris rounded-lg my-2 py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="items-center mx-5">
            <img class="w-[150px] " alt="avatar" src="../../public/img/index/sophiebertrand.webp" />
            <div class="grid grid-cols-3 gap-0 my-1">
              <star />
              <star />
              <star />
            </div>
            <p class="font-light mt-2">a acheté des lunettes personnalisables</p>
            <p class="font-bold">2 photos jointes</p>
          </div>

          <div class="mx-1 mr-5 ">
            <h1 class="text-xl font-bold">Sophie Bertrand</h1>
            <p class="text-[15px]">“Je n’ai jamais réussi à trouver des lunettes en magasin je n’ai pas osé essayer de
              paires pour trouver mon bonheur. Alors j’ai trouvé ce site par pur hasard et quelle belle découverte ! On
              peut prendre son temps et faire les lunettes de nos rêves ”</p>
          </div>
        </div>
      </div>

      <div class="w-[400px] bg-gris rounded-lg my-2 py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="items-center mx-5">
            <img class="w-[150px] " alt="avatar" src="../../public/img/index/anniejoy.webp" />
            <div class="grid grid-cols-3 gap-0 my-1">
              <star />
              <star />
              <star />
            </div>
            <p class="font-light mt-2">a acheté des lunettes personnalisables</p>
            <p class="font-bold">2 photos jointes</p>
          </div>

          <div class="mx-1 mr-5 ">
            <h1 class="text-xl font-bold">Annie Joy</h1>
            <p class="text-[15px]">“J’ai reçu mes lunettes personnalisées en quelques semaines, alors qu’en magasin il
              faut attendre parfois plusieurs mois !
              Rien à redire, bien reçu et en bon état, je vais pouvoir rendre jalouse toutes mes copines ;)”</p>
          </div>
        </div>
      </div>
    </div>

    <MapOsm/>

  </div>
</template>

