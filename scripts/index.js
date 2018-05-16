/* global shoppingList, store, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    

    items.forEach((item) => store.addItem(item));
    const item = items[0];
    console.log('current name: ' + item.name);
    console.log(item.id);
    store.findAndUpdate(item.id, { name: 'bacon' });
    console.log('new name: ' + item.name);
    shoppingList.render();
  });
});


