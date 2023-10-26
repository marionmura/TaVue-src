<script setup>
import { ref, onMounted } from 'vue';
import Lunettes from '../../public/lunettes.vue';

// Import pocketbase
import PocketBase from 'pocketbase'
import { isConnected } from '../views/Connexion.vue';

var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "https://sae301.marionmura.fr:443/";
else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(pocketbase_ip);


//creation d'une paire de lunette dans pb
let couleurmonture=ref('');
let couleurbranche=ref('');
let couleurverres=ref('');

//ajouter des lunettes options
const newlunettes = async() =>{
  try{
    const authData = await pb.collection('lunette').create({
      couleurmonture: couleurmonture.value,
      couleurbranche: couleurbranche.value,
      couleurverres: couleurverres.value,
    })
    console.log("lunettes crées", authData)
  }catch (error){
    console.log("erreur de création", error)
  }
}
const authData =async()=> {
  let result = await pb.collection('lunette').create(
    newlunettes.value)
    console.log ("result create", result)
}


onMounted(async () => {
  // Vérifier que le user est déjà connecté
})
</script>

<template>
  <main >
    <div class="container">
      <div class="grid grid-cols-3 ">
        <div class="col-span-2 bg-grisclair">
          <Lunettes />
        </div>

        <div class="mx-[25px] mt-[100px]">
          <h1 class="text-[25px] font-semibold">Lunettes personnalisables </h1>
          <h2>modèle forme ronde</h2>
          <h5 class="text-[30px]">60.00 €</h5>

          <form class="mt-5" @submit.prevent="create">
            <p>Couleur des branches</p>
            <div>
              <input v-model="newlunettes.branche" class="circle rose" onclick="branched.style.fill='#FFDDDD'; brancheg.style.fill='#FFDDDD'" />

              <input v-model="newlunettes.branche" class="circle dore" onclick="branched.style.fill='#FFEFB5'; brancheg.style.fill='#FFEFB5'"/>

              <input v-model="newlunettes.branche" class="circle pastel" onclick="branched.style.fill='#D2DCFF'; brancheg.style.fill='#D2DCFF'"/>
              <input v-model="newlunettes.branche" class="circle taupe" onclick="branched.style.fill='#342242'; brancheg.style.fill='#342242'"/>
              <input v-model="newlunettes.branche" class="circle nuit" onclick="branched.style.fill='#030E1B'; brancheg.style.fill='#030E1B'"/>
            </div>

          <div class="mt-5">
            <p>Couleur de la monture</p>
            <div >
              <input v-model="newlunettes.monture" class="circle rose" onclick="monture.style.fill='#FFDDDD'"/>

              <input v-model="newlunettes.monture" class="circle dore" onclick="monture.style.fill='#FFEFB5'"/>
              <input v-model="newlunettes.monture" class="circle pastel" onclick="monture.style.fill='#D2DCFF'"/>
              <input v-model="newlunettes.monture" class="circle taupe" onclick="monture.style.fill='#342242'"/>
              <input v-model="newlunettes.monture" class="circle nuit" onclick="monture.style.fill='#030E1B'"/>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-5">
            <button class="w-auto border-4 border-black bg-white text-black text-[24px] p-2 rounded-lg focus:bg-black focus:text-violet " onclick="verresg.style.fill='#030E1B'; verresd.style.fill='#030E1B'">Verres solaires </button>
            <button class="w-auto border-4 border-black bg-white text-black text-[24px] p-2 rounded-lg focus:bg-black focus:text-violet " onclick="verresg.style.fill='#D2DCFF'; verresd.style.fill='#D2DCFF'" >Verres de vue </button>
          </div>
          

          <div class="mt-5">
            <p>Matériaux pour la monture</p>
            <div class="grid grid-cols-2 gap-5">
              <button class="w-auto border-4 border-black bg-white text-black text-[24px] p-2 rounded-lg focus:bg-black focus:text-white ">Plastique</button>
              <button class="w-auto border-4 border-black bg-white text-black focus:bg-black focus:text-white text-[24px] p-2 rounded-lg">Métal</button>
            </div>
          </div>

          <div>
            <button class="w-auto text-[24px] font-light p-2 my-5 rounded-[5px] bg-black text-white" type="button" @click="create">ajouter au panier</button>
          </div>
          </form>
        </div>



      </div>
    </div>
  </main>
</template>

<style scoped>
p {
  font-weight: bold;
  font-size: 20px;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* Transforme le div en cercle */
  display: inline-block;
  margin: 10px;
  /* Ajoute un espace entre les cercles */
}

.rose {
  background-color: #FFDDDD;
}

.dore {
  background-color: #FFEFB5;
}
.pastel {
  background-color: #D2DCFF;
}
.taupe {
  background-color: #342242;
}
.nuit {
  background-color: #030E1B;
}

</style>