<template>
  <div
    style="box-shadow: box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    class="w-11/12 rounded-sm mt-10 bg-gray-200 h-96 relative top-16"
  >
    <div class="grid grid-cols-3">
      <div class="ml-24 relative top-5 flex-col">
        <div>full name</div>
        <input class="border border-blue-400 w-full rounded-xl p-3" />
      </div>
      <div class="ml-24 flex-col">
        <form class="relative top-5">
            <div>email</div>
            <input @click="validateInput" class="p-3 w-72 border rounded-xl border-blue-400 hover:border-yellow-400 focus:border-red-400" v-model="inputValue" :pattern="regexPattern" type="text">
            <p class="text-red-400" v-if="validationError">email eshtebah</p>
        </form>
      
      </div>
      <img class="w-64 ml-24  relative top-8" src="../public/contact.svg" />
    </div>
    <div class="flex -mt-36 flex-col ml-24">
      <div>message</div>
      <textarea v-model="messageTextArea" :pattern="inputEmpty" @click=" validateEmpty" class="border border-blue-400 w-5/12" style="height: 200px" />
      <p class="text-red-400" v-if="validationEmpty">textarea empty</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      regexPattern: /(^\s*$)|(^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$)/,
      inputEmpty:/(^[\s]*$)/,
      messageTextArea:''
    }
  },
  computed: {
    validationError() {
      return !this.regexPattern.test(this.inputValue);
    },
    validationEmpty(){
      return !this.inputEmpty.test(this.messageTextArea);

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
    },
    validateEmpty(){
      if (this.validationEmpty) {
        // Handle invalid input
        console.log('Invalid input! Please enter a valid value.');
        return;
      }

      // Handle valid input
      console.log('Input is valid:', this.inputEmpty);
    }
  }
}
</script>

  


<style>
</style>