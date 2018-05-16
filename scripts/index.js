/* global shoppingList, store, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    const item = items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);

    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});


