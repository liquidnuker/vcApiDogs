<template>
<div>
  <div v-if="favoritesStorage.length > 0">
    <span>
    Favorites:&nbsp;
    </span>
    <a class="main-header_fav-link" href="index.html#/favorites">{{ favoritesStorage.length }}
    </a>
  </div>
</div>
</template>
<script>
import {store} from "../js/store.js";
import {storage} from "../js/localStorage.js";
export default {
  data () {
    return {   
      STORAGE_KEY_FAVORITES: "vcApiDogs-favorites",  
      favorites: store.favorites,
      favoritesStorage: ""
    }
  },
  watch: {
    favorites: function() {
      this.fetchData();
    }
  },
  mounted: function () {
    this.fetchData();
  },
  methods: {  
    fetchData: function() {
      this.favoritesStorage = storage.fetch(this.STORAGE_KEY_FAVORITES);
    }        
  }
}
</script>