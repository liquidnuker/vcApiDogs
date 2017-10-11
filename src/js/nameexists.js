import {store} from "./store.js";

// ret index; else undefined
const nameExists =  function (value) {
  for (var key = 0; key < store.favorites.length; key++) {
    if (store.favorites[key].name == value) {
      return key;
    }
  }
};

export {nameExists};

