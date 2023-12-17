<template>
  <div
    style="box-shadow: box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    class="w-10/12 rounded-sm mt-10 bg-white h-80"
  >
    <div class="grid grid-cols-3">
      <div class="ml-24 flex-col">
        <div>full name</div>
        <input class="border border-blue-400 w-full rounded-xl p-3" />
      </div>
      <div class="ml-24 flex-col">
        <form>
            <div>email</div>
            <input class="p-3 border-blue-400" v-model="inputValue" :pattern="regexPattern" type="text">
            <p v-if="validationError">email eshtebah</p>
        </form>
      
      </div>
      <img class="w-64 ml-72" src="../public/contact.svg" />
    </div>
    <div class="flex -mt-36 flex-col ml-24">
      <div>message</div>
      <textarea class="border border-blue-400 w-5/12" style="height: 200px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      regexPattern: /(^\s*$)|(^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$)/ // Example regex pattern: only alphabetic characters
    }
  },
  computed: {
    validationError() {
      return !this.regexPattern.test(this.inputValue);
    }
  },
  methods: {
    validateInput() {
      if (this.validationError) {
        // Handle invalid input
        console.log('Invalid input! Please enter a valid value.');
        return;
      }

      // Handle valid input
      console.log('Input is valid:', this.inputValue);
    }
  }
}
</script>

  


<style>
</style>