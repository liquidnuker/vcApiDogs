<template>
<div>
  
</div>
</template>
<script>


export default {
  data () {
    return {   
      viewDog: false,
      currentDog: ""
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
      this.currentDog = imgSrc;
      this.viewDog = true;

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