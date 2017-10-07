import "./vendor/jPages.min.js";
import LazyLoad from "./vendor/lazyload.min.js";

const pager = {
  start: function (perPage) {
    $("div.gallery-listing-paginator").jPages({
      containerID: "galleryContainer",
      first: "first",
      previous: "previous",
      next: "next",
      last: "last",
      links: "numeric", // blank || title
      delay: 0, // to remove fade
      fallback: 0, // to remove fade
      startPage: 1,
      perPage: perPage,
      midRange: 5,
    });

    let myLazyLoad = new LazyLoad({
      container: document.getElementById('galleryContainer')
    });
  },
  activate: function (timeout, perPage) {
    setTimeout(function () {
      pager.start(perPage);
    }, timeout);
  },
  destroy: function () {
    $("div.gallery-listing-paginator").jPages("destroy");
  }
};

export {pager};