
/**
 * Generates a 50 character long javascript string out of the whole utf-8 range.
 */
function createSomeMessage(){
    const length = 50;
    let arr = [];
    for (let i= 0; i < length; i++){
      let vCharcode = Math.floor(Math.random() * 10174) + 1;
      if (vCharcode === 13) vCharcode = 10;
      arr.push(String.fromCharCode(vCharcode));
    }
    return arr.join('');
}

 module.exports = {
     createSomeMessage: createSomeMessage
 };
