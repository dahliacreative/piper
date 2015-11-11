// --------------------------------------------------------------------------
// exampleModule.js
// --------------------------------------------------------------------------
// Brief explanation of what the module is used for.
// --------------------------------------------------------------------------

RN.exampleModule = function() {

  'use strict';

  function doSomething() {
    console.log('I did something!');
  }

  function init() {
    byBehaviour('selector').on('click', doSomething);
  }

  return {
    init: init
  };

}();