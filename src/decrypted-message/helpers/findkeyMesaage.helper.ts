export const findkeyMessage = (encryptedMessage: number[]) => {
  let keys: number[] = [];
  let messages: number[] = [];
  const minCharCode = 97; // 'a'
  const maxCharCode = 122; // 'z'

  // 4 ciclos for para la longitud de la llave
  for (let keyOne = minCharCode; keyOne < maxCharCode; keyOne++) {
    for (let keyTwo = minCharCode; keyTwo < maxCharCode; keyTwo++) {
      for (let keyThree = minCharCode; keyThree < maxCharCode; keyThree++) {
        for (let keyfour = minCharCode; keyfour < maxCharCode; keyfour++) {
          keys = [keyOne, keyTwo, keyThree, keyfour];
          let messages = encryptedMessagAndkeyRelation(keys, encryptedMessage);

          if (transformMessge(messages)) {
            return {
              keys,
              messages,
            };
          }
        }
      }
    }
  }
  return {
    keys,
    messages,
  };
};
//iterear la llave con cada elementos del array encryptedMessage uso xor
const encryptedMessagAndkeyRelation = (
  key: number[],
  encryptedMessage: number[],
): number[] => {
  let getMessage: number[] = [];

  for (let number = 0; number < encryptedMessage.length; number++) {
    getMessage.push(encryptedMessage[number] ^ key[number % key.length]);
  }

  return getMessage;
};

//evalua que cada elemento del encryptedMessage este dentro de los rangos  de la validacion
export const transformMessge = (messages: number[]): boolean => {
  const validacion = /^[a-zA-Z0-9\s.,@\-_\/]+$/;
  return messages.every((number) =>
    String.fromCharCode(number).match(validacion),
  ); //return true or false
};
