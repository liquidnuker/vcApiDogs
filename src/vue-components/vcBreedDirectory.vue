<template>
<div class="row">
  breed directory<br>
  <div v-for="i in breedDirList" class="col-sm-3 bd_grid"
  v-if="i.length > 0">
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
</template>
<script>
export default {
  data() {
      return {
        breedDirItems: "",
        breedDirChars: "",
        breedDirList: [],

        pagerBreedList: "" // todo
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

          dirList.push({
            name: z,
            startsWith: i,
            length: z.length
          });
        });

        this.paginateBreedList();
      },
      paginateBreedList: function() {
        console.log("paginateBreedList todo");
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