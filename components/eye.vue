<template>
    <div class="flex justify-between">
      <div class="flex flex-col">
        <div class="mt-40 font-bold text-5xl">
          learn <span style="" class="border-change uppercase">edge</span> Cases
        </div>
        <div class="w-6/12 mt-8 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iure
          dolor, blanditiis optio sunt similique dicta laborum repellat
          aspernatur fugiat a itaque asperiores corporis vel voluptatibus
          provident nobis excepturi? Recusandae.
        </div>
        <div class="mt-5">
          <input
            class="bg-white rounded-full border boder-white w-6/12 focus:boder-white p-5 hover:border-white"
            placeholder="what do you learn"
          />
          <button
            class="bg-green-400 text-white w-36 h-10 text-2xl relative right-40 top-1 rounded-full"
          >
            search
          </button>
        </div>
      </div>
     <div class="relative top-36">
        <img
        style="width: 500px; height: 300px"
        class="mr-10"
        src="../public/capture.png"
      />
      <div id="eyes" class=" relative rounded-full bg-black w-24 h-24 -top-48 left-36"></div>
     </div>
    
    </div>
</template>

<script setup>

</script>

<style>
#eyes {
  animation: sun-eyes 2s ease infinite;
  transform-origin: center;
  animation-direction: alternate;
}

@keyframes sun-eyes {
    0%   { left: 100px; top: -200px;}
  25%  { left: 250px; top: -200px;}
  50%  { left: 200px; top: -200px;}
  75%  { left: 200px; top: -200px;}
  100% { left: 100px; top: -200px;}
}
.border-change {
  border: 16px solid;
  width: 300px;
  /* clip-path: polygon(76% 94%, 79% 99%, 77% 100%, 0% 100%); */
  border-bottom-left-radius:50px 40px;
  @apply border-l-0 border-r-0 border-t-0;
  border-radius: 2rem;
  border-image: repeating-linear-gradient(to  right, #f87171, #facc15, #34d399, rgb(52,211,153)) 30;


  
}
</style>