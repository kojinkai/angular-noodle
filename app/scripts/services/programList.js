'use strict';

angular.module('angularDemoApp')
  .service('ProgramList', function ($http) {
    
    // Private variables here

    // Public API here

    var channelData = [],
        programData = [];

    (function () {
      var i = 0;

      $http.get('/scripts/json/channels.json').
      success(function (data) {
        for ( i; i < data.length; i++ ) {
          channelData.push(data[i]);
        }
      });
    })();

    this.channelList = channelData;
    this.programTitles = programData;
    this.selectedChannel = null;

    this.setSelectedChannel = function(channel) {
      console.log('our selected channel is: ', channel);
      var i = 0;

      if ( this.channelList.indexOf(channel) > -1 ) {
        this.selectedChannel = channel;
        $http.get(channel.url).
        success(function (data) {
          // Empty out the old array of
          // programs | http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
          programData.length = 0;

          console.log('raw data: ', data[0].data.children, '\n\n');
          for ( i; i < data[0].data.children.length; i++ ) {
            programData.push(data[0].data.children[i].data);
          }
          console.log('our new object: ', programData);
        });
      }
    };

  });
