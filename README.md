# Unicode v4.0.1 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v4.0.1’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/node-unicode/node-unicode-data/issues).**

## Installation

```bash
npm install @unicode/unicode-4.0.1 --save-dev
```

**Note:** _@unicode/unicode-4.0.1_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('@unicode/unicode-6.3.0/Script_Extensions/Arabic/code-points.js')) // or `…/symbols`, doesn’t matter
  .add(require('@unicode/unicode-6.3.0/Script_Extensions/Greek/code-points.js')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('@unicode/unicode-4.0.1/General_Category/Uppercase_Letter/code-points.js');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('@unicode/unicode-4.0.1/General_Category/Uppercase_Letter/symbols.js');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('@unicode/unicode-4.0.1/General_Category/Uppercase_Letter/regex.js');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('@unicode/unicode-4.0.1/General_Category').get(0x41);
// Get an array of all code points with a given bidi class:
const on = require('@unicode/unicode-4.0.1/Bidi_Class/Other_Neutral/code-points.js');
// Get a map from code points to bidi classes:
const bidiClassMap = require('@unicode/unicode-4.0.1/Bidi_Class');
// Get the directionality of a given code point:
const directionality = require('@unicode/unicode-4.0.1/Bidi_Class').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v4.0.1:

```js
// `Binary_Property`:

require('@unicode/unicode-4.0.1/Binary_Property/ASCII/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/ASCII/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/ASCII/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/ASCII_Hex_Digit/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/ASCII_Hex_Digit/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/ASCII_Hex_Digit/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Alphabetic/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Alphabetic/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Alphabetic/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Any/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Any/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Any/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Assigned/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Assigned/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Assigned/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Bidi_Control/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Bidi_Control/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Bidi_Control/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Bidi_Mirrored/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Bidi_Mirrored/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Bidi_Mirrored/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Dash/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Dash/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Dash/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Default_Ignorable_Code_Point/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Default_Ignorable_Code_Point/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Default_Ignorable_Code_Point/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Deprecated/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Deprecated/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Deprecated/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Diacritic/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Diacritic/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Diacritic/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFC/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFC/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFC/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFD/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFD/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFD/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFKC/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFKC/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFKC/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFKD/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFKD/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Expands_On_NFKD/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Extender/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Extender/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Extender/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Full_Composition_Exclusion/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Full_Composition_Exclusion/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Full_Composition_Exclusion/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Base/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Base/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Base/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Extend/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Extend/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Extend/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Link/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Link/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Grapheme_Link/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Hex_Digit/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Hex_Digit/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Hex_Digit/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Hyphen/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Hyphen/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Hyphen/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/IDS_Binary_Operator/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/IDS_Binary_Operator/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/IDS_Binary_Operator/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/IDS_Trinary_Operator/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/IDS_Trinary_Operator/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/IDS_Trinary_Operator/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/ID_Continue/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/ID_Continue/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/ID_Continue/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/ID_Start/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/ID_Start/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/ID_Start/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Ideographic/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Ideographic/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Ideographic/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Join_Control/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Join_Control/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Join_Control/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Logical_Order_Exception/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Logical_Order_Exception/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Logical_Order_Exception/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Lowercase/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Lowercase/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Lowercase/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Math/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Math/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Math/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Noncharacter_Code_Point/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Noncharacter_Code_Point/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Noncharacter_Code_Point/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Other_Alphabetic/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Alphabetic/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Alphabetic/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Other_Default_Ignorable_Code_Point/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Default_Ignorable_Code_Point/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Default_Ignorable_Code_Point/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Other_Grapheme_Extend/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Grapheme_Extend/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Grapheme_Extend/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Other_ID_Start/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_ID_Start/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_ID_Start/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Other_Lowercase/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Lowercase/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Lowercase/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Other_Math/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Math/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Math/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Other_Uppercase/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Uppercase/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Other_Uppercase/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Quotation_Mark/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Quotation_Mark/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Quotation_Mark/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Radical/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Radical/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Radical/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/STerm/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/STerm/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/STerm/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Soft_Dotted/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Soft_Dotted/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Soft_Dotted/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Terminal_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Terminal_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Terminal_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Unified_Ideograph/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Unified_Ideograph/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Unified_Ideograph/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Uppercase/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Uppercase/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Uppercase/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/Variation_Selector/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/Variation_Selector/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/Variation_Selector/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/White_Space/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/White_Space/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/White_Space/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/XID_Continue/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/XID_Continue/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/XID_Continue/regex.js');

require('@unicode/unicode-4.0.1/Binary_Property/XID_Start/code-points.js');
require('@unicode/unicode-4.0.1/Binary_Property/XID_Start/symbols.js');
require('@unicode/unicode-4.0.1/Binary_Property/XID_Start/regex.js');

// `General_Category`:

require('@unicode/unicode-4.0.1/General_Category').get(codePoint); // lookup map

require('@unicode/unicode-4.0.1/General_Category/Cased_Letter/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Cased_Letter/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Cased_Letter/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Close_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Close_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Close_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Connector_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Connector_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Connector_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Control/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Control/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Control/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Currency_Symbol/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Currency_Symbol/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Currency_Symbol/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Dash_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Dash_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Dash_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Decimal_Number/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Decimal_Number/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Decimal_Number/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Enclosing_Mark/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Enclosing_Mark/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Enclosing_Mark/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Final_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Final_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Final_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Format/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Format/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Format/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Initial_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Initial_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Initial_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Letter/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Letter/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Letter/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Letter_Number/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Letter_Number/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Letter_Number/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Line_Separator/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Line_Separator/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Line_Separator/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Lowercase_Letter/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Lowercase_Letter/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Lowercase_Letter/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Mark/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Mark/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Mark/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Math_Symbol/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Math_Symbol/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Math_Symbol/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Modifier_Letter/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Modifier_Letter/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Modifier_Letter/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Modifier_Symbol/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Modifier_Symbol/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Modifier_Symbol/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Nonspacing_Mark/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Nonspacing_Mark/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Nonspacing_Mark/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Number/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Number/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Number/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Open_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Open_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Open_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Other/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Other/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Other/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Other_Letter/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Letter/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Letter/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Other_Number/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Number/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Number/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Other_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Other_Symbol/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Symbol/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Other_Symbol/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Paragraph_Separator/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Paragraph_Separator/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Paragraph_Separator/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Private_Use/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Private_Use/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Private_Use/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Punctuation/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Separator/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Separator/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Separator/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Space_Separator/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Space_Separator/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Space_Separator/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Spacing_Mark/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Spacing_Mark/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Spacing_Mark/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Surrogate/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Surrogate/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Surrogate/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Symbol/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Symbol/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Symbol/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Titlecase_Letter/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Titlecase_Letter/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Titlecase_Letter/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Unassigned/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Unassigned/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Unassigned/regex.js');

require('@unicode/unicode-4.0.1/General_Category/Uppercase_Letter/code-points.js');
require('@unicode/unicode-4.0.1/General_Category/Uppercase_Letter/symbols.js');
require('@unicode/unicode-4.0.1/General_Category/Uppercase_Letter/regex.js');

// `Bidi_Class`:

require('@unicode/unicode-4.0.1/Bidi_Class').get(codePoint); // lookup map

require('@unicode/unicode-4.0.1/Bidi_Class/Arabic_Letter/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Arabic_Letter/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Arabic_Letter/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Arabic_Number/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Arabic_Number/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Arabic_Number/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Boundary_Neutral/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Boundary_Neutral/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Boundary_Neutral/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Common_Separator/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Common_Separator/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Common_Separator/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/European_Number/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/European_Number/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/European_Number/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/European_Separator/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/European_Separator/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/European_Separator/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/European_Terminator/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/European_Terminator/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/European_Terminator/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right_Embedding/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right_Embedding/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right_Embedding/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right_Override/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right_Override/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Left_To_Right_Override/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Nonspacing_Mark/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Nonspacing_Mark/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Nonspacing_Mark/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Other_Neutral/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Other_Neutral/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Other_Neutral/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Paragraph_Separator/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Paragraph_Separator/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Paragraph_Separator/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Pop_Directional_Format/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Pop_Directional_Format/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Pop_Directional_Format/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left_Embedding/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left_Embedding/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left_Embedding/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left_Override/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left_Override/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Right_To_Left_Override/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/Segment_Separator/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Segment_Separator/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/Segment_Separator/regex.js');

require('@unicode/unicode-4.0.1/Bidi_Class/White_Space/code-points.js');
require('@unicode/unicode-4.0.1/Bidi_Class/White_Space/symbols.js');
require('@unicode/unicode-4.0.1/Bidi_Class/White_Space/regex.js');

// `Script`:

require('@unicode/unicode-4.0.1/Script/Arabic/code-points.js');
require('@unicode/unicode-4.0.1/Script/Arabic/symbols.js');
require('@unicode/unicode-4.0.1/Script/Arabic/regex.js');

require('@unicode/unicode-4.0.1/Script/Armenian/code-points.js');
require('@unicode/unicode-4.0.1/Script/Armenian/symbols.js');
require('@unicode/unicode-4.0.1/Script/Armenian/regex.js');

require('@unicode/unicode-4.0.1/Script/Bengali/code-points.js');
require('@unicode/unicode-4.0.1/Script/Bengali/symbols.js');
require('@unicode/unicode-4.0.1/Script/Bengali/regex.js');

require('@unicode/unicode-4.0.1/Script/Bopomofo/code-points.js');
require('@unicode/unicode-4.0.1/Script/Bopomofo/symbols.js');
require('@unicode/unicode-4.0.1/Script/Bopomofo/regex.js');

require('@unicode/unicode-4.0.1/Script/Braille/code-points.js');
require('@unicode/unicode-4.0.1/Script/Braille/symbols.js');
require('@unicode/unicode-4.0.1/Script/Braille/regex.js');

require('@unicode/unicode-4.0.1/Script/Buhid/code-points.js');
require('@unicode/unicode-4.0.1/Script/Buhid/symbols.js');
require('@unicode/unicode-4.0.1/Script/Buhid/regex.js');

require('@unicode/unicode-4.0.1/Script/Canadian_Aboriginal/code-points.js');
require('@unicode/unicode-4.0.1/Script/Canadian_Aboriginal/symbols.js');
require('@unicode/unicode-4.0.1/Script/Canadian_Aboriginal/regex.js');

require('@unicode/unicode-4.0.1/Script/Cherokee/code-points.js');
require('@unicode/unicode-4.0.1/Script/Cherokee/symbols.js');
require('@unicode/unicode-4.0.1/Script/Cherokee/regex.js');

require('@unicode/unicode-4.0.1/Script/Common/code-points.js');
require('@unicode/unicode-4.0.1/Script/Common/symbols.js');
require('@unicode/unicode-4.0.1/Script/Common/regex.js');

require('@unicode/unicode-4.0.1/Script/Cypriot/code-points.js');
require('@unicode/unicode-4.0.1/Script/Cypriot/symbols.js');
require('@unicode/unicode-4.0.1/Script/Cypriot/regex.js');

require('@unicode/unicode-4.0.1/Script/Cyrillic/code-points.js');
require('@unicode/unicode-4.0.1/Script/Cyrillic/symbols.js');
require('@unicode/unicode-4.0.1/Script/Cyrillic/regex.js');

require('@unicode/unicode-4.0.1/Script/Deseret/code-points.js');
require('@unicode/unicode-4.0.1/Script/Deseret/symbols.js');
require('@unicode/unicode-4.0.1/Script/Deseret/regex.js');

require('@unicode/unicode-4.0.1/Script/Devanagari/code-points.js');
require('@unicode/unicode-4.0.1/Script/Devanagari/symbols.js');
require('@unicode/unicode-4.0.1/Script/Devanagari/regex.js');

require('@unicode/unicode-4.0.1/Script/Ethiopic/code-points.js');
require('@unicode/unicode-4.0.1/Script/Ethiopic/symbols.js');
require('@unicode/unicode-4.0.1/Script/Ethiopic/regex.js');

require('@unicode/unicode-4.0.1/Script/Georgian/code-points.js');
require('@unicode/unicode-4.0.1/Script/Georgian/symbols.js');
require('@unicode/unicode-4.0.1/Script/Georgian/regex.js');

require('@unicode/unicode-4.0.1/Script/Gothic/code-points.js');
require('@unicode/unicode-4.0.1/Script/Gothic/symbols.js');
require('@unicode/unicode-4.0.1/Script/Gothic/regex.js');

require('@unicode/unicode-4.0.1/Script/Greek/code-points.js');
require('@unicode/unicode-4.0.1/Script/Greek/symbols.js');
require('@unicode/unicode-4.0.1/Script/Greek/regex.js');

require('@unicode/unicode-4.0.1/Script/Gujarati/code-points.js');
require('@unicode/unicode-4.0.1/Script/Gujarati/symbols.js');
require('@unicode/unicode-4.0.1/Script/Gujarati/regex.js');

require('@unicode/unicode-4.0.1/Script/Gurmukhi/code-points.js');
require('@unicode/unicode-4.0.1/Script/Gurmukhi/symbols.js');
require('@unicode/unicode-4.0.1/Script/Gurmukhi/regex.js');

require('@unicode/unicode-4.0.1/Script/Han/code-points.js');
require('@unicode/unicode-4.0.1/Script/Han/symbols.js');
require('@unicode/unicode-4.0.1/Script/Han/regex.js');

require('@unicode/unicode-4.0.1/Script/Hangul/code-points.js');
require('@unicode/unicode-4.0.1/Script/Hangul/symbols.js');
require('@unicode/unicode-4.0.1/Script/Hangul/regex.js');

require('@unicode/unicode-4.0.1/Script/Hanunoo/code-points.js');
require('@unicode/unicode-4.0.1/Script/Hanunoo/symbols.js');
require('@unicode/unicode-4.0.1/Script/Hanunoo/regex.js');

require('@unicode/unicode-4.0.1/Script/Hebrew/code-points.js');
require('@unicode/unicode-4.0.1/Script/Hebrew/symbols.js');
require('@unicode/unicode-4.0.1/Script/Hebrew/regex.js');

require('@unicode/unicode-4.0.1/Script/Hiragana/code-points.js');
require('@unicode/unicode-4.0.1/Script/Hiragana/symbols.js');
require('@unicode/unicode-4.0.1/Script/Hiragana/regex.js');

require('@unicode/unicode-4.0.1/Script/Inherited/code-points.js');
require('@unicode/unicode-4.0.1/Script/Inherited/symbols.js');
require('@unicode/unicode-4.0.1/Script/Inherited/regex.js');

require('@unicode/unicode-4.0.1/Script/Kannada/code-points.js');
require('@unicode/unicode-4.0.1/Script/Kannada/symbols.js');
require('@unicode/unicode-4.0.1/Script/Kannada/regex.js');

require('@unicode/unicode-4.0.1/Script/Katakana/code-points.js');
require('@unicode/unicode-4.0.1/Script/Katakana/symbols.js');
require('@unicode/unicode-4.0.1/Script/Katakana/regex.js');

require('@unicode/unicode-4.0.1/Script/Katakana_Or_Hiragana/code-points.js');
require('@unicode/unicode-4.0.1/Script/Katakana_Or_Hiragana/symbols.js');
require('@unicode/unicode-4.0.1/Script/Katakana_Or_Hiragana/regex.js');

require('@unicode/unicode-4.0.1/Script/Khmer/code-points.js');
require('@unicode/unicode-4.0.1/Script/Khmer/symbols.js');
require('@unicode/unicode-4.0.1/Script/Khmer/regex.js');

require('@unicode/unicode-4.0.1/Script/Lao/code-points.js');
require('@unicode/unicode-4.0.1/Script/Lao/symbols.js');
require('@unicode/unicode-4.0.1/Script/Lao/regex.js');

require('@unicode/unicode-4.0.1/Script/Latin/code-points.js');
require('@unicode/unicode-4.0.1/Script/Latin/symbols.js');
require('@unicode/unicode-4.0.1/Script/Latin/regex.js');

require('@unicode/unicode-4.0.1/Script/Limbu/code-points.js');
require('@unicode/unicode-4.0.1/Script/Limbu/symbols.js');
require('@unicode/unicode-4.0.1/Script/Limbu/regex.js');

require('@unicode/unicode-4.0.1/Script/Linear_B/code-points.js');
require('@unicode/unicode-4.0.1/Script/Linear_B/symbols.js');
require('@unicode/unicode-4.0.1/Script/Linear_B/regex.js');

require('@unicode/unicode-4.0.1/Script/Malayalam/code-points.js');
require('@unicode/unicode-4.0.1/Script/Malayalam/symbols.js');
require('@unicode/unicode-4.0.1/Script/Malayalam/regex.js');

require('@unicode/unicode-4.0.1/Script/Mongolian/code-points.js');
require('@unicode/unicode-4.0.1/Script/Mongolian/symbols.js');
require('@unicode/unicode-4.0.1/Script/Mongolian/regex.js');

require('@unicode/unicode-4.0.1/Script/Myanmar/code-points.js');
require('@unicode/unicode-4.0.1/Script/Myanmar/symbols.js');
require('@unicode/unicode-4.0.1/Script/Myanmar/regex.js');

require('@unicode/unicode-4.0.1/Script/Ogham/code-points.js');
require('@unicode/unicode-4.0.1/Script/Ogham/symbols.js');
require('@unicode/unicode-4.0.1/Script/Ogham/regex.js');

require('@unicode/unicode-4.0.1/Script/Old_Italic/code-points.js');
require('@unicode/unicode-4.0.1/Script/Old_Italic/symbols.js');
require('@unicode/unicode-4.0.1/Script/Old_Italic/regex.js');

require('@unicode/unicode-4.0.1/Script/Oriya/code-points.js');
require('@unicode/unicode-4.0.1/Script/Oriya/symbols.js');
require('@unicode/unicode-4.0.1/Script/Oriya/regex.js');

require('@unicode/unicode-4.0.1/Script/Osmanya/code-points.js');
require('@unicode/unicode-4.0.1/Script/Osmanya/symbols.js');
require('@unicode/unicode-4.0.1/Script/Osmanya/regex.js');

require('@unicode/unicode-4.0.1/Script/Runic/code-points.js');
require('@unicode/unicode-4.0.1/Script/Runic/symbols.js');
require('@unicode/unicode-4.0.1/Script/Runic/regex.js');

require('@unicode/unicode-4.0.1/Script/Shavian/code-points.js');
require('@unicode/unicode-4.0.1/Script/Shavian/symbols.js');
require('@unicode/unicode-4.0.1/Script/Shavian/regex.js');

require('@unicode/unicode-4.0.1/Script/Sinhala/code-points.js');
require('@unicode/unicode-4.0.1/Script/Sinhala/symbols.js');
require('@unicode/unicode-4.0.1/Script/Sinhala/regex.js');

require('@unicode/unicode-4.0.1/Script/Syriac/code-points.js');
require('@unicode/unicode-4.0.1/Script/Syriac/symbols.js');
require('@unicode/unicode-4.0.1/Script/Syriac/regex.js');

require('@unicode/unicode-4.0.1/Script/Tagalog/code-points.js');
require('@unicode/unicode-4.0.1/Script/Tagalog/symbols.js');
require('@unicode/unicode-4.0.1/Script/Tagalog/regex.js');

require('@unicode/unicode-4.0.1/Script/Tagbanwa/code-points.js');
require('@unicode/unicode-4.0.1/Script/Tagbanwa/symbols.js');
require('@unicode/unicode-4.0.1/Script/Tagbanwa/regex.js');

require('@unicode/unicode-4.0.1/Script/Tai_Le/code-points.js');
require('@unicode/unicode-4.0.1/Script/Tai_Le/symbols.js');
require('@unicode/unicode-4.0.1/Script/Tai_Le/regex.js');

require('@unicode/unicode-4.0.1/Script/Tamil/code-points.js');
require('@unicode/unicode-4.0.1/Script/Tamil/symbols.js');
require('@unicode/unicode-4.0.1/Script/Tamil/regex.js');

require('@unicode/unicode-4.0.1/Script/Telugu/code-points.js');
require('@unicode/unicode-4.0.1/Script/Telugu/symbols.js');
require('@unicode/unicode-4.0.1/Script/Telugu/regex.js');

require('@unicode/unicode-4.0.1/Script/Thaana/code-points.js');
require('@unicode/unicode-4.0.1/Script/Thaana/symbols.js');
require('@unicode/unicode-4.0.1/Script/Thaana/regex.js');

require('@unicode/unicode-4.0.1/Script/Thai/code-points.js');
require('@unicode/unicode-4.0.1/Script/Thai/symbols.js');
require('@unicode/unicode-4.0.1/Script/Thai/regex.js');

require('@unicode/unicode-4.0.1/Script/Tibetan/code-points.js');
require('@unicode/unicode-4.0.1/Script/Tibetan/symbols.js');
require('@unicode/unicode-4.0.1/Script/Tibetan/regex.js');

require('@unicode/unicode-4.0.1/Script/Ugaritic/code-points.js');
require('@unicode/unicode-4.0.1/Script/Ugaritic/symbols.js');
require('@unicode/unicode-4.0.1/Script/Ugaritic/regex.js');

require('@unicode/unicode-4.0.1/Script/Yi/code-points.js');
require('@unicode/unicode-4.0.1/Script/Yi/symbols.js');
require('@unicode/unicode-4.0.1/Script/Yi/regex.js');

// `Case_Folding`:

require('@unicode/unicode-4.0.1/Case_Folding/C/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-4.0.1/Case_Folding/C/code-points.js').get(codePoint);
require('@unicode/unicode-4.0.1/Case_Folding/C/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-4.0.1/Case_Folding/C/symbols.js').get(symbol);

require('@unicode/unicode-4.0.1/Case_Folding/F/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-4.0.1/Case_Folding/F/code-points.js').get(codePoint);
require('@unicode/unicode-4.0.1/Case_Folding/F/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-4.0.1/Case_Folding/F/symbols.js').get(symbol);

require('@unicode/unicode-4.0.1/Case_Folding/S/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-4.0.1/Case_Folding/S/code-points.js').get(codePoint);
require('@unicode/unicode-4.0.1/Case_Folding/S/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-4.0.1/Case_Folding/S/symbols.js').get(symbol);

require('@unicode/unicode-4.0.1/Case_Folding/T/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-4.0.1/Case_Folding/T/code-points.js').get(codePoint);
require('@unicode/unicode-4.0.1/Case_Folding/T/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-4.0.1/Case_Folding/T/symbols.js').get(symbol);

// `Block`:

require('@unicode/unicode-4.0.1/Block/Aegean_Numbers/code-points.js');
require('@unicode/unicode-4.0.1/Block/Aegean_Numbers/symbols.js');
require('@unicode/unicode-4.0.1/Block/Aegean_Numbers/regex.js');

require('@unicode/unicode-4.0.1/Block/Alphabetic_Presentation_Forms/code-points.js');
require('@unicode/unicode-4.0.1/Block/Alphabetic_Presentation_Forms/symbols.js');
require('@unicode/unicode-4.0.1/Block/Alphabetic_Presentation_Forms/regex.js');

require('@unicode/unicode-4.0.1/Block/Arabic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Arabic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Arabic/regex.js');

require('@unicode/unicode-4.0.1/Block/Arabic_Presentation_Forms_A/code-points.js');
require('@unicode/unicode-4.0.1/Block/Arabic_Presentation_Forms_A/symbols.js');
require('@unicode/unicode-4.0.1/Block/Arabic_Presentation_Forms_A/regex.js');

require('@unicode/unicode-4.0.1/Block/Arabic_Presentation_Forms_B/code-points.js');
require('@unicode/unicode-4.0.1/Block/Arabic_Presentation_Forms_B/symbols.js');
require('@unicode/unicode-4.0.1/Block/Arabic_Presentation_Forms_B/regex.js');

require('@unicode/unicode-4.0.1/Block/Armenian/code-points.js');
require('@unicode/unicode-4.0.1/Block/Armenian/symbols.js');
require('@unicode/unicode-4.0.1/Block/Armenian/regex.js');

require('@unicode/unicode-4.0.1/Block/Arrows/code-points.js');
require('@unicode/unicode-4.0.1/Block/Arrows/symbols.js');
require('@unicode/unicode-4.0.1/Block/Arrows/regex.js');

require('@unicode/unicode-4.0.1/Block/Basic_Latin/code-points.js');
require('@unicode/unicode-4.0.1/Block/Basic_Latin/symbols.js');
require('@unicode/unicode-4.0.1/Block/Basic_Latin/regex.js');

require('@unicode/unicode-4.0.1/Block/Bengali/code-points.js');
require('@unicode/unicode-4.0.1/Block/Bengali/symbols.js');
require('@unicode/unicode-4.0.1/Block/Bengali/regex.js');

require('@unicode/unicode-4.0.1/Block/Block_Elements/code-points.js');
require('@unicode/unicode-4.0.1/Block/Block_Elements/symbols.js');
require('@unicode/unicode-4.0.1/Block/Block_Elements/regex.js');

require('@unicode/unicode-4.0.1/Block/Bopomofo/code-points.js');
require('@unicode/unicode-4.0.1/Block/Bopomofo/symbols.js');
require('@unicode/unicode-4.0.1/Block/Bopomofo/regex.js');

require('@unicode/unicode-4.0.1/Block/Bopomofo_Extended/code-points.js');
require('@unicode/unicode-4.0.1/Block/Bopomofo_Extended/symbols.js');
require('@unicode/unicode-4.0.1/Block/Bopomofo_Extended/regex.js');

require('@unicode/unicode-4.0.1/Block/Box_Drawing/code-points.js');
require('@unicode/unicode-4.0.1/Block/Box_Drawing/symbols.js');
require('@unicode/unicode-4.0.1/Block/Box_Drawing/regex.js');

require('@unicode/unicode-4.0.1/Block/Braille_Patterns/code-points.js');
require('@unicode/unicode-4.0.1/Block/Braille_Patterns/symbols.js');
require('@unicode/unicode-4.0.1/Block/Braille_Patterns/regex.js');

require('@unicode/unicode-4.0.1/Block/Buhid/code-points.js');
require('@unicode/unicode-4.0.1/Block/Buhid/symbols.js');
require('@unicode/unicode-4.0.1/Block/Buhid/regex.js');

require('@unicode/unicode-4.0.1/Block/Byzantine_Musical_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Byzantine_Musical_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Byzantine_Musical_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Compatibility/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Forms/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Forms/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Forms/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Ideographs/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Ideographs/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Ideographs/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Ideographs_Supplement/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Ideographs_Supplement/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Compatibility_Ideographs_Supplement/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Radicals_Supplement/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Radicals_Supplement/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Radicals_Supplement/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Symbols_And_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Symbols_And_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Symbols_And_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_A/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_A/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_A/regex.js');

require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_B/code-points.js');
require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_B/symbols.js');
require('@unicode/unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_B/regex.js');

require('@unicode/unicode-4.0.1/Block/Cherokee/code-points.js');
require('@unicode/unicode-4.0.1/Block/Cherokee/symbols.js');
require('@unicode/unicode-4.0.1/Block/Cherokee/regex.js');

require('@unicode/unicode-4.0.1/Block/Combining_Diacritical_Marks/code-points.js');
require('@unicode/unicode-4.0.1/Block/Combining_Diacritical_Marks/symbols.js');
require('@unicode/unicode-4.0.1/Block/Combining_Diacritical_Marks/regex.js');

require('@unicode/unicode-4.0.1/Block/Combining_Diacritical_Marks_For_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Combining_Diacritical_Marks_For_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Combining_Diacritical_Marks_For_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Combining_Half_Marks/code-points.js');
require('@unicode/unicode-4.0.1/Block/Combining_Half_Marks/symbols.js');
require('@unicode/unicode-4.0.1/Block/Combining_Half_Marks/regex.js');

require('@unicode/unicode-4.0.1/Block/Control_Pictures/code-points.js');
require('@unicode/unicode-4.0.1/Block/Control_Pictures/symbols.js');
require('@unicode/unicode-4.0.1/Block/Control_Pictures/regex.js');

require('@unicode/unicode-4.0.1/Block/Currency_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Currency_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Currency_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Cypriot_Syllabary/code-points.js');
require('@unicode/unicode-4.0.1/Block/Cypriot_Syllabary/symbols.js');
require('@unicode/unicode-4.0.1/Block/Cypriot_Syllabary/regex.js');

require('@unicode/unicode-4.0.1/Block/Cyrillic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Cyrillic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Cyrillic/regex.js');

require('@unicode/unicode-4.0.1/Block/Cyrillic_Supplement/code-points.js');
require('@unicode/unicode-4.0.1/Block/Cyrillic_Supplement/symbols.js');
require('@unicode/unicode-4.0.1/Block/Cyrillic_Supplement/regex.js');

require('@unicode/unicode-4.0.1/Block/Deseret/code-points.js');
require('@unicode/unicode-4.0.1/Block/Deseret/symbols.js');
require('@unicode/unicode-4.0.1/Block/Deseret/regex.js');

require('@unicode/unicode-4.0.1/Block/Devanagari/code-points.js');
require('@unicode/unicode-4.0.1/Block/Devanagari/symbols.js');
require('@unicode/unicode-4.0.1/Block/Devanagari/regex.js');

require('@unicode/unicode-4.0.1/Block/Dingbats/code-points.js');
require('@unicode/unicode-4.0.1/Block/Dingbats/symbols.js');
require('@unicode/unicode-4.0.1/Block/Dingbats/regex.js');

require('@unicode/unicode-4.0.1/Block/Enclosed_Alphanumerics/code-points.js');
require('@unicode/unicode-4.0.1/Block/Enclosed_Alphanumerics/symbols.js');
require('@unicode/unicode-4.0.1/Block/Enclosed_Alphanumerics/regex.js');

require('@unicode/unicode-4.0.1/Block/Enclosed_CJK_Letters_And_Months/code-points.js');
require('@unicode/unicode-4.0.1/Block/Enclosed_CJK_Letters_And_Months/symbols.js');
require('@unicode/unicode-4.0.1/Block/Enclosed_CJK_Letters_And_Months/regex.js');

require('@unicode/unicode-4.0.1/Block/Ethiopic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Ethiopic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Ethiopic/regex.js');

require('@unicode/unicode-4.0.1/Block/General_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/Block/General_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/Block/General_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/Block/Geometric_Shapes/code-points.js');
require('@unicode/unicode-4.0.1/Block/Geometric_Shapes/symbols.js');
require('@unicode/unicode-4.0.1/Block/Geometric_Shapes/regex.js');

require('@unicode/unicode-4.0.1/Block/Georgian/code-points.js');
require('@unicode/unicode-4.0.1/Block/Georgian/symbols.js');
require('@unicode/unicode-4.0.1/Block/Georgian/regex.js');

require('@unicode/unicode-4.0.1/Block/Gothic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Gothic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Gothic/regex.js');

require('@unicode/unicode-4.0.1/Block/Greek_And_Coptic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Greek_And_Coptic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Greek_And_Coptic/regex.js');

require('@unicode/unicode-4.0.1/Block/Greek_Extended/code-points.js');
require('@unicode/unicode-4.0.1/Block/Greek_Extended/symbols.js');
require('@unicode/unicode-4.0.1/Block/Greek_Extended/regex.js');

require('@unicode/unicode-4.0.1/Block/Gujarati/code-points.js');
require('@unicode/unicode-4.0.1/Block/Gujarati/symbols.js');
require('@unicode/unicode-4.0.1/Block/Gujarati/regex.js');

require('@unicode/unicode-4.0.1/Block/Gurmukhi/code-points.js');
require('@unicode/unicode-4.0.1/Block/Gurmukhi/symbols.js');
require('@unicode/unicode-4.0.1/Block/Gurmukhi/regex.js');

require('@unicode/unicode-4.0.1/Block/Halfwidth_And_Fullwidth_Forms/code-points.js');
require('@unicode/unicode-4.0.1/Block/Halfwidth_And_Fullwidth_Forms/symbols.js');
require('@unicode/unicode-4.0.1/Block/Halfwidth_And_Fullwidth_Forms/regex.js');

require('@unicode/unicode-4.0.1/Block/Hangul_Compatibility_Jamo/code-points.js');
require('@unicode/unicode-4.0.1/Block/Hangul_Compatibility_Jamo/symbols.js');
require('@unicode/unicode-4.0.1/Block/Hangul_Compatibility_Jamo/regex.js');

require('@unicode/unicode-4.0.1/Block/Hangul_Jamo/code-points.js');
require('@unicode/unicode-4.0.1/Block/Hangul_Jamo/symbols.js');
require('@unicode/unicode-4.0.1/Block/Hangul_Jamo/regex.js');

require('@unicode/unicode-4.0.1/Block/Hangul_Syllables/code-points.js');
require('@unicode/unicode-4.0.1/Block/Hangul_Syllables/symbols.js');
require('@unicode/unicode-4.0.1/Block/Hangul_Syllables/regex.js');

require('@unicode/unicode-4.0.1/Block/Hanunoo/code-points.js');
require('@unicode/unicode-4.0.1/Block/Hanunoo/symbols.js');
require('@unicode/unicode-4.0.1/Block/Hanunoo/regex.js');

require('@unicode/unicode-4.0.1/Block/Hebrew/code-points.js');
require('@unicode/unicode-4.0.1/Block/Hebrew/symbols.js');
require('@unicode/unicode-4.0.1/Block/Hebrew/regex.js');

require('@unicode/unicode-4.0.1/Block/High_Private_Use_Surrogates/code-points.js');
require('@unicode/unicode-4.0.1/Block/High_Private_Use_Surrogates/symbols.js');
require('@unicode/unicode-4.0.1/Block/High_Private_Use_Surrogates/regex.js');

require('@unicode/unicode-4.0.1/Block/High_Surrogates/code-points.js');
require('@unicode/unicode-4.0.1/Block/High_Surrogates/symbols.js');
require('@unicode/unicode-4.0.1/Block/High_Surrogates/regex.js');

require('@unicode/unicode-4.0.1/Block/Hiragana/code-points.js');
require('@unicode/unicode-4.0.1/Block/Hiragana/symbols.js');
require('@unicode/unicode-4.0.1/Block/Hiragana/regex.js');

require('@unicode/unicode-4.0.1/Block/IPA_Extensions/code-points.js');
require('@unicode/unicode-4.0.1/Block/IPA_Extensions/symbols.js');
require('@unicode/unicode-4.0.1/Block/IPA_Extensions/regex.js');

require('@unicode/unicode-4.0.1/Block/Ideographic_Description_Characters/code-points.js');
require('@unicode/unicode-4.0.1/Block/Ideographic_Description_Characters/symbols.js');
require('@unicode/unicode-4.0.1/Block/Ideographic_Description_Characters/regex.js');

require('@unicode/unicode-4.0.1/Block/Kanbun/code-points.js');
require('@unicode/unicode-4.0.1/Block/Kanbun/symbols.js');
require('@unicode/unicode-4.0.1/Block/Kanbun/regex.js');

require('@unicode/unicode-4.0.1/Block/Kangxi_Radicals/code-points.js');
require('@unicode/unicode-4.0.1/Block/Kangxi_Radicals/symbols.js');
require('@unicode/unicode-4.0.1/Block/Kangxi_Radicals/regex.js');

require('@unicode/unicode-4.0.1/Block/Kannada/code-points.js');
require('@unicode/unicode-4.0.1/Block/Kannada/symbols.js');
require('@unicode/unicode-4.0.1/Block/Kannada/regex.js');

require('@unicode/unicode-4.0.1/Block/Katakana/code-points.js');
require('@unicode/unicode-4.0.1/Block/Katakana/symbols.js');
require('@unicode/unicode-4.0.1/Block/Katakana/regex.js');

require('@unicode/unicode-4.0.1/Block/Katakana_Phonetic_Extensions/code-points.js');
require('@unicode/unicode-4.0.1/Block/Katakana_Phonetic_Extensions/symbols.js');
require('@unicode/unicode-4.0.1/Block/Katakana_Phonetic_Extensions/regex.js');

require('@unicode/unicode-4.0.1/Block/Khmer/code-points.js');
require('@unicode/unicode-4.0.1/Block/Khmer/symbols.js');
require('@unicode/unicode-4.0.1/Block/Khmer/regex.js');

require('@unicode/unicode-4.0.1/Block/Khmer_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Khmer_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Khmer_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Lao/code-points.js');
require('@unicode/unicode-4.0.1/Block/Lao/symbols.js');
require('@unicode/unicode-4.0.1/Block/Lao/regex.js');

require('@unicode/unicode-4.0.1/Block/Latin_1_Supplement/code-points.js');
require('@unicode/unicode-4.0.1/Block/Latin_1_Supplement/symbols.js');
require('@unicode/unicode-4.0.1/Block/Latin_1_Supplement/regex.js');

require('@unicode/unicode-4.0.1/Block/Latin_Extended_A/code-points.js');
require('@unicode/unicode-4.0.1/Block/Latin_Extended_A/symbols.js');
require('@unicode/unicode-4.0.1/Block/Latin_Extended_A/regex.js');

require('@unicode/unicode-4.0.1/Block/Latin_Extended_Additional/code-points.js');
require('@unicode/unicode-4.0.1/Block/Latin_Extended_Additional/symbols.js');
require('@unicode/unicode-4.0.1/Block/Latin_Extended_Additional/regex.js');

require('@unicode/unicode-4.0.1/Block/Latin_Extended_B/code-points.js');
require('@unicode/unicode-4.0.1/Block/Latin_Extended_B/symbols.js');
require('@unicode/unicode-4.0.1/Block/Latin_Extended_B/regex.js');

require('@unicode/unicode-4.0.1/Block/Letterlike_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Letterlike_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Letterlike_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Limbu/code-points.js');
require('@unicode/unicode-4.0.1/Block/Limbu/symbols.js');
require('@unicode/unicode-4.0.1/Block/Limbu/regex.js');

require('@unicode/unicode-4.0.1/Block/Linear_B_Ideograms/code-points.js');
require('@unicode/unicode-4.0.1/Block/Linear_B_Ideograms/symbols.js');
require('@unicode/unicode-4.0.1/Block/Linear_B_Ideograms/regex.js');

require('@unicode/unicode-4.0.1/Block/Linear_B_Syllabary/code-points.js');
require('@unicode/unicode-4.0.1/Block/Linear_B_Syllabary/symbols.js');
require('@unicode/unicode-4.0.1/Block/Linear_B_Syllabary/regex.js');

require('@unicode/unicode-4.0.1/Block/Low_Surrogates/code-points.js');
require('@unicode/unicode-4.0.1/Block/Low_Surrogates/symbols.js');
require('@unicode/unicode-4.0.1/Block/Low_Surrogates/regex.js');

require('@unicode/unicode-4.0.1/Block/Malayalam/code-points.js');
require('@unicode/unicode-4.0.1/Block/Malayalam/symbols.js');
require('@unicode/unicode-4.0.1/Block/Malayalam/regex.js');

require('@unicode/unicode-4.0.1/Block/Mathematical_Alphanumeric_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Mathematical_Alphanumeric_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Mathematical_Alphanumeric_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Mathematical_Operators/code-points.js');
require('@unicode/unicode-4.0.1/Block/Mathematical_Operators/symbols.js');
require('@unicode/unicode-4.0.1/Block/Mathematical_Operators/regex.js');

require('@unicode/unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_A/code-points.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_A/symbols.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_A/regex.js');

require('@unicode/unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_B/code-points.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_B/symbols.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_B/regex.js');

require('@unicode/unicode-4.0.1/Block/Miscellaneous_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Miscellaneous_Symbols_And_Arrows/code-points.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Symbols_And_Arrows/symbols.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Symbols_And_Arrows/regex.js');

require('@unicode/unicode-4.0.1/Block/Miscellaneous_Technical/code-points.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Technical/symbols.js');
require('@unicode/unicode-4.0.1/Block/Miscellaneous_Technical/regex.js');

require('@unicode/unicode-4.0.1/Block/Mongolian/code-points.js');
require('@unicode/unicode-4.0.1/Block/Mongolian/symbols.js');
require('@unicode/unicode-4.0.1/Block/Mongolian/regex.js');

require('@unicode/unicode-4.0.1/Block/Musical_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Musical_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Musical_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Myanmar/code-points.js');
require('@unicode/unicode-4.0.1/Block/Myanmar/symbols.js');
require('@unicode/unicode-4.0.1/Block/Myanmar/regex.js');

require('@unicode/unicode-4.0.1/Block/Number_Forms/code-points.js');
require('@unicode/unicode-4.0.1/Block/Number_Forms/symbols.js');
require('@unicode/unicode-4.0.1/Block/Number_Forms/regex.js');

require('@unicode/unicode-4.0.1/Block/Ogham/code-points.js');
require('@unicode/unicode-4.0.1/Block/Ogham/symbols.js');
require('@unicode/unicode-4.0.1/Block/Ogham/regex.js');

require('@unicode/unicode-4.0.1/Block/Old_Italic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Old_Italic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Old_Italic/regex.js');

require('@unicode/unicode-4.0.1/Block/Optical_Character_Recognition/code-points.js');
require('@unicode/unicode-4.0.1/Block/Optical_Character_Recognition/symbols.js');
require('@unicode/unicode-4.0.1/Block/Optical_Character_Recognition/regex.js');

require('@unicode/unicode-4.0.1/Block/Oriya/code-points.js');
require('@unicode/unicode-4.0.1/Block/Oriya/symbols.js');
require('@unicode/unicode-4.0.1/Block/Oriya/regex.js');

require('@unicode/unicode-4.0.1/Block/Osmanya/code-points.js');
require('@unicode/unicode-4.0.1/Block/Osmanya/symbols.js');
require('@unicode/unicode-4.0.1/Block/Osmanya/regex.js');

require('@unicode/unicode-4.0.1/Block/Phonetic_Extensions/code-points.js');
require('@unicode/unicode-4.0.1/Block/Phonetic_Extensions/symbols.js');
require('@unicode/unicode-4.0.1/Block/Phonetic_Extensions/regex.js');

require('@unicode/unicode-4.0.1/Block/Private_Use_Area/code-points.js');
require('@unicode/unicode-4.0.1/Block/Private_Use_Area/symbols.js');
require('@unicode/unicode-4.0.1/Block/Private_Use_Area/regex.js');

require('@unicode/unicode-4.0.1/Block/Runic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Runic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Runic/regex.js');

require('@unicode/unicode-4.0.1/Block/Shavian/code-points.js');
require('@unicode/unicode-4.0.1/Block/Shavian/symbols.js');
require('@unicode/unicode-4.0.1/Block/Shavian/regex.js');

require('@unicode/unicode-4.0.1/Block/Sinhala/code-points.js');
require('@unicode/unicode-4.0.1/Block/Sinhala/symbols.js');
require('@unicode/unicode-4.0.1/Block/Sinhala/regex.js');

require('@unicode/unicode-4.0.1/Block/Small_Form_Variants/code-points.js');
require('@unicode/unicode-4.0.1/Block/Small_Form_Variants/symbols.js');
require('@unicode/unicode-4.0.1/Block/Small_Form_Variants/regex.js');

require('@unicode/unicode-4.0.1/Block/Spacing_Modifier_Letters/code-points.js');
require('@unicode/unicode-4.0.1/Block/Spacing_Modifier_Letters/symbols.js');
require('@unicode/unicode-4.0.1/Block/Spacing_Modifier_Letters/regex.js');

require('@unicode/unicode-4.0.1/Block/Specials/code-points.js');
require('@unicode/unicode-4.0.1/Block/Specials/symbols.js');
require('@unicode/unicode-4.0.1/Block/Specials/regex.js');

require('@unicode/unicode-4.0.1/Block/Superscripts_And_Subscripts/code-points.js');
require('@unicode/unicode-4.0.1/Block/Superscripts_And_Subscripts/symbols.js');
require('@unicode/unicode-4.0.1/Block/Superscripts_And_Subscripts/regex.js');

require('@unicode/unicode-4.0.1/Block/Supplemental_Arrows_A/code-points.js');
require('@unicode/unicode-4.0.1/Block/Supplemental_Arrows_A/symbols.js');
require('@unicode/unicode-4.0.1/Block/Supplemental_Arrows_A/regex.js');

require('@unicode/unicode-4.0.1/Block/Supplemental_Arrows_B/code-points.js');
require('@unicode/unicode-4.0.1/Block/Supplemental_Arrows_B/symbols.js');
require('@unicode/unicode-4.0.1/Block/Supplemental_Arrows_B/regex.js');

require('@unicode/unicode-4.0.1/Block/Supplemental_Mathematical_Operators/code-points.js');
require('@unicode/unicode-4.0.1/Block/Supplemental_Mathematical_Operators/symbols.js');
require('@unicode/unicode-4.0.1/Block/Supplemental_Mathematical_Operators/regex.js');

require('@unicode/unicode-4.0.1/Block/Supplementary_Private_Use_Area_A/code-points.js');
require('@unicode/unicode-4.0.1/Block/Supplementary_Private_Use_Area_A/symbols.js');
require('@unicode/unicode-4.0.1/Block/Supplementary_Private_Use_Area_A/regex.js');

require('@unicode/unicode-4.0.1/Block/Supplementary_Private_Use_Area_B/code-points.js');
require('@unicode/unicode-4.0.1/Block/Supplementary_Private_Use_Area_B/symbols.js');
require('@unicode/unicode-4.0.1/Block/Supplementary_Private_Use_Area_B/regex.js');

require('@unicode/unicode-4.0.1/Block/Syriac/code-points.js');
require('@unicode/unicode-4.0.1/Block/Syriac/symbols.js');
require('@unicode/unicode-4.0.1/Block/Syriac/regex.js');

require('@unicode/unicode-4.0.1/Block/Tagalog/code-points.js');
require('@unicode/unicode-4.0.1/Block/Tagalog/symbols.js');
require('@unicode/unicode-4.0.1/Block/Tagalog/regex.js');

require('@unicode/unicode-4.0.1/Block/Tagbanwa/code-points.js');
require('@unicode/unicode-4.0.1/Block/Tagbanwa/symbols.js');
require('@unicode/unicode-4.0.1/Block/Tagbanwa/regex.js');

require('@unicode/unicode-4.0.1/Block/Tags/code-points.js');
require('@unicode/unicode-4.0.1/Block/Tags/symbols.js');
require('@unicode/unicode-4.0.1/Block/Tags/regex.js');

require('@unicode/unicode-4.0.1/Block/Tai_Le/code-points.js');
require('@unicode/unicode-4.0.1/Block/Tai_Le/symbols.js');
require('@unicode/unicode-4.0.1/Block/Tai_Le/regex.js');

require('@unicode/unicode-4.0.1/Block/Tai_Xuan_Jing_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Tai_Xuan_Jing_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Tai_Xuan_Jing_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Block/Tamil/code-points.js');
require('@unicode/unicode-4.0.1/Block/Tamil/symbols.js');
require('@unicode/unicode-4.0.1/Block/Tamil/regex.js');

require('@unicode/unicode-4.0.1/Block/Telugu/code-points.js');
require('@unicode/unicode-4.0.1/Block/Telugu/symbols.js');
require('@unicode/unicode-4.0.1/Block/Telugu/regex.js');

require('@unicode/unicode-4.0.1/Block/Thaana/code-points.js');
require('@unicode/unicode-4.0.1/Block/Thaana/symbols.js');
require('@unicode/unicode-4.0.1/Block/Thaana/regex.js');

require('@unicode/unicode-4.0.1/Block/Thai/code-points.js');
require('@unicode/unicode-4.0.1/Block/Thai/symbols.js');
require('@unicode/unicode-4.0.1/Block/Thai/regex.js');

require('@unicode/unicode-4.0.1/Block/Tibetan/code-points.js');
require('@unicode/unicode-4.0.1/Block/Tibetan/symbols.js');
require('@unicode/unicode-4.0.1/Block/Tibetan/regex.js');

require('@unicode/unicode-4.0.1/Block/Ugaritic/code-points.js');
require('@unicode/unicode-4.0.1/Block/Ugaritic/symbols.js');
require('@unicode/unicode-4.0.1/Block/Ugaritic/regex.js');

require('@unicode/unicode-4.0.1/Block/Unified_Canadian_Aboriginal_Syllabics/code-points.js');
require('@unicode/unicode-4.0.1/Block/Unified_Canadian_Aboriginal_Syllabics/symbols.js');
require('@unicode/unicode-4.0.1/Block/Unified_Canadian_Aboriginal_Syllabics/regex.js');

require('@unicode/unicode-4.0.1/Block/Variation_Selectors/code-points.js');
require('@unicode/unicode-4.0.1/Block/Variation_Selectors/symbols.js');
require('@unicode/unicode-4.0.1/Block/Variation_Selectors/regex.js');

require('@unicode/unicode-4.0.1/Block/Variation_Selectors_Supplement/code-points.js');
require('@unicode/unicode-4.0.1/Block/Variation_Selectors_Supplement/symbols.js');
require('@unicode/unicode-4.0.1/Block/Variation_Selectors_Supplement/regex.js');

require('@unicode/unicode-4.0.1/Block/Yi_Radicals/code-points.js');
require('@unicode/unicode-4.0.1/Block/Yi_Radicals/symbols.js');
require('@unicode/unicode-4.0.1/Block/Yi_Radicals/regex.js');

require('@unicode/unicode-4.0.1/Block/Yi_Syllables/code-points.js');
require('@unicode/unicode-4.0.1/Block/Yi_Syllables/symbols.js');
require('@unicode/unicode-4.0.1/Block/Yi_Syllables/regex.js');

require('@unicode/unicode-4.0.1/Block/Yijing_Hexagram_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Block/Yijing_Hexagram_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Block/Yijing_Hexagram_Symbols/regex.js');

// `Line_Break`:

require('@unicode/unicode-4.0.1/Line_Break/Alphabetic/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Alphabetic/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Alphabetic/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Ambiguous/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Ambiguous/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Ambiguous/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Break_After/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_After/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_After/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Break_Before/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_Before/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_Before/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Break_Both/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_Both/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_Both/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Break_Symbols/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_Symbols/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Break_Symbols/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Carriage_Return/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Carriage_Return/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Carriage_Return/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Close_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Close_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Close_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Combining_Mark/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Combining_Mark/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Combining_Mark/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Complex_Context/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Complex_Context/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Complex_Context/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Contingent_Break/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Contingent_Break/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Contingent_Break/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Exclamation/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Exclamation/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Exclamation/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Glue/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Glue/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Glue/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Hyphen/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Hyphen/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Hyphen/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Ideographic/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Ideographic/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Ideographic/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Infix_Numeric/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Infix_Numeric/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Infix_Numeric/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Inseparable/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Inseparable/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Inseparable/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Line_Feed/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Line_Feed/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Line_Feed/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Mandatory_Break/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Mandatory_Break/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Mandatory_Break/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Next_Line/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Next_Line/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Next_Line/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Nonstarter/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Nonstarter/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Nonstarter/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Numeric/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Numeric/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Numeric/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Open_Punctuation/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Open_Punctuation/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Open_Punctuation/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Postfix_Numeric/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Postfix_Numeric/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Postfix_Numeric/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Prefix_Numeric/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Prefix_Numeric/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Prefix_Numeric/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Quotation/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Quotation/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Quotation/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Space/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Space/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Space/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Surrogate/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Surrogate/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Surrogate/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Unknown/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Unknown/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Unknown/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/Word_Joiner/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/Word_Joiner/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/Word_Joiner/regex.js');

require('@unicode/unicode-4.0.1/Line_Break/ZWSpace/code-points.js');
require('@unicode/unicode-4.0.1/Line_Break/ZWSpace/symbols.js');
require('@unicode/unicode-4.0.1/Line_Break/ZWSpace/regex.js');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
