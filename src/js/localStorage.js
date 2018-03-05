const storage = {
  fetch: function (key) {
    let data = JSON.parse(localStorage.getItem(key) || '[]');
    return data;
  },
  save: function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export {storage};