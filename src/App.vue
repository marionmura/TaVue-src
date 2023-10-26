<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Tavue from '../src/assets/tavuelogo.vue';
import heart from '../public/icons/heart.vue';
import panier from '../public/icons/sac.vue';
import user from '../public/icons/user.vue';

import Facebook from '../public/icons/facebook.vue';
import Instagram from '../public/icons/insta.vue';

import { isConnected } from '../src/views/Connexion.vue';
import { currentUser } from '../src/views/Connexion.vue';
import Connexion from '../src/views/Connexion.vue';

</script>

<template>
  <div class=" h-screen">
    <header class="bg-black h-auto p-5">


      <div class="wrapper max-w-full">
        <nav class="text-white flex flex-justify items-center justify-between">
          <div class="space-x-5 flex flex-justify items-center">
            <RouterLink to="/">
              <Tavue class="w-[180px] h-auto" />
            </RouterLink>
            <RouterLink to="/">LUNETTES TENDANCES</RouterLink>
            <RouterLink to="/personnalisation">PERSONNALISATION</RouterLink>
          </div>


          <div class=" space-x-5 flex flex-justify items-center">
              <RouterLink to="/">
                <heart class="w-10 h-10" />
              </RouterLink>
              <RouterLink to="/panier">
                <panier class="w-10 h-10" />
              </RouterLink>

            <RouterLink to="/connexion" >
              <user />
            </RouterLink>

          
          </div>
        </nav>

      </div>
    </header>

    <RouterView />
    <footer>
      <div class="bg-black text-white font-bold  py-5">
        <div class="grid grid-cols-4 space-y-2">
          <div class="grid justify-center">
            <Tavue class="w-[180px] h-auto" />
          </div>

          <div class="grid grid-rows-6 gap-2 ">
            <a href="#">Politique de Confidentialité</a>
            <a href="#">Conditions générales de ventes</a>
          </div>

          <div class="grid grid-rows-6 gap2">
            <a href="#">À propos</a>
            <a href="#">Nous contacter</a>
            <a href="#">FAQ</a>
            <a href="#">Remboursements</a>
          </div>

          <div class="gap-2">
            <p class="row-span-2">Suivez-nous</p>
            <div class="flex flex-justify items-center">
              <Facebook class="w-[40px]" />
              <Instagram class="w-[40px]" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4">
          <p></p>
          <p class="font-light">Paramètres des cookies</p>
          <p class="font-light">Accessibilité</p>
          <p class="font-light">©2023 Ta Vue France</p>
        </div>

      </div>
    </footer>
  </div>
</template>

