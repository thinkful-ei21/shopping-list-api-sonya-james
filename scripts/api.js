'use strict';

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sonya-james';

  function getItems(callback) {
    $.getJSON(BASE_URL + '/items', callback);
  }

  return {
    getItems,
  };

}());