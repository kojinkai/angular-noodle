'use strict';

angular.module('angularDemoApp')
  .factory('ProgramList', function ($http) {
    
    // Private variables here
    var returnData = [],
        i = 0,
        pushLoadURL = "";

    // Public API here
    return {
      // get request returns an
      // array of objects containing
      // channel info and pushes them into above
      // variable to be returned
      init: function (channelURL) {
        $http.get(channelURL).
        success(function (data) {
            for ( i; i < data.length; i++ ) {
              returnData.push(data[i]);
            }
        });
        return returnData;
      },

      pushLoad: function(data) {
        // takes a URL string from the controller
        // (URL from the data previously pulled from the init function)
        // and pushes it to the above variable to be shared with the otehr controllers
        console.log(data);
        pushLoadURL = data;
        console.log("pushload is: ", pushLoadURL);
      },

      pullLoad: function() {
        return pushLoadURL;
      }
    };
  });
