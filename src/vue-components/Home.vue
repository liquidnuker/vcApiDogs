<template>
  <div>
    <vcRandomDog 
    :pr-random-breed="randomDogBreed"
    :pr-random-image="randomDogImage" />
    
    <br>
    <br>

    <vcBreedSelector />

    

    <!-- all breed names -->
    <!-- <ul v-for="i in allBreedNames">
      <li>{{ i }}</li>
    </ul> -->
  </div>
</template>
<script>
import {axios_get} from "../js/axios_get.js";
import {shuffle} from "../js/shuffle.js";
import {allbreeds} from "../js/allbreeds.js";

const vcBreedSelector = () => import ('./vcBreedSelector.vue');
const vcRandomDog = () => import ('./vcRandomDog.vue');
export default {
  data() {
    return {
      allBreedNames: "",
      
      // random dog
      randomDogBreed: "",
      randomDogImage: "",

      // api urls
      // List all breed names including sub breeds.
      // url for api mode:
      // url_allBreedNames: "https://dog.ceo/api/breeds/list/all",
      // url for local list
      url_allBreedNames: "./src/js/ajax/allbreeds.json",
    }
  },
  components: {
    vcRandomDog: vcRandomDog,
    vcBreedSelector: vcBreedSelector
  },
  mounted: function () {
    this.listAllBreedNames();
    
  },
  methods: {
    listAllBreedNames: function () {
      let self = this;
      axios_get(self.url_allBreedNames)
        .then(function (response) {
          // for local list
          self.allBreedNames = response.data.allbreeds;

          // for api mode
          // let arr = Object.values(response);
          // let arr2 = arr[0].message;

          // for (let i in arr2) {
          //   self.allBreedNames.push(i);
          // }
        })
        .then(function () {
          self.showRandomDogImage();
      });
    },
    showRandomDogImage: function () {
      this.randomDogBreed = shuffle(allbreeds);
      // Returns an array of all the images from the breed
      let url = "https://dog.ceo/api/breed/" + this.randomDogBreed[0] + "/images";
      let self = this;
      axios_get(url)
        .then(function (response) {
          let arr = Object.values(response);
          self.randomDogImage = shuffle(arr[0].message);
        })
        .then(function () {
        
      });      
    }
  }
}
</script>