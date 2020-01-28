casper.test.begin('Visual regression test for the button module.', function(test) {

  casper.loadPath('modules/button')

  .loadFixture('button')

  .then(function () {
    phantomcss.screenshot('.button', 'button module');
  })

  .run(function () {
    test.done();
  });

});
