"use strict";

(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No Remote URL Supplied.');
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key, value) {
    $.post(this.serverUrl, value, function (serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function () {
    $.get(this.serverUrl, function (serverResponse) {
      console.log(serverResponse);
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);