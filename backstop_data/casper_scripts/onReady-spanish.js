module.exports = function (casper, scenario, vp) {
  casper.evaluate(function () {
    // Change to Spanish
    $( ".lang" ).click();
  });
  console.log('onReady-spanish.js has run for: ', vp.name);
};
