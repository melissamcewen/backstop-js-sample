module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day6" ).click();
  });

  casper.wait(400, function(){
   casper.evaluate(function () {
    $( "#posadas__button6" ).click();
    });
casper.wait(1000);
});

   


};
