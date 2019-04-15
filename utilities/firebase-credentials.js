const data =  ``;

const crypto = require('crypto');

const cipher = crypto.createCipher('aes-192-cbc', '2 ^ zip FRUIT > < VISA SKYPE 6 YELP zip HULU 9 COFFEE 7 ');
let res = cipher.update(data, 'utf8', 'base64');
res += cipher.final('base64');

const decipher = crypto.createDecipher('aes-192-cbc', '2 ^ zip FRUIT > < VISA SKYPE 6 YELP zip HULU 9 COFFEE 7 ');
let rrres = decipher.update(res, 'base64', 'utf8');
rrres += decipher.final('utf8');

console.log(rrres);