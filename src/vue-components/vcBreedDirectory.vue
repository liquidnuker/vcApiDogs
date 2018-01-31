<template>
<div>
  <!-- prev/next dirList -->
  <span class="pg_holder">
    <button class="btn btn1-01 btn_prev" tabindex="0"
    @click="prevPage()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
    Prev</button>
    <button class="btn btn1-01 btn_prev" tabindex="0"
    @click="nextPage()">Next
    <svg xmlns="http://www.w3.org/2000/svg" class="carousel1-04_chevron" viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg></button>
  </span>
  <!-- /prev/next dirList -->
  <div class="row">
    breed directory<br>
    <div v-for="i in pagerBreedList" class="col-sm-3 bd_grid">

    <!-- for hiding empty sets.
    <div v-for="i in pagerBreedList" 
    class="col-sm-3 bd_grid" v-if="i.length > 0"> -->
      <div class="bd_grid_items">
        <!-- {{ i.length }}
        {{ i.startsWith }} -->
        <template v-for="(z, index) in i.name">
        <p v-if="index === 0">{{ z }}</p>
        <!-- with separator -->
        <p v-else-if="index > 0 && index < i.name.length-1">
        {{ z }},&nbsp;</p>
        <!-- last item -->
        <p v-else>{{ z }}</p>
        </template>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Paginate from "../js/vendor/Paginate.js";
export default {
  data() {
      return {
        breedDirItems: "",
        breedDirChars: "",
        breedDirList: [],
        // paginator
        pager: "",
        currentPage: "",
        totalPages: "",
        pagerButtons: null,
        pagerBreedList: ""
      };
    },
    watch: {
      // : function () {
      // }
    },
    props: [
      "prBreedDirItems"
    ],
    components: {},
    mounted: function () {
      this.breedDirItems = this.prBreedDirItems;
      this.breedDirChars = this.createDirChars("a", "z");
      this.extractBreeds(this.breedDirChars, this.breedDirItems, this.breedDirList);
    },
    methods: {
      createDirChars: function (charA, charZ) {
        let a = [];
        let i = charA.charCodeAt(0);
        let j = charZ.charCodeAt(0);
        for (; i <= j; i++) {
          a.push(String.fromCharCode(i));
        }
        return a;
      },
      extractBreeds: function (chars, items, dirList) {
      // extract breeds from dir chars
      chars.map((i) => {
        let z = this.extractChars(items, i);

        // don't push empty sets
        if (z.length > 0) {
          dirList.push({
            name: z,
            startsWith: i,
            length: z.length
          });
        }
      });
      this.paginateBreedList(this.breedDirList);
      },
      paginateBreedList: function (data) {
        this.pager = null;
        this.pager = new Paginate(data);
        this.pagerBreedList = this.pager.page(0);
        this.currentPage = this.pager.currentPage;
        this.totalPages = this.pager.totalPages;
        this.pagerButtons = true;

        console.log(this.pager.totalPages);
      },
      nextPage: function () {
        if (!this.pager.hasNext()) {
          this.pagerBreedList = this.pager.page(0);
        } else {
          this.pagerBreedList = this.pager.next();
        }
        this.currentPage = this.pager.currentPage;
      },
      prevPage: function () {
        if (this.pager.currentPage === 1) {
          this.pagerBreedList = this.pager.page(this.pager.totalPages);
        } else {
          this.pagerBreedList = this.pager.prev();
        }
        this.currentPage = this.pager.currentPage;
      },
      extractChars: function (arr, char) {
        // returns array of items that starts with char
        let extracted = arr.filter(function (el) {
          return el[0].toLowerCase() === char;
        });
        return extracted;
      }
    }
};
</script>