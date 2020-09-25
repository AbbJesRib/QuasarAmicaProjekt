<template>
  <q-page style="background-color: #e5275c" class="flex flex-center">
  <div>
  <input v-model="regname">
  <input v-model="passname">
  <q-btn @click="log">Log In</q-btn>
  <div v-if="logged">
  <q-btn @click: router to="/">Go Back</q-btn>
  </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: "loggedin",
  data: () => ({
    regname: "Username",
    passname: "Password",
    logged: false
  }),
  methods: {
    addClick (id) {
      if (this.hasClicked === false) {
        this.stats[id].clicks += 1;
        console.log(this.stats[id].clicks)
        this.hasClicked = true
      }
    },
    clicker () {
      this.stats[0].clicks += 1;
      console.log(this.stats[0].clicks)
    },
    log () {
      if (this.regname === "Magneten" && this.passname === "abcd") {
        this.logged = true;
      }
    }
  },
  created () {
    // for (let i = 0; i < this.stats.length; i++) {
    //   this.stats[i].clicks = 0;
    // }
  }
};
</script>
