module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day2" ).click();
  });

  casper.wait(400, function(){
   casper.evaluate(function () {
    $( "#posadas__button2" ).click();
    });
casper.wait(1000);
});

   


  console.log('onReady-modal1.js has run for: ', vp.name);
};
