<template>
<div>

<!-- favorite count -->
<vcFavoriteCount />

  {{ prStatus }}
  <ul v-for="i in prCurrentImages">
    <li>
      <p @click="insertLastViewed(i, prCurrentBreed); insertFavorites(i, prCurrentBreed)">{{ i }}
      </p>
      <br>
    </li>
  </ul>

  <!-- temp location for lastViewed -->
  <vcLastViewed />
  
</div>
</template>
<script>
import {store} from "../js/store.js";
import {extractFileName} from "../js/extractfilename.js";
import {nameExists} from "../js/nameexists.js";

const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
export default {
  data () {
    return {   
      
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prStatus",
    "prCurrentImages",
    "prCurrentBreed"
  ],
  components: {
    vcLastViewed: vcLastViewed,
    vcFavoriteCount: vcFavoriteCount
  },
  mounted: function () {
  },
  methods: {   
    insertLastViewed: function(imgSrc, breed) {
      if (store.lastViewed.length < 4) {
        store.lastViewed.unshift(imgSrc);
      } else {
        store.lastViewed.unshift(imgSrc);
        store.lastViewed.pop();
      }
      console.log(store.lastViewed);
    },
    insertFavorites: function(imgSrc, breed) {
      let name = extractFileName(imgSrc, false);

      if (nameExists(name) !== undefined) {
        console.log("already in favorites");
      } else {
      store.favorites.push({
        name: name,
        imgSrc: imgSrc,
        breed: breed,
        notes: "",
        edit: false
      });
      }
    }     
  }
}
</script>