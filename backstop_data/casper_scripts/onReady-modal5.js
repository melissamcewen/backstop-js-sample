module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day5" ).click();
  });

  casper.wait(400, function(){
   casper.evaluate(function () {
    $( "#posadas__button5" ).click();
    });
casper.wait(1000);
});

   

};
