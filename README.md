# Unicode v4.0.1 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v4.0.1’s categories, scripts, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).

## Installation

```bash
npm install unicode-4.0.1 --save-dev
```

**Note:** _unicode-4.0.1_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
var regenerate = require('regenerate');
var set = regenerate()
  .add(require('unicode-6.3.0/scripts/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/scripts/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// var regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
var codePoints = require('unicode-4.0.1/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
var symbols = require('unicode-4.0.1/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
var regex = require('unicode-4.0.1/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
var category = require('unicode-4.0.1/categories')[ 0x41 ];
// Get an array of all code points with the `Bidi_ON` bidi property:
var on = require('unicode-4.0.1/bidi/ON/code-points');
// Get the directionality of a given code point:
var directionality = require('unicode-4.0.1/bidi')[ 0x41 ];

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, and scripts is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v4.0.1:

```js
// properties:

require('unicode-4.0.1/properties/Any/code-points');
require('unicode-4.0.1/properties/Any/symbols');
require('unicode-4.0.1/properties/Any/regex');

require('unicode-4.0.1/properties/Assigned/code-points');
require('unicode-4.0.1/properties/Assigned/symbols');
require('unicode-4.0.1/properties/Assigned/regex');

require('unicode-4.0.1/properties/ASCII/code-points');
require('unicode-4.0.1/properties/ASCII/symbols');
require('unicode-4.0.1/properties/ASCII/regex');

require('unicode-4.0.1/properties/White_Space/code-points');
require('unicode-4.0.1/properties/White_Space/symbols');
require('unicode-4.0.1/properties/White_Space/regex');

require('unicode-4.0.1/properties/Bidi_Control/code-points');
require('unicode-4.0.1/properties/Bidi_Control/symbols');
require('unicode-4.0.1/properties/Bidi_Control/regex');

require('unicode-4.0.1/properties/Join_Control/code-points');
require('unicode-4.0.1/properties/Join_Control/symbols');
require('unicode-4.0.1/properties/Join_Control/regex');

require('unicode-4.0.1/properties/Dash/code-points');
require('unicode-4.0.1/properties/Dash/symbols');
require('unicode-4.0.1/properties/Dash/regex');

require('unicode-4.0.1/properties/Hyphen/code-points');
require('unicode-4.0.1/properties/Hyphen/symbols');
require('unicode-4.0.1/properties/Hyphen/regex');

require('unicode-4.0.1/properties/Quotation_Mark/code-points');
require('unicode-4.0.1/properties/Quotation_Mark/symbols');
require('unicode-4.0.1/properties/Quotation_Mark/regex');

require('unicode-4.0.1/properties/Terminal_Punctuation/code-points');
require('unicode-4.0.1/properties/Terminal_Punctuation/symbols');
require('unicode-4.0.1/properties/Terminal_Punctuation/regex');

require('unicode-4.0.1/properties/Other_Math/code-points');
require('unicode-4.0.1/properties/Other_Math/symbols');
require('unicode-4.0.1/properties/Other_Math/regex');

require('unicode-4.0.1/properties/Hex_Digit/code-points');
require('unicode-4.0.1/properties/Hex_Digit/symbols');
require('unicode-4.0.1/properties/Hex_Digit/regex');

require('unicode-4.0.1/properties/ASCII_Hex_Digit/code-points');
require('unicode-4.0.1/properties/ASCII_Hex_Digit/symbols');
require('unicode-4.0.1/properties/ASCII_Hex_Digit/regex');

require('unicode-4.0.1/properties/Other_Alphabetic/code-points');
require('unicode-4.0.1/properties/Other_Alphabetic/symbols');
require('unicode-4.0.1/properties/Other_Alphabetic/regex');

require('unicode-4.0.1/properties/Ideographic/code-points');
require('unicode-4.0.1/properties/Ideographic/symbols');
require('unicode-4.0.1/properties/Ideographic/regex');

require('unicode-4.0.1/properties/Diacritic/code-points');
require('unicode-4.0.1/properties/Diacritic/symbols');
require('unicode-4.0.1/properties/Diacritic/regex');

require('unicode-4.0.1/properties/Extender/code-points');
require('unicode-4.0.1/properties/Extender/symbols');
require('unicode-4.0.1/properties/Extender/regex');

require('unicode-4.0.1/properties/Other_Lowercase/code-points');
require('unicode-4.0.1/properties/Other_Lowercase/symbols');
require('unicode-4.0.1/properties/Other_Lowercase/regex');

require('unicode-4.0.1/properties/Other_Uppercase/code-points');
require('unicode-4.0.1/properties/Other_Uppercase/symbols');
require('unicode-4.0.1/properties/Other_Uppercase/regex');

require('unicode-4.0.1/properties/Noncharacter_Code_Point/code-points');
require('unicode-4.0.1/properties/Noncharacter_Code_Point/symbols');
require('unicode-4.0.1/properties/Noncharacter_Code_Point/regex');

require('unicode-4.0.1/properties/Other_Grapheme_Extend/code-points');
require('unicode-4.0.1/properties/Other_Grapheme_Extend/symbols');
require('unicode-4.0.1/properties/Other_Grapheme_Extend/regex');

require('unicode-4.0.1/properties/Grapheme_Link/code-points');
require('unicode-4.0.1/properties/Grapheme_Link/symbols');
require('unicode-4.0.1/properties/Grapheme_Link/regex');

require('unicode-4.0.1/properties/IDS_Binary_Operator/code-points');
require('unicode-4.0.1/properties/IDS_Binary_Operator/symbols');
require('unicode-4.0.1/properties/IDS_Binary_Operator/regex');

require('unicode-4.0.1/properties/IDS_Trinary_Operator/code-points');
require('unicode-4.0.1/properties/IDS_Trinary_Operator/symbols');
require('unicode-4.0.1/properties/IDS_Trinary_Operator/regex');

require('unicode-4.0.1/properties/Radical/code-points');
require('unicode-4.0.1/properties/Radical/symbols');
require('unicode-4.0.1/properties/Radical/regex');

require('unicode-4.0.1/properties/Unified_Ideograph/code-points');
require('unicode-4.0.1/properties/Unified_Ideograph/symbols');
require('unicode-4.0.1/properties/Unified_Ideograph/regex');

require('unicode-4.0.1/properties/Other_Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.1/properties/Other_Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.1/properties/Other_Default_Ignorable_Code_Point/regex');

require('unicode-4.0.1/properties/Deprecated/code-points');
require('unicode-4.0.1/properties/Deprecated/symbols');
require('unicode-4.0.1/properties/Deprecated/regex');

require('unicode-4.0.1/properties/Soft_Dotted/code-points');
require('unicode-4.0.1/properties/Soft_Dotted/symbols');
require('unicode-4.0.1/properties/Soft_Dotted/regex');

require('unicode-4.0.1/properties/Logical_Order_Exception/code-points');
require('unicode-4.0.1/properties/Logical_Order_Exception/symbols');
require('unicode-4.0.1/properties/Logical_Order_Exception/regex');

require('unicode-4.0.1/properties/Other_ID_Start/code-points');
require('unicode-4.0.1/properties/Other_ID_Start/symbols');
require('unicode-4.0.1/properties/Other_ID_Start/regex');

require('unicode-4.0.1/properties/STerm/code-points');
require('unicode-4.0.1/properties/STerm/symbols');
require('unicode-4.0.1/properties/STerm/regex');

require('unicode-4.0.1/properties/Variation_Selector/code-points');
require('unicode-4.0.1/properties/Variation_Selector/symbols');
require('unicode-4.0.1/properties/Variation_Selector/regex');

require('unicode-4.0.1/properties/Math/code-points');
require('unicode-4.0.1/properties/Math/symbols');
require('unicode-4.0.1/properties/Math/regex');

require('unicode-4.0.1/properties/Alphabetic/code-points');
require('unicode-4.0.1/properties/Alphabetic/symbols');
require('unicode-4.0.1/properties/Alphabetic/regex');

require('unicode-4.0.1/properties/Lowercase/code-points');
require('unicode-4.0.1/properties/Lowercase/symbols');
require('unicode-4.0.1/properties/Lowercase/regex');

require('unicode-4.0.1/properties/Uppercase/code-points');
require('unicode-4.0.1/properties/Uppercase/symbols');
require('unicode-4.0.1/properties/Uppercase/regex');

require('unicode-4.0.1/properties/ID_Start/code-points');
require('unicode-4.0.1/properties/ID_Start/symbols');
require('unicode-4.0.1/properties/ID_Start/regex');

require('unicode-4.0.1/properties/ID_Continue/code-points');
require('unicode-4.0.1/properties/ID_Continue/symbols');
require('unicode-4.0.1/properties/ID_Continue/regex');

require('unicode-4.0.1/properties/XID_Start/code-points');
require('unicode-4.0.1/properties/XID_Start/symbols');
require('unicode-4.0.1/properties/XID_Start/regex');

require('unicode-4.0.1/properties/XID_Continue/code-points');
require('unicode-4.0.1/properties/XID_Continue/symbols');
require('unicode-4.0.1/properties/XID_Continue/regex');

require('unicode-4.0.1/properties/Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.1/properties/Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.1/properties/Default_Ignorable_Code_Point/regex');

require('unicode-4.0.1/properties/Grapheme_Extend/code-points');
require('unicode-4.0.1/properties/Grapheme_Extend/symbols');
require('unicode-4.0.1/properties/Grapheme_Extend/regex');

require('unicode-4.0.1/properties/Grapheme_Base/code-points');
require('unicode-4.0.1/properties/Grapheme_Base/symbols');
require('unicode-4.0.1/properties/Grapheme_Base/regex');

// categories:

require('unicode-4.0.1/categories')[ codePoint ]; // lookup array

require('unicode-4.0.1/categories/Cc/code-points');
require('unicode-4.0.1/categories/Cc/symbols');
require('unicode-4.0.1/categories/Cc/regex');

require('unicode-4.0.1/categories/C/code-points');
require('unicode-4.0.1/categories/C/symbols');
require('unicode-4.0.1/categories/C/regex');

require('unicode-4.0.1/categories/Zs/code-points');
require('unicode-4.0.1/categories/Zs/symbols');
require('unicode-4.0.1/categories/Zs/regex');

require('unicode-4.0.1/categories/Z/code-points');
require('unicode-4.0.1/categories/Z/symbols');
require('unicode-4.0.1/categories/Z/regex');

require('unicode-4.0.1/categories/Po/code-points');
require('unicode-4.0.1/categories/Po/symbols');
require('unicode-4.0.1/categories/Po/regex');

require('unicode-4.0.1/categories/P/code-points');
require('unicode-4.0.1/categories/P/symbols');
require('unicode-4.0.1/categories/P/regex');

require('unicode-4.0.1/categories/Sc/code-points');
require('unicode-4.0.1/categories/Sc/symbols');
require('unicode-4.0.1/categories/Sc/regex');

require('unicode-4.0.1/categories/S/code-points');
require('unicode-4.0.1/categories/S/symbols');
require('unicode-4.0.1/categories/S/regex');

require('unicode-4.0.1/categories/Ps/code-points');
require('unicode-4.0.1/categories/Ps/symbols');
require('unicode-4.0.1/categories/Ps/regex');

require('unicode-4.0.1/categories/Pe/code-points');
require('unicode-4.0.1/categories/Pe/symbols');
require('unicode-4.0.1/categories/Pe/regex');

require('unicode-4.0.1/categories/Sm/code-points');
require('unicode-4.0.1/categories/Sm/symbols');
require('unicode-4.0.1/categories/Sm/regex');

require('unicode-4.0.1/categories/Pd/code-points');
require('unicode-4.0.1/categories/Pd/symbols');
require('unicode-4.0.1/categories/Pd/regex');

require('unicode-4.0.1/categories/Nd/code-points');
require('unicode-4.0.1/categories/Nd/symbols');
require('unicode-4.0.1/categories/Nd/regex');

require('unicode-4.0.1/categories/N/code-points');
require('unicode-4.0.1/categories/N/symbols');
require('unicode-4.0.1/categories/N/regex');

require('unicode-4.0.1/categories/Lu/code-points');
require('unicode-4.0.1/categories/Lu/symbols');
require('unicode-4.0.1/categories/Lu/regex');

require('unicode-4.0.1/categories/L/code-points');
require('unicode-4.0.1/categories/L/symbols');
require('unicode-4.0.1/categories/L/regex');

require('unicode-4.0.1/categories/LC/code-points');
require('unicode-4.0.1/categories/LC/symbols');
require('unicode-4.0.1/categories/LC/regex');

require('unicode-4.0.1/categories/Sk/code-points');
require('unicode-4.0.1/categories/Sk/symbols');
require('unicode-4.0.1/categories/Sk/regex');

require('unicode-4.0.1/categories/Pc/code-points');
require('unicode-4.0.1/categories/Pc/symbols');
require('unicode-4.0.1/categories/Pc/regex');

require('unicode-4.0.1/categories/Ll/code-points');
require('unicode-4.0.1/categories/Ll/symbols');
require('unicode-4.0.1/categories/Ll/regex');

require('unicode-4.0.1/categories/So/code-points');
require('unicode-4.0.1/categories/So/symbols');
require('unicode-4.0.1/categories/So/regex');

require('unicode-4.0.1/categories/Pi/code-points');
require('unicode-4.0.1/categories/Pi/symbols');
require('unicode-4.0.1/categories/Pi/regex');

require('unicode-4.0.1/categories/Cf/code-points');
require('unicode-4.0.1/categories/Cf/symbols');
require('unicode-4.0.1/categories/Cf/regex');

require('unicode-4.0.1/categories/No/code-points');
require('unicode-4.0.1/categories/No/symbols');
require('unicode-4.0.1/categories/No/regex');

require('unicode-4.0.1/categories/Pf/code-points');
require('unicode-4.0.1/categories/Pf/symbols');
require('unicode-4.0.1/categories/Pf/regex');

require('unicode-4.0.1/categories/Lo/code-points');
require('unicode-4.0.1/categories/Lo/symbols');
require('unicode-4.0.1/categories/Lo/regex');

require('unicode-4.0.1/categories/Lt/code-points');
require('unicode-4.0.1/categories/Lt/symbols');
require('unicode-4.0.1/categories/Lt/regex');

require('unicode-4.0.1/categories/Cn/code-points');
require('unicode-4.0.1/categories/Cn/symbols');
require('unicode-4.0.1/categories/Cn/regex');

require('unicode-4.0.1/categories/Lm/code-points');
require('unicode-4.0.1/categories/Lm/symbols');
require('unicode-4.0.1/categories/Lm/regex');

require('unicode-4.0.1/categories/Mn/code-points');
require('unicode-4.0.1/categories/Mn/symbols');
require('unicode-4.0.1/categories/Mn/regex');

require('unicode-4.0.1/categories/M/code-points');
require('unicode-4.0.1/categories/M/symbols');
require('unicode-4.0.1/categories/M/regex');

require('unicode-4.0.1/categories/Me/code-points');
require('unicode-4.0.1/categories/Me/symbols');
require('unicode-4.0.1/categories/Me/regex');

require('unicode-4.0.1/categories/Mc/code-points');
require('unicode-4.0.1/categories/Mc/symbols');
require('unicode-4.0.1/categories/Mc/regex');

require('unicode-4.0.1/categories/Nl/code-points');
require('unicode-4.0.1/categories/Nl/symbols');
require('unicode-4.0.1/categories/Nl/regex');

require('unicode-4.0.1/categories/Zl/code-points');
require('unicode-4.0.1/categories/Zl/symbols');
require('unicode-4.0.1/categories/Zl/regex');

require('unicode-4.0.1/categories/Zp/code-points');
require('unicode-4.0.1/categories/Zp/symbols');
require('unicode-4.0.1/categories/Zp/regex');

require('unicode-4.0.1/categories/Cs/code-points');
require('unicode-4.0.1/categories/Cs/symbols');
require('unicode-4.0.1/categories/Cs/regex');

require('unicode-4.0.1/categories/Co/code-points');
require('unicode-4.0.1/categories/Co/symbols');
require('unicode-4.0.1/categories/Co/regex');

// bidi:

require('unicode-4.0.1/bidi')[ codePoint ]; // lookup array

require('unicode-4.0.1/bidi/BN/code-points');
require('unicode-4.0.1/bidi/BN/symbols');
require('unicode-4.0.1/bidi/BN/regex');

require('unicode-4.0.1/bidi/S/code-points');
require('unicode-4.0.1/bidi/S/symbols');
require('unicode-4.0.1/bidi/S/regex');

require('unicode-4.0.1/bidi/B/code-points');
require('unicode-4.0.1/bidi/B/symbols');
require('unicode-4.0.1/bidi/B/regex');

require('unicode-4.0.1/bidi/WS/code-points');
require('unicode-4.0.1/bidi/WS/symbols');
require('unicode-4.0.1/bidi/WS/regex');

require('unicode-4.0.1/bidi/ON/code-points');
require('unicode-4.0.1/bidi/ON/symbols');
require('unicode-4.0.1/bidi/ON/regex');

require('unicode-4.0.1/bidi/ET/code-points');
require('unicode-4.0.1/bidi/ET/symbols');
require('unicode-4.0.1/bidi/ET/regex');

require('unicode-4.0.1/bidi/ES/code-points');
require('unicode-4.0.1/bidi/ES/symbols');
require('unicode-4.0.1/bidi/ES/regex');

require('unicode-4.0.1/bidi/CS/code-points');
require('unicode-4.0.1/bidi/CS/symbols');
require('unicode-4.0.1/bidi/CS/regex');

require('unicode-4.0.1/bidi/EN/code-points');
require('unicode-4.0.1/bidi/EN/symbols');
require('unicode-4.0.1/bidi/EN/regex');

require('unicode-4.0.1/bidi/L/code-points');
require('unicode-4.0.1/bidi/L/symbols');
require('unicode-4.0.1/bidi/L/regex');

require('unicode-4.0.1/bidi/NSM/code-points');
require('unicode-4.0.1/bidi/NSM/symbols');
require('unicode-4.0.1/bidi/NSM/regex');

require('unicode-4.0.1/bidi/R/code-points');
require('unicode-4.0.1/bidi/R/symbols');
require('unicode-4.0.1/bidi/R/regex');

require('unicode-4.0.1/bidi/AL/code-points');
require('unicode-4.0.1/bidi/AL/symbols');
require('unicode-4.0.1/bidi/AL/regex');

require('unicode-4.0.1/bidi/AN/code-points');
require('unicode-4.0.1/bidi/AN/symbols');
require('unicode-4.0.1/bidi/AN/regex');

require('unicode-4.0.1/bidi/LRE/code-points');
require('unicode-4.0.1/bidi/LRE/symbols');
require('unicode-4.0.1/bidi/LRE/regex');

require('unicode-4.0.1/bidi/RLE/code-points');
require('unicode-4.0.1/bidi/RLE/symbols');
require('unicode-4.0.1/bidi/RLE/regex');

require('unicode-4.0.1/bidi/PDF/code-points');
require('unicode-4.0.1/bidi/PDF/symbols');
require('unicode-4.0.1/bidi/PDF/regex');

require('unicode-4.0.1/bidi/LRO/code-points');
require('unicode-4.0.1/bidi/LRO/symbols');
require('unicode-4.0.1/bidi/LRO/regex');

require('unicode-4.0.1/bidi/RLO/code-points');
require('unicode-4.0.1/bidi/RLO/symbols');
require('unicode-4.0.1/bidi/RLO/regex');

// scripts:

require('unicode-4.0.1/scripts/Common/code-points');
require('unicode-4.0.1/scripts/Common/symbols');
require('unicode-4.0.1/scripts/Common/regex');

require('unicode-4.0.1/scripts/Latin/code-points');
require('unicode-4.0.1/scripts/Latin/symbols');
require('unicode-4.0.1/scripts/Latin/regex');

require('unicode-4.0.1/scripts/Greek/code-points');
require('unicode-4.0.1/scripts/Greek/symbols');
require('unicode-4.0.1/scripts/Greek/regex');

require('unicode-4.0.1/scripts/Cyrillic/code-points');
require('unicode-4.0.1/scripts/Cyrillic/symbols');
require('unicode-4.0.1/scripts/Cyrillic/regex');

require('unicode-4.0.1/scripts/Armenian/code-points');
require('unicode-4.0.1/scripts/Armenian/symbols');
require('unicode-4.0.1/scripts/Armenian/regex');

require('unicode-4.0.1/scripts/Hebrew/code-points');
require('unicode-4.0.1/scripts/Hebrew/symbols');
require('unicode-4.0.1/scripts/Hebrew/regex');

require('unicode-4.0.1/scripts/Arabic/code-points');
require('unicode-4.0.1/scripts/Arabic/symbols');
require('unicode-4.0.1/scripts/Arabic/regex');

require('unicode-4.0.1/scripts/Syriac/code-points');
require('unicode-4.0.1/scripts/Syriac/symbols');
require('unicode-4.0.1/scripts/Syriac/regex');

require('unicode-4.0.1/scripts/Thaana/code-points');
require('unicode-4.0.1/scripts/Thaana/symbols');
require('unicode-4.0.1/scripts/Thaana/regex');

require('unicode-4.0.1/scripts/Devanagari/code-points');
require('unicode-4.0.1/scripts/Devanagari/symbols');
require('unicode-4.0.1/scripts/Devanagari/regex');

require('unicode-4.0.1/scripts/Bengali/code-points');
require('unicode-4.0.1/scripts/Bengali/symbols');
require('unicode-4.0.1/scripts/Bengali/regex');

require('unicode-4.0.1/scripts/Gurmukhi/code-points');
require('unicode-4.0.1/scripts/Gurmukhi/symbols');
require('unicode-4.0.1/scripts/Gurmukhi/regex');

require('unicode-4.0.1/scripts/Gujarati/code-points');
require('unicode-4.0.1/scripts/Gujarati/symbols');
require('unicode-4.0.1/scripts/Gujarati/regex');

require('unicode-4.0.1/scripts/Oriya/code-points');
require('unicode-4.0.1/scripts/Oriya/symbols');
require('unicode-4.0.1/scripts/Oriya/regex');

require('unicode-4.0.1/scripts/Tamil/code-points');
require('unicode-4.0.1/scripts/Tamil/symbols');
require('unicode-4.0.1/scripts/Tamil/regex');

require('unicode-4.0.1/scripts/Telugu/code-points');
require('unicode-4.0.1/scripts/Telugu/symbols');
require('unicode-4.0.1/scripts/Telugu/regex');

require('unicode-4.0.1/scripts/Kannada/code-points');
require('unicode-4.0.1/scripts/Kannada/symbols');
require('unicode-4.0.1/scripts/Kannada/regex');

require('unicode-4.0.1/scripts/Malayalam/code-points');
require('unicode-4.0.1/scripts/Malayalam/symbols');
require('unicode-4.0.1/scripts/Malayalam/regex');

require('unicode-4.0.1/scripts/Sinhala/code-points');
require('unicode-4.0.1/scripts/Sinhala/symbols');
require('unicode-4.0.1/scripts/Sinhala/regex');

require('unicode-4.0.1/scripts/Thai/code-points');
require('unicode-4.0.1/scripts/Thai/symbols');
require('unicode-4.0.1/scripts/Thai/regex');

require('unicode-4.0.1/scripts/Lao/code-points');
require('unicode-4.0.1/scripts/Lao/symbols');
require('unicode-4.0.1/scripts/Lao/regex');

require('unicode-4.0.1/scripts/Tibetan/code-points');
require('unicode-4.0.1/scripts/Tibetan/symbols');
require('unicode-4.0.1/scripts/Tibetan/regex');

require('unicode-4.0.1/scripts/Myanmar/code-points');
require('unicode-4.0.1/scripts/Myanmar/symbols');
require('unicode-4.0.1/scripts/Myanmar/regex');

require('unicode-4.0.1/scripts/Georgian/code-points');
require('unicode-4.0.1/scripts/Georgian/symbols');
require('unicode-4.0.1/scripts/Georgian/regex');

require('unicode-4.0.1/scripts/Hangul/code-points');
require('unicode-4.0.1/scripts/Hangul/symbols');
require('unicode-4.0.1/scripts/Hangul/regex');

require('unicode-4.0.1/scripts/Ethiopic/code-points');
require('unicode-4.0.1/scripts/Ethiopic/symbols');
require('unicode-4.0.1/scripts/Ethiopic/regex');

require('unicode-4.0.1/scripts/Cherokee/code-points');
require('unicode-4.0.1/scripts/Cherokee/symbols');
require('unicode-4.0.1/scripts/Cherokee/regex');

require('unicode-4.0.1/scripts/Canadian_Aboriginal/code-points');
require('unicode-4.0.1/scripts/Canadian_Aboriginal/symbols');
require('unicode-4.0.1/scripts/Canadian_Aboriginal/regex');

require('unicode-4.0.1/scripts/Ogham/code-points');
require('unicode-4.0.1/scripts/Ogham/symbols');
require('unicode-4.0.1/scripts/Ogham/regex');

require('unicode-4.0.1/scripts/Runic/code-points');
require('unicode-4.0.1/scripts/Runic/symbols');
require('unicode-4.0.1/scripts/Runic/regex');

require('unicode-4.0.1/scripts/Khmer/code-points');
require('unicode-4.0.1/scripts/Khmer/symbols');
require('unicode-4.0.1/scripts/Khmer/regex');

require('unicode-4.0.1/scripts/Mongolian/code-points');
require('unicode-4.0.1/scripts/Mongolian/symbols');
require('unicode-4.0.1/scripts/Mongolian/regex');

require('unicode-4.0.1/scripts/Hiragana/code-points');
require('unicode-4.0.1/scripts/Hiragana/symbols');
require('unicode-4.0.1/scripts/Hiragana/regex');

require('unicode-4.0.1/scripts/Katakana/code-points');
require('unicode-4.0.1/scripts/Katakana/symbols');
require('unicode-4.0.1/scripts/Katakana/regex');

require('unicode-4.0.1/scripts/Bopomofo/code-points');
require('unicode-4.0.1/scripts/Bopomofo/symbols');
require('unicode-4.0.1/scripts/Bopomofo/regex');

require('unicode-4.0.1/scripts/Han/code-points');
require('unicode-4.0.1/scripts/Han/symbols');
require('unicode-4.0.1/scripts/Han/regex');

require('unicode-4.0.1/scripts/Yi/code-points');
require('unicode-4.0.1/scripts/Yi/symbols');
require('unicode-4.0.1/scripts/Yi/regex');

require('unicode-4.0.1/scripts/Old_Italic/code-points');
require('unicode-4.0.1/scripts/Old_Italic/symbols');
require('unicode-4.0.1/scripts/Old_Italic/regex');

require('unicode-4.0.1/scripts/Gothic/code-points');
require('unicode-4.0.1/scripts/Gothic/symbols');
require('unicode-4.0.1/scripts/Gothic/regex');

require('unicode-4.0.1/scripts/Deseret/code-points');
require('unicode-4.0.1/scripts/Deseret/symbols');
require('unicode-4.0.1/scripts/Deseret/regex');

require('unicode-4.0.1/scripts/Inherited/code-points');
require('unicode-4.0.1/scripts/Inherited/symbols');
require('unicode-4.0.1/scripts/Inherited/regex');

require('unicode-4.0.1/scripts/Tagalog/code-points');
require('unicode-4.0.1/scripts/Tagalog/symbols');
require('unicode-4.0.1/scripts/Tagalog/regex');

require('unicode-4.0.1/scripts/Hanunoo/code-points');
require('unicode-4.0.1/scripts/Hanunoo/symbols');
require('unicode-4.0.1/scripts/Hanunoo/regex');

require('unicode-4.0.1/scripts/Buhid/code-points');
require('unicode-4.0.1/scripts/Buhid/symbols');
require('unicode-4.0.1/scripts/Buhid/regex');

require('unicode-4.0.1/scripts/Tagbanwa/code-points');
require('unicode-4.0.1/scripts/Tagbanwa/symbols');
require('unicode-4.0.1/scripts/Tagbanwa/regex');

require('unicode-4.0.1/scripts/Limbu/code-points');
require('unicode-4.0.1/scripts/Limbu/symbols');
require('unicode-4.0.1/scripts/Limbu/regex');

require('unicode-4.0.1/scripts/Tai_Le/code-points');
require('unicode-4.0.1/scripts/Tai_Le/symbols');
require('unicode-4.0.1/scripts/Tai_Le/regex');

require('unicode-4.0.1/scripts/Linear_B/code-points');
require('unicode-4.0.1/scripts/Linear_B/symbols');
require('unicode-4.0.1/scripts/Linear_B/regex');

require('unicode-4.0.1/scripts/Ugaritic/code-points');
require('unicode-4.0.1/scripts/Ugaritic/symbols');
require('unicode-4.0.1/scripts/Ugaritic/regex');

require('unicode-4.0.1/scripts/Shavian/code-points');
require('unicode-4.0.1/scripts/Shavian/symbols');
require('unicode-4.0.1/scripts/Shavian/regex');

require('unicode-4.0.1/scripts/Osmanya/code-points');
require('unicode-4.0.1/scripts/Osmanya/symbols');
require('unicode-4.0.1/scripts/Osmanya/regex');

require('unicode-4.0.1/scripts/Cypriot/code-points');
require('unicode-4.0.1/scripts/Cypriot/symbols');
require('unicode-4.0.1/scripts/Cypriot/regex');

require('unicode-4.0.1/scripts/Braille/code-points');
require('unicode-4.0.1/scripts/Braille/symbols');
require('unicode-4.0.1/scripts/Braille/regex');

require('unicode-4.0.1/scripts/Katakana_Or_Hiragana/code-points');
require('unicode-4.0.1/scripts/Katakana_Or_Hiragana/symbols');
require('unicode-4.0.1/scripts/Katakana_Or_Hiragana/regex');

// case folding:

require('unicode-4.0.1/case-folding/C/code-points'); // lookup table with code point to code point mappings
require('unicode-4.0.1/case-folding/C/code-points')[ codePoint ]; // lookup table
require('unicode-4.0.1/case-folding/C/symbols'); // lookup table with symbol to symbol mappings
require('unicode-4.0.1/case-folding/C/symbols')[ symbol ]; // lookup table

require('unicode-4.0.1/case-folding/T/code-points'); // lookup table with code point to code point mappings
require('unicode-4.0.1/case-folding/T/code-points')[ codePoint ]; // lookup table
require('unicode-4.0.1/case-folding/T/symbols'); // lookup table with symbol to symbol mappings
require('unicode-4.0.1/case-folding/T/symbols')[ symbol ]; // lookup table

require('unicode-4.0.1/case-folding/F/code-points'); // lookup table with code point to code point mappings
require('unicode-4.0.1/case-folding/F/code-points')[ codePoint ]; // lookup table
require('unicode-4.0.1/case-folding/F/symbols'); // lookup table with symbol to symbol mappings
require('unicode-4.0.1/case-folding/F/symbols')[ symbol ]; // lookup table

require('unicode-4.0.1/case-folding/S/code-points'); // lookup table with code point to code point mappings
require('unicode-4.0.1/case-folding/S/code-points')[ codePoint ]; // lookup table
require('unicode-4.0.1/case-folding/S/symbols'); // lookup table with symbol to symbol mappings
require('unicode-4.0.1/case-folding/S/symbols')[ symbol ]; // lookup table

// blocks:

require('unicode-4.0.1/blocks/Basic Latin/code-points');
require('unicode-4.0.1/blocks/Basic Latin/symbols');
require('unicode-4.0.1/blocks/Basic Latin/regex');

require('unicode-4.0.1/blocks/Latin-1 Supplement/code-points');
require('unicode-4.0.1/blocks/Latin-1 Supplement/symbols');
require('unicode-4.0.1/blocks/Latin-1 Supplement/regex');

require('unicode-4.0.1/blocks/Latin Extended-A/code-points');
require('unicode-4.0.1/blocks/Latin Extended-A/symbols');
require('unicode-4.0.1/blocks/Latin Extended-A/regex');

require('unicode-4.0.1/blocks/Latin Extended-B/code-points');
require('unicode-4.0.1/blocks/Latin Extended-B/symbols');
require('unicode-4.0.1/blocks/Latin Extended-B/regex');

require('unicode-4.0.1/blocks/IPA Extensions/code-points');
require('unicode-4.0.1/blocks/IPA Extensions/symbols');
require('unicode-4.0.1/blocks/IPA Extensions/regex');

require('unicode-4.0.1/blocks/Spacing Modifier Letters/code-points');
require('unicode-4.0.1/blocks/Spacing Modifier Letters/symbols');
require('unicode-4.0.1/blocks/Spacing Modifier Letters/regex');

require('unicode-4.0.1/blocks/Combining Diacritical Marks/code-points');
require('unicode-4.0.1/blocks/Combining Diacritical Marks/symbols');
require('unicode-4.0.1/blocks/Combining Diacritical Marks/regex');

require('unicode-4.0.1/blocks/Greek and Coptic/code-points');
require('unicode-4.0.1/blocks/Greek and Coptic/symbols');
require('unicode-4.0.1/blocks/Greek and Coptic/regex');

require('unicode-4.0.1/blocks/Cyrillic/code-points');
require('unicode-4.0.1/blocks/Cyrillic/symbols');
require('unicode-4.0.1/blocks/Cyrillic/regex');

require('unicode-4.0.1/blocks/Cyrillic Supplement/code-points');
require('unicode-4.0.1/blocks/Cyrillic Supplement/symbols');
require('unicode-4.0.1/blocks/Cyrillic Supplement/regex');

require('unicode-4.0.1/blocks/Armenian/code-points');
require('unicode-4.0.1/blocks/Armenian/symbols');
require('unicode-4.0.1/blocks/Armenian/regex');

require('unicode-4.0.1/blocks/Hebrew/code-points');
require('unicode-4.0.1/blocks/Hebrew/symbols');
require('unicode-4.0.1/blocks/Hebrew/regex');

require('unicode-4.0.1/blocks/Arabic/code-points');
require('unicode-4.0.1/blocks/Arabic/symbols');
require('unicode-4.0.1/blocks/Arabic/regex');

require('unicode-4.0.1/blocks/Syriac/code-points');
require('unicode-4.0.1/blocks/Syriac/symbols');
require('unicode-4.0.1/blocks/Syriac/regex');

require('unicode-4.0.1/blocks/Thaana/code-points');
require('unicode-4.0.1/blocks/Thaana/symbols');
require('unicode-4.0.1/blocks/Thaana/regex');

require('unicode-4.0.1/blocks/Devanagari/code-points');
require('unicode-4.0.1/blocks/Devanagari/symbols');
require('unicode-4.0.1/blocks/Devanagari/regex');

require('unicode-4.0.1/blocks/Bengali/code-points');
require('unicode-4.0.1/blocks/Bengali/symbols');
require('unicode-4.0.1/blocks/Bengali/regex');

require('unicode-4.0.1/blocks/Gurmukhi/code-points');
require('unicode-4.0.1/blocks/Gurmukhi/symbols');
require('unicode-4.0.1/blocks/Gurmukhi/regex');

require('unicode-4.0.1/blocks/Gujarati/code-points');
require('unicode-4.0.1/blocks/Gujarati/symbols');
require('unicode-4.0.1/blocks/Gujarati/regex');

require('unicode-4.0.1/blocks/Oriya/code-points');
require('unicode-4.0.1/blocks/Oriya/symbols');
require('unicode-4.0.1/blocks/Oriya/regex');

require('unicode-4.0.1/blocks/Tamil/code-points');
require('unicode-4.0.1/blocks/Tamil/symbols');
require('unicode-4.0.1/blocks/Tamil/regex');

require('unicode-4.0.1/blocks/Telugu/code-points');
require('unicode-4.0.1/blocks/Telugu/symbols');
require('unicode-4.0.1/blocks/Telugu/regex');

require('unicode-4.0.1/blocks/Kannada/code-points');
require('unicode-4.0.1/blocks/Kannada/symbols');
require('unicode-4.0.1/blocks/Kannada/regex');

require('unicode-4.0.1/blocks/Malayalam/code-points');
require('unicode-4.0.1/blocks/Malayalam/symbols');
require('unicode-4.0.1/blocks/Malayalam/regex');

require('unicode-4.0.1/blocks/Sinhala/code-points');
require('unicode-4.0.1/blocks/Sinhala/symbols');
require('unicode-4.0.1/blocks/Sinhala/regex');

require('unicode-4.0.1/blocks/Thai/code-points');
require('unicode-4.0.1/blocks/Thai/symbols');
require('unicode-4.0.1/blocks/Thai/regex');

require('unicode-4.0.1/blocks/Lao/code-points');
require('unicode-4.0.1/blocks/Lao/symbols');
require('unicode-4.0.1/blocks/Lao/regex');

require('unicode-4.0.1/blocks/Tibetan/code-points');
require('unicode-4.0.1/blocks/Tibetan/symbols');
require('unicode-4.0.1/blocks/Tibetan/regex');

require('unicode-4.0.1/blocks/Myanmar/code-points');
require('unicode-4.0.1/blocks/Myanmar/symbols');
require('unicode-4.0.1/blocks/Myanmar/regex');

require('unicode-4.0.1/blocks/Georgian/code-points');
require('unicode-4.0.1/blocks/Georgian/symbols');
require('unicode-4.0.1/blocks/Georgian/regex');

require('unicode-4.0.1/blocks/Hangul Jamo/code-points');
require('unicode-4.0.1/blocks/Hangul Jamo/symbols');
require('unicode-4.0.1/blocks/Hangul Jamo/regex');

require('unicode-4.0.1/blocks/Ethiopic/code-points');
require('unicode-4.0.1/blocks/Ethiopic/symbols');
require('unicode-4.0.1/blocks/Ethiopic/regex');

require('unicode-4.0.1/blocks/Cherokee/code-points');
require('unicode-4.0.1/blocks/Cherokee/symbols');
require('unicode-4.0.1/blocks/Cherokee/regex');

require('unicode-4.0.1/blocks/Unified Canadian Aboriginal Syllabics/code-points');
require('unicode-4.0.1/blocks/Unified Canadian Aboriginal Syllabics/symbols');
require('unicode-4.0.1/blocks/Unified Canadian Aboriginal Syllabics/regex');

require('unicode-4.0.1/blocks/Ogham/code-points');
require('unicode-4.0.1/blocks/Ogham/symbols');
require('unicode-4.0.1/blocks/Ogham/regex');

require('unicode-4.0.1/blocks/Runic/code-points');
require('unicode-4.0.1/blocks/Runic/symbols');
require('unicode-4.0.1/blocks/Runic/regex');

require('unicode-4.0.1/blocks/Tagalog/code-points');
require('unicode-4.0.1/blocks/Tagalog/symbols');
require('unicode-4.0.1/blocks/Tagalog/regex');

require('unicode-4.0.1/blocks/Hanunoo/code-points');
require('unicode-4.0.1/blocks/Hanunoo/symbols');
require('unicode-4.0.1/blocks/Hanunoo/regex');

require('unicode-4.0.1/blocks/Buhid/code-points');
require('unicode-4.0.1/blocks/Buhid/symbols');
require('unicode-4.0.1/blocks/Buhid/regex');

require('unicode-4.0.1/blocks/Tagbanwa/code-points');
require('unicode-4.0.1/blocks/Tagbanwa/symbols');
require('unicode-4.0.1/blocks/Tagbanwa/regex');

require('unicode-4.0.1/blocks/Khmer/code-points');
require('unicode-4.0.1/blocks/Khmer/symbols');
require('unicode-4.0.1/blocks/Khmer/regex');

require('unicode-4.0.1/blocks/Mongolian/code-points');
require('unicode-4.0.1/blocks/Mongolian/symbols');
require('unicode-4.0.1/blocks/Mongolian/regex');

require('unicode-4.0.1/blocks/Limbu/code-points');
require('unicode-4.0.1/blocks/Limbu/symbols');
require('unicode-4.0.1/blocks/Limbu/regex');

require('unicode-4.0.1/blocks/Tai Le/code-points');
require('unicode-4.0.1/blocks/Tai Le/symbols');
require('unicode-4.0.1/blocks/Tai Le/regex');

require('unicode-4.0.1/blocks/Khmer Symbols/code-points');
require('unicode-4.0.1/blocks/Khmer Symbols/symbols');
require('unicode-4.0.1/blocks/Khmer Symbols/regex');

require('unicode-4.0.1/blocks/Phonetic Extensions/code-points');
require('unicode-4.0.1/blocks/Phonetic Extensions/symbols');
require('unicode-4.0.1/blocks/Phonetic Extensions/regex');

require('unicode-4.0.1/blocks/Latin Extended Additional/code-points');
require('unicode-4.0.1/blocks/Latin Extended Additional/symbols');
require('unicode-4.0.1/blocks/Latin Extended Additional/regex');

require('unicode-4.0.1/blocks/Greek Extended/code-points');
require('unicode-4.0.1/blocks/Greek Extended/symbols');
require('unicode-4.0.1/blocks/Greek Extended/regex');

require('unicode-4.0.1/blocks/General Punctuation/code-points');
require('unicode-4.0.1/blocks/General Punctuation/symbols');
require('unicode-4.0.1/blocks/General Punctuation/regex');

require('unicode-4.0.1/blocks/Superscripts and Subscripts/code-points');
require('unicode-4.0.1/blocks/Superscripts and Subscripts/symbols');
require('unicode-4.0.1/blocks/Superscripts and Subscripts/regex');

require('unicode-4.0.1/blocks/Currency Symbols/code-points');
require('unicode-4.0.1/blocks/Currency Symbols/symbols');
require('unicode-4.0.1/blocks/Currency Symbols/regex');

require('unicode-4.0.1/blocks/Combining Diacritical Marks for Symbols/code-points');
require('unicode-4.0.1/blocks/Combining Diacritical Marks for Symbols/symbols');
require('unicode-4.0.1/blocks/Combining Diacritical Marks for Symbols/regex');

require('unicode-4.0.1/blocks/Letterlike Symbols/code-points');
require('unicode-4.0.1/blocks/Letterlike Symbols/symbols');
require('unicode-4.0.1/blocks/Letterlike Symbols/regex');

require('unicode-4.0.1/blocks/Number Forms/code-points');
require('unicode-4.0.1/blocks/Number Forms/symbols');
require('unicode-4.0.1/blocks/Number Forms/regex');

require('unicode-4.0.1/blocks/Arrows/code-points');
require('unicode-4.0.1/blocks/Arrows/symbols');
require('unicode-4.0.1/blocks/Arrows/regex');

require('unicode-4.0.1/blocks/Mathematical Operators/code-points');
require('unicode-4.0.1/blocks/Mathematical Operators/symbols');
require('unicode-4.0.1/blocks/Mathematical Operators/regex');

require('unicode-4.0.1/blocks/Miscellaneous Technical/code-points');
require('unicode-4.0.1/blocks/Miscellaneous Technical/symbols');
require('unicode-4.0.1/blocks/Miscellaneous Technical/regex');

require('unicode-4.0.1/blocks/Control Pictures/code-points');
require('unicode-4.0.1/blocks/Control Pictures/symbols');
require('unicode-4.0.1/blocks/Control Pictures/regex');

require('unicode-4.0.1/blocks/Optical Character Recognition/code-points');
require('unicode-4.0.1/blocks/Optical Character Recognition/symbols');
require('unicode-4.0.1/blocks/Optical Character Recognition/regex');

require('unicode-4.0.1/blocks/Enclosed Alphanumerics/code-points');
require('unicode-4.0.1/blocks/Enclosed Alphanumerics/symbols');
require('unicode-4.0.1/blocks/Enclosed Alphanumerics/regex');

require('unicode-4.0.1/blocks/Box Drawing/code-points');
require('unicode-4.0.1/blocks/Box Drawing/symbols');
require('unicode-4.0.1/blocks/Box Drawing/regex');

require('unicode-4.0.1/blocks/Block Elements/code-points');
require('unicode-4.0.1/blocks/Block Elements/symbols');
require('unicode-4.0.1/blocks/Block Elements/regex');

require('unicode-4.0.1/blocks/Geometric Shapes/code-points');
require('unicode-4.0.1/blocks/Geometric Shapes/symbols');
require('unicode-4.0.1/blocks/Geometric Shapes/regex');

require('unicode-4.0.1/blocks/Miscellaneous Symbols/code-points');
require('unicode-4.0.1/blocks/Miscellaneous Symbols/symbols');
require('unicode-4.0.1/blocks/Miscellaneous Symbols/regex');

require('unicode-4.0.1/blocks/Dingbats/code-points');
require('unicode-4.0.1/blocks/Dingbats/symbols');
require('unicode-4.0.1/blocks/Dingbats/regex');

require('unicode-4.0.1/blocks/Miscellaneous Mathematical Symbols-A/code-points');
require('unicode-4.0.1/blocks/Miscellaneous Mathematical Symbols-A/symbols');
require('unicode-4.0.1/blocks/Miscellaneous Mathematical Symbols-A/regex');

require('unicode-4.0.1/blocks/Supplemental Arrows-A/code-points');
require('unicode-4.0.1/blocks/Supplemental Arrows-A/symbols');
require('unicode-4.0.1/blocks/Supplemental Arrows-A/regex');

require('unicode-4.0.1/blocks/Braille Patterns/code-points');
require('unicode-4.0.1/blocks/Braille Patterns/symbols');
require('unicode-4.0.1/blocks/Braille Patterns/regex');

require('unicode-4.0.1/blocks/Supplemental Arrows-B/code-points');
require('unicode-4.0.1/blocks/Supplemental Arrows-B/symbols');
require('unicode-4.0.1/blocks/Supplemental Arrows-B/regex');

require('unicode-4.0.1/blocks/Miscellaneous Mathematical Symbols-B/code-points');
require('unicode-4.0.1/blocks/Miscellaneous Mathematical Symbols-B/symbols');
require('unicode-4.0.1/blocks/Miscellaneous Mathematical Symbols-B/regex');

require('unicode-4.0.1/blocks/Supplemental Mathematical Operators/code-points');
require('unicode-4.0.1/blocks/Supplemental Mathematical Operators/symbols');
require('unicode-4.0.1/blocks/Supplemental Mathematical Operators/regex');

require('unicode-4.0.1/blocks/Miscellaneous Symbols and Arrows/code-points');
require('unicode-4.0.1/blocks/Miscellaneous Symbols and Arrows/symbols');
require('unicode-4.0.1/blocks/Miscellaneous Symbols and Arrows/regex');

require('unicode-4.0.1/blocks/CJK Radicals Supplement/code-points');
require('unicode-4.0.1/blocks/CJK Radicals Supplement/symbols');
require('unicode-4.0.1/blocks/CJK Radicals Supplement/regex');

require('unicode-4.0.1/blocks/Kangxi Radicals/code-points');
require('unicode-4.0.1/blocks/Kangxi Radicals/symbols');
require('unicode-4.0.1/blocks/Kangxi Radicals/regex');

require('unicode-4.0.1/blocks/Ideographic Description Characters/code-points');
require('unicode-4.0.1/blocks/Ideographic Description Characters/symbols');
require('unicode-4.0.1/blocks/Ideographic Description Characters/regex');

require('unicode-4.0.1/blocks/CJK Symbols and Punctuation/code-points');
require('unicode-4.0.1/blocks/CJK Symbols and Punctuation/symbols');
require('unicode-4.0.1/blocks/CJK Symbols and Punctuation/regex');

require('unicode-4.0.1/blocks/Hiragana/code-points');
require('unicode-4.0.1/blocks/Hiragana/symbols');
require('unicode-4.0.1/blocks/Hiragana/regex');

require('unicode-4.0.1/blocks/Katakana/code-points');
require('unicode-4.0.1/blocks/Katakana/symbols');
require('unicode-4.0.1/blocks/Katakana/regex');

require('unicode-4.0.1/blocks/Bopomofo/code-points');
require('unicode-4.0.1/blocks/Bopomofo/symbols');
require('unicode-4.0.1/blocks/Bopomofo/regex');

require('unicode-4.0.1/blocks/Hangul Compatibility Jamo/code-points');
require('unicode-4.0.1/blocks/Hangul Compatibility Jamo/symbols');
require('unicode-4.0.1/blocks/Hangul Compatibility Jamo/regex');

require('unicode-4.0.1/blocks/Kanbun/code-points');
require('unicode-4.0.1/blocks/Kanbun/symbols');
require('unicode-4.0.1/blocks/Kanbun/regex');

require('unicode-4.0.1/blocks/Bopomofo Extended/code-points');
require('unicode-4.0.1/blocks/Bopomofo Extended/symbols');
require('unicode-4.0.1/blocks/Bopomofo Extended/regex');

require('unicode-4.0.1/blocks/Katakana Phonetic Extensions/code-points');
require('unicode-4.0.1/blocks/Katakana Phonetic Extensions/symbols');
require('unicode-4.0.1/blocks/Katakana Phonetic Extensions/regex');

require('unicode-4.0.1/blocks/Enclosed CJK Letters and Months/code-points');
require('unicode-4.0.1/blocks/Enclosed CJK Letters and Months/symbols');
require('unicode-4.0.1/blocks/Enclosed CJK Letters and Months/regex');

require('unicode-4.0.1/blocks/CJK Compatibility/code-points');
require('unicode-4.0.1/blocks/CJK Compatibility/symbols');
require('unicode-4.0.1/blocks/CJK Compatibility/regex');

require('unicode-4.0.1/blocks/CJK Unified Ideographs Extension A/code-points');
require('unicode-4.0.1/blocks/CJK Unified Ideographs Extension A/symbols');
require('unicode-4.0.1/blocks/CJK Unified Ideographs Extension A/regex');

require('unicode-4.0.1/blocks/Yijing Hexagram Symbols/code-points');
require('unicode-4.0.1/blocks/Yijing Hexagram Symbols/symbols');
require('unicode-4.0.1/blocks/Yijing Hexagram Symbols/regex');

require('unicode-4.0.1/blocks/CJK Unified Ideographs/code-points');
require('unicode-4.0.1/blocks/CJK Unified Ideographs/symbols');
require('unicode-4.0.1/blocks/CJK Unified Ideographs/regex');

require('unicode-4.0.1/blocks/Yi Syllables/code-points');
require('unicode-4.0.1/blocks/Yi Syllables/symbols');
require('unicode-4.0.1/blocks/Yi Syllables/regex');

require('unicode-4.0.1/blocks/Yi Radicals/code-points');
require('unicode-4.0.1/blocks/Yi Radicals/symbols');
require('unicode-4.0.1/blocks/Yi Radicals/regex');

require('unicode-4.0.1/blocks/Hangul Syllables/code-points');
require('unicode-4.0.1/blocks/Hangul Syllables/symbols');
require('unicode-4.0.1/blocks/Hangul Syllables/regex');

require('unicode-4.0.1/blocks/High Surrogates/code-points');
require('unicode-4.0.1/blocks/High Surrogates/symbols');
require('unicode-4.0.1/blocks/High Surrogates/regex');

require('unicode-4.0.1/blocks/High Private Use Surrogates/code-points');
require('unicode-4.0.1/blocks/High Private Use Surrogates/symbols');
require('unicode-4.0.1/blocks/High Private Use Surrogates/regex');

require('unicode-4.0.1/blocks/Low Surrogates/code-points');
require('unicode-4.0.1/blocks/Low Surrogates/symbols');
require('unicode-4.0.1/blocks/Low Surrogates/regex');

require('unicode-4.0.1/blocks/Private Use Area/code-points');
require('unicode-4.0.1/blocks/Private Use Area/symbols');
require('unicode-4.0.1/blocks/Private Use Area/regex');

require('unicode-4.0.1/blocks/CJK Compatibility Ideographs/code-points');
require('unicode-4.0.1/blocks/CJK Compatibility Ideographs/symbols');
require('unicode-4.0.1/blocks/CJK Compatibility Ideographs/regex');

require('unicode-4.0.1/blocks/Alphabetic Presentation Forms/code-points');
require('unicode-4.0.1/blocks/Alphabetic Presentation Forms/symbols');
require('unicode-4.0.1/blocks/Alphabetic Presentation Forms/regex');

require('unicode-4.0.1/blocks/Arabic Presentation Forms-A/code-points');
require('unicode-4.0.1/blocks/Arabic Presentation Forms-A/symbols');
require('unicode-4.0.1/blocks/Arabic Presentation Forms-A/regex');

require('unicode-4.0.1/blocks/Variation Selectors/code-points');
require('unicode-4.0.1/blocks/Variation Selectors/symbols');
require('unicode-4.0.1/blocks/Variation Selectors/regex');

require('unicode-4.0.1/blocks/Combining Half Marks/code-points');
require('unicode-4.0.1/blocks/Combining Half Marks/symbols');
require('unicode-4.0.1/blocks/Combining Half Marks/regex');

require('unicode-4.0.1/blocks/CJK Compatibility Forms/code-points');
require('unicode-4.0.1/blocks/CJK Compatibility Forms/symbols');
require('unicode-4.0.1/blocks/CJK Compatibility Forms/regex');

require('unicode-4.0.1/blocks/Small Form Variants/code-points');
require('unicode-4.0.1/blocks/Small Form Variants/symbols');
require('unicode-4.0.1/blocks/Small Form Variants/regex');

require('unicode-4.0.1/blocks/Arabic Presentation Forms-B/code-points');
require('unicode-4.0.1/blocks/Arabic Presentation Forms-B/symbols');
require('unicode-4.0.1/blocks/Arabic Presentation Forms-B/regex');

require('unicode-4.0.1/blocks/Halfwidth and Fullwidth Forms/code-points');
require('unicode-4.0.1/blocks/Halfwidth and Fullwidth Forms/symbols');
require('unicode-4.0.1/blocks/Halfwidth and Fullwidth Forms/regex');

require('unicode-4.0.1/blocks/Specials/code-points');
require('unicode-4.0.1/blocks/Specials/symbols');
require('unicode-4.0.1/blocks/Specials/regex');

require('unicode-4.0.1/blocks/Linear B Syllabary/code-points');
require('unicode-4.0.1/blocks/Linear B Syllabary/symbols');
require('unicode-4.0.1/blocks/Linear B Syllabary/regex');

require('unicode-4.0.1/blocks/Linear B Ideograms/code-points');
require('unicode-4.0.1/blocks/Linear B Ideograms/symbols');
require('unicode-4.0.1/blocks/Linear B Ideograms/regex');

require('unicode-4.0.1/blocks/Aegean Numbers/code-points');
require('unicode-4.0.1/blocks/Aegean Numbers/symbols');
require('unicode-4.0.1/blocks/Aegean Numbers/regex');

require('unicode-4.0.1/blocks/Old Italic/code-points');
require('unicode-4.0.1/blocks/Old Italic/symbols');
require('unicode-4.0.1/blocks/Old Italic/regex');

require('unicode-4.0.1/blocks/Gothic/code-points');
require('unicode-4.0.1/blocks/Gothic/symbols');
require('unicode-4.0.1/blocks/Gothic/regex');

require('unicode-4.0.1/blocks/Ugaritic/code-points');
require('unicode-4.0.1/blocks/Ugaritic/symbols');
require('unicode-4.0.1/blocks/Ugaritic/regex');

require('unicode-4.0.1/blocks/Deseret/code-points');
require('unicode-4.0.1/blocks/Deseret/symbols');
require('unicode-4.0.1/blocks/Deseret/regex');

require('unicode-4.0.1/blocks/Shavian/code-points');
require('unicode-4.0.1/blocks/Shavian/symbols');
require('unicode-4.0.1/blocks/Shavian/regex');

require('unicode-4.0.1/blocks/Osmanya/code-points');
require('unicode-4.0.1/blocks/Osmanya/symbols');
require('unicode-4.0.1/blocks/Osmanya/regex');

require('unicode-4.0.1/blocks/Cypriot Syllabary/code-points');
require('unicode-4.0.1/blocks/Cypriot Syllabary/symbols');
require('unicode-4.0.1/blocks/Cypriot Syllabary/regex');

require('unicode-4.0.1/blocks/Byzantine Musical Symbols/code-points');
require('unicode-4.0.1/blocks/Byzantine Musical Symbols/symbols');
require('unicode-4.0.1/blocks/Byzantine Musical Symbols/regex');

require('unicode-4.0.1/blocks/Musical Symbols/code-points');
require('unicode-4.0.1/blocks/Musical Symbols/symbols');
require('unicode-4.0.1/blocks/Musical Symbols/regex');

require('unicode-4.0.1/blocks/Tai Xuan Jing Symbols/code-points');
require('unicode-4.0.1/blocks/Tai Xuan Jing Symbols/symbols');
require('unicode-4.0.1/blocks/Tai Xuan Jing Symbols/regex');

require('unicode-4.0.1/blocks/Mathematical Alphanumeric Symbols/code-points');
require('unicode-4.0.1/blocks/Mathematical Alphanumeric Symbols/symbols');
require('unicode-4.0.1/blocks/Mathematical Alphanumeric Symbols/regex');

require('unicode-4.0.1/blocks/CJK Unified Ideographs Extension B/code-points');
require('unicode-4.0.1/blocks/CJK Unified Ideographs Extension B/symbols');
require('unicode-4.0.1/blocks/CJK Unified Ideographs Extension B/regex');

require('unicode-4.0.1/blocks/CJK Compatibility Ideographs Supplement/code-points');
require('unicode-4.0.1/blocks/CJK Compatibility Ideographs Supplement/symbols');
require('unicode-4.0.1/blocks/CJK Compatibility Ideographs Supplement/regex');

require('unicode-4.0.1/blocks/Tags/code-points');
require('unicode-4.0.1/blocks/Tags/symbols');
require('unicode-4.0.1/blocks/Tags/regex');

require('unicode-4.0.1/blocks/Variation Selectors Supplement/code-points');
require('unicode-4.0.1/blocks/Variation Selectors Supplement/symbols');
require('unicode-4.0.1/blocks/Variation Selectors Supplement/regex');

require('unicode-4.0.1/blocks/Supplementary Private Use Area-A/code-points');
require('unicode-4.0.1/blocks/Supplementary Private Use Area-A/symbols');
require('unicode-4.0.1/blocks/Supplementary Private Use Area-A/regex');

require('unicode-4.0.1/blocks/Supplementary Private Use Area-B/code-points');
require('unicode-4.0.1/blocks/Supplementary Private Use Area-B/symbols');
require('unicode-4.0.1/blocks/Supplementary Private Use Area-B/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
