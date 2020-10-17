'use strict';

/* Services */
angular.module('myApp.services', [])
  .service('resultsService', function (){
      console.log("testing")
     var _questions;
    return {
      setResults: function(questions) {
        _questions = questions;
      },
      getResults: function (){
        return _questions;
      }
    };
  });
