casper.test.begin('Visual regression test for the heading module.', function(test) {

  casper.loadPath('modules/heading')

  .loadFixture('heading')

  .then(function () {
    phantomcss.screenshot('.heading', 'heading module');
  })

  .run(function () {
    test.done();
  });

});
