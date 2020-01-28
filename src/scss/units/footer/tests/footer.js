casper.test.begin('Visual regression test for the footer unit.', function(test) {

  casper.loadPath('units/footer')

  .loadFixture('footer')

  .then(function () {
    phantomcss.screenshot('.footer', 'footer unit');
  })

  .run(function () {
    test.done();
  });

});
