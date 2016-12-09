module.exports = function (casper, scenario, vp) {

  casper.evaluate(function () {
    $( "#day9" ).click();
  });

    casper.wait(400);


};
