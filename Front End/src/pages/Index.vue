<template>
  <q-page style="background-color: #e5275c" class="flex flex-center">
    <q-img src="~assets/papa.png" height="30%" width="35%" class="rounded-borders">
      <div class="absolute-bottom text-subtitle1 text-center">
        pVc for survival situations
      </div>
    </q-img>
    <div>
      <ul>
        <li v-for="(day) in stats" :key="index">
        <div class='q-pa-md'>
        <q-btn @click="addClick(day.name)" class="glossy q-pa-md" rounded color="pink-2"> {{ day.name }}</q-btn>

        </div>
        </li>
      </ul>
    </div>
    <ul>
      <li v-for="(day, index) in meny" :key="index">
      {{ day.name }}, {{ day.clicks }}
      </li>
    </ul>
  </q-page>
</template>

<script>
import { db } from '../boot/firebase'

export default {
  name: "PageIndex",
  data: () => ({
    meny: [],
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
  firestore: {
    meny: db.collection('meny-test').doc('day1').collection('dishes')
  },
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
