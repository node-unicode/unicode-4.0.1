# Unicode v4.0.1 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v4.0.1’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).**

## Installation

```bash
npm install unicode-4.0.1 --save-dev
```

**Note:** _unicode-4.0.1_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('unicode-6.3.0/Script_Extensions/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/Script_Extensions/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('unicode-4.0.1/General_Category/Uppercase_Letter/code-points');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('unicode-4.0.1/General_Category/Uppercase_Letter/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('unicode-4.0.1/General_Category/Uppercase_Letter/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('unicode-4.0.1/General_Category').get(0x41);
// Get an array of all code points with a given bidi class:
const on = require('unicode-4.0.1/Bidi_Class/Other_Neutral/code-points');
// Get a map from code points to bidi classes:
const bidiClassMap = require('unicode-4.0.1/Bidi_Class');
// Get the directionality of a given code point:
const directionality = require('unicode-4.0.1/Bidi_Class').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v4.0.1:

```js
// `Binary_Property`:

require('unicode-4.0.1/Binary_Property/ASCII/code-points');
require('unicode-4.0.1/Binary_Property/ASCII/symbols');
require('unicode-4.0.1/Binary_Property/ASCII/regex');

require('unicode-4.0.1/Binary_Property/ASCII_Hex_Digit/code-points');
require('unicode-4.0.1/Binary_Property/ASCII_Hex_Digit/symbols');
require('unicode-4.0.1/Binary_Property/ASCII_Hex_Digit/regex');

require('unicode-4.0.1/Binary_Property/Alphabetic/code-points');
require('unicode-4.0.1/Binary_Property/Alphabetic/symbols');
require('unicode-4.0.1/Binary_Property/Alphabetic/regex');

require('unicode-4.0.1/Binary_Property/Any/code-points');
require('unicode-4.0.1/Binary_Property/Any/symbols');
require('unicode-4.0.1/Binary_Property/Any/regex');

require('unicode-4.0.1/Binary_Property/Assigned/code-points');
require('unicode-4.0.1/Binary_Property/Assigned/symbols');
require('unicode-4.0.1/Binary_Property/Assigned/regex');

require('unicode-4.0.1/Binary_Property/Bidi_Control/code-points');
require('unicode-4.0.1/Binary_Property/Bidi_Control/symbols');
require('unicode-4.0.1/Binary_Property/Bidi_Control/regex');

require('unicode-4.0.1/Binary_Property/Bidi_Mirrored/code-points');
require('unicode-4.0.1/Binary_Property/Bidi_Mirrored/symbols');
require('unicode-4.0.1/Binary_Property/Bidi_Mirrored/regex');

require('unicode-4.0.1/Binary_Property/Dash/code-points');
require('unicode-4.0.1/Binary_Property/Dash/symbols');
require('unicode-4.0.1/Binary_Property/Dash/regex');

require('unicode-4.0.1/Binary_Property/Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.1/Binary_Property/Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.1/Binary_Property/Default_Ignorable_Code_Point/regex');

require('unicode-4.0.1/Binary_Property/Deprecated/code-points');
require('unicode-4.0.1/Binary_Property/Deprecated/symbols');
require('unicode-4.0.1/Binary_Property/Deprecated/regex');

require('unicode-4.0.1/Binary_Property/Diacritic/code-points');
require('unicode-4.0.1/Binary_Property/Diacritic/symbols');
require('unicode-4.0.1/Binary_Property/Diacritic/regex');

require('unicode-4.0.1/Binary_Property/Expands_On_NFC/code-points');
require('unicode-4.0.1/Binary_Property/Expands_On_NFC/symbols');
require('unicode-4.0.1/Binary_Property/Expands_On_NFC/regex');

require('unicode-4.0.1/Binary_Property/Expands_On_NFD/code-points');
require('unicode-4.0.1/Binary_Property/Expands_On_NFD/symbols');
require('unicode-4.0.1/Binary_Property/Expands_On_NFD/regex');

require('unicode-4.0.1/Binary_Property/Expands_On_NFKC/code-points');
require('unicode-4.0.1/Binary_Property/Expands_On_NFKC/symbols');
require('unicode-4.0.1/Binary_Property/Expands_On_NFKC/regex');

require('unicode-4.0.1/Binary_Property/Expands_On_NFKD/code-points');
require('unicode-4.0.1/Binary_Property/Expands_On_NFKD/symbols');
require('unicode-4.0.1/Binary_Property/Expands_On_NFKD/regex');

require('unicode-4.0.1/Binary_Property/Extender/code-points');
require('unicode-4.0.1/Binary_Property/Extender/symbols');
require('unicode-4.0.1/Binary_Property/Extender/regex');

require('unicode-4.0.1/Binary_Property/FC_NFKC_Closure/code-points');
require('unicode-4.0.1/Binary_Property/FC_NFKC_Closure/symbols');
require('unicode-4.0.1/Binary_Property/FC_NFKC_Closure/regex');

require('unicode-4.0.1/Binary_Property/Full_Composition_Exclusion/code-points');
require('unicode-4.0.1/Binary_Property/Full_Composition_Exclusion/symbols');
require('unicode-4.0.1/Binary_Property/Full_Composition_Exclusion/regex');

require('unicode-4.0.1/Binary_Property/Grapheme_Base/code-points');
require('unicode-4.0.1/Binary_Property/Grapheme_Base/symbols');
require('unicode-4.0.1/Binary_Property/Grapheme_Base/regex');

require('unicode-4.0.1/Binary_Property/Grapheme_Extend/code-points');
require('unicode-4.0.1/Binary_Property/Grapheme_Extend/symbols');
require('unicode-4.0.1/Binary_Property/Grapheme_Extend/regex');

require('unicode-4.0.1/Binary_Property/Grapheme_Link/code-points');
require('unicode-4.0.1/Binary_Property/Grapheme_Link/symbols');
require('unicode-4.0.1/Binary_Property/Grapheme_Link/regex');

require('unicode-4.0.1/Binary_Property/Hex_Digit/code-points');
require('unicode-4.0.1/Binary_Property/Hex_Digit/symbols');
require('unicode-4.0.1/Binary_Property/Hex_Digit/regex');

require('unicode-4.0.1/Binary_Property/Hyphen/code-points');
require('unicode-4.0.1/Binary_Property/Hyphen/symbols');
require('unicode-4.0.1/Binary_Property/Hyphen/regex');

require('unicode-4.0.1/Binary_Property/IDS_Binary_Operator/code-points');
require('unicode-4.0.1/Binary_Property/IDS_Binary_Operator/symbols');
require('unicode-4.0.1/Binary_Property/IDS_Binary_Operator/regex');

require('unicode-4.0.1/Binary_Property/IDS_Trinary_Operator/code-points');
require('unicode-4.0.1/Binary_Property/IDS_Trinary_Operator/symbols');
require('unicode-4.0.1/Binary_Property/IDS_Trinary_Operator/regex');

require('unicode-4.0.1/Binary_Property/ID_Continue/code-points');
require('unicode-4.0.1/Binary_Property/ID_Continue/symbols');
require('unicode-4.0.1/Binary_Property/ID_Continue/regex');

require('unicode-4.0.1/Binary_Property/ID_Start/code-points');
require('unicode-4.0.1/Binary_Property/ID_Start/symbols');
require('unicode-4.0.1/Binary_Property/ID_Start/regex');

require('unicode-4.0.1/Binary_Property/Ideographic/code-points');
require('unicode-4.0.1/Binary_Property/Ideographic/symbols');
require('unicode-4.0.1/Binary_Property/Ideographic/regex');

require('unicode-4.0.1/Binary_Property/Join_Control/code-points');
require('unicode-4.0.1/Binary_Property/Join_Control/symbols');
require('unicode-4.0.1/Binary_Property/Join_Control/regex');

require('unicode-4.0.1/Binary_Property/Logical_Order_Exception/code-points');
require('unicode-4.0.1/Binary_Property/Logical_Order_Exception/symbols');
require('unicode-4.0.1/Binary_Property/Logical_Order_Exception/regex');

require('unicode-4.0.1/Binary_Property/Lowercase/code-points');
require('unicode-4.0.1/Binary_Property/Lowercase/symbols');
require('unicode-4.0.1/Binary_Property/Lowercase/regex');

require('unicode-4.0.1/Binary_Property/Math/code-points');
require('unicode-4.0.1/Binary_Property/Math/symbols');
require('unicode-4.0.1/Binary_Property/Math/regex');

require('unicode-4.0.1/Binary_Property/Noncharacter_Code_Point/code-points');
require('unicode-4.0.1/Binary_Property/Noncharacter_Code_Point/symbols');
require('unicode-4.0.1/Binary_Property/Noncharacter_Code_Point/regex');

require('unicode-4.0.1/Binary_Property/Other_Alphabetic/code-points');
require('unicode-4.0.1/Binary_Property/Other_Alphabetic/symbols');
require('unicode-4.0.1/Binary_Property/Other_Alphabetic/regex');

require('unicode-4.0.1/Binary_Property/Other_Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.1/Binary_Property/Other_Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.1/Binary_Property/Other_Default_Ignorable_Code_Point/regex');

require('unicode-4.0.1/Binary_Property/Other_Grapheme_Extend/code-points');
require('unicode-4.0.1/Binary_Property/Other_Grapheme_Extend/symbols');
require('unicode-4.0.1/Binary_Property/Other_Grapheme_Extend/regex');

require('unicode-4.0.1/Binary_Property/Other_ID_Start/code-points');
require('unicode-4.0.1/Binary_Property/Other_ID_Start/symbols');
require('unicode-4.0.1/Binary_Property/Other_ID_Start/regex');

require('unicode-4.0.1/Binary_Property/Other_Lowercase/code-points');
require('unicode-4.0.1/Binary_Property/Other_Lowercase/symbols');
require('unicode-4.0.1/Binary_Property/Other_Lowercase/regex');

require('unicode-4.0.1/Binary_Property/Other_Math/code-points');
require('unicode-4.0.1/Binary_Property/Other_Math/symbols');
require('unicode-4.0.1/Binary_Property/Other_Math/regex');

require('unicode-4.0.1/Binary_Property/Other_Uppercase/code-points');
require('unicode-4.0.1/Binary_Property/Other_Uppercase/symbols');
require('unicode-4.0.1/Binary_Property/Other_Uppercase/regex');

require('unicode-4.0.1/Binary_Property/Quotation_Mark/code-points');
require('unicode-4.0.1/Binary_Property/Quotation_Mark/symbols');
require('unicode-4.0.1/Binary_Property/Quotation_Mark/regex');

require('unicode-4.0.1/Binary_Property/Radical/code-points');
require('unicode-4.0.1/Binary_Property/Radical/symbols');
require('unicode-4.0.1/Binary_Property/Radical/regex');

require('unicode-4.0.1/Binary_Property/STerm/code-points');
require('unicode-4.0.1/Binary_Property/STerm/symbols');
require('unicode-4.0.1/Binary_Property/STerm/regex');

require('unicode-4.0.1/Binary_Property/Soft_Dotted/code-points');
require('unicode-4.0.1/Binary_Property/Soft_Dotted/symbols');
require('unicode-4.0.1/Binary_Property/Soft_Dotted/regex');

require('unicode-4.0.1/Binary_Property/Terminal_Punctuation/code-points');
require('unicode-4.0.1/Binary_Property/Terminal_Punctuation/symbols');
require('unicode-4.0.1/Binary_Property/Terminal_Punctuation/regex');

require('unicode-4.0.1/Binary_Property/Unified_Ideograph/code-points');
require('unicode-4.0.1/Binary_Property/Unified_Ideograph/symbols');
require('unicode-4.0.1/Binary_Property/Unified_Ideograph/regex');

require('unicode-4.0.1/Binary_Property/Uppercase/code-points');
require('unicode-4.0.1/Binary_Property/Uppercase/symbols');
require('unicode-4.0.1/Binary_Property/Uppercase/regex');

require('unicode-4.0.1/Binary_Property/Variation_Selector/code-points');
require('unicode-4.0.1/Binary_Property/Variation_Selector/symbols');
require('unicode-4.0.1/Binary_Property/Variation_Selector/regex');

require('unicode-4.0.1/Binary_Property/White_Space/code-points');
require('unicode-4.0.1/Binary_Property/White_Space/symbols');
require('unicode-4.0.1/Binary_Property/White_Space/regex');

require('unicode-4.0.1/Binary_Property/XID_Continue/code-points');
require('unicode-4.0.1/Binary_Property/XID_Continue/symbols');
require('unicode-4.0.1/Binary_Property/XID_Continue/regex');

require('unicode-4.0.1/Binary_Property/XID_Start/code-points');
require('unicode-4.0.1/Binary_Property/XID_Start/symbols');
require('unicode-4.0.1/Binary_Property/XID_Start/regex');

// `General_Category`:

require('unicode-4.0.1/General_Category').get(codePoint); // lookup map

require('unicode-4.0.1/General_Category/Cased_Letter/code-points');
require('unicode-4.0.1/General_Category/Cased_Letter/symbols');
require('unicode-4.0.1/General_Category/Cased_Letter/regex');

require('unicode-4.0.1/General_Category/Close_Punctuation/code-points');
require('unicode-4.0.1/General_Category/Close_Punctuation/symbols');
require('unicode-4.0.1/General_Category/Close_Punctuation/regex');

require('unicode-4.0.1/General_Category/Connector_Punctuation/code-points');
require('unicode-4.0.1/General_Category/Connector_Punctuation/symbols');
require('unicode-4.0.1/General_Category/Connector_Punctuation/regex');

require('unicode-4.0.1/General_Category/Control/code-points');
require('unicode-4.0.1/General_Category/Control/symbols');
require('unicode-4.0.1/General_Category/Control/regex');

require('unicode-4.0.1/General_Category/Currency_Symbol/code-points');
require('unicode-4.0.1/General_Category/Currency_Symbol/symbols');
require('unicode-4.0.1/General_Category/Currency_Symbol/regex');

require('unicode-4.0.1/General_Category/Dash_Punctuation/code-points');
require('unicode-4.0.1/General_Category/Dash_Punctuation/symbols');
require('unicode-4.0.1/General_Category/Dash_Punctuation/regex');

require('unicode-4.0.1/General_Category/Decimal_Number/code-points');
require('unicode-4.0.1/General_Category/Decimal_Number/symbols');
require('unicode-4.0.1/General_Category/Decimal_Number/regex');

require('unicode-4.0.1/General_Category/Enclosing_Mark/code-points');
require('unicode-4.0.1/General_Category/Enclosing_Mark/symbols');
require('unicode-4.0.1/General_Category/Enclosing_Mark/regex');

require('unicode-4.0.1/General_Category/Final_Punctuation/code-points');
require('unicode-4.0.1/General_Category/Final_Punctuation/symbols');
require('unicode-4.0.1/General_Category/Final_Punctuation/regex');

require('unicode-4.0.1/General_Category/Format/code-points');
require('unicode-4.0.1/General_Category/Format/symbols');
require('unicode-4.0.1/General_Category/Format/regex');

require('unicode-4.0.1/General_Category/Initial_Punctuation/code-points');
require('unicode-4.0.1/General_Category/Initial_Punctuation/symbols');
require('unicode-4.0.1/General_Category/Initial_Punctuation/regex');

require('unicode-4.0.1/General_Category/Letter/code-points');
require('unicode-4.0.1/General_Category/Letter/symbols');
require('unicode-4.0.1/General_Category/Letter/regex');

require('unicode-4.0.1/General_Category/Letter_Number/code-points');
require('unicode-4.0.1/General_Category/Letter_Number/symbols');
require('unicode-4.0.1/General_Category/Letter_Number/regex');

require('unicode-4.0.1/General_Category/Line_Separator/code-points');
require('unicode-4.0.1/General_Category/Line_Separator/symbols');
require('unicode-4.0.1/General_Category/Line_Separator/regex');

require('unicode-4.0.1/General_Category/Lowercase_Letter/code-points');
require('unicode-4.0.1/General_Category/Lowercase_Letter/symbols');
require('unicode-4.0.1/General_Category/Lowercase_Letter/regex');

require('unicode-4.0.1/General_Category/Mark/code-points');
require('unicode-4.0.1/General_Category/Mark/symbols');
require('unicode-4.0.1/General_Category/Mark/regex');

require('unicode-4.0.1/General_Category/Math_Symbol/code-points');
require('unicode-4.0.1/General_Category/Math_Symbol/symbols');
require('unicode-4.0.1/General_Category/Math_Symbol/regex');

require('unicode-4.0.1/General_Category/Modifier_Letter/code-points');
require('unicode-4.0.1/General_Category/Modifier_Letter/symbols');
require('unicode-4.0.1/General_Category/Modifier_Letter/regex');

require('unicode-4.0.1/General_Category/Modifier_Symbol/code-points');
require('unicode-4.0.1/General_Category/Modifier_Symbol/symbols');
require('unicode-4.0.1/General_Category/Modifier_Symbol/regex');

require('unicode-4.0.1/General_Category/Nonspacing_Mark/code-points');
require('unicode-4.0.1/General_Category/Nonspacing_Mark/symbols');
require('unicode-4.0.1/General_Category/Nonspacing_Mark/regex');

require('unicode-4.0.1/General_Category/Number/code-points');
require('unicode-4.0.1/General_Category/Number/symbols');
require('unicode-4.0.1/General_Category/Number/regex');

require('unicode-4.0.1/General_Category/Open_Punctuation/code-points');
require('unicode-4.0.1/General_Category/Open_Punctuation/symbols');
require('unicode-4.0.1/General_Category/Open_Punctuation/regex');

require('unicode-4.0.1/General_Category/Other/code-points');
require('unicode-4.0.1/General_Category/Other/symbols');
require('unicode-4.0.1/General_Category/Other/regex');

require('unicode-4.0.1/General_Category/Other_Letter/code-points');
require('unicode-4.0.1/General_Category/Other_Letter/symbols');
require('unicode-4.0.1/General_Category/Other_Letter/regex');

require('unicode-4.0.1/General_Category/Other_Number/code-points');
require('unicode-4.0.1/General_Category/Other_Number/symbols');
require('unicode-4.0.1/General_Category/Other_Number/regex');

require('unicode-4.0.1/General_Category/Other_Punctuation/code-points');
require('unicode-4.0.1/General_Category/Other_Punctuation/symbols');
require('unicode-4.0.1/General_Category/Other_Punctuation/regex');

require('unicode-4.0.1/General_Category/Other_Symbol/code-points');
require('unicode-4.0.1/General_Category/Other_Symbol/symbols');
require('unicode-4.0.1/General_Category/Other_Symbol/regex');

require('unicode-4.0.1/General_Category/Paragraph_Separator/code-points');
require('unicode-4.0.1/General_Category/Paragraph_Separator/symbols');
require('unicode-4.0.1/General_Category/Paragraph_Separator/regex');

require('unicode-4.0.1/General_Category/Private_Use/code-points');
require('unicode-4.0.1/General_Category/Private_Use/symbols');
require('unicode-4.0.1/General_Category/Private_Use/regex');

require('unicode-4.0.1/General_Category/Punctuation/code-points');
require('unicode-4.0.1/General_Category/Punctuation/symbols');
require('unicode-4.0.1/General_Category/Punctuation/regex');

require('unicode-4.0.1/General_Category/Separator/code-points');
require('unicode-4.0.1/General_Category/Separator/symbols');
require('unicode-4.0.1/General_Category/Separator/regex');

require('unicode-4.0.1/General_Category/Space_Separator/code-points');
require('unicode-4.0.1/General_Category/Space_Separator/symbols');
require('unicode-4.0.1/General_Category/Space_Separator/regex');

require('unicode-4.0.1/General_Category/Spacing_Mark/code-points');
require('unicode-4.0.1/General_Category/Spacing_Mark/symbols');
require('unicode-4.0.1/General_Category/Spacing_Mark/regex');

require('unicode-4.0.1/General_Category/Surrogate/code-points');
require('unicode-4.0.1/General_Category/Surrogate/symbols');
require('unicode-4.0.1/General_Category/Surrogate/regex');

require('unicode-4.0.1/General_Category/Symbol/code-points');
require('unicode-4.0.1/General_Category/Symbol/symbols');
require('unicode-4.0.1/General_Category/Symbol/regex');

require('unicode-4.0.1/General_Category/Titlecase_Letter/code-points');
require('unicode-4.0.1/General_Category/Titlecase_Letter/symbols');
require('unicode-4.0.1/General_Category/Titlecase_Letter/regex');

require('unicode-4.0.1/General_Category/Unassigned/code-points');
require('unicode-4.0.1/General_Category/Unassigned/symbols');
require('unicode-4.0.1/General_Category/Unassigned/regex');

require('unicode-4.0.1/General_Category/Uppercase_Letter/code-points');
require('unicode-4.0.1/General_Category/Uppercase_Letter/symbols');
require('unicode-4.0.1/General_Category/Uppercase_Letter/regex');

// `Bidi_Class`:

require('unicode-4.0.1/Bidi_Class').get(codePoint); // lookup map

require('unicode-4.0.1/Bidi_Class/Arabic_Letter/code-points');
require('unicode-4.0.1/Bidi_Class/Arabic_Letter/symbols');
require('unicode-4.0.1/Bidi_Class/Arabic_Letter/regex');

require('unicode-4.0.1/Bidi_Class/Arabic_Number/code-points');
require('unicode-4.0.1/Bidi_Class/Arabic_Number/symbols');
require('unicode-4.0.1/Bidi_Class/Arabic_Number/regex');

require('unicode-4.0.1/Bidi_Class/Boundary_Neutral/code-points');
require('unicode-4.0.1/Bidi_Class/Boundary_Neutral/symbols');
require('unicode-4.0.1/Bidi_Class/Boundary_Neutral/regex');

require('unicode-4.0.1/Bidi_Class/Common_Separator/code-points');
require('unicode-4.0.1/Bidi_Class/Common_Separator/symbols');
require('unicode-4.0.1/Bidi_Class/Common_Separator/regex');

require('unicode-4.0.1/Bidi_Class/European_Number/code-points');
require('unicode-4.0.1/Bidi_Class/European_Number/symbols');
require('unicode-4.0.1/Bidi_Class/European_Number/regex');

require('unicode-4.0.1/Bidi_Class/European_Separator/code-points');
require('unicode-4.0.1/Bidi_Class/European_Separator/symbols');
require('unicode-4.0.1/Bidi_Class/European_Separator/regex');

require('unicode-4.0.1/Bidi_Class/European_Terminator/code-points');
require('unicode-4.0.1/Bidi_Class/European_Terminator/symbols');
require('unicode-4.0.1/Bidi_Class/European_Terminator/regex');

require('unicode-4.0.1/Bidi_Class/Left_To_Right/code-points');
require('unicode-4.0.1/Bidi_Class/Left_To_Right/symbols');
require('unicode-4.0.1/Bidi_Class/Left_To_Right/regex');

require('unicode-4.0.1/Bidi_Class/Left_To_Right_Embedding/code-points');
require('unicode-4.0.1/Bidi_Class/Left_To_Right_Embedding/symbols');
require('unicode-4.0.1/Bidi_Class/Left_To_Right_Embedding/regex');

require('unicode-4.0.1/Bidi_Class/Left_To_Right_Override/code-points');
require('unicode-4.0.1/Bidi_Class/Left_To_Right_Override/symbols');
require('unicode-4.0.1/Bidi_Class/Left_To_Right_Override/regex');

require('unicode-4.0.1/Bidi_Class/Nonspacing_Mark/code-points');
require('unicode-4.0.1/Bidi_Class/Nonspacing_Mark/symbols');
require('unicode-4.0.1/Bidi_Class/Nonspacing_Mark/regex');

require('unicode-4.0.1/Bidi_Class/Other_Neutral/code-points');
require('unicode-4.0.1/Bidi_Class/Other_Neutral/symbols');
require('unicode-4.0.1/Bidi_Class/Other_Neutral/regex');

require('unicode-4.0.1/Bidi_Class/Paragraph_Separator/code-points');
require('unicode-4.0.1/Bidi_Class/Paragraph_Separator/symbols');
require('unicode-4.0.1/Bidi_Class/Paragraph_Separator/regex');

require('unicode-4.0.1/Bidi_Class/Pop_Directional_Format/code-points');
require('unicode-4.0.1/Bidi_Class/Pop_Directional_Format/symbols');
require('unicode-4.0.1/Bidi_Class/Pop_Directional_Format/regex');

require('unicode-4.0.1/Bidi_Class/Right_To_Left/code-points');
require('unicode-4.0.1/Bidi_Class/Right_To_Left/symbols');
require('unicode-4.0.1/Bidi_Class/Right_To_Left/regex');

require('unicode-4.0.1/Bidi_Class/Right_To_Left_Embedding/code-points');
require('unicode-4.0.1/Bidi_Class/Right_To_Left_Embedding/symbols');
require('unicode-4.0.1/Bidi_Class/Right_To_Left_Embedding/regex');

require('unicode-4.0.1/Bidi_Class/Right_To_Left_Override/code-points');
require('unicode-4.0.1/Bidi_Class/Right_To_Left_Override/symbols');
require('unicode-4.0.1/Bidi_Class/Right_To_Left_Override/regex');

require('unicode-4.0.1/Bidi_Class/Segment_Separator/code-points');
require('unicode-4.0.1/Bidi_Class/Segment_Separator/symbols');
require('unicode-4.0.1/Bidi_Class/Segment_Separator/regex');

require('unicode-4.0.1/Bidi_Class/White_Space/code-points');
require('unicode-4.0.1/Bidi_Class/White_Space/symbols');
require('unicode-4.0.1/Bidi_Class/White_Space/regex');

// `Script`:

require('unicode-4.0.1/Script/Arabic/code-points');
require('unicode-4.0.1/Script/Arabic/symbols');
require('unicode-4.0.1/Script/Arabic/regex');

require('unicode-4.0.1/Script/Armenian/code-points');
require('unicode-4.0.1/Script/Armenian/symbols');
require('unicode-4.0.1/Script/Armenian/regex');

require('unicode-4.0.1/Script/Bengali/code-points');
require('unicode-4.0.1/Script/Bengali/symbols');
require('unicode-4.0.1/Script/Bengali/regex');

require('unicode-4.0.1/Script/Bopomofo/code-points');
require('unicode-4.0.1/Script/Bopomofo/symbols');
require('unicode-4.0.1/Script/Bopomofo/regex');

require('unicode-4.0.1/Script/Braille/code-points');
require('unicode-4.0.1/Script/Braille/symbols');
require('unicode-4.0.1/Script/Braille/regex');

require('unicode-4.0.1/Script/Buhid/code-points');
require('unicode-4.0.1/Script/Buhid/symbols');
require('unicode-4.0.1/Script/Buhid/regex');

require('unicode-4.0.1/Script/Canadian_Aboriginal/code-points');
require('unicode-4.0.1/Script/Canadian_Aboriginal/symbols');
require('unicode-4.0.1/Script/Canadian_Aboriginal/regex');

require('unicode-4.0.1/Script/Cherokee/code-points');
require('unicode-4.0.1/Script/Cherokee/symbols');
require('unicode-4.0.1/Script/Cherokee/regex');

require('unicode-4.0.1/Script/Common/code-points');
require('unicode-4.0.1/Script/Common/symbols');
require('unicode-4.0.1/Script/Common/regex');

require('unicode-4.0.1/Script/Cypriot/code-points');
require('unicode-4.0.1/Script/Cypriot/symbols');
require('unicode-4.0.1/Script/Cypriot/regex');

require('unicode-4.0.1/Script/Cyrillic/code-points');
require('unicode-4.0.1/Script/Cyrillic/symbols');
require('unicode-4.0.1/Script/Cyrillic/regex');

require('unicode-4.0.1/Script/Deseret/code-points');
require('unicode-4.0.1/Script/Deseret/symbols');
require('unicode-4.0.1/Script/Deseret/regex');

require('unicode-4.0.1/Script/Devanagari/code-points');
require('unicode-4.0.1/Script/Devanagari/symbols');
require('unicode-4.0.1/Script/Devanagari/regex');

require('unicode-4.0.1/Script/Ethiopic/code-points');
require('unicode-4.0.1/Script/Ethiopic/symbols');
require('unicode-4.0.1/Script/Ethiopic/regex');

require('unicode-4.0.1/Script/Georgian/code-points');
require('unicode-4.0.1/Script/Georgian/symbols');
require('unicode-4.0.1/Script/Georgian/regex');

require('unicode-4.0.1/Script/Gothic/code-points');
require('unicode-4.0.1/Script/Gothic/symbols');
require('unicode-4.0.1/Script/Gothic/regex');

require('unicode-4.0.1/Script/Greek/code-points');
require('unicode-4.0.1/Script/Greek/symbols');
require('unicode-4.0.1/Script/Greek/regex');

require('unicode-4.0.1/Script/Gujarati/code-points');
require('unicode-4.0.1/Script/Gujarati/symbols');
require('unicode-4.0.1/Script/Gujarati/regex');

require('unicode-4.0.1/Script/Gurmukhi/code-points');
require('unicode-4.0.1/Script/Gurmukhi/symbols');
require('unicode-4.0.1/Script/Gurmukhi/regex');

require('unicode-4.0.1/Script/Han/code-points');
require('unicode-4.0.1/Script/Han/symbols');
require('unicode-4.0.1/Script/Han/regex');

require('unicode-4.0.1/Script/Hangul/code-points');
require('unicode-4.0.1/Script/Hangul/symbols');
require('unicode-4.0.1/Script/Hangul/regex');

require('unicode-4.0.1/Script/Hanunoo/code-points');
require('unicode-4.0.1/Script/Hanunoo/symbols');
require('unicode-4.0.1/Script/Hanunoo/regex');

require('unicode-4.0.1/Script/Hebrew/code-points');
require('unicode-4.0.1/Script/Hebrew/symbols');
require('unicode-4.0.1/Script/Hebrew/regex');

require('unicode-4.0.1/Script/Hiragana/code-points');
require('unicode-4.0.1/Script/Hiragana/symbols');
require('unicode-4.0.1/Script/Hiragana/regex');

require('unicode-4.0.1/Script/Inherited/code-points');
require('unicode-4.0.1/Script/Inherited/symbols');
require('unicode-4.0.1/Script/Inherited/regex');

require('unicode-4.0.1/Script/Kannada/code-points');
require('unicode-4.0.1/Script/Kannada/symbols');
require('unicode-4.0.1/Script/Kannada/regex');

require('unicode-4.0.1/Script/Katakana/code-points');
require('unicode-4.0.1/Script/Katakana/symbols');
require('unicode-4.0.1/Script/Katakana/regex');

require('unicode-4.0.1/Script/Katakana_Or_Hiragana/code-points');
require('unicode-4.0.1/Script/Katakana_Or_Hiragana/symbols');
require('unicode-4.0.1/Script/Katakana_Or_Hiragana/regex');

require('unicode-4.0.1/Script/Khmer/code-points');
require('unicode-4.0.1/Script/Khmer/symbols');
require('unicode-4.0.1/Script/Khmer/regex');

require('unicode-4.0.1/Script/Lao/code-points');
require('unicode-4.0.1/Script/Lao/symbols');
require('unicode-4.0.1/Script/Lao/regex');

require('unicode-4.0.1/Script/Latin/code-points');
require('unicode-4.0.1/Script/Latin/symbols');
require('unicode-4.0.1/Script/Latin/regex');

require('unicode-4.0.1/Script/Limbu/code-points');
require('unicode-4.0.1/Script/Limbu/symbols');
require('unicode-4.0.1/Script/Limbu/regex');

require('unicode-4.0.1/Script/Linear_B/code-points');
require('unicode-4.0.1/Script/Linear_B/symbols');
require('unicode-4.0.1/Script/Linear_B/regex');

require('unicode-4.0.1/Script/Malayalam/code-points');
require('unicode-4.0.1/Script/Malayalam/symbols');
require('unicode-4.0.1/Script/Malayalam/regex');

require('unicode-4.0.1/Script/Mongolian/code-points');
require('unicode-4.0.1/Script/Mongolian/symbols');
require('unicode-4.0.1/Script/Mongolian/regex');

require('unicode-4.0.1/Script/Myanmar/code-points');
require('unicode-4.0.1/Script/Myanmar/symbols');
require('unicode-4.0.1/Script/Myanmar/regex');

require('unicode-4.0.1/Script/Ogham/code-points');
require('unicode-4.0.1/Script/Ogham/symbols');
require('unicode-4.0.1/Script/Ogham/regex');

require('unicode-4.0.1/Script/Old_Italic/code-points');
require('unicode-4.0.1/Script/Old_Italic/symbols');
require('unicode-4.0.1/Script/Old_Italic/regex');

require('unicode-4.0.1/Script/Oriya/code-points');
require('unicode-4.0.1/Script/Oriya/symbols');
require('unicode-4.0.1/Script/Oriya/regex');

require('unicode-4.0.1/Script/Osmanya/code-points');
require('unicode-4.0.1/Script/Osmanya/symbols');
require('unicode-4.0.1/Script/Osmanya/regex');

require('unicode-4.0.1/Script/Runic/code-points');
require('unicode-4.0.1/Script/Runic/symbols');
require('unicode-4.0.1/Script/Runic/regex');

require('unicode-4.0.1/Script/Shavian/code-points');
require('unicode-4.0.1/Script/Shavian/symbols');
require('unicode-4.0.1/Script/Shavian/regex');

require('unicode-4.0.1/Script/Sinhala/code-points');
require('unicode-4.0.1/Script/Sinhala/symbols');
require('unicode-4.0.1/Script/Sinhala/regex');

require('unicode-4.0.1/Script/Syriac/code-points');
require('unicode-4.0.1/Script/Syriac/symbols');
require('unicode-4.0.1/Script/Syriac/regex');

require('unicode-4.0.1/Script/Tagalog/code-points');
require('unicode-4.0.1/Script/Tagalog/symbols');
require('unicode-4.0.1/Script/Tagalog/regex');

require('unicode-4.0.1/Script/Tagbanwa/code-points');
require('unicode-4.0.1/Script/Tagbanwa/symbols');
require('unicode-4.0.1/Script/Tagbanwa/regex');

require('unicode-4.0.1/Script/Tai_Le/code-points');
require('unicode-4.0.1/Script/Tai_Le/symbols');
require('unicode-4.0.1/Script/Tai_Le/regex');

require('unicode-4.0.1/Script/Tamil/code-points');
require('unicode-4.0.1/Script/Tamil/symbols');
require('unicode-4.0.1/Script/Tamil/regex');

require('unicode-4.0.1/Script/Telugu/code-points');
require('unicode-4.0.1/Script/Telugu/symbols');
require('unicode-4.0.1/Script/Telugu/regex');

require('unicode-4.0.1/Script/Thaana/code-points');
require('unicode-4.0.1/Script/Thaana/symbols');
require('unicode-4.0.1/Script/Thaana/regex');

require('unicode-4.0.1/Script/Thai/code-points');
require('unicode-4.0.1/Script/Thai/symbols');
require('unicode-4.0.1/Script/Thai/regex');

require('unicode-4.0.1/Script/Tibetan/code-points');
require('unicode-4.0.1/Script/Tibetan/symbols');
require('unicode-4.0.1/Script/Tibetan/regex');

require('unicode-4.0.1/Script/Ugaritic/code-points');
require('unicode-4.0.1/Script/Ugaritic/symbols');
require('unicode-4.0.1/Script/Ugaritic/regex');

require('unicode-4.0.1/Script/Yi/code-points');
require('unicode-4.0.1/Script/Yi/symbols');
require('unicode-4.0.1/Script/Yi/regex');

// `Case_Folding`:

require('unicode-4.0.1/Case_Folding/C/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/Case_Folding/C/code-points').get(codePoint);
require('unicode-4.0.1/Case_Folding/C/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/Case_Folding/C/symbols').get(symbol);

require('unicode-4.0.1/Case_Folding/F/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/Case_Folding/F/code-points').get(codePoint);
require('unicode-4.0.1/Case_Folding/F/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/Case_Folding/F/symbols').get(symbol);

require('unicode-4.0.1/Case_Folding/S/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/Case_Folding/S/code-points').get(codePoint);
require('unicode-4.0.1/Case_Folding/S/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/Case_Folding/S/symbols').get(symbol);

require('unicode-4.0.1/Case_Folding/T/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/Case_Folding/T/code-points').get(codePoint);
require('unicode-4.0.1/Case_Folding/T/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/Case_Folding/T/symbols').get(symbol);

// `Block`:

require('unicode-4.0.1/Block/Aegean_Numbers/code-points');
require('unicode-4.0.1/Block/Aegean_Numbers/symbols');
require('unicode-4.0.1/Block/Aegean_Numbers/regex');

require('unicode-4.0.1/Block/Alphabetic_Presentation_Forms/code-points');
require('unicode-4.0.1/Block/Alphabetic_Presentation_Forms/symbols');
require('unicode-4.0.1/Block/Alphabetic_Presentation_Forms/regex');

require('unicode-4.0.1/Block/Arabic/code-points');
require('unicode-4.0.1/Block/Arabic/symbols');
require('unicode-4.0.1/Block/Arabic/regex');

require('unicode-4.0.1/Block/Arabic_Presentation_Forms_A/code-points');
require('unicode-4.0.1/Block/Arabic_Presentation_Forms_A/symbols');
require('unicode-4.0.1/Block/Arabic_Presentation_Forms_A/regex');

require('unicode-4.0.1/Block/Arabic_Presentation_Forms_B/code-points');
require('unicode-4.0.1/Block/Arabic_Presentation_Forms_B/symbols');
require('unicode-4.0.1/Block/Arabic_Presentation_Forms_B/regex');

require('unicode-4.0.1/Block/Armenian/code-points');
require('unicode-4.0.1/Block/Armenian/symbols');
require('unicode-4.0.1/Block/Armenian/regex');

require('unicode-4.0.1/Block/Arrows/code-points');
require('unicode-4.0.1/Block/Arrows/symbols');
require('unicode-4.0.1/Block/Arrows/regex');

require('unicode-4.0.1/Block/Basic_Latin/code-points');
require('unicode-4.0.1/Block/Basic_Latin/symbols');
require('unicode-4.0.1/Block/Basic_Latin/regex');

require('unicode-4.0.1/Block/Bengali/code-points');
require('unicode-4.0.1/Block/Bengali/symbols');
require('unicode-4.0.1/Block/Bengali/regex');

require('unicode-4.0.1/Block/Block_Elements/code-points');
require('unicode-4.0.1/Block/Block_Elements/symbols');
require('unicode-4.0.1/Block/Block_Elements/regex');

require('unicode-4.0.1/Block/Bopomofo/code-points');
require('unicode-4.0.1/Block/Bopomofo/symbols');
require('unicode-4.0.1/Block/Bopomofo/regex');

require('unicode-4.0.1/Block/Bopomofo_Extended/code-points');
require('unicode-4.0.1/Block/Bopomofo_Extended/symbols');
require('unicode-4.0.1/Block/Bopomofo_Extended/regex');

require('unicode-4.0.1/Block/Box_Drawing/code-points');
require('unicode-4.0.1/Block/Box_Drawing/symbols');
require('unicode-4.0.1/Block/Box_Drawing/regex');

require('unicode-4.0.1/Block/Braille_Patterns/code-points');
require('unicode-4.0.1/Block/Braille_Patterns/symbols');
require('unicode-4.0.1/Block/Braille_Patterns/regex');

require('unicode-4.0.1/Block/Buhid/code-points');
require('unicode-4.0.1/Block/Buhid/symbols');
require('unicode-4.0.1/Block/Buhid/regex');

require('unicode-4.0.1/Block/Byzantine_Musical_Symbols/code-points');
require('unicode-4.0.1/Block/Byzantine_Musical_Symbols/symbols');
require('unicode-4.0.1/Block/Byzantine_Musical_Symbols/regex');

require('unicode-4.0.1/Block/CJK_Compatibility/code-points');
require('unicode-4.0.1/Block/CJK_Compatibility/symbols');
require('unicode-4.0.1/Block/CJK_Compatibility/regex');

require('unicode-4.0.1/Block/CJK_Compatibility_Forms/code-points');
require('unicode-4.0.1/Block/CJK_Compatibility_Forms/symbols');
require('unicode-4.0.1/Block/CJK_Compatibility_Forms/regex');

require('unicode-4.0.1/Block/CJK_Compatibility_Ideographs/code-points');
require('unicode-4.0.1/Block/CJK_Compatibility_Ideographs/symbols');
require('unicode-4.0.1/Block/CJK_Compatibility_Ideographs/regex');

require('unicode-4.0.1/Block/CJK_Compatibility_Ideographs_Supplement/code-points');
require('unicode-4.0.1/Block/CJK_Compatibility_Ideographs_Supplement/symbols');
require('unicode-4.0.1/Block/CJK_Compatibility_Ideographs_Supplement/regex');

require('unicode-4.0.1/Block/CJK_Radicals_Supplement/code-points');
require('unicode-4.0.1/Block/CJK_Radicals_Supplement/symbols');
require('unicode-4.0.1/Block/CJK_Radicals_Supplement/regex');

require('unicode-4.0.1/Block/CJK_Symbols_And_Punctuation/code-points');
require('unicode-4.0.1/Block/CJK_Symbols_And_Punctuation/symbols');
require('unicode-4.0.1/Block/CJK_Symbols_And_Punctuation/regex');

require('unicode-4.0.1/Block/CJK_Unified_Ideographs/code-points');
require('unicode-4.0.1/Block/CJK_Unified_Ideographs/symbols');
require('unicode-4.0.1/Block/CJK_Unified_Ideographs/regex');

require('unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_A/code-points');
require('unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_A/symbols');
require('unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_A/regex');

require('unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_B/code-points');
require('unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_B/symbols');
require('unicode-4.0.1/Block/CJK_Unified_Ideographs_Extension_B/regex');

require('unicode-4.0.1/Block/Cherokee/code-points');
require('unicode-4.0.1/Block/Cherokee/symbols');
require('unicode-4.0.1/Block/Cherokee/regex');

require('unicode-4.0.1/Block/Combining_Diacritical_Marks/code-points');
require('unicode-4.0.1/Block/Combining_Diacritical_Marks/symbols');
require('unicode-4.0.1/Block/Combining_Diacritical_Marks/regex');

require('unicode-4.0.1/Block/Combining_Diacritical_Marks_For_Symbols/code-points');
require('unicode-4.0.1/Block/Combining_Diacritical_Marks_For_Symbols/symbols');
require('unicode-4.0.1/Block/Combining_Diacritical_Marks_For_Symbols/regex');

require('unicode-4.0.1/Block/Combining_Half_Marks/code-points');
require('unicode-4.0.1/Block/Combining_Half_Marks/symbols');
require('unicode-4.0.1/Block/Combining_Half_Marks/regex');

require('unicode-4.0.1/Block/Control_Pictures/code-points');
require('unicode-4.0.1/Block/Control_Pictures/symbols');
require('unicode-4.0.1/Block/Control_Pictures/regex');

require('unicode-4.0.1/Block/Currency_Symbols/code-points');
require('unicode-4.0.1/Block/Currency_Symbols/symbols');
require('unicode-4.0.1/Block/Currency_Symbols/regex');

require('unicode-4.0.1/Block/Cypriot_Syllabary/code-points');
require('unicode-4.0.1/Block/Cypriot_Syllabary/symbols');
require('unicode-4.0.1/Block/Cypriot_Syllabary/regex');

require('unicode-4.0.1/Block/Cyrillic/code-points');
require('unicode-4.0.1/Block/Cyrillic/symbols');
require('unicode-4.0.1/Block/Cyrillic/regex');

require('unicode-4.0.1/Block/Cyrillic_Supplement/code-points');
require('unicode-4.0.1/Block/Cyrillic_Supplement/symbols');
require('unicode-4.0.1/Block/Cyrillic_Supplement/regex');

require('unicode-4.0.1/Block/Deseret/code-points');
require('unicode-4.0.1/Block/Deseret/symbols');
require('unicode-4.0.1/Block/Deseret/regex');

require('unicode-4.0.1/Block/Devanagari/code-points');
require('unicode-4.0.1/Block/Devanagari/symbols');
require('unicode-4.0.1/Block/Devanagari/regex');

require('unicode-4.0.1/Block/Dingbats/code-points');
require('unicode-4.0.1/Block/Dingbats/symbols');
require('unicode-4.0.1/Block/Dingbats/regex');

require('unicode-4.0.1/Block/Enclosed_Alphanumerics/code-points');
require('unicode-4.0.1/Block/Enclosed_Alphanumerics/symbols');
require('unicode-4.0.1/Block/Enclosed_Alphanumerics/regex');

require('unicode-4.0.1/Block/Enclosed_CJK_Letters_And_Months/code-points');
require('unicode-4.0.1/Block/Enclosed_CJK_Letters_And_Months/symbols');
require('unicode-4.0.1/Block/Enclosed_CJK_Letters_And_Months/regex');

require('unicode-4.0.1/Block/Ethiopic/code-points');
require('unicode-4.0.1/Block/Ethiopic/symbols');
require('unicode-4.0.1/Block/Ethiopic/regex');

require('unicode-4.0.1/Block/General_Punctuation/code-points');
require('unicode-4.0.1/Block/General_Punctuation/symbols');
require('unicode-4.0.1/Block/General_Punctuation/regex');

require('unicode-4.0.1/Block/Geometric_Shapes/code-points');
require('unicode-4.0.1/Block/Geometric_Shapes/symbols');
require('unicode-4.0.1/Block/Geometric_Shapes/regex');

require('unicode-4.0.1/Block/Georgian/code-points');
require('unicode-4.0.1/Block/Georgian/symbols');
require('unicode-4.0.1/Block/Georgian/regex');

require('unicode-4.0.1/Block/Gothic/code-points');
require('unicode-4.0.1/Block/Gothic/symbols');
require('unicode-4.0.1/Block/Gothic/regex');

require('unicode-4.0.1/Block/Greek_And_Coptic/code-points');
require('unicode-4.0.1/Block/Greek_And_Coptic/symbols');
require('unicode-4.0.1/Block/Greek_And_Coptic/regex');

require('unicode-4.0.1/Block/Greek_Extended/code-points');
require('unicode-4.0.1/Block/Greek_Extended/symbols');
require('unicode-4.0.1/Block/Greek_Extended/regex');

require('unicode-4.0.1/Block/Gujarati/code-points');
require('unicode-4.0.1/Block/Gujarati/symbols');
require('unicode-4.0.1/Block/Gujarati/regex');

require('unicode-4.0.1/Block/Gurmukhi/code-points');
require('unicode-4.0.1/Block/Gurmukhi/symbols');
require('unicode-4.0.1/Block/Gurmukhi/regex');

require('unicode-4.0.1/Block/Halfwidth_And_Fullwidth_Forms/code-points');
require('unicode-4.0.1/Block/Halfwidth_And_Fullwidth_Forms/symbols');
require('unicode-4.0.1/Block/Halfwidth_And_Fullwidth_Forms/regex');

require('unicode-4.0.1/Block/Hangul_Compatibility_Jamo/code-points');
require('unicode-4.0.1/Block/Hangul_Compatibility_Jamo/symbols');
require('unicode-4.0.1/Block/Hangul_Compatibility_Jamo/regex');

require('unicode-4.0.1/Block/Hangul_Jamo/code-points');
require('unicode-4.0.1/Block/Hangul_Jamo/symbols');
require('unicode-4.0.1/Block/Hangul_Jamo/regex');

require('unicode-4.0.1/Block/Hangul_Syllables/code-points');
require('unicode-4.0.1/Block/Hangul_Syllables/symbols');
require('unicode-4.0.1/Block/Hangul_Syllables/regex');

require('unicode-4.0.1/Block/Hanunoo/code-points');
require('unicode-4.0.1/Block/Hanunoo/symbols');
require('unicode-4.0.1/Block/Hanunoo/regex');

require('unicode-4.0.1/Block/Hebrew/code-points');
require('unicode-4.0.1/Block/Hebrew/symbols');
require('unicode-4.0.1/Block/Hebrew/regex');

require('unicode-4.0.1/Block/High_Private_Use_Surrogates/code-points');
require('unicode-4.0.1/Block/High_Private_Use_Surrogates/symbols');
require('unicode-4.0.1/Block/High_Private_Use_Surrogates/regex');

require('unicode-4.0.1/Block/High_Surrogates/code-points');
require('unicode-4.0.1/Block/High_Surrogates/symbols');
require('unicode-4.0.1/Block/High_Surrogates/regex');

require('unicode-4.0.1/Block/Hiragana/code-points');
require('unicode-4.0.1/Block/Hiragana/symbols');
require('unicode-4.0.1/Block/Hiragana/regex');

require('unicode-4.0.1/Block/IPA_Extensions/code-points');
require('unicode-4.0.1/Block/IPA_Extensions/symbols');
require('unicode-4.0.1/Block/IPA_Extensions/regex');

require('unicode-4.0.1/Block/Ideographic_Description_Characters/code-points');
require('unicode-4.0.1/Block/Ideographic_Description_Characters/symbols');
require('unicode-4.0.1/Block/Ideographic_Description_Characters/regex');

require('unicode-4.0.1/Block/Kanbun/code-points');
require('unicode-4.0.1/Block/Kanbun/symbols');
require('unicode-4.0.1/Block/Kanbun/regex');

require('unicode-4.0.1/Block/Kangxi_Radicals/code-points');
require('unicode-4.0.1/Block/Kangxi_Radicals/symbols');
require('unicode-4.0.1/Block/Kangxi_Radicals/regex');

require('unicode-4.0.1/Block/Kannada/code-points');
require('unicode-4.0.1/Block/Kannada/symbols');
require('unicode-4.0.1/Block/Kannada/regex');

require('unicode-4.0.1/Block/Katakana/code-points');
require('unicode-4.0.1/Block/Katakana/symbols');
require('unicode-4.0.1/Block/Katakana/regex');

require('unicode-4.0.1/Block/Katakana_Phonetic_Extensions/code-points');
require('unicode-4.0.1/Block/Katakana_Phonetic_Extensions/symbols');
require('unicode-4.0.1/Block/Katakana_Phonetic_Extensions/regex');

require('unicode-4.0.1/Block/Khmer/code-points');
require('unicode-4.0.1/Block/Khmer/symbols');
require('unicode-4.0.1/Block/Khmer/regex');

require('unicode-4.0.1/Block/Khmer_Symbols/code-points');
require('unicode-4.0.1/Block/Khmer_Symbols/symbols');
require('unicode-4.0.1/Block/Khmer_Symbols/regex');

require('unicode-4.0.1/Block/Lao/code-points');
require('unicode-4.0.1/Block/Lao/symbols');
require('unicode-4.0.1/Block/Lao/regex');

require('unicode-4.0.1/Block/Latin_1_Supplement/code-points');
require('unicode-4.0.1/Block/Latin_1_Supplement/symbols');
require('unicode-4.0.1/Block/Latin_1_Supplement/regex');

require('unicode-4.0.1/Block/Latin_Extended_A/code-points');
require('unicode-4.0.1/Block/Latin_Extended_A/symbols');
require('unicode-4.0.1/Block/Latin_Extended_A/regex');

require('unicode-4.0.1/Block/Latin_Extended_Additional/code-points');
require('unicode-4.0.1/Block/Latin_Extended_Additional/symbols');
require('unicode-4.0.1/Block/Latin_Extended_Additional/regex');

require('unicode-4.0.1/Block/Latin_Extended_B/code-points');
require('unicode-4.0.1/Block/Latin_Extended_B/symbols');
require('unicode-4.0.1/Block/Latin_Extended_B/regex');

require('unicode-4.0.1/Block/Letterlike_Symbols/code-points');
require('unicode-4.0.1/Block/Letterlike_Symbols/symbols');
require('unicode-4.0.1/Block/Letterlike_Symbols/regex');

require('unicode-4.0.1/Block/Limbu/code-points');
require('unicode-4.0.1/Block/Limbu/symbols');
require('unicode-4.0.1/Block/Limbu/regex');

require('unicode-4.0.1/Block/Linear_B_Ideograms/code-points');
require('unicode-4.0.1/Block/Linear_B_Ideograms/symbols');
require('unicode-4.0.1/Block/Linear_B_Ideograms/regex');

require('unicode-4.0.1/Block/Linear_B_Syllabary/code-points');
require('unicode-4.0.1/Block/Linear_B_Syllabary/symbols');
require('unicode-4.0.1/Block/Linear_B_Syllabary/regex');

require('unicode-4.0.1/Block/Low_Surrogates/code-points');
require('unicode-4.0.1/Block/Low_Surrogates/symbols');
require('unicode-4.0.1/Block/Low_Surrogates/regex');

require('unicode-4.0.1/Block/Malayalam/code-points');
require('unicode-4.0.1/Block/Malayalam/symbols');
require('unicode-4.0.1/Block/Malayalam/regex');

require('unicode-4.0.1/Block/Mathematical_Alphanumeric_Symbols/code-points');
require('unicode-4.0.1/Block/Mathematical_Alphanumeric_Symbols/symbols');
require('unicode-4.0.1/Block/Mathematical_Alphanumeric_Symbols/regex');

require('unicode-4.0.1/Block/Mathematical_Operators/code-points');
require('unicode-4.0.1/Block/Mathematical_Operators/symbols');
require('unicode-4.0.1/Block/Mathematical_Operators/regex');

require('unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_A/code-points');
require('unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_A/symbols');
require('unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_A/regex');

require('unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_B/code-points');
require('unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_B/symbols');
require('unicode-4.0.1/Block/Miscellaneous_Mathematical_Symbols_B/regex');

require('unicode-4.0.1/Block/Miscellaneous_Symbols/code-points');
require('unicode-4.0.1/Block/Miscellaneous_Symbols/symbols');
require('unicode-4.0.1/Block/Miscellaneous_Symbols/regex');

require('unicode-4.0.1/Block/Miscellaneous_Symbols_And_Arrows/code-points');
require('unicode-4.0.1/Block/Miscellaneous_Symbols_And_Arrows/symbols');
require('unicode-4.0.1/Block/Miscellaneous_Symbols_And_Arrows/regex');

require('unicode-4.0.1/Block/Miscellaneous_Technical/code-points');
require('unicode-4.0.1/Block/Miscellaneous_Technical/symbols');
require('unicode-4.0.1/Block/Miscellaneous_Technical/regex');

require('unicode-4.0.1/Block/Mongolian/code-points');
require('unicode-4.0.1/Block/Mongolian/symbols');
require('unicode-4.0.1/Block/Mongolian/regex');

require('unicode-4.0.1/Block/Musical_Symbols/code-points');
require('unicode-4.0.1/Block/Musical_Symbols/symbols');
require('unicode-4.0.1/Block/Musical_Symbols/regex');

require('unicode-4.0.1/Block/Myanmar/code-points');
require('unicode-4.0.1/Block/Myanmar/symbols');
require('unicode-4.0.1/Block/Myanmar/regex');

require('unicode-4.0.1/Block/Number_Forms/code-points');
require('unicode-4.0.1/Block/Number_Forms/symbols');
require('unicode-4.0.1/Block/Number_Forms/regex');

require('unicode-4.0.1/Block/Ogham/code-points');
require('unicode-4.0.1/Block/Ogham/symbols');
require('unicode-4.0.1/Block/Ogham/regex');

require('unicode-4.0.1/Block/Old_Italic/code-points');
require('unicode-4.0.1/Block/Old_Italic/symbols');
require('unicode-4.0.1/Block/Old_Italic/regex');

require('unicode-4.0.1/Block/Optical_Character_Recognition/code-points');
require('unicode-4.0.1/Block/Optical_Character_Recognition/symbols');
require('unicode-4.0.1/Block/Optical_Character_Recognition/regex');

require('unicode-4.0.1/Block/Oriya/code-points');
require('unicode-4.0.1/Block/Oriya/symbols');
require('unicode-4.0.1/Block/Oriya/regex');

require('unicode-4.0.1/Block/Osmanya/code-points');
require('unicode-4.0.1/Block/Osmanya/symbols');
require('unicode-4.0.1/Block/Osmanya/regex');

require('unicode-4.0.1/Block/Phonetic_Extensions/code-points');
require('unicode-4.0.1/Block/Phonetic_Extensions/symbols');
require('unicode-4.0.1/Block/Phonetic_Extensions/regex');

require('unicode-4.0.1/Block/Private_Use_Area/code-points');
require('unicode-4.0.1/Block/Private_Use_Area/symbols');
require('unicode-4.0.1/Block/Private_Use_Area/regex');

require('unicode-4.0.1/Block/Runic/code-points');
require('unicode-4.0.1/Block/Runic/symbols');
require('unicode-4.0.1/Block/Runic/regex');

require('unicode-4.0.1/Block/Shavian/code-points');
require('unicode-4.0.1/Block/Shavian/symbols');
require('unicode-4.0.1/Block/Shavian/regex');

require('unicode-4.0.1/Block/Sinhala/code-points');
require('unicode-4.0.1/Block/Sinhala/symbols');
require('unicode-4.0.1/Block/Sinhala/regex');

require('unicode-4.0.1/Block/Small_Form_Variants/code-points');
require('unicode-4.0.1/Block/Small_Form_Variants/symbols');
require('unicode-4.0.1/Block/Small_Form_Variants/regex');

require('unicode-4.0.1/Block/Spacing_Modifier_Letters/code-points');
require('unicode-4.0.1/Block/Spacing_Modifier_Letters/symbols');
require('unicode-4.0.1/Block/Spacing_Modifier_Letters/regex');

require('unicode-4.0.1/Block/Specials/code-points');
require('unicode-4.0.1/Block/Specials/symbols');
require('unicode-4.0.1/Block/Specials/regex');

require('unicode-4.0.1/Block/Superscripts_And_Subscripts/code-points');
require('unicode-4.0.1/Block/Superscripts_And_Subscripts/symbols');
require('unicode-4.0.1/Block/Superscripts_And_Subscripts/regex');

require('unicode-4.0.1/Block/Supplemental_Arrows_A/code-points');
require('unicode-4.0.1/Block/Supplemental_Arrows_A/symbols');
require('unicode-4.0.1/Block/Supplemental_Arrows_A/regex');

require('unicode-4.0.1/Block/Supplemental_Arrows_B/code-points');
require('unicode-4.0.1/Block/Supplemental_Arrows_B/symbols');
require('unicode-4.0.1/Block/Supplemental_Arrows_B/regex');

require('unicode-4.0.1/Block/Supplemental_Mathematical_Operators/code-points');
require('unicode-4.0.1/Block/Supplemental_Mathematical_Operators/symbols');
require('unicode-4.0.1/Block/Supplemental_Mathematical_Operators/regex');

require('unicode-4.0.1/Block/Supplementary_Private_Use_Area_A/code-points');
require('unicode-4.0.1/Block/Supplementary_Private_Use_Area_A/symbols');
require('unicode-4.0.1/Block/Supplementary_Private_Use_Area_A/regex');

require('unicode-4.0.1/Block/Supplementary_Private_Use_Area_B/code-points');
require('unicode-4.0.1/Block/Supplementary_Private_Use_Area_B/symbols');
require('unicode-4.0.1/Block/Supplementary_Private_Use_Area_B/regex');

require('unicode-4.0.1/Block/Syriac/code-points');
require('unicode-4.0.1/Block/Syriac/symbols');
require('unicode-4.0.1/Block/Syriac/regex');

require('unicode-4.0.1/Block/Tagalog/code-points');
require('unicode-4.0.1/Block/Tagalog/symbols');
require('unicode-4.0.1/Block/Tagalog/regex');

require('unicode-4.0.1/Block/Tagbanwa/code-points');
require('unicode-4.0.1/Block/Tagbanwa/symbols');
require('unicode-4.0.1/Block/Tagbanwa/regex');

require('unicode-4.0.1/Block/Tags/code-points');
require('unicode-4.0.1/Block/Tags/symbols');
require('unicode-4.0.1/Block/Tags/regex');

require('unicode-4.0.1/Block/Tai_Le/code-points');
require('unicode-4.0.1/Block/Tai_Le/symbols');
require('unicode-4.0.1/Block/Tai_Le/regex');

require('unicode-4.0.1/Block/Tai_Xuan_Jing_Symbols/code-points');
require('unicode-4.0.1/Block/Tai_Xuan_Jing_Symbols/symbols');
require('unicode-4.0.1/Block/Tai_Xuan_Jing_Symbols/regex');

require('unicode-4.0.1/Block/Tamil/code-points');
require('unicode-4.0.1/Block/Tamil/symbols');
require('unicode-4.0.1/Block/Tamil/regex');

require('unicode-4.0.1/Block/Telugu/code-points');
require('unicode-4.0.1/Block/Telugu/symbols');
require('unicode-4.0.1/Block/Telugu/regex');

require('unicode-4.0.1/Block/Thaana/code-points');
require('unicode-4.0.1/Block/Thaana/symbols');
require('unicode-4.0.1/Block/Thaana/regex');

require('unicode-4.0.1/Block/Thai/code-points');
require('unicode-4.0.1/Block/Thai/symbols');
require('unicode-4.0.1/Block/Thai/regex');

require('unicode-4.0.1/Block/Tibetan/code-points');
require('unicode-4.0.1/Block/Tibetan/symbols');
require('unicode-4.0.1/Block/Tibetan/regex');

require('unicode-4.0.1/Block/Ugaritic/code-points');
require('unicode-4.0.1/Block/Ugaritic/symbols');
require('unicode-4.0.1/Block/Ugaritic/regex');

require('unicode-4.0.1/Block/Unified_Canadian_Aboriginal_Syllabics/code-points');
require('unicode-4.0.1/Block/Unified_Canadian_Aboriginal_Syllabics/symbols');
require('unicode-4.0.1/Block/Unified_Canadian_Aboriginal_Syllabics/regex');

require('unicode-4.0.1/Block/Variation_Selectors/code-points');
require('unicode-4.0.1/Block/Variation_Selectors/symbols');
require('unicode-4.0.1/Block/Variation_Selectors/regex');

require('unicode-4.0.1/Block/Variation_Selectors_Supplement/code-points');
require('unicode-4.0.1/Block/Variation_Selectors_Supplement/symbols');
require('unicode-4.0.1/Block/Variation_Selectors_Supplement/regex');

require('unicode-4.0.1/Block/Yi_Radicals/code-points');
require('unicode-4.0.1/Block/Yi_Radicals/symbols');
require('unicode-4.0.1/Block/Yi_Radicals/regex');

require('unicode-4.0.1/Block/Yi_Syllables/code-points');
require('unicode-4.0.1/Block/Yi_Syllables/symbols');
require('unicode-4.0.1/Block/Yi_Syllables/regex');

require('unicode-4.0.1/Block/Yijing_Hexagram_Symbols/code-points');
require('unicode-4.0.1/Block/Yijing_Hexagram_Symbols/symbols');
require('unicode-4.0.1/Block/Yijing_Hexagram_Symbols/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
