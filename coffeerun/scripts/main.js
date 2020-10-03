(function(window){
    'use strict';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;

    var myTruck = new Truck('nc-1701', new DataStore());
    window.myTruck = myTruck;
})(window);