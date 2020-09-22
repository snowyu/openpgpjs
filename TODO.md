+ add userAttributes option to generateKey
+ add preferredKeyServer option to generateKey
  * this will be added to the signature of the primary UserID
+ add toJSON() method to Key
+ add signatureType param to user.sign, key.signAllUsers and key.signPrimaryUser
+ add signKeyFlagOnly option to encrypt
+ add keyFlagOnly to sign
+ add the keyFlagOnly option to sign/signEx/signDetached/signDetachedEx
+ add the keyFlagOnly option to getSigningKey
+ add options.signKeyFlags to openpgp.encrypt for only used the signKeyFlags to sign the encrypted message
+ add keyFlags option to Message.sign/verify
+ add Subkey
+ add keyExpirationTime
+ add `SubKey::getLatestSignature`
+ add `options.keyFlags` to `Subkey::bindSignature` (`generateKey`)
  * supports extends the keyFlags: 0x10(splitKey), 0x20(authentication), 0x80(multi-person used)
+ add `keyFlags` to `Subkey::verify`, `Key::getSigningKey`, `Key::getEncryptionKey`, `createSignaturePackets` `createSignaturePacketsEx` `createVerificationObjects`
+ add `keyFlags` to `Message::sign/signEx/signDetached/signDetachedEx/verify/verifyDetached/encrypt`
  * note: encrypt's keyFlags only for pk. I have no idea about encryption/decryption of keyFlags.
+ add `options.keyFlags` to `Message::signEx`
+ !`Message::decrypt` 有多种情况，但只有pk才能判定keyFlags.
+ !sign/verify with auth/(cert,data，这两个可以自动判断的吧)
+ !encryt/decrypt for storage, communcationcert,data
+ !key::getValidKey(keyId=null, date= new Date(), userId={}, keyFlags)
  * getSigningKey/getEncryptingKey will call the getValidKey.
  * 有些密钥算法只能用于sign，而有些密钥算法只能用于encrypt
  * 算了，暂时不getValidKey。
+ add `options.signKeyFlags` to `openpgp.encrypt`
* getSigningKey 的原始逻辑是如果subkey找不到有效的，就用Primary签。
  * 我修改为当没有keyFlags==null参数的时候，才考虑primaryKey.
  * 如果用户没有keyFlags指定的key就不兼容了，强制使用主钥也不对。需要增加一个属性，决定是否兼容。
    * keyFlagOnly
* openpgp.encrypt('string') 会将 CharCode `13` 转为 CharCode `10`.
  * 找到了: `Literal.prototype.getText` 中做的转换：
    * this.text = util.nativeEOL(text);
asmcrypto.js@0.22.0 can not upgrade.

新版本的openpgpjs已经直接把hash传入到 crypto.sign/verify的参数中,变动比较大。
不过看代码在crypto中的rsa算法上对hashed值又做了一次hash,这个操作太...
elliptic上有直接传递hashed值。参看elliptic上的代码发现传递的hashed值是options.
这又是啥操作？？乱扯！！
+ !cipher should polyfill with native crypto.


