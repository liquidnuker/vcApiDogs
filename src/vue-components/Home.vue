<template>
<div>
  <!-- header -->
  <header class="row container-fluid--h">
    <div class="row container main-header">
      <div class="col-sm-4">logo</div>
      <div class="col-sm-8">
        <!-- favoriteCount -->
        <vcFavoriteCount />
        <!-- /favoriteCount -->
      </div>
    </div>
  </header>
  <!-- /header -->
  <!-- main -->
  <main class="row container-fluid--m">
  <div class="row container main-items">
    <div class="col-sm-4">
      <!-- leftside -->      
      <!-- breed selector -->
      <div>
        <select>
          <option value="">Choose Breed...</option>
          <option v-for="i in options"
          @click="switchBreed(i)" :value="i">{{ i }}</option>
        </select>
      </div>
      <!-- /breed selector -->      
      <!-- randog -->
      <div>
        <vcRandomDog
        :pr-status="status.randomDog"
        :pr-random-breed="randomDogBreed"
        :pr-random-image="randomDogImage" />
      </div>
      <!-- /randog -->         
      <!-- lastViewed -->
      <div>
        <vcLastViewed />
      </div>
      <!-- /lastViewed -->      
      <!-- /leftside -->
    </div>
    <div class="col-sm-8">
      <!-- rightside -->
      right
      <!-- /rightside -->
    </div>
  </div>
  </main>
  <!-- /main -->
  <!-- footer -->
  <footer class="row container-fluid--f">
    <div class="row container main-footer">
      <div class="col-sm-12">
        footer
      </div>
    </div>
  </footer>
  <!-- /footer -->
  <!-- favorite count -->
  
  
  
  
  
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
import {router} from "../js/router.js";

const vcRandomDog = () => import ('./vcRandomDog.vue');
const vcLastViewed = () => import ('./vcLastViewed.vue');
const vcFavoriteCount = () => import ('./vcFavoriteCount.vue');
export default {
  data() {
    return {
      allBreedNames: "",

      options: allbreeds.sort(),
      
      // random dog
      randomDogBreed: "",
      randomDogImage: "",

      status: {
        randomDog: ""
      },

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
    vcLastViewed: vcLastViewed,
    vcFavoriteCount: vcFavoriteCount
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
      this.status.randomDog = `loading ${this.randomDogBreed[0]}`;

      // Returns an array of all the images from the breed
      let url = "https://dog.ceo/api/breed/" + this.randomDogBreed[0] + "/images";
      let self = this;
      axios_get(url)
        .then(function (response) {
          let arr = Object.values(response);
          self.status.randomDog = "";
          self.randomDogImage = shuffle(arr[0].message);
        })
        .then(function () {
        
      });      
    },
    switchBreed: function(breed) {
      router.push({path: "/gallery/" + breed});
    } 
  }
}
</script>