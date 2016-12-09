module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day1" ).click();
  });

  casper.wait(400, function(){
   casper.evaluate(function () {
    $( "#posadas__button1" ).click();
    });

});

    casper.wait(400);


  console.log('onReady-modal1.js has run for: ', vp.name);
};
