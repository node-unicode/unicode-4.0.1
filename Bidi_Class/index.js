module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))