import { Injectable } from '@nestjs/common';
import { findkeyMessage } from './helpers/idex';


@Injectable()
export class DecryptedMessageService {
  private key: number[] = [];
  private message: number[] = [];

  private readonly keyLength = 4; // long key
  private readonly minCharCode = 97; // 'a'
  private readonly maxCharCode = 122; // 'z'
  private readonly validacion = /^[a-zA-Z0-9\s.,@\-_\/]+$/;

  private encryptedMessage: number[] = [
    37, 4, 26, 26, 0, 8, 18, 18, 7, 4, 5, 83, 32, 0, 4, 31, 12, 18, 86, 50, 15,
    3, 19, 1, 23, 14, 86, 37, 6, 13, 23, 0, 0, 14, 86, 32, 2, 0, 0, 22, 7, 19,
    23, 95, 67, 9, 23, 0, 67, 13, 25, 20, 17, 0, 18, 28, 67, 5, 19, 0, 0, 8, 16,
    1, 2, 19, 86, 22, 15, 65, 27, 22, 13, 18, 23, 25, 6, 79, 86, 83, 34, 9, 25,
    1, 2, 77, 86, 3, 2, 19, 23, 83, 18, 20, 19, 83, 42, 15, 5, 26, 21, 4, 86, 1,
    6, 2, 25, 29, 12, 27, 21, 18, 67, 21, 3, 83, 15, 14, 17, 1, 12, 77, 86, 0,
    22, 3, 19, 83, 6, 13, 86, 16, 12, 5, 19, 83, 0, 14, 24, 83, 6, 13, 86, 2,
    22, 4, 86, 1, 6, 18, 25, 31, 21, 8, 5, 7, 6, 65, 19, 0, 23, 4, 86, 22, 9, 4,
    4, 16, 10, 2, 31, 28, 67, 4, 24, 83, 36, 8, 2, 59, 22, 3, 89, 52, 10, 21,
    58, 18, 1, 65, 15, 83, 0, 14, 27, 3, 2, 19, 2, 22, 67, 4, 26, 83, 6, 15, 26,
    18, 0, 4, 86, 18, 67, 18, 25, 3, 12, 19, 2, 22, 35, 8, 24, 0, 10, 23, 19,
    93, 0, 13, 88,
  ];

  findKey() {
    const {keys,messages}=findkeyMessage(this.encryptedMessage)

    console.log(keys,messages)
    return `This action returns all decryptedMessage `;
  }

  findMessage(id: number) {
    return `This action returns a #${id} decryptedMessage`;
  }
}


// // Mensaje encriptado proporcionado
// const mensajeEncriptado = [37, 4, 26, 26, 0, 8, 18, 18, 7, 4, 5, 83, 32, 0, 4, 31, 12, 18, 86, 50, 15, 3, 19, 1, 23, 14, 86, 37, 6, 13, 23, 0, 0, 14, 86, 32, 2, 0, 0, 22, 7, 19, 23, 95, 67, 9, 23, 0, 67, 13, 25, 20, 17, 0, 18, 28, 67, 5, 19, 0, 0, 8, 16, 1, 2, 19, 86, 22, 15, 65, 27, 22, 13, 18, 23, 25, 6, 79, 86, 83, 34, 9, 25, 1, 2, 77, 86, 3, 2, 19, 23, 83, 18, 20, 19, 83, 42, 15, 5, 26, 21, 4, 86, 1, 6, 2, 25, 29, 12, 27, 21, 18, 67, 21, 3, 83, 15, 14, 17, 1, 12, 77, 86, 0, 22, 3, 19, 83, 6, 13, 86, 16, 12, 5, 19, 83, 0, 14, 24, 83, 6, 13, 86, 2, 22, 4, 86, 1, 6, 18, 25, 31, 21, 8, 5, 7, 6, 65, 19, 0, 23, 4, 86, 22, 9, 4, 4, 16, 10, 2, 31, 28, 67, 4, 24, 83, 36, 8, 2, 59, 22, 3, 89, 52, 10, 21, 58, 18, 1, 65, 15, 83, 0, 14, 27, 3, 2, 19, 2, 22, 67, 4, 26, 83, 6, 15, 26, 18, 0, 4, 86, 18, 67, 18, 25, 3, 12, 19, 2, 22, 35, 8, 24, 0, 10, 23, 19, 93, 0, 13, 88];

// // Función para descifrar el mensaje utilizando una llave dada
// function descifrarMensaje(mensajeEncriptado, llave) {
//     const mensajeDescifrado = [];
//     for (let i = 0; i < mensajeEncriptado.length; i++) {
//         const byteDescifrado = mensajeEncriptado[i] ^ llave[i % llave.length];
//         mensajeDescifrado.push(byteDescifrado);
//     }
//     return mensajeDescifrado;
// }

// // Expresión regular para el mensaje encriptado
// const regexMensajeEncriptado = /^[a-zA-Z0-9\s.,@\-_\/]+$/;

// // Función para verificar si un array cumple con la expresión regular
// function cumpleRegex(array) {
//     return array.every(byte => String.fromCharCode(byte).match(regexMensajeEncriptado));
// }

// // Iterar sobre todas las combinaciones posibles de llaves
// for (let a = 97; a < 123; a++) {
//     for (let b = 97; b < 123; b++) {
//         for (let c = 97; c < 123; c++) {
//             for (let d = 97; d < 123; d++) {
//                 const llave = [a, b, c, d];
//                 const mensajeDescifrado = descifrarMensaje(mensajeEncriptado, llave);
//                 if (cumpleRegex(mensajeDescifrado)) {
//                     console.log("Llave encontrada:", llave.map(charCode => String.fromCharCode(charCode)).join(''));
//                     console.log("Mensaje descifrado:", mensajeDescifrado.map(byte => String.fromCharCode(byte)).join(''));
//                     break;
//                 }
//             }
//         }
//     }
// }
