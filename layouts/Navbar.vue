<template>
<div>
    <div class="bg-gray-200 " id="app">
  <div 
    class="navbar ml-10 flex justify-between"
    :class="{ 'hidden-navbar': !showNavbar }"
  >
<div>
  <div id="eyes" class=" relative rounded-full left-7 bg-black w-4 h-4 "></div>
    <div><img  style="width: 40px; height: 50px" src="../public/capture.jpg"/>
</div>
    <div class="ml-3">Knowledgeducation</div>
    </div>
    <div><ul class="flex space-x-5">
        <li class="text-gray-400">courses</li>
        <li class="text-gray-400">contact us</li>
        <li class="text-gray-400">lorem</li>
    </ul></div>
    <div>
        <button class="bg-green-400 text-white w-44 h-12 rounded-3xl">Contact Us</button>
    </div>

</div>

  <transition name="fade">


  </transition>


  
</div>
<NuxtPage/>
</div>

</template>

<script>
export default {
  data () {
    return {
        showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  methods: {
    onScroll () {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than some offset
  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
    return
  }
  this.showNavbar = currentScrollPosition < this.lastScrollPosition
  this.lastScrollPosition = currentScrollPosition
}
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style scoped>
#eyes {
  animation: sun-mond 2s ease infinite;
  transform-origin: center;
  animation-direction: alternate;
}

@keyframes sun-mond {
  0%   { left: 2px; top: 2px;}
  25%  { left: 40px; top: 2px;}
  50%  { left: 10px; top: 2px;}
  75%  { left: 30px; top: 2px;}
  100% { left: 50px; top: 2px;}
}
</style>