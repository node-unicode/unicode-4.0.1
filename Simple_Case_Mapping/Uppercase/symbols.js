module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))