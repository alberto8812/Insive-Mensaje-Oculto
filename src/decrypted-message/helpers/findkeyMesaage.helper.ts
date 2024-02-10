export const findkeyMessage = ( encryptedMessage:number[]) => {

  let keys: number[] = [];
  let messages: number[] = [];
  const keyLength = 4; // long key
  const minCharCode = 97; // 'a'
  const maxCharCode = 122; // 'z'

  for (let keyOne = minCharCode; keyOne < maxCharCode; keyOne++) {
    for (let keyTwo = minCharCode; keyTwo < maxCharCode; keyTwo++) {
      for (let keyThree = minCharCode; keyThree < maxCharCode; keyThree++) {
        for (let keyfour = minCharCode; keyfour < maxCharCode; keyfour++) {
          keys = [keyOne, keyTwo, keyThree, keyfour];
          let messages=encryptedMessagAndkeyRelation(keys,encryptedMessage)

          if(transformMessge(messages)){
              return {
                keys,
                messages
              }
          }
        }
      }
    }
  }
  return {
    keys,
    messages

  }
};


const encryptedMessagAndkeyRelation=(key:number[],encryptedMessage:number[]):number[]=>{
    let getMessage:number[]=[];

    for (let number = 0; number < encryptedMessage.length; number++) {
      getMessage.push(number[number]^key[number % key.length])
    };

    return getMessage;
}

export const transformMessge=(messages:number[])=> {
  const validacion = /^[a-zA-Z0-9\s.,@\-_\/]+$/;
  return messages.every(byte => String.fromCharCode(byte).match(validacion));
}