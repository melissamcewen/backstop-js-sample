module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day4" ).click();
  });

  casper.wait(400, function(){
   casper.evaluate(function () {
    $( "#posadas__button4" ).click();
    });
casper.wait(1000);
});

   
};
