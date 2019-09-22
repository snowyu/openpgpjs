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
asmcrypto.js@0.22.0 can not upgrade.

新版本的openpgpjs已经直接把hash传入到 crypto.sign/verify的参数中,变动比较大。
不过看代码在crypto中的rsa算法上对hashed值又做了一次hash,这个操作太...
elliptic上有直接传递hashed值。参看elliptic上的代码发现传递的hashed值是options.
这又是啥操作？？乱扯！！



