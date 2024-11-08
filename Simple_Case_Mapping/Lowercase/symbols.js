module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))