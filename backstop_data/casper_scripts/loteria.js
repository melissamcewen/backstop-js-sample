module.exports = function (casper, scenario, vp) {

    
    casper.wait(100, function(){
        casper.evaluate(function () {
            $( "#loteria-open" ).click();
        });
    });
    
    casper.wait(500, function(){
        casper.evaluate(function () {
            $( ".draw" ).click();
        });
        casper.wait(500);
    });



};
