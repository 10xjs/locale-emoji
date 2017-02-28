var expect = require('chai').expect;
var localeEmoji = require('.');

describe('localeEmoji', function() {
  var tests = {
    'de': '🇩🇪',
    'de-DE': '🇩🇪',
    'de_DE': '🇩🇪',
    'de-CH': '🇨🇭',
    'en': '🇬🇧',
    'EN': '🇬🇧',
    'en-GB': '🇬🇧',
    'en-US': '🇺🇸',
    'EN-US': '🇺🇸',
    'EN-us': '🇺🇸',
    'en-us': '🇺🇸',
  };

  Object.keys(tests).forEach(function(from) {
    var to = tests[from];
    it('converts "' + from + '" to ' + to, function() {
      expect(localeEmoji(from)).to.equal(to);
    });
  });
});