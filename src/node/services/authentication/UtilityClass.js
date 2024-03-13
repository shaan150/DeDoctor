require('dotenv').config();
const {KeyPair} = require("near-api-js");

class UtilityClass {
    static generateSecretKey(length = 32) {
        return crypto.randomBytes(length).toString('base64').slice(0, length);
    }

    static getKeyPairFromPrivate(privateKey) {
        return KeyPair.fromString(privateKey);
    }
}
