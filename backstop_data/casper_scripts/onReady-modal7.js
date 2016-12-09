module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day7" ).click();
  });

  casper.wait(400, function(){
   casper.evaluate(function () {
    $( "#posadas__button7" ).click();
    });
casper.wait(1000);
});

 };
