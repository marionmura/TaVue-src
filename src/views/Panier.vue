<template>
  <main>
    <div class="">
      <div class="grid grid-cols-3 ">
        <div class="col-span-2 bg-grisclair">
        </div>

        <div class="col-span-1 mx-5 mt-[100px]">
          <h1 class="text-[25px] font-semibold flex justify-center">Mes Coordonnées</h1>

          <form>
            <div class="grid grid-rows-2 ">
              <div class="grid grid-cols-2 gap-1">
                <div class="grid grid-rows-2 gap-0 mx-5 space-y-0">
                  <label class="" for="login">Prénom</label>
                  <input class="mb-2 bg-gris p-2 rounded-[5px]" id="login" required placeholder="Marie">
                </div>
                <div class="grid grid-rows-2 gap-0 mx-5 space-y-0">
                  <label class="" for="login">Nom</label>
                  <input class="mb-2 bg-gris p-2 rounded-[5px]" id="login" required placeholder="Jeanne">
                </div>
              </div>

              <div class="grid grid-rows-2 gap-0 mx-5 space-y-0">
                <label class="" for="login">Adresse mail</label>
                <input class="mb-2 bg-gris p-2 rounded-[5px]" id="login" required placeholder="marie.jean@gmail.com">
              </div>


              <div class="grid grid-rows-2">
                <div class="grid grid-rows-2 gap-0 mx-5 space-y-0">
                <label class="" for="login">Adresse</label>
                <input class="mb-2 bg-gris p-2 rounded-[5px]" id="login" required placeholder="rue de la Croix">
              </div>
              <div class="grid grid-rows-2 gap-0 mx-5 space-y-0">
                <label class="" for="login">Code postal</label>
                <input class="mb-2 bg-gris p-2 rounded-[5px]" id="login" required placeholder="90100">
              </div>
              </div>

              <div class="flex justify-center">
                <button class="w-[200px] text-[24px] font-light p-2 my-5 rounded-[5px] bg-black text-white" type="button">Payer</button>
              </div>
              
            </div>
          </form>


          <div class="mt-5">

          </div>
        </div>




      </div>



    </div>
  </main>
</template>

<style></style>
