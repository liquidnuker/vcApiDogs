import {store} from "./store.js";

// ret index; else undefined
const nameExists =  function (value, storeCategory) {
  for (var key = 0; key < storeCategory.length; key++) {
    if (storeCategory[key].name == value) {
      return key;
    }
  }
};

export {nameExists};

