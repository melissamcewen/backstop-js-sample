module.exports = function(casper, scenario, vp) {

//this site has an age gate (it's for a booze brand, so let's get past it)    
  casper.thenOpen(scenario.url, function(){
     if (this.exists('form.age-gate__form')) {
       this.fill('form.age-gate__form',{
          'month': '06',
          'day': '06',
          'year': '1986',
          'locale': 'en'
       }, true);
     };

     
  });

};