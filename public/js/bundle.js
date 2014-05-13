(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {
  return {
    height: 200, 
    weight: 600
  }
}
},{}],2:[function(require,module,exports){
//require('./libs.js');

model = require('./models/BarModel.js');
collection = require('./collections/FooCollection.js');
view = require('./views/IdealView.js');
router = require('./routers/MicroRouter');

// Next we can work with these variables us usually.
},{"./collections/FooCollection.js":1,"./models/BarModel.js":3,"./routers/MicroRouter":4,"./views/IdealView.js":5}],3:[function(require,module,exports){
module.exports = function () {
  this.test = 22;
  this.isValid = false;
}
},{}],4:[function(require,module,exports){
module.exports = function (href) {
  return document.location = href;
}
},{}],5:[function(require,module,exports){
module.exports = function (elem) {
  return $('body').append(elem);
}
},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1zaHR5clxcQXBwRGF0YVxcUm9hbWluZ1xcbnBtXFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L215X3Byb2plY3RzL2dydW50L2dydW50VGVzdC9hc3NldHMvanMvY29sbGVjdGlvbnMvRm9vQ29sbGVjdGlvbi5qcyIsIkQ6L215X3Byb2plY3RzL2dydW50L2dydW50VGVzdC9hc3NldHMvanMvaW5kZXguanMiLCJEOi9teV9wcm9qZWN0cy9ncnVudC9ncnVudFRlc3QvYXNzZXRzL2pzL21vZGVscy9CYXJNb2RlbC5qcyIsIkQ6L215X3Byb2plY3RzL2dydW50L2dydW50VGVzdC9hc3NldHMvanMvcm91dGVycy9NaWNyb1JvdXRlci5qcyIsIkQ6L215X3Byb2plY3RzL2dydW50L2dydW50VGVzdC9hc3NldHMvanMvdmlld3MvSWRlYWxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGhlaWdodDogMjAwLCBcclxuICAgIHdlaWdodDogNjAwXHJcbiAgfVxyXG59IiwiLy9yZXF1aXJlKCcuL2xpYnMuanMnKTtcclxuXHJcbm1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbHMvQmFyTW9kZWwuanMnKTtcclxuY29sbGVjdGlvbiA9IHJlcXVpcmUoJy4vY29sbGVjdGlvbnMvRm9vQ29sbGVjdGlvbi5qcycpO1xyXG52aWV3ID0gcmVxdWlyZSgnLi92aWV3cy9JZGVhbFZpZXcuanMnKTtcclxucm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXJzL01pY3JvUm91dGVyJyk7XHJcblxyXG4vLyBOZXh0IHdlIGNhbiB3b3JrIHdpdGggdGhlc2UgdmFyaWFibGVzIHVzIHVzdWFsbHkuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy50ZXN0ID0gMjI7XHJcbiAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChocmVmKSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uID0gaHJlZjtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuICByZXR1cm4gJCgnYm9keScpLmFwcGVuZChlbGVtKTtcclxufSJdfQ==
