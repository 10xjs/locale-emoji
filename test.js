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
    'sk_Latin_SK': '🇸🇰',
  };

  Object.keys(tests).forEach(function(from) {
    var to = tests[from];

    it(from + ' -> ' + to, function() {
      expect(localeEmoji(from)).to.equal(to);
    });
  });

  it('should return a empty string for invalid input', function() {
    expect(localeEmoji('potato')).to.equal('');
  });
});
