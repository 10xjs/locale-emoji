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

  it('converts LCIDs to flag emojis', function() {
    Object.keys(tests).forEach(function(from) {
      expect(localeEmoji(from)).to.equal(tests[from]);
    });
  });
});
