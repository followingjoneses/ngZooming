// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope, $timeout) {
  $scope.box =
    {
      top: "400px",
      left: "400px",
      wide: "50px",
      high: "50px",
      upLeft: {x: "-5px", y: "-5px"},
      upRight: {x: "45px", y: "-5px"},
      bottomLeft: {x: "-5px", y: "45px"},
      bottomRight: {x: "45px", y: "45px"}
    };

  $scope.move = function(event, box, position) {
    event = event ? event : window.event;
    var point = event.srcElement ? event.srcElement : event.target,
      styleHeight = point.parentNode.style.height.toString(),
      styleWidth = point.parentNode.style.width.toString(),
      styleLeft = point.parentNode.style.left.toString(),
      styleTop = point.parentNode.style.top.toString(),
      boxHigh = box.high.toString(),
      boxWide = box.wide.toString(),
      boxLeft = box.left.toString(),
      boxTop = box.top.toString();

    $timeout(function() {
      var deltaX = 0,
        deltaY = 0;
      ionic.onGesture('dragstart drag dragend', function(e) {
        var changedBoxHigh = 0,
          changedBoxWide = 0,
          changedBoxLeft = 0,
          changedBoxTop = 0,
          changedStyleHigh = 0,
          changedStyleWide = 0,
          changedStyleLeft = 0,
          changedStyleTop = 0,
          minLength = 20,
          parent = e.target.parentNode,
          children = parent.childNodes;

        e.gesture.srcEvent.preventDefault();
        e.gesture.preventDefault();
        switch (e.type) {
          case 'drag':
            deltaX = e.gesture.deltaX;
            deltaY = e.gesture.deltaY;
            break;
        }

        switch (position) {
          case 'upLeft':
            changedBoxHigh = parseInt(boxHigh.substring(0,boxHigh.length-2)) - deltaY;
            changedBoxWide = parseInt(boxWide.substring(0,boxWide.length-2)) - deltaX;
            changedBoxTop = parseInt(boxTop.substring(0,boxTop.length-2)) + deltaY;
            changedBoxLeft = parseInt(boxLeft.substring(0,boxLeft.length-2)) + deltaX;
            changedStyleHigh = parseInt(styleHeight.substring(0,styleHeight.length-2)) - deltaY;
            changedStyleWide = parseInt(styleWidth.substring(0,styleWidth.length-2)) - deltaX;
            changedStyleTop = parseInt(styleTop.substring(0,styleTop.length-2)) + deltaY;
            changedStyleLeft = parseInt(styleLeft.substring(0,styleLeft.length-2)) + deltaX;

            if(changedBoxHigh<minLength && changedStyleHigh<minLength){
              changedBoxHigh = minLength;
              changedStyleHigh = minLength;
              changedBoxTop = parseInt(boxTop.substring(0,boxTop.length-2)) + (minLength - boxHigh);
              changedStyleTop = parseInt(styleTop.substring(0,styleTop.length-2)) + (minLength - styleHeight);
            }
            if(changedBoxWide<minLength && changedStyleWide<minLength){
              changedBoxWide = minLength;
              changedStyleWide = minLength;
              changedBoxLeft = parseInt(boxLeft.substring(0,boxLeft.length-2)) + (minLength - boxWide);
              changedStyleLeft = parseInt(styleLeft.substring(0,styleLeft.length-2)) + (minLength - styleWidth);
            }

            parent.style.left = changedStyleLeft + "px";
            parent.style.top = changedStyleTop + "px";
            parent.style.height = changedStyleHigh + "px";
            parent.style.width = changedStyleWide + "px";
            children[3].style.left = changedStyleWide - 5 + "px";
            children[5].style.top = changedStyleHigh - 5 + "px";
            children[7].style.left = changedStyleWide - 5 + "px";
            children[7].style.top = changedStyleHigh - 5 + "px";

            box.left = changedBoxLeft + "px";
            box.top = changedBoxTop + "px";
            box.high = changedBoxHigh + "px";
            box.wide = changedBoxWide + "px";
            box.upRight.x = changedBoxWide - 5 + "px";
            box.bottomLeft.y = changedBoxHigh - 5 + "px";
            box.bottomRight.x = changedBoxWide - 5 + "px";
            box.bottomRight.y = changedBoxHigh - 5 + "px";
            break;
          case 'upRight':
            changedBoxHigh = parseInt(boxHigh.substring(0,boxHigh.length-2)) - deltaY;
            changedBoxWide = parseInt(boxWide.substring(0,boxWide.length-2)) + deltaX;
            changedBoxTop = parseInt(boxTop.substring(0,boxTop.length-2)) + deltaY;
            changedStyleHigh = parseInt(styleHeight.substring(0,styleHeight.length-2)) - deltaY;
            changedStyleWide = parseInt(styleWidth.substring(0,styleWidth.length-2)) + deltaX;
            changedStyleTop = parseInt(styleTop.substring(0,styleTop.length-2)) + deltaY;

            if(changedBoxHigh<minLength && changedStyleHigh<minLength){
              changedBoxHigh = minLength;
              changedStyleHigh = minLength;
              changedBoxTop = parseInt(boxTop.substring(0,boxTop.length-2)) + (minLength - boxHigh);
              changedStyleTop = parseInt(styleTop.substring(0,styleTop.length-2)) + (minLength - styleHeight);
            }
            if(changedBoxWide<minLength && changedStyleWide<minLength){
              changedBoxWide = minLength;
              changedStyleWide = minLength;
            }

            parent.style.top = changedStyleTop + "px";
            parent.style.height = changedStyleHigh + "px";
            parent.style.width = changedStyleWide + "px";
            children[3].style.left = changedStyleWide - 5 + "px";
            children[5].style.top = changedStyleHigh - 5 + "px";
            children[7].style.left = changedStyleWide - 5 + "px";
            children[7].style.top = changedStyleHigh - 5 + "px";

            box.top = changedBoxTop + "px";
            box.high = changedBoxHigh + "px";
            box.wide = changedBoxWide + "px";
            box.upRight.x = changedBoxWide - 5 + "px";
            box.bottomLeft.y = changedBoxHigh - 5 + "px";
            box.bottomRight.x = changedBoxWide - 5 + "px";
            box.bottomRight.y = changedBoxHigh - 5 + "px";
            break;
          case 'bottomLeft':
            changedBoxHigh = parseInt(boxHigh.substring(0,boxHigh.length-2)) + deltaY;
            changedBoxWide = parseInt(boxWide.substring(0,boxWide.length-2)) - deltaX;
            changedBoxLeft = parseInt(boxLeft.substring(0,boxLeft.length-2)) + deltaX;
            changedStyleHigh = parseInt(styleHeight.substring(0,styleHeight.length-2)) + deltaY;
            changedStyleWide = parseInt(styleWidth.substring(0,styleWidth.length-2)) - deltaX;
            changedStyleLeft = parseInt(styleLeft.substring(0,styleLeft.length-2)) + deltaX;

            if(changedBoxHigh<minLength && changedStyleHigh<minLength){
              changedBoxHigh = minLength;
              changedStyleHigh = minLength;
            }
            if(changedBoxWide<minLength && changedStyleWide<minLength){
              changedBoxWide = minLength;
              changedStyleWide = minLength;
              changedBoxLeft = parseInt(boxLeft.substring(0,boxLeft.length-2)) + (minLength - boxWide);
              changedStyleLeft = parseInt(styleLeft.substring(0,styleLeft.length-2)) + (minLength - styleWidth);
            }

            parent.style.left = changedStyleLeft + "px";
            parent.style.height = changedStyleHigh + "px";
            parent.style.width = changedStyleWide + "px";
            children[3].style.left = changedStyleWide - 5 + "px";
            children[5].style.top = changedStyleHigh - 5 + "px";
            children[7].style.left = changedStyleWide - 5 + "px";
            children[7].style.top = changedStyleHigh - 5 + "px";

            box.left = changedBoxLeft + "px";
            box.high = changedBoxHigh + "px";
            box.wide = changedBoxWide + "px";
            box.upRight.x = changedBoxWide - 5 + "px";
            box.bottomLeft.y = changedBoxHigh - 5 + "px";
            box.bottomRight.x = changedBoxWide - 5 + "px";
            box.bottomRight.y = changedBoxHigh - 5 + "px";
            break;
          case 'bottomRight':
            changedBoxHigh = parseInt(boxHigh.substring(0,boxHigh.length-2)) + deltaY;
            changedBoxWide = parseInt(boxWide.substring(0,boxWide.length-2)) + deltaX;
            changedStyleHigh = parseInt(styleHeight.substring(0,styleHeight.length-2)) + deltaY;
            changedStyleWide = parseInt(styleWidth.substring(0,styleWidth.length-2)) + deltaX;

            if(changedBoxHigh<minLength && changedStyleHigh<minLength){
              changedBoxHigh = minLength;
              changedStyleHigh = minLength;
            }
            if(changedBoxWide<minLength && changedStyleWide<minLength){
              changedBoxWide = minLength;
              changedStyleWide = minLength;
            }

            parent.style.height = changedStyleHigh + "px";
            parent.style.width = changedStyleWide + "px";
            children[3].style.left = changedStyleWide - 5 + "px";
            children[5].style.top = changedStyleHigh - 5 + "px";
            children[7].style.left = changedStyleWide - 5 + "px";
            children[7].style.top = changedStyleHigh - 5 + "px";

            box.high = changedBoxHigh + "px";
            box.wide = changedBoxWide + "px";
            box.upRight.x = changedBoxWide - 5 + "px";
            box.bottomLeft.y = changedBoxHigh - 5 + "px";
            box.bottomRight.x = changedBoxWide - 5 + "px";
            box.bottomRight.y = changedBoxHigh - 5 + "px";
            break;
        }
      }, point);
    });
  }
});
