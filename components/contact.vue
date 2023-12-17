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
        <VInput
          v-model="inputValue"
          :minLength="24"
          :maxLength="10"
          :placeholder="email"
          :validationType="`regex`"
          :regex="/(^\s*$)|(^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$)/"
          >email</VInput>
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
import { VInput } from "@harv46/valid-input";
import "@harv46/valid-input/dist/style.css";
export default {
  components: {
    VInput,
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style>
</style>