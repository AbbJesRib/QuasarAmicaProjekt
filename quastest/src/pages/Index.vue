<template>
  <q-page style="background-color: #e5275c" class="flex flex-center">
    <q-img src="~assets/papa.png" height="30%" width="35%" class="rounded-borders">
      <div class="absolute-bottom text-subtitle1 text-center">
        pVc for survival situations
      </div>
    </q-img>
    <div>
      <ul>
        <li v-for="(x) in stats" :key="x">
        <div class='q-pa-md'>
        <q-btn @click="addClick(x.id)" class="glossy q-pa-md" rounded color="pink-2"> {{ x.name }} - {{ x.clicks }} clicks </q-btn>

        </div>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: () => ({
    stats: [
      {
        id: 0,
        name: "Rätt 1",
        clicks: 0
      },
      {
        id: 1,
        name: "Rätt 2",
        clicks: 0
      },
      {
        id: 2,
        name: "Rätt 3",
        clicks: 0
      },
      {
        id: 3,
        name: "Rätt 4",
        clicks: 0
      }
    ],
    hasClicked: false
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
    }
  },
  created () {
    // for (let i = 0; i < this.stats.length; i++) {
    //   this.stats[i].clicks = 0;
    // }
  }
};
</script>
