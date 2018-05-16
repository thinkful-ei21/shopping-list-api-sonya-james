'use strict';

const api = (function(){

    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sonya-james';

    function getItems(callback) {
        callback('api modules works');
    }

    return {
        getItems,
    };

}());