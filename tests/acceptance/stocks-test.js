import { test } from 'qunit';
import moduleForAcceptance from 'myapp/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | stocks');

test('visiting /stocks', function(assert) {
  visit('/stocks');

  andThen(function() {
    assert.equal(currentURL(), '/stocks');
  });
});

test('should link to information about the stock.', function (assert) {
  visit('/stocks');
  click('a.stock-item');
    
  andThen(function () {
    assert.equal(currentURL(), '/stocks/1', "should navigate to stock detail page");
  });
});

test('should filter the list of stocks by name.', function (assert) {
    visit('/stocks');
    fillIn('.search-container input', 'Apple');
    keyEvent('.list-filter input', 'keyup', 69);

    andThen(function () {
        assert.equal(this.$('a.stock-item').length, 1, "should show 1 stock");
        assert.equal(this.$("a.stock-item:contains('Apple')").length, 1, "should contain 1 stock with name Apple");
    });
});

test('should filter the list of stocks by abbreviation.', function (assert) {
    visit('/stocks');
    fillIn('.search-container input', 'APPL');
    keyEvent('.list-filter input', 'keyup', 69);

    andThen(function () {
        assert.equal(this.$('a.stock-item').length, 1, "should show 1 stock");
        assert.equal(this.$("a.stock-item:contains('Apple')").length, 1, "should contain 1 stock with name Apple");
    });
});
