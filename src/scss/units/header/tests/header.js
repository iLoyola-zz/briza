casper.test.begin('Visual regression test for the header unit.', function(test) {

  casper.loadPath('units/header')

  .loadFixture('header')

  .then(function () {
    phantomcss.screenshot('.header', 'header unit');
  })

  .run(function () {
    test.done();
  });

});
