module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day3" ).click();
  });

  casper.wait(400, function(){
   casper.evaluate(function () {
    $( "#posadas__button3" ).click();
    });
casper.wait(1000);
});

   


  console.log('onReady-modal1.js has run for: ', vp.name);
};
