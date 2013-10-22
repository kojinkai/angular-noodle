'use strict';

angular.module('angularDemoApp')
  .service('ProgramList', function ($http) {
    
    // Private variables here

    var channelData = [],
        programData = [],
        programView = {};

    (function () {
      // self-invoking function
      // to pull our main channels
      
      var i = 0;

      $http.get('/scripts/json/channels.json').
      success(function (data) {
        window.channels = data;
        for ( i; i < data.length; i++ ) {
          channelData.push(data[i]);
        }
      });
    })();

    // Start assigning our public API here
    this.channelList = channelData;
    this.programData = programData;
    this.programView = programView;
    this.selectedChannel = null;
    this.selectedData = null;

    this.setSelectedChannel = function(channel) {
      console.log("channel is: ", channel);
      var i = 0;

      if ( this.channelList.indexOf(channel) > -1 ) {
        this.selectedChannel = channel;
        $http.get(channel.url).
        success(function (data) {
          // Empty out the old array of programs by setting length to 0
          // http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
          programData.length = 0;

          for ( i; i < data[0].data.children.length; i++ ) {
            programData.push(data[0].data.children[i].data);
          }
        });
      }
    };

    this.setData = function(data) {
      this.selectedData = data;
      this.programView = data;
    };

  });
