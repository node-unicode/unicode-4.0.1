module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))