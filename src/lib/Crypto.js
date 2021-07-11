const crypto = require("crypto");

const Crypto = {
    createHash256Base64: function(str){
        return crypto.createHash("sha256").update(str).digest("base64");
    },
    createHash256BaseHex: function(str){
        return crypto.createHash("sha256").update(str).digest("hex");
    } 
}

export default Crypto;