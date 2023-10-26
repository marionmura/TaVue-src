<script setup>
// export default {
//     methods: {
//         async register() {
//             currentUser = await pb.collection("users").create({
//                 email: document.getElementById("email").value,
//                 password: document.getElementById("password").value,
//                 passwordConfirm: document.getElementById("password").value,
//                 name: "test",
//             });
//         },
//     }
// }



// const currentUser = ref()
// const router = useRouter()

// const email = ref("");
// const psw = ref("");
// const nom = ref("");

// onMounted(async () => {
//     pb = new pocketbase('https://sae301.marionmura.fr:443/');
//     pb.authStore.onChange(() => {
//         currentUser.value = pb.authStore.model
//     }, true)
// })

//import icon
import Tavue from '../assets/tavuelogo.vue';

// import { onMounted, ref } from 'vue';
// import pocketbase from 'pocketbase';
// import { useRouter } from 'vue-router';




// const doSeConnecter = async () => {
//   try {
//     const authData = await pb.collection('users').authWithPassword(email.value, psw.value);
//   } catch (error) {
//     alert("Quelque chose s'est mal passé, veuillez réessayer")
//   }
// }

// const doCreerCompte = async () => {
//   try {
//     const data = {
//       "nom": nom.value,
//       "email": email.value,
//       "emailVisibility": true,
//       "password": psw.value,
//       "passwordConfirm": psw.value
//     };

//     const record = await pb.collection('users').create(data);
//     pb.authStore.isValid && router.replace("/HomeView");

//     await doSeConnecter();

//   } catch (error) {
//     alert("Quelque chose s'est mal passé, veuillez réessayer")
//   }
// }
</script> 


<template>
    <div class="bg-black m-0 h-screen">
        <div class="grid grid-cols-2 mx-[100px] gap-[100px]">
            <div class="col-span-1 justify-self-end my-auto">
                <Tavue />
            </div>

            <div class=" grid grid-rows-2">
                <div class="text-black bg-white rounded-lg row-span-5">
                    <h1 class="flex justify-center font-bold text-[24px] mt-5">Bienvenue sur Ta Vue ! </h1>
                    <p class="flex justify-center"> Inscrivez-vous pour voir les produits</p>

                    <form>

                        <div class="grid grid-rows-2 ">
                            <div class="grid grid-rows-2 gap-0 mx-5">
                                <label for="username" class="mb-[-5px]" width="50px">Nom d'utilisateur (*)</label>
                                <input  type="text" name="username" placeholder="Nom d'utilisateur" required
                                    class=" bg-gris p-4 rounded-[5px] ">
                                    <!-- v-model="nom" -->
                            </div>

                            <div class="grid grid-rows-2 mx-5">
                                <label for="email" class=" mb-1" width="50px">Email (*)</label>
                                <input  type="email" name="email" placeholder="Entrez votre adresse mail"
                                    required class="bg-gris p-4 rounded-[5px]"> 
                                    <!-- v-model="email" -->

                            </div>

                            <div class="grid grid-rows-2 mx-5 my-5 ">
                                <label for="password" class="mb-1" width="50px">Mot de passe (*) </label>
                                <p></p>
                                <input  type="password" name="password" placeholder="Password" required
                                    class="bg-gris p-4 rounded-[5px]">
                                    <!-- v-model="psw" -->
                            </div>
                        </div>


                        <div class="grid grid-rows-2 mx-5 my-5 ">
                            <button 
                                class="bg-violet font-bold p-3 rounded-[5px] text-[24px]">Inscription</button>
<!-- @click="register()" -->
                            <div class="flex justify-end text-violet mt-5">
                                <RouterLink class="" to="/connexion">J'ai déjà un compte/ Inscription avec Google</RouterLink>
                            </div>

                        </div>
                    </form>
                </div>

            </div>

            <!-- <div class=" text-white rounded-lg ml-auto space-x-2">
                <span class="grid grid-cols-2 items-center" >
                     v-if="isConnected == true" 
                    <p class="text-3xl">
                        {{ currentUser.nom }}
                    </p>
                    <button class="bg-violet text-black font-bold p-4 rounded-[5px] text-[24px]" type="button"
                        @click="deconnect()">
                        SE DECONNECTER
                    </button>
                </span> -->

            </div>

        </div>


</template>
