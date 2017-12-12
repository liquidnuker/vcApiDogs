<template>
<div>


  {{ prStatus }}
  <ul class="gallery_display" v-for="i in prCurrentImages">
    <li class="col-xs-6 col-sm-3">
      <div class="gallery_display_img-holder">
        <img :src="i" :alt="prCurrentBreed + ' image'"
        :title="prCurrentBreed + ' image'" 
        @click="insertLastViewed(i, prCurrentBreed); addToFavorites(i, prCurrentBreed)" />
      

        <!-- <p @click="insertLastViewed(i, prCurrentBreed); addToFavorites(i, prCurrentBreed)">{{ i }}
      </p> -->
      </div>
    </li>
  </ul>

  
  
</div>
</template>
<script>
import {store} from "../js/store.js";
import {extractFileName} from "../js/extractfilename.js";
import {nameExists} from "../js/nameexists.js";


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
    
  },
  mounted: function () {
  },
  methods: {   
    insertLastViewed: function(imgSrc, breed) {
      let name = extractFileName(imgSrc, false);
      
      // check before pushing
      if (nameExists(name, store.lastViewed) !== undefined) {
        return;
      } else {
        // lastViewed limit
        if (store.lastViewed.length === 4) {
          store.lastViewed.pop();
        } 
        store.lastViewed.unshift({
          name: name,
          imgSrc: imgSrc,
          breed: breed,
        });
      }      
    },
    addToFavorites: function(imgSrc, breed) {
      let name = extractFileName(imgSrc, false);

      // check before pushing
      if (nameExists(name, store.favorites) !== undefined) {
        console.log("already in favorites");
        return;
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