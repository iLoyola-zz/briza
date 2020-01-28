casper.test.begin('Visual regression test for the main layout.', function(test) {

  casper.loadPath('layouts/main')

  .loadFixture('main')

  .then(function () {
    phantomcss.screenshot('.main', 'main layout');
  })

  .run(function () {
    test.done();
  });

});
