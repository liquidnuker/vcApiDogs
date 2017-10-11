<template>
<div>

<!-- favorite count -->
<vcFavoriteCount />

  {{ prStatus }}
  <ul v-for="i in prCurrentImages">
    <li>
      <p @click="insertLastViewed(i, prCurrentBreed); addToFavorites(i, prCurrentBreed)">{{ i }}
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
      let name = extractFileName(imgSrc, false);
      let pushItems = function() {
        store.lastViewed.unshift({
          name: name,
          imgSrc: imgSrc,
          breed: breed,
        });
      };

      // check before pushing
      if (nameExists(name, store.lastViewed) !== undefined) {
        console.log("already in lastviewed");
      } else {
        // lastViewed limit
        if (store.lastViewed.length < 4) {
          pushItems();
        } else {
          pushItems();
          store.lastViewed.pop();
        }
      }      
      console.log(store.lastViewed.length);
    },
    addToFavorites: function(imgSrc, breed) {
      let name = extractFileName(imgSrc, false);

      // check before pushing
      if (nameExists(name, store.favorites) !== undefined) {
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