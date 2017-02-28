var expect = require('chai').expect;
var localeEmoji = require('.');

describe('localeEmoji', function() {
  var tests = {
    'de': '🇩🇪',
    'de-DE': '🇩🇪',
    'de_DE': '🇩🇪',
    'de-CH': '🇨🇭',
    'en': '🇬🇧',
    'en-GB': '🇬🇧',
    'en-US': '🇺🇸',
  };

  Object.keys(tests).forEach(function(from) {
    var to = tests[from];
    it('converts "' + from + '" to ' + to, function() {
      expect(localeEmoji(from)).to.equal(to);
    });
  });
});