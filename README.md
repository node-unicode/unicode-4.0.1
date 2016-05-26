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
	.add(require('unicode-6.3.0/script-extensions/Arabic/code-points')) // or `…/symbols`, doesn’t matter
	.add(require('unicode-6.3.0/script-extensions/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('unicode-4.0.1/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('unicode-4.0.1/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('unicode-4.0.1/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('unicode-4.0.1/categories')[ 0x41 ];
// Get an array of all code points with `Bidi_Class=Other_Neutral`:
const on = require('unicode-4.0.1/bidi-classes/Other_Neutral/code-points');
// Get a map from code points to bidi classes:
const bidiClassMap = require('unicode-4.0.1/bidi-classes');
// Get the directionality of a given code point:
const directionality = require('unicode-4.0.1/bidi-classes').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v4.0.1:

```js
// properties:

require('unicode-4.0.1/properties/ASCII/code-points');
require('unicode-4.0.1/properties/ASCII/symbols');
require('unicode-4.0.1/properties/ASCII/regex');

require('unicode-4.0.1/properties/ASCII_Hex_Digit/code-points');
require('unicode-4.0.1/properties/ASCII_Hex_Digit/symbols');
require('unicode-4.0.1/properties/ASCII_Hex_Digit/regex');

require('unicode-4.0.1/properties/Alphabetic/code-points');
require('unicode-4.0.1/properties/Alphabetic/symbols');
require('unicode-4.0.1/properties/Alphabetic/regex');

require('unicode-4.0.1/properties/Any/code-points');
require('unicode-4.0.1/properties/Any/symbols');
require('unicode-4.0.1/properties/Any/regex');

require('unicode-4.0.1/properties/Assigned/code-points');
require('unicode-4.0.1/properties/Assigned/symbols');
require('unicode-4.0.1/properties/Assigned/regex');

require('unicode-4.0.1/properties/Bidi_Control/code-points');
require('unicode-4.0.1/properties/Bidi_Control/symbols');
require('unicode-4.0.1/properties/Bidi_Control/regex');

require('unicode-4.0.1/properties/Bidi_Mirrored/code-points');
require('unicode-4.0.1/properties/Bidi_Mirrored/symbols');
require('unicode-4.0.1/properties/Bidi_Mirrored/regex');

require('unicode-4.0.1/properties/Dash/code-points');
require('unicode-4.0.1/properties/Dash/symbols');
require('unicode-4.0.1/properties/Dash/regex');

require('unicode-4.0.1/properties/Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.1/properties/Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.1/properties/Default_Ignorable_Code_Point/regex');

require('unicode-4.0.1/properties/Deprecated/code-points');
require('unicode-4.0.1/properties/Deprecated/symbols');
require('unicode-4.0.1/properties/Deprecated/regex');

require('unicode-4.0.1/properties/Diacritic/code-points');
require('unicode-4.0.1/properties/Diacritic/symbols');
require('unicode-4.0.1/properties/Diacritic/regex');

require('unicode-4.0.1/properties/Expands_On_NFC/code-points');
require('unicode-4.0.1/properties/Expands_On_NFC/symbols');
require('unicode-4.0.1/properties/Expands_On_NFC/regex');

require('unicode-4.0.1/properties/Expands_On_NFD/code-points');
require('unicode-4.0.1/properties/Expands_On_NFD/symbols');
require('unicode-4.0.1/properties/Expands_On_NFD/regex');

require('unicode-4.0.1/properties/Expands_On_NFKC/code-points');
require('unicode-4.0.1/properties/Expands_On_NFKC/symbols');
require('unicode-4.0.1/properties/Expands_On_NFKC/regex');

require('unicode-4.0.1/properties/Expands_On_NFKD/code-points');
require('unicode-4.0.1/properties/Expands_On_NFKD/symbols');
require('unicode-4.0.1/properties/Expands_On_NFKD/regex');

require('unicode-4.0.1/properties/Extender/code-points');
require('unicode-4.0.1/properties/Extender/symbols');
require('unicode-4.0.1/properties/Extender/regex');

require('unicode-4.0.1/properties/FC_NFKC_Closure/code-points');
require('unicode-4.0.1/properties/FC_NFKC_Closure/symbols');
require('unicode-4.0.1/properties/FC_NFKC_Closure/regex');

require('unicode-4.0.1/properties/Full_Composition_Exclusion/code-points');
require('unicode-4.0.1/properties/Full_Composition_Exclusion/symbols');
require('unicode-4.0.1/properties/Full_Composition_Exclusion/regex');

require('unicode-4.0.1/properties/Grapheme_Base/code-points');
require('unicode-4.0.1/properties/Grapheme_Base/symbols');
require('unicode-4.0.1/properties/Grapheme_Base/regex');

require('unicode-4.0.1/properties/Grapheme_Extend/code-points');
require('unicode-4.0.1/properties/Grapheme_Extend/symbols');
require('unicode-4.0.1/properties/Grapheme_Extend/regex');

require('unicode-4.0.1/properties/Grapheme_Link/code-points');
require('unicode-4.0.1/properties/Grapheme_Link/symbols');
require('unicode-4.0.1/properties/Grapheme_Link/regex');

require('unicode-4.0.1/properties/Hex_Digit/code-points');
require('unicode-4.0.1/properties/Hex_Digit/symbols');
require('unicode-4.0.1/properties/Hex_Digit/regex');

require('unicode-4.0.1/properties/Hyphen/code-points');
require('unicode-4.0.1/properties/Hyphen/symbols');
require('unicode-4.0.1/properties/Hyphen/regex');

require('unicode-4.0.1/properties/IDS_Binary_Operator/code-points');
require('unicode-4.0.1/properties/IDS_Binary_Operator/symbols');
require('unicode-4.0.1/properties/IDS_Binary_Operator/regex');

require('unicode-4.0.1/properties/IDS_Trinary_Operator/code-points');
require('unicode-4.0.1/properties/IDS_Trinary_Operator/symbols');
require('unicode-4.0.1/properties/IDS_Trinary_Operator/regex');

require('unicode-4.0.1/properties/ID_Continue/code-points');
require('unicode-4.0.1/properties/ID_Continue/symbols');
require('unicode-4.0.1/properties/ID_Continue/regex');

require('unicode-4.0.1/properties/ID_Start/code-points');
require('unicode-4.0.1/properties/ID_Start/symbols');
require('unicode-4.0.1/properties/ID_Start/regex');

require('unicode-4.0.1/properties/Ideographic/code-points');
require('unicode-4.0.1/properties/Ideographic/symbols');
require('unicode-4.0.1/properties/Ideographic/regex');

require('unicode-4.0.1/properties/Join_Control/code-points');
require('unicode-4.0.1/properties/Join_Control/symbols');
require('unicode-4.0.1/properties/Join_Control/regex');

require('unicode-4.0.1/properties/Logical_Order_Exception/code-points');
require('unicode-4.0.1/properties/Logical_Order_Exception/symbols');
require('unicode-4.0.1/properties/Logical_Order_Exception/regex');

require('unicode-4.0.1/properties/Lowercase/code-points');
require('unicode-4.0.1/properties/Lowercase/symbols');
require('unicode-4.0.1/properties/Lowercase/regex');

require('unicode-4.0.1/properties/Math/code-points');
require('unicode-4.0.1/properties/Math/symbols');
require('unicode-4.0.1/properties/Math/regex');

require('unicode-4.0.1/properties/Noncharacter_Code_Point/code-points');
require('unicode-4.0.1/properties/Noncharacter_Code_Point/symbols');
require('unicode-4.0.1/properties/Noncharacter_Code_Point/regex');

require('unicode-4.0.1/properties/Other_Alphabetic/code-points');
require('unicode-4.0.1/properties/Other_Alphabetic/symbols');
require('unicode-4.0.1/properties/Other_Alphabetic/regex');

require('unicode-4.0.1/properties/Other_Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.1/properties/Other_Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.1/properties/Other_Default_Ignorable_Code_Point/regex');

require('unicode-4.0.1/properties/Other_Grapheme_Extend/code-points');
require('unicode-4.0.1/properties/Other_Grapheme_Extend/symbols');
require('unicode-4.0.1/properties/Other_Grapheme_Extend/regex');

require('unicode-4.0.1/properties/Other_ID_Start/code-points');
require('unicode-4.0.1/properties/Other_ID_Start/symbols');
require('unicode-4.0.1/properties/Other_ID_Start/regex');

require('unicode-4.0.1/properties/Other_Lowercase/code-points');
require('unicode-4.0.1/properties/Other_Lowercase/symbols');
require('unicode-4.0.1/properties/Other_Lowercase/regex');

require('unicode-4.0.1/properties/Other_Math/code-points');
require('unicode-4.0.1/properties/Other_Math/symbols');
require('unicode-4.0.1/properties/Other_Math/regex');

require('unicode-4.0.1/properties/Other_Uppercase/code-points');
require('unicode-4.0.1/properties/Other_Uppercase/symbols');
require('unicode-4.0.1/properties/Other_Uppercase/regex');

require('unicode-4.0.1/properties/Quotation_Mark/code-points');
require('unicode-4.0.1/properties/Quotation_Mark/symbols');
require('unicode-4.0.1/properties/Quotation_Mark/regex');

require('unicode-4.0.1/properties/Radical/code-points');
require('unicode-4.0.1/properties/Radical/symbols');
require('unicode-4.0.1/properties/Radical/regex');

require('unicode-4.0.1/properties/STerm/code-points');
require('unicode-4.0.1/properties/STerm/symbols');
require('unicode-4.0.1/properties/STerm/regex');

require('unicode-4.0.1/properties/Soft_Dotted/code-points');
require('unicode-4.0.1/properties/Soft_Dotted/symbols');
require('unicode-4.0.1/properties/Soft_Dotted/regex');

require('unicode-4.0.1/properties/Terminal_Punctuation/code-points');
require('unicode-4.0.1/properties/Terminal_Punctuation/symbols');
require('unicode-4.0.1/properties/Terminal_Punctuation/regex');

require('unicode-4.0.1/properties/Unified_Ideograph/code-points');
require('unicode-4.0.1/properties/Unified_Ideograph/symbols');
require('unicode-4.0.1/properties/Unified_Ideograph/regex');

require('unicode-4.0.1/properties/Uppercase/code-points');
require('unicode-4.0.1/properties/Uppercase/symbols');
require('unicode-4.0.1/properties/Uppercase/regex');

require('unicode-4.0.1/properties/Variation_Selector/code-points');
require('unicode-4.0.1/properties/Variation_Selector/symbols');
require('unicode-4.0.1/properties/Variation_Selector/regex');

require('unicode-4.0.1/properties/White_Space/code-points');
require('unicode-4.0.1/properties/White_Space/symbols');
require('unicode-4.0.1/properties/White_Space/regex');

require('unicode-4.0.1/properties/XID_Continue/code-points');
require('unicode-4.0.1/properties/XID_Continue/symbols');
require('unicode-4.0.1/properties/XID_Continue/regex');

require('unicode-4.0.1/properties/XID_Start/code-points');
require('unicode-4.0.1/properties/XID_Start/symbols');
require('unicode-4.0.1/properties/XID_Start/regex');

// categories:

require('unicode-4.0.1/categories').get(codePoint); // lookup map

require('unicode-4.0.1/categories/Cased_Letter/code-points');
require('unicode-4.0.1/categories/Cased_Letter/symbols');
require('unicode-4.0.1/categories/Cased_Letter/regex');

require('unicode-4.0.1/categories/Close_Punctuation/code-points');
require('unicode-4.0.1/categories/Close_Punctuation/symbols');
require('unicode-4.0.1/categories/Close_Punctuation/regex');

require('unicode-4.0.1/categories/Connector_Punctuation/code-points');
require('unicode-4.0.1/categories/Connector_Punctuation/symbols');
require('unicode-4.0.1/categories/Connector_Punctuation/regex');

require('unicode-4.0.1/categories/Control/code-points');
require('unicode-4.0.1/categories/Control/symbols');
require('unicode-4.0.1/categories/Control/regex');

require('unicode-4.0.1/categories/Currency_Symbol/code-points');
require('unicode-4.0.1/categories/Currency_Symbol/symbols');
require('unicode-4.0.1/categories/Currency_Symbol/regex');

require('unicode-4.0.1/categories/Dash_Punctuation/code-points');
require('unicode-4.0.1/categories/Dash_Punctuation/symbols');
require('unicode-4.0.1/categories/Dash_Punctuation/regex');

require('unicode-4.0.1/categories/Decimal_Number/code-points');
require('unicode-4.0.1/categories/Decimal_Number/symbols');
require('unicode-4.0.1/categories/Decimal_Number/regex');

require('unicode-4.0.1/categories/Enclosing_Mark/code-points');
require('unicode-4.0.1/categories/Enclosing_Mark/symbols');
require('unicode-4.0.1/categories/Enclosing_Mark/regex');

require('unicode-4.0.1/categories/Final_Punctuation/code-points');
require('unicode-4.0.1/categories/Final_Punctuation/symbols');
require('unicode-4.0.1/categories/Final_Punctuation/regex');

require('unicode-4.0.1/categories/Format/code-points');
require('unicode-4.0.1/categories/Format/symbols');
require('unicode-4.0.1/categories/Format/regex');

require('unicode-4.0.1/categories/Initial_Punctuation/code-points');
require('unicode-4.0.1/categories/Initial_Punctuation/symbols');
require('unicode-4.0.1/categories/Initial_Punctuation/regex');

require('unicode-4.0.1/categories/Letter/code-points');
require('unicode-4.0.1/categories/Letter/symbols');
require('unicode-4.0.1/categories/Letter/regex');

require('unicode-4.0.1/categories/Letter_Number/code-points');
require('unicode-4.0.1/categories/Letter_Number/symbols');
require('unicode-4.0.1/categories/Letter_Number/regex');

require('unicode-4.0.1/categories/Line_Separator/code-points');
require('unicode-4.0.1/categories/Line_Separator/symbols');
require('unicode-4.0.1/categories/Line_Separator/regex');

require('unicode-4.0.1/categories/Lowercase_Letter/code-points');
require('unicode-4.0.1/categories/Lowercase_Letter/symbols');
require('unicode-4.0.1/categories/Lowercase_Letter/regex');

require('unicode-4.0.1/categories/Mark/code-points');
require('unicode-4.0.1/categories/Mark/symbols');
require('unicode-4.0.1/categories/Mark/regex');

require('unicode-4.0.1/categories/Math_Symbol/code-points');
require('unicode-4.0.1/categories/Math_Symbol/symbols');
require('unicode-4.0.1/categories/Math_Symbol/regex');

require('unicode-4.0.1/categories/Modifier_Letter/code-points');
require('unicode-4.0.1/categories/Modifier_Letter/symbols');
require('unicode-4.0.1/categories/Modifier_Letter/regex');

require('unicode-4.0.1/categories/Modifier_Symbol/code-points');
require('unicode-4.0.1/categories/Modifier_Symbol/symbols');
require('unicode-4.0.1/categories/Modifier_Symbol/regex');

require('unicode-4.0.1/categories/Nonspacing_Mark/code-points');
require('unicode-4.0.1/categories/Nonspacing_Mark/symbols');
require('unicode-4.0.1/categories/Nonspacing_Mark/regex');

require('unicode-4.0.1/categories/Number/code-points');
require('unicode-4.0.1/categories/Number/symbols');
require('unicode-4.0.1/categories/Number/regex');

require('unicode-4.0.1/categories/Open_Punctuation/code-points');
require('unicode-4.0.1/categories/Open_Punctuation/symbols');
require('unicode-4.0.1/categories/Open_Punctuation/regex');

require('unicode-4.0.1/categories/Other/code-points');
require('unicode-4.0.1/categories/Other/symbols');
require('unicode-4.0.1/categories/Other/regex');

require('unicode-4.0.1/categories/Other_Letter/code-points');
require('unicode-4.0.1/categories/Other_Letter/symbols');
require('unicode-4.0.1/categories/Other_Letter/regex');

require('unicode-4.0.1/categories/Other_Number/code-points');
require('unicode-4.0.1/categories/Other_Number/symbols');
require('unicode-4.0.1/categories/Other_Number/regex');

require('unicode-4.0.1/categories/Other_Punctuation/code-points');
require('unicode-4.0.1/categories/Other_Punctuation/symbols');
require('unicode-4.0.1/categories/Other_Punctuation/regex');

require('unicode-4.0.1/categories/Other_Symbol/code-points');
require('unicode-4.0.1/categories/Other_Symbol/symbols');
require('unicode-4.0.1/categories/Other_Symbol/regex');

require('unicode-4.0.1/categories/Paragraph_Separator/code-points');
require('unicode-4.0.1/categories/Paragraph_Separator/symbols');
require('unicode-4.0.1/categories/Paragraph_Separator/regex');

require('unicode-4.0.1/categories/Private_Use/code-points');
require('unicode-4.0.1/categories/Private_Use/symbols');
require('unicode-4.0.1/categories/Private_Use/regex');

require('unicode-4.0.1/categories/Punctuation/code-points');
require('unicode-4.0.1/categories/Punctuation/symbols');
require('unicode-4.0.1/categories/Punctuation/regex');

require('unicode-4.0.1/categories/Separator/code-points');
require('unicode-4.0.1/categories/Separator/symbols');
require('unicode-4.0.1/categories/Separator/regex');

require('unicode-4.0.1/categories/Space_Separator/code-points');
require('unicode-4.0.1/categories/Space_Separator/symbols');
require('unicode-4.0.1/categories/Space_Separator/regex');

require('unicode-4.0.1/categories/Spacing_Mark/code-points');
require('unicode-4.0.1/categories/Spacing_Mark/symbols');
require('unicode-4.0.1/categories/Spacing_Mark/regex');

require('unicode-4.0.1/categories/Surrogate/code-points');
require('unicode-4.0.1/categories/Surrogate/symbols');
require('unicode-4.0.1/categories/Surrogate/regex');

require('unicode-4.0.1/categories/Symbol/code-points');
require('unicode-4.0.1/categories/Symbol/symbols');
require('unicode-4.0.1/categories/Symbol/regex');

require('unicode-4.0.1/categories/Titlecase_Letter/code-points');
require('unicode-4.0.1/categories/Titlecase_Letter/symbols');
require('unicode-4.0.1/categories/Titlecase_Letter/regex');

require('unicode-4.0.1/categories/Unassigned/code-points');
require('unicode-4.0.1/categories/Unassigned/symbols');
require('unicode-4.0.1/categories/Unassigned/regex');

require('unicode-4.0.1/categories/Uppercase_Letter/code-points');
require('unicode-4.0.1/categories/Uppercase_Letter/symbols');
require('unicode-4.0.1/categories/Uppercase_Letter/regex');

// bidi classes:

require('unicode-4.0.1/bidi-classes').get(codePoint); // lookup map

require('unicode-4.0.1/bidi-classes/Arabic_Letter/code-points');
require('unicode-4.0.1/bidi-classes/Arabic_Letter/symbols');
require('unicode-4.0.1/bidi-classes/Arabic_Letter/regex');

require('unicode-4.0.1/bidi-classes/Arabic_Number/code-points');
require('unicode-4.0.1/bidi-classes/Arabic_Number/symbols');
require('unicode-4.0.1/bidi-classes/Arabic_Number/regex');

require('unicode-4.0.1/bidi-classes/Boundary_Neutral/code-points');
require('unicode-4.0.1/bidi-classes/Boundary_Neutral/symbols');
require('unicode-4.0.1/bidi-classes/Boundary_Neutral/regex');

require('unicode-4.0.1/bidi-classes/Common_Separator/code-points');
require('unicode-4.0.1/bidi-classes/Common_Separator/symbols');
require('unicode-4.0.1/bidi-classes/Common_Separator/regex');

require('unicode-4.0.1/bidi-classes/European_Number/code-points');
require('unicode-4.0.1/bidi-classes/European_Number/symbols');
require('unicode-4.0.1/bidi-classes/European_Number/regex');

require('unicode-4.0.1/bidi-classes/European_Separator/code-points');
require('unicode-4.0.1/bidi-classes/European_Separator/symbols');
require('unicode-4.0.1/bidi-classes/European_Separator/regex');

require('unicode-4.0.1/bidi-classes/European_Terminator/code-points');
require('unicode-4.0.1/bidi-classes/European_Terminator/symbols');
require('unicode-4.0.1/bidi-classes/European_Terminator/regex');

require('unicode-4.0.1/bidi-classes/Left_To_Right/code-points');
require('unicode-4.0.1/bidi-classes/Left_To_Right/symbols');
require('unicode-4.0.1/bidi-classes/Left_To_Right/regex');

require('unicode-4.0.1/bidi-classes/Left_To_Right_Embedding/code-points');
require('unicode-4.0.1/bidi-classes/Left_To_Right_Embedding/symbols');
require('unicode-4.0.1/bidi-classes/Left_To_Right_Embedding/regex');

require('unicode-4.0.1/bidi-classes/Left_To_Right_Override/code-points');
require('unicode-4.0.1/bidi-classes/Left_To_Right_Override/symbols');
require('unicode-4.0.1/bidi-classes/Left_To_Right_Override/regex');

require('unicode-4.0.1/bidi-classes/Nonspacing_Mark/code-points');
require('unicode-4.0.1/bidi-classes/Nonspacing_Mark/symbols');
require('unicode-4.0.1/bidi-classes/Nonspacing_Mark/regex');

require('unicode-4.0.1/bidi-classes/Other_Neutral/code-points');
require('unicode-4.0.1/bidi-classes/Other_Neutral/symbols');
require('unicode-4.0.1/bidi-classes/Other_Neutral/regex');

require('unicode-4.0.1/bidi-classes/Paragraph_Separator/code-points');
require('unicode-4.0.1/bidi-classes/Paragraph_Separator/symbols');
require('unicode-4.0.1/bidi-classes/Paragraph_Separator/regex');

require('unicode-4.0.1/bidi-classes/Pop_Directional_Format/code-points');
require('unicode-4.0.1/bidi-classes/Pop_Directional_Format/symbols');
require('unicode-4.0.1/bidi-classes/Pop_Directional_Format/regex');

require('unicode-4.0.1/bidi-classes/Right_To_Left/code-points');
require('unicode-4.0.1/bidi-classes/Right_To_Left/symbols');
require('unicode-4.0.1/bidi-classes/Right_To_Left/regex');

require('unicode-4.0.1/bidi-classes/Right_To_Left_Embedding/code-points');
require('unicode-4.0.1/bidi-classes/Right_To_Left_Embedding/symbols');
require('unicode-4.0.1/bidi-classes/Right_To_Left_Embedding/regex');

require('unicode-4.0.1/bidi-classes/Right_To_Left_Override/code-points');
require('unicode-4.0.1/bidi-classes/Right_To_Left_Override/symbols');
require('unicode-4.0.1/bidi-classes/Right_To_Left_Override/regex');

require('unicode-4.0.1/bidi-classes/Segment_Separator/code-points');
require('unicode-4.0.1/bidi-classes/Segment_Separator/symbols');
require('unicode-4.0.1/bidi-classes/Segment_Separator/regex');

require('unicode-4.0.1/bidi-classes/White_Space/code-points');
require('unicode-4.0.1/bidi-classes/White_Space/symbols');
require('unicode-4.0.1/bidi-classes/White_Space/regex');

// scripts:

require('unicode-4.0.1/scripts/Arabic/code-points');
require('unicode-4.0.1/scripts/Arabic/symbols');
require('unicode-4.0.1/scripts/Arabic/regex');

require('unicode-4.0.1/scripts/Armenian/code-points');
require('unicode-4.0.1/scripts/Armenian/symbols');
require('unicode-4.0.1/scripts/Armenian/regex');

require('unicode-4.0.1/scripts/Bengali/code-points');
require('unicode-4.0.1/scripts/Bengali/symbols');
require('unicode-4.0.1/scripts/Bengali/regex');

require('unicode-4.0.1/scripts/Bopomofo/code-points');
require('unicode-4.0.1/scripts/Bopomofo/symbols');
require('unicode-4.0.1/scripts/Bopomofo/regex');

require('unicode-4.0.1/scripts/Braille/code-points');
require('unicode-4.0.1/scripts/Braille/symbols');
require('unicode-4.0.1/scripts/Braille/regex');

require('unicode-4.0.1/scripts/Buhid/code-points');
require('unicode-4.0.1/scripts/Buhid/symbols');
require('unicode-4.0.1/scripts/Buhid/regex');

require('unicode-4.0.1/scripts/Canadian_Aboriginal/code-points');
require('unicode-4.0.1/scripts/Canadian_Aboriginal/symbols');
require('unicode-4.0.1/scripts/Canadian_Aboriginal/regex');

require('unicode-4.0.1/scripts/Cherokee/code-points');
require('unicode-4.0.1/scripts/Cherokee/symbols');
require('unicode-4.0.1/scripts/Cherokee/regex');

require('unicode-4.0.1/scripts/Common/code-points');
require('unicode-4.0.1/scripts/Common/symbols');
require('unicode-4.0.1/scripts/Common/regex');

require('unicode-4.0.1/scripts/Cypriot/code-points');
require('unicode-4.0.1/scripts/Cypriot/symbols');
require('unicode-4.0.1/scripts/Cypriot/regex');

require('unicode-4.0.1/scripts/Cyrillic/code-points');
require('unicode-4.0.1/scripts/Cyrillic/symbols');
require('unicode-4.0.1/scripts/Cyrillic/regex');

require('unicode-4.0.1/scripts/Deseret/code-points');
require('unicode-4.0.1/scripts/Deseret/symbols');
require('unicode-4.0.1/scripts/Deseret/regex');

require('unicode-4.0.1/scripts/Devanagari/code-points');
require('unicode-4.0.1/scripts/Devanagari/symbols');
require('unicode-4.0.1/scripts/Devanagari/regex');

require('unicode-4.0.1/scripts/Ethiopic/code-points');
require('unicode-4.0.1/scripts/Ethiopic/symbols');
require('unicode-4.0.1/scripts/Ethiopic/regex');

require('unicode-4.0.1/scripts/Georgian/code-points');
require('unicode-4.0.1/scripts/Georgian/symbols');
require('unicode-4.0.1/scripts/Georgian/regex');

require('unicode-4.0.1/scripts/Gothic/code-points');
require('unicode-4.0.1/scripts/Gothic/symbols');
require('unicode-4.0.1/scripts/Gothic/regex');

require('unicode-4.0.1/scripts/Greek/code-points');
require('unicode-4.0.1/scripts/Greek/symbols');
require('unicode-4.0.1/scripts/Greek/regex');

require('unicode-4.0.1/scripts/Gujarati/code-points');
require('unicode-4.0.1/scripts/Gujarati/symbols');
require('unicode-4.0.1/scripts/Gujarati/regex');

require('unicode-4.0.1/scripts/Gurmukhi/code-points');
require('unicode-4.0.1/scripts/Gurmukhi/symbols');
require('unicode-4.0.1/scripts/Gurmukhi/regex');

require('unicode-4.0.1/scripts/Han/code-points');
require('unicode-4.0.1/scripts/Han/symbols');
require('unicode-4.0.1/scripts/Han/regex');

require('unicode-4.0.1/scripts/Hangul/code-points');
require('unicode-4.0.1/scripts/Hangul/symbols');
require('unicode-4.0.1/scripts/Hangul/regex');

require('unicode-4.0.1/scripts/Hanunoo/code-points');
require('unicode-4.0.1/scripts/Hanunoo/symbols');
require('unicode-4.0.1/scripts/Hanunoo/regex');

require('unicode-4.0.1/scripts/Hebrew/code-points');
require('unicode-4.0.1/scripts/Hebrew/symbols');
require('unicode-4.0.1/scripts/Hebrew/regex');

require('unicode-4.0.1/scripts/Hiragana/code-points');
require('unicode-4.0.1/scripts/Hiragana/symbols');
require('unicode-4.0.1/scripts/Hiragana/regex');

require('unicode-4.0.1/scripts/Inherited/code-points');
require('unicode-4.0.1/scripts/Inherited/symbols');
require('unicode-4.0.1/scripts/Inherited/regex');

require('unicode-4.0.1/scripts/Kannada/code-points');
require('unicode-4.0.1/scripts/Kannada/symbols');
require('unicode-4.0.1/scripts/Kannada/regex');

require('unicode-4.0.1/scripts/Katakana/code-points');
require('unicode-4.0.1/scripts/Katakana/symbols');
require('unicode-4.0.1/scripts/Katakana/regex');

require('unicode-4.0.1/scripts/Katakana_Or_Hiragana/code-points');
require('unicode-4.0.1/scripts/Katakana_Or_Hiragana/symbols');
require('unicode-4.0.1/scripts/Katakana_Or_Hiragana/regex');

require('unicode-4.0.1/scripts/Khmer/code-points');
require('unicode-4.0.1/scripts/Khmer/symbols');
require('unicode-4.0.1/scripts/Khmer/regex');

require('unicode-4.0.1/scripts/Lao/code-points');
require('unicode-4.0.1/scripts/Lao/symbols');
require('unicode-4.0.1/scripts/Lao/regex');

require('unicode-4.0.1/scripts/Latin/code-points');
require('unicode-4.0.1/scripts/Latin/symbols');
require('unicode-4.0.1/scripts/Latin/regex');

require('unicode-4.0.1/scripts/Limbu/code-points');
require('unicode-4.0.1/scripts/Limbu/symbols');
require('unicode-4.0.1/scripts/Limbu/regex');

require('unicode-4.0.1/scripts/Linear_B/code-points');
require('unicode-4.0.1/scripts/Linear_B/symbols');
require('unicode-4.0.1/scripts/Linear_B/regex');

require('unicode-4.0.1/scripts/Malayalam/code-points');
require('unicode-4.0.1/scripts/Malayalam/symbols');
require('unicode-4.0.1/scripts/Malayalam/regex');

require('unicode-4.0.1/scripts/Mongolian/code-points');
require('unicode-4.0.1/scripts/Mongolian/symbols');
require('unicode-4.0.1/scripts/Mongolian/regex');

require('unicode-4.0.1/scripts/Myanmar/code-points');
require('unicode-4.0.1/scripts/Myanmar/symbols');
require('unicode-4.0.1/scripts/Myanmar/regex');

require('unicode-4.0.1/scripts/Ogham/code-points');
require('unicode-4.0.1/scripts/Ogham/symbols');
require('unicode-4.0.1/scripts/Ogham/regex');

require('unicode-4.0.1/scripts/Old_Italic/code-points');
require('unicode-4.0.1/scripts/Old_Italic/symbols');
require('unicode-4.0.1/scripts/Old_Italic/regex');

require('unicode-4.0.1/scripts/Oriya/code-points');
require('unicode-4.0.1/scripts/Oriya/symbols');
require('unicode-4.0.1/scripts/Oriya/regex');

require('unicode-4.0.1/scripts/Osmanya/code-points');
require('unicode-4.0.1/scripts/Osmanya/symbols');
require('unicode-4.0.1/scripts/Osmanya/regex');

require('unicode-4.0.1/scripts/Runic/code-points');
require('unicode-4.0.1/scripts/Runic/symbols');
require('unicode-4.0.1/scripts/Runic/regex');

require('unicode-4.0.1/scripts/Shavian/code-points');
require('unicode-4.0.1/scripts/Shavian/symbols');
require('unicode-4.0.1/scripts/Shavian/regex');

require('unicode-4.0.1/scripts/Sinhala/code-points');
require('unicode-4.0.1/scripts/Sinhala/symbols');
require('unicode-4.0.1/scripts/Sinhala/regex');

require('unicode-4.0.1/scripts/Syriac/code-points');
require('unicode-4.0.1/scripts/Syriac/symbols');
require('unicode-4.0.1/scripts/Syriac/regex');

require('unicode-4.0.1/scripts/Tagalog/code-points');
require('unicode-4.0.1/scripts/Tagalog/symbols');
require('unicode-4.0.1/scripts/Tagalog/regex');

require('unicode-4.0.1/scripts/Tagbanwa/code-points');
require('unicode-4.0.1/scripts/Tagbanwa/symbols');
require('unicode-4.0.1/scripts/Tagbanwa/regex');

require('unicode-4.0.1/scripts/Tai_Le/code-points');
require('unicode-4.0.1/scripts/Tai_Le/symbols');
require('unicode-4.0.1/scripts/Tai_Le/regex');

require('unicode-4.0.1/scripts/Tamil/code-points');
require('unicode-4.0.1/scripts/Tamil/symbols');
require('unicode-4.0.1/scripts/Tamil/regex');

require('unicode-4.0.1/scripts/Telugu/code-points');
require('unicode-4.0.1/scripts/Telugu/symbols');
require('unicode-4.0.1/scripts/Telugu/regex');

require('unicode-4.0.1/scripts/Thaana/code-points');
require('unicode-4.0.1/scripts/Thaana/symbols');
require('unicode-4.0.1/scripts/Thaana/regex');

require('unicode-4.0.1/scripts/Thai/code-points');
require('unicode-4.0.1/scripts/Thai/symbols');
require('unicode-4.0.1/scripts/Thai/regex');

require('unicode-4.0.1/scripts/Tibetan/code-points');
require('unicode-4.0.1/scripts/Tibetan/symbols');
require('unicode-4.0.1/scripts/Tibetan/regex');

require('unicode-4.0.1/scripts/Ugaritic/code-points');
require('unicode-4.0.1/scripts/Ugaritic/symbols');
require('unicode-4.0.1/scripts/Ugaritic/regex');

require('unicode-4.0.1/scripts/Yi/code-points');
require('unicode-4.0.1/scripts/Yi/symbols');
require('unicode-4.0.1/scripts/Yi/regex');

// case folding:

require('unicode-4.0.1/case-folding/C/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/case-folding/C/code-points').get(codePoint);
require('unicode-4.0.1/case-folding/C/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/case-folding/C/symbols').get(symbol);

require('unicode-4.0.1/case-folding/F/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/case-folding/F/code-points').get(codePoint);
require('unicode-4.0.1/case-folding/F/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/case-folding/F/symbols').get(symbol);

require('unicode-4.0.1/case-folding/S/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/case-folding/S/code-points').get(codePoint);
require('unicode-4.0.1/case-folding/S/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/case-folding/S/symbols').get(symbol);

require('unicode-4.0.1/case-folding/T/code-points'); // lookup map from code point to code point
require('unicode-4.0.1/case-folding/T/code-points').get(codePoint);
require('unicode-4.0.1/case-folding/T/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.1/case-folding/T/symbols').get(symbol);

// blocks:

require('unicode-4.0.1/blocks/Aegean_Numbers/code-points');
require('unicode-4.0.1/blocks/Aegean_Numbers/symbols');
require('unicode-4.0.1/blocks/Aegean_Numbers/regex');

require('unicode-4.0.1/blocks/Alphabetic_Presentation_Forms/code-points');
require('unicode-4.0.1/blocks/Alphabetic_Presentation_Forms/symbols');
require('unicode-4.0.1/blocks/Alphabetic_Presentation_Forms/regex');

require('unicode-4.0.1/blocks/Arabic/code-points');
require('unicode-4.0.1/blocks/Arabic/symbols');
require('unicode-4.0.1/blocks/Arabic/regex');

require('unicode-4.0.1/blocks/Arabic_Presentation_Forms-A/code-points');
require('unicode-4.0.1/blocks/Arabic_Presentation_Forms-A/symbols');
require('unicode-4.0.1/blocks/Arabic_Presentation_Forms-A/regex');

require('unicode-4.0.1/blocks/Arabic_Presentation_Forms-B/code-points');
require('unicode-4.0.1/blocks/Arabic_Presentation_Forms-B/symbols');
require('unicode-4.0.1/blocks/Arabic_Presentation_Forms-B/regex');

require('unicode-4.0.1/blocks/Armenian/code-points');
require('unicode-4.0.1/blocks/Armenian/symbols');
require('unicode-4.0.1/blocks/Armenian/regex');

require('unicode-4.0.1/blocks/Arrows/code-points');
require('unicode-4.0.1/blocks/Arrows/symbols');
require('unicode-4.0.1/blocks/Arrows/regex');

require('unicode-4.0.1/blocks/Basic_Latin/code-points');
require('unicode-4.0.1/blocks/Basic_Latin/symbols');
require('unicode-4.0.1/blocks/Basic_Latin/regex');

require('unicode-4.0.1/blocks/Bengali/code-points');
require('unicode-4.0.1/blocks/Bengali/symbols');
require('unicode-4.0.1/blocks/Bengali/regex');

require('unicode-4.0.1/blocks/Block_Elements/code-points');
require('unicode-4.0.1/blocks/Block_Elements/symbols');
require('unicode-4.0.1/blocks/Block_Elements/regex');

require('unicode-4.0.1/blocks/Bopomofo/code-points');
require('unicode-4.0.1/blocks/Bopomofo/symbols');
require('unicode-4.0.1/blocks/Bopomofo/regex');

require('unicode-4.0.1/blocks/Bopomofo_Extended/code-points');
require('unicode-4.0.1/blocks/Bopomofo_Extended/symbols');
require('unicode-4.0.1/blocks/Bopomofo_Extended/regex');

require('unicode-4.0.1/blocks/Box_Drawing/code-points');
require('unicode-4.0.1/blocks/Box_Drawing/symbols');
require('unicode-4.0.1/blocks/Box_Drawing/regex');

require('unicode-4.0.1/blocks/Braille_Patterns/code-points');
require('unicode-4.0.1/blocks/Braille_Patterns/symbols');
require('unicode-4.0.1/blocks/Braille_Patterns/regex');

require('unicode-4.0.1/blocks/Buhid/code-points');
require('unicode-4.0.1/blocks/Buhid/symbols');
require('unicode-4.0.1/blocks/Buhid/regex');

require('unicode-4.0.1/blocks/Byzantine_Musical_Symbols/code-points');
require('unicode-4.0.1/blocks/Byzantine_Musical_Symbols/symbols');
require('unicode-4.0.1/blocks/Byzantine_Musical_Symbols/regex');

require('unicode-4.0.1/blocks/CJK_Compatibility/code-points');
require('unicode-4.0.1/blocks/CJK_Compatibility/symbols');
require('unicode-4.0.1/blocks/CJK_Compatibility/regex');

require('unicode-4.0.1/blocks/CJK_Compatibility_Forms/code-points');
require('unicode-4.0.1/blocks/CJK_Compatibility_Forms/symbols');
require('unicode-4.0.1/blocks/CJK_Compatibility_Forms/regex');

require('unicode-4.0.1/blocks/CJK_Compatibility_Ideographs/code-points');
require('unicode-4.0.1/blocks/CJK_Compatibility_Ideographs/symbols');
require('unicode-4.0.1/blocks/CJK_Compatibility_Ideographs/regex');

require('unicode-4.0.1/blocks/CJK_Compatibility_Ideographs_Supplement/code-points');
require('unicode-4.0.1/blocks/CJK_Compatibility_Ideographs_Supplement/symbols');
require('unicode-4.0.1/blocks/CJK_Compatibility_Ideographs_Supplement/regex');

require('unicode-4.0.1/blocks/CJK_Radicals_Supplement/code-points');
require('unicode-4.0.1/blocks/CJK_Radicals_Supplement/symbols');
require('unicode-4.0.1/blocks/CJK_Radicals_Supplement/regex');

require('unicode-4.0.1/blocks/CJK_Symbols_and_Punctuation/code-points');
require('unicode-4.0.1/blocks/CJK_Symbols_and_Punctuation/symbols');
require('unicode-4.0.1/blocks/CJK_Symbols_and_Punctuation/regex');

require('unicode-4.0.1/blocks/CJK_Unified_Ideographs/code-points');
require('unicode-4.0.1/blocks/CJK_Unified_Ideographs/symbols');
require('unicode-4.0.1/blocks/CJK_Unified_Ideographs/regex');

require('unicode-4.0.1/blocks/CJK_Unified_Ideographs_Extension_A/code-points');
require('unicode-4.0.1/blocks/CJK_Unified_Ideographs_Extension_A/symbols');
require('unicode-4.0.1/blocks/CJK_Unified_Ideographs_Extension_A/regex');

require('unicode-4.0.1/blocks/CJK_Unified_Ideographs_Extension_B/code-points');
require('unicode-4.0.1/blocks/CJK_Unified_Ideographs_Extension_B/symbols');
require('unicode-4.0.1/blocks/CJK_Unified_Ideographs_Extension_B/regex');

require('unicode-4.0.1/blocks/Cherokee/code-points');
require('unicode-4.0.1/blocks/Cherokee/symbols');
require('unicode-4.0.1/blocks/Cherokee/regex');

require('unicode-4.0.1/blocks/Combining_Diacritical_Marks/code-points');
require('unicode-4.0.1/blocks/Combining_Diacritical_Marks/symbols');
require('unicode-4.0.1/blocks/Combining_Diacritical_Marks/regex');

require('unicode-4.0.1/blocks/Combining_Diacritical_Marks_for_Symbols/code-points');
require('unicode-4.0.1/blocks/Combining_Diacritical_Marks_for_Symbols/symbols');
require('unicode-4.0.1/blocks/Combining_Diacritical_Marks_for_Symbols/regex');

require('unicode-4.0.1/blocks/Combining_Half_Marks/code-points');
require('unicode-4.0.1/blocks/Combining_Half_Marks/symbols');
require('unicode-4.0.1/blocks/Combining_Half_Marks/regex');

require('unicode-4.0.1/blocks/Control_Pictures/code-points');
require('unicode-4.0.1/blocks/Control_Pictures/symbols');
require('unicode-4.0.1/blocks/Control_Pictures/regex');

require('unicode-4.0.1/blocks/Currency_Symbols/code-points');
require('unicode-4.0.1/blocks/Currency_Symbols/symbols');
require('unicode-4.0.1/blocks/Currency_Symbols/regex');

require('unicode-4.0.1/blocks/Cypriot_Syllabary/code-points');
require('unicode-4.0.1/blocks/Cypriot_Syllabary/symbols');
require('unicode-4.0.1/blocks/Cypriot_Syllabary/regex');

require('unicode-4.0.1/blocks/Cyrillic/code-points');
require('unicode-4.0.1/blocks/Cyrillic/symbols');
require('unicode-4.0.1/blocks/Cyrillic/regex');

require('unicode-4.0.1/blocks/Cyrillic_Supplement/code-points');
require('unicode-4.0.1/blocks/Cyrillic_Supplement/symbols');
require('unicode-4.0.1/blocks/Cyrillic_Supplement/regex');

require('unicode-4.0.1/blocks/Deseret/code-points');
require('unicode-4.0.1/blocks/Deseret/symbols');
require('unicode-4.0.1/blocks/Deseret/regex');

require('unicode-4.0.1/blocks/Devanagari/code-points');
require('unicode-4.0.1/blocks/Devanagari/symbols');
require('unicode-4.0.1/blocks/Devanagari/regex');

require('unicode-4.0.1/blocks/Dingbats/code-points');
require('unicode-4.0.1/blocks/Dingbats/symbols');
require('unicode-4.0.1/blocks/Dingbats/regex');

require('unicode-4.0.1/blocks/Enclosed_Alphanumerics/code-points');
require('unicode-4.0.1/blocks/Enclosed_Alphanumerics/symbols');
require('unicode-4.0.1/blocks/Enclosed_Alphanumerics/regex');

require('unicode-4.0.1/blocks/Enclosed_CJK_Letters_and_Months/code-points');
require('unicode-4.0.1/blocks/Enclosed_CJK_Letters_and_Months/symbols');
require('unicode-4.0.1/blocks/Enclosed_CJK_Letters_and_Months/regex');

require('unicode-4.0.1/blocks/Ethiopic/code-points');
require('unicode-4.0.1/blocks/Ethiopic/symbols');
require('unicode-4.0.1/blocks/Ethiopic/regex');

require('unicode-4.0.1/blocks/General_Punctuation/code-points');
require('unicode-4.0.1/blocks/General_Punctuation/symbols');
require('unicode-4.0.1/blocks/General_Punctuation/regex');

require('unicode-4.0.1/blocks/Geometric_Shapes/code-points');
require('unicode-4.0.1/blocks/Geometric_Shapes/symbols');
require('unicode-4.0.1/blocks/Geometric_Shapes/regex');

require('unicode-4.0.1/blocks/Georgian/code-points');
require('unicode-4.0.1/blocks/Georgian/symbols');
require('unicode-4.0.1/blocks/Georgian/regex');

require('unicode-4.0.1/blocks/Gothic/code-points');
require('unicode-4.0.1/blocks/Gothic/symbols');
require('unicode-4.0.1/blocks/Gothic/regex');

require('unicode-4.0.1/blocks/Greek_Extended/code-points');
require('unicode-4.0.1/blocks/Greek_Extended/symbols');
require('unicode-4.0.1/blocks/Greek_Extended/regex');

require('unicode-4.0.1/blocks/Greek_and_Coptic/code-points');
require('unicode-4.0.1/blocks/Greek_and_Coptic/symbols');
require('unicode-4.0.1/blocks/Greek_and_Coptic/regex');

require('unicode-4.0.1/blocks/Gujarati/code-points');
require('unicode-4.0.1/blocks/Gujarati/symbols');
require('unicode-4.0.1/blocks/Gujarati/regex');

require('unicode-4.0.1/blocks/Gurmukhi/code-points');
require('unicode-4.0.1/blocks/Gurmukhi/symbols');
require('unicode-4.0.1/blocks/Gurmukhi/regex');

require('unicode-4.0.1/blocks/Halfwidth_and_Fullwidth_Forms/code-points');
require('unicode-4.0.1/blocks/Halfwidth_and_Fullwidth_Forms/symbols');
require('unicode-4.0.1/blocks/Halfwidth_and_Fullwidth_Forms/regex');

require('unicode-4.0.1/blocks/Hangul_Compatibility_Jamo/code-points');
require('unicode-4.0.1/blocks/Hangul_Compatibility_Jamo/symbols');
require('unicode-4.0.1/blocks/Hangul_Compatibility_Jamo/regex');

require('unicode-4.0.1/blocks/Hangul_Jamo/code-points');
require('unicode-4.0.1/blocks/Hangul_Jamo/symbols');
require('unicode-4.0.1/blocks/Hangul_Jamo/regex');

require('unicode-4.0.1/blocks/Hangul_Syllables/code-points');
require('unicode-4.0.1/blocks/Hangul_Syllables/symbols');
require('unicode-4.0.1/blocks/Hangul_Syllables/regex');

require('unicode-4.0.1/blocks/Hanunoo/code-points');
require('unicode-4.0.1/blocks/Hanunoo/symbols');
require('unicode-4.0.1/blocks/Hanunoo/regex');

require('unicode-4.0.1/blocks/Hebrew/code-points');
require('unicode-4.0.1/blocks/Hebrew/symbols');
require('unicode-4.0.1/blocks/Hebrew/regex');

require('unicode-4.0.1/blocks/High_Private_Use_Surrogates/code-points');
require('unicode-4.0.1/blocks/High_Private_Use_Surrogates/symbols');
require('unicode-4.0.1/blocks/High_Private_Use_Surrogates/regex');

require('unicode-4.0.1/blocks/High_Surrogates/code-points');
require('unicode-4.0.1/blocks/High_Surrogates/symbols');
require('unicode-4.0.1/blocks/High_Surrogates/regex');

require('unicode-4.0.1/blocks/Hiragana/code-points');
require('unicode-4.0.1/blocks/Hiragana/symbols');
require('unicode-4.0.1/blocks/Hiragana/regex');

require('unicode-4.0.1/blocks/IPA_Extensions/code-points');
require('unicode-4.0.1/blocks/IPA_Extensions/symbols');
require('unicode-4.0.1/blocks/IPA_Extensions/regex');

require('unicode-4.0.1/blocks/Ideographic_Description_Characters/code-points');
require('unicode-4.0.1/blocks/Ideographic_Description_Characters/symbols');
require('unicode-4.0.1/blocks/Ideographic_Description_Characters/regex');

require('unicode-4.0.1/blocks/Kanbun/code-points');
require('unicode-4.0.1/blocks/Kanbun/symbols');
require('unicode-4.0.1/blocks/Kanbun/regex');

require('unicode-4.0.1/blocks/Kangxi_Radicals/code-points');
require('unicode-4.0.1/blocks/Kangxi_Radicals/symbols');
require('unicode-4.0.1/blocks/Kangxi_Radicals/regex');

require('unicode-4.0.1/blocks/Kannada/code-points');
require('unicode-4.0.1/blocks/Kannada/symbols');
require('unicode-4.0.1/blocks/Kannada/regex');

require('unicode-4.0.1/blocks/Katakana/code-points');
require('unicode-4.0.1/blocks/Katakana/symbols');
require('unicode-4.0.1/blocks/Katakana/regex');

require('unicode-4.0.1/blocks/Katakana_Phonetic_Extensions/code-points');
require('unicode-4.0.1/blocks/Katakana_Phonetic_Extensions/symbols');
require('unicode-4.0.1/blocks/Katakana_Phonetic_Extensions/regex');

require('unicode-4.0.1/blocks/Khmer/code-points');
require('unicode-4.0.1/blocks/Khmer/symbols');
require('unicode-4.0.1/blocks/Khmer/regex');

require('unicode-4.0.1/blocks/Khmer_Symbols/code-points');
require('unicode-4.0.1/blocks/Khmer_Symbols/symbols');
require('unicode-4.0.1/blocks/Khmer_Symbols/regex');

require('unicode-4.0.1/blocks/Lao/code-points');
require('unicode-4.0.1/blocks/Lao/symbols');
require('unicode-4.0.1/blocks/Lao/regex');

require('unicode-4.0.1/blocks/Latin-1_Supplement/code-points');
require('unicode-4.0.1/blocks/Latin-1_Supplement/symbols');
require('unicode-4.0.1/blocks/Latin-1_Supplement/regex');

require('unicode-4.0.1/blocks/Latin_Extended-A/code-points');
require('unicode-4.0.1/blocks/Latin_Extended-A/symbols');
require('unicode-4.0.1/blocks/Latin_Extended-A/regex');

require('unicode-4.0.1/blocks/Latin_Extended-B/code-points');
require('unicode-4.0.1/blocks/Latin_Extended-B/symbols');
require('unicode-4.0.1/blocks/Latin_Extended-B/regex');

require('unicode-4.0.1/blocks/Latin_Extended_Additional/code-points');
require('unicode-4.0.1/blocks/Latin_Extended_Additional/symbols');
require('unicode-4.0.1/blocks/Latin_Extended_Additional/regex');

require('unicode-4.0.1/blocks/Letterlike_Symbols/code-points');
require('unicode-4.0.1/blocks/Letterlike_Symbols/symbols');
require('unicode-4.0.1/blocks/Letterlike_Symbols/regex');

require('unicode-4.0.1/blocks/Limbu/code-points');
require('unicode-4.0.1/blocks/Limbu/symbols');
require('unicode-4.0.1/blocks/Limbu/regex');

require('unicode-4.0.1/blocks/Linear_B_Ideograms/code-points');
require('unicode-4.0.1/blocks/Linear_B_Ideograms/symbols');
require('unicode-4.0.1/blocks/Linear_B_Ideograms/regex');

require('unicode-4.0.1/blocks/Linear_B_Syllabary/code-points');
require('unicode-4.0.1/blocks/Linear_B_Syllabary/symbols');
require('unicode-4.0.1/blocks/Linear_B_Syllabary/regex');

require('unicode-4.0.1/blocks/Low_Surrogates/code-points');
require('unicode-4.0.1/blocks/Low_Surrogates/symbols');
require('unicode-4.0.1/blocks/Low_Surrogates/regex');

require('unicode-4.0.1/blocks/Malayalam/code-points');
require('unicode-4.0.1/blocks/Malayalam/symbols');
require('unicode-4.0.1/blocks/Malayalam/regex');

require('unicode-4.0.1/blocks/Mathematical_Alphanumeric_Symbols/code-points');
require('unicode-4.0.1/blocks/Mathematical_Alphanumeric_Symbols/symbols');
require('unicode-4.0.1/blocks/Mathematical_Alphanumeric_Symbols/regex');

require('unicode-4.0.1/blocks/Mathematical_Operators/code-points');
require('unicode-4.0.1/blocks/Mathematical_Operators/symbols');
require('unicode-4.0.1/blocks/Mathematical_Operators/regex');

require('unicode-4.0.1/blocks/Miscellaneous_Mathematical_Symbols-A/code-points');
require('unicode-4.0.1/blocks/Miscellaneous_Mathematical_Symbols-A/symbols');
require('unicode-4.0.1/blocks/Miscellaneous_Mathematical_Symbols-A/regex');

require('unicode-4.0.1/blocks/Miscellaneous_Mathematical_Symbols-B/code-points');
require('unicode-4.0.1/blocks/Miscellaneous_Mathematical_Symbols-B/symbols');
require('unicode-4.0.1/blocks/Miscellaneous_Mathematical_Symbols-B/regex');

require('unicode-4.0.1/blocks/Miscellaneous_Symbols/code-points');
require('unicode-4.0.1/blocks/Miscellaneous_Symbols/symbols');
require('unicode-4.0.1/blocks/Miscellaneous_Symbols/regex');

require('unicode-4.0.1/blocks/Miscellaneous_Symbols_and_Arrows/code-points');
require('unicode-4.0.1/blocks/Miscellaneous_Symbols_and_Arrows/symbols');
require('unicode-4.0.1/blocks/Miscellaneous_Symbols_and_Arrows/regex');

require('unicode-4.0.1/blocks/Miscellaneous_Technical/code-points');
require('unicode-4.0.1/blocks/Miscellaneous_Technical/symbols');
require('unicode-4.0.1/blocks/Miscellaneous_Technical/regex');

require('unicode-4.0.1/blocks/Mongolian/code-points');
require('unicode-4.0.1/blocks/Mongolian/symbols');
require('unicode-4.0.1/blocks/Mongolian/regex');

require('unicode-4.0.1/blocks/Musical_Symbols/code-points');
require('unicode-4.0.1/blocks/Musical_Symbols/symbols');
require('unicode-4.0.1/blocks/Musical_Symbols/regex');

require('unicode-4.0.1/blocks/Myanmar/code-points');
require('unicode-4.0.1/blocks/Myanmar/symbols');
require('unicode-4.0.1/blocks/Myanmar/regex');

require('unicode-4.0.1/blocks/Number_Forms/code-points');
require('unicode-4.0.1/blocks/Number_Forms/symbols');
require('unicode-4.0.1/blocks/Number_Forms/regex');

require('unicode-4.0.1/blocks/Ogham/code-points');
require('unicode-4.0.1/blocks/Ogham/symbols');
require('unicode-4.0.1/blocks/Ogham/regex');

require('unicode-4.0.1/blocks/Old_Italic/code-points');
require('unicode-4.0.1/blocks/Old_Italic/symbols');
require('unicode-4.0.1/blocks/Old_Italic/regex');

require('unicode-4.0.1/blocks/Optical_Character_Recognition/code-points');
require('unicode-4.0.1/blocks/Optical_Character_Recognition/symbols');
require('unicode-4.0.1/blocks/Optical_Character_Recognition/regex');

require('unicode-4.0.1/blocks/Oriya/code-points');
require('unicode-4.0.1/blocks/Oriya/symbols');
require('unicode-4.0.1/blocks/Oriya/regex');

require('unicode-4.0.1/blocks/Osmanya/code-points');
require('unicode-4.0.1/blocks/Osmanya/symbols');
require('unicode-4.0.1/blocks/Osmanya/regex');

require('unicode-4.0.1/blocks/Phonetic_Extensions/code-points');
require('unicode-4.0.1/blocks/Phonetic_Extensions/symbols');
require('unicode-4.0.1/blocks/Phonetic_Extensions/regex');

require('unicode-4.0.1/blocks/Private_Use_Area/code-points');
require('unicode-4.0.1/blocks/Private_Use_Area/symbols');
require('unicode-4.0.1/blocks/Private_Use_Area/regex');

require('unicode-4.0.1/blocks/Runic/code-points');
require('unicode-4.0.1/blocks/Runic/symbols');
require('unicode-4.0.1/blocks/Runic/regex');

require('unicode-4.0.1/blocks/Shavian/code-points');
require('unicode-4.0.1/blocks/Shavian/symbols');
require('unicode-4.0.1/blocks/Shavian/regex');

require('unicode-4.0.1/blocks/Sinhala/code-points');
require('unicode-4.0.1/blocks/Sinhala/symbols');
require('unicode-4.0.1/blocks/Sinhala/regex');

require('unicode-4.0.1/blocks/Small_Form_Variants/code-points');
require('unicode-4.0.1/blocks/Small_Form_Variants/symbols');
require('unicode-4.0.1/blocks/Small_Form_Variants/regex');

require('unicode-4.0.1/blocks/Spacing_Modifier_Letters/code-points');
require('unicode-4.0.1/blocks/Spacing_Modifier_Letters/symbols');
require('unicode-4.0.1/blocks/Spacing_Modifier_Letters/regex');

require('unicode-4.0.1/blocks/Specials/code-points');
require('unicode-4.0.1/blocks/Specials/symbols');
require('unicode-4.0.1/blocks/Specials/regex');

require('unicode-4.0.1/blocks/Superscripts_and_Subscripts/code-points');
require('unicode-4.0.1/blocks/Superscripts_and_Subscripts/symbols');
require('unicode-4.0.1/blocks/Superscripts_and_Subscripts/regex');

require('unicode-4.0.1/blocks/Supplemental_Arrows-A/code-points');
require('unicode-4.0.1/blocks/Supplemental_Arrows-A/symbols');
require('unicode-4.0.1/blocks/Supplemental_Arrows-A/regex');

require('unicode-4.0.1/blocks/Supplemental_Arrows-B/code-points');
require('unicode-4.0.1/blocks/Supplemental_Arrows-B/symbols');
require('unicode-4.0.1/blocks/Supplemental_Arrows-B/regex');

require('unicode-4.0.1/blocks/Supplemental_Mathematical_Operators/code-points');
require('unicode-4.0.1/blocks/Supplemental_Mathematical_Operators/symbols');
require('unicode-4.0.1/blocks/Supplemental_Mathematical_Operators/regex');

require('unicode-4.0.1/blocks/Supplementary_Private_Use_Area-A/code-points');
require('unicode-4.0.1/blocks/Supplementary_Private_Use_Area-A/symbols');
require('unicode-4.0.1/blocks/Supplementary_Private_Use_Area-A/regex');

require('unicode-4.0.1/blocks/Supplementary_Private_Use_Area-B/code-points');
require('unicode-4.0.1/blocks/Supplementary_Private_Use_Area-B/symbols');
require('unicode-4.0.1/blocks/Supplementary_Private_Use_Area-B/regex');

require('unicode-4.0.1/blocks/Syriac/code-points');
require('unicode-4.0.1/blocks/Syriac/symbols');
require('unicode-4.0.1/blocks/Syriac/regex');

require('unicode-4.0.1/blocks/Tagalog/code-points');
require('unicode-4.0.1/blocks/Tagalog/symbols');
require('unicode-4.0.1/blocks/Tagalog/regex');

require('unicode-4.0.1/blocks/Tagbanwa/code-points');
require('unicode-4.0.1/blocks/Tagbanwa/symbols');
require('unicode-4.0.1/blocks/Tagbanwa/regex');

require('unicode-4.0.1/blocks/Tags/code-points');
require('unicode-4.0.1/blocks/Tags/symbols');
require('unicode-4.0.1/blocks/Tags/regex');

require('unicode-4.0.1/blocks/Tai_Le/code-points');
require('unicode-4.0.1/blocks/Tai_Le/symbols');
require('unicode-4.0.1/blocks/Tai_Le/regex');

require('unicode-4.0.1/blocks/Tai_Xuan_Jing_Symbols/code-points');
require('unicode-4.0.1/blocks/Tai_Xuan_Jing_Symbols/symbols');
require('unicode-4.0.1/blocks/Tai_Xuan_Jing_Symbols/regex');

require('unicode-4.0.1/blocks/Tamil/code-points');
require('unicode-4.0.1/blocks/Tamil/symbols');
require('unicode-4.0.1/blocks/Tamil/regex');

require('unicode-4.0.1/blocks/Telugu/code-points');
require('unicode-4.0.1/blocks/Telugu/symbols');
require('unicode-4.0.1/blocks/Telugu/regex');

require('unicode-4.0.1/blocks/Thaana/code-points');
require('unicode-4.0.1/blocks/Thaana/symbols');
require('unicode-4.0.1/blocks/Thaana/regex');

require('unicode-4.0.1/blocks/Thai/code-points');
require('unicode-4.0.1/blocks/Thai/symbols');
require('unicode-4.0.1/blocks/Thai/regex');

require('unicode-4.0.1/blocks/Tibetan/code-points');
require('unicode-4.0.1/blocks/Tibetan/symbols');
require('unicode-4.0.1/blocks/Tibetan/regex');

require('unicode-4.0.1/blocks/Ugaritic/code-points');
require('unicode-4.0.1/blocks/Ugaritic/symbols');
require('unicode-4.0.1/blocks/Ugaritic/regex');

require('unicode-4.0.1/blocks/Unified_Canadian_Aboriginal_Syllabics/code-points');
require('unicode-4.0.1/blocks/Unified_Canadian_Aboriginal_Syllabics/symbols');
require('unicode-4.0.1/blocks/Unified_Canadian_Aboriginal_Syllabics/regex');

require('unicode-4.0.1/blocks/Variation_Selectors/code-points');
require('unicode-4.0.1/blocks/Variation_Selectors/symbols');
require('unicode-4.0.1/blocks/Variation_Selectors/regex');

require('unicode-4.0.1/blocks/Variation_Selectors_Supplement/code-points');
require('unicode-4.0.1/blocks/Variation_Selectors_Supplement/symbols');
require('unicode-4.0.1/blocks/Variation_Selectors_Supplement/regex');

require('unicode-4.0.1/blocks/Yi_Radicals/code-points');
require('unicode-4.0.1/blocks/Yi_Radicals/symbols');
require('unicode-4.0.1/blocks/Yi_Radicals/regex');

require('unicode-4.0.1/blocks/Yi_Syllables/code-points');
require('unicode-4.0.1/blocks/Yi_Syllables/symbols');
require('unicode-4.0.1/blocks/Yi_Syllables/regex');

require('unicode-4.0.1/blocks/Yijing_Hexagram_Symbols/code-points');
require('unicode-4.0.1/blocks/Yijing_Hexagram_Symbols/symbols');
require('unicode-4.0.1/blocks/Yijing_Hexagram_Symbols/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
