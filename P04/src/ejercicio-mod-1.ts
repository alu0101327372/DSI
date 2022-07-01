/**
 * @constant {string[]}
 */
const letras: string[] = ['a', 
'b', 
'c', 
'd', 
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];

const letrasback = [
  'z',
  'y',
  'x',
  'w',
  'v',
  'u',
  't',
  's',
  'r',
  'q',
  'p',
  'o',
  'n',
  'm',
  'l',
  'k',
  'j',
  'i',
  'h',
  'g',
  'f',
  'e',
  'd',
  'c',
  'b',
  'a'
];

/**
 * Calcula la cadena por el alfabeto inverso
 * @param str 
 * @returns 
 */
export function encodeMessage(str: string): string[] | undefined {
  let result: string[] = [];
  let concat: string = '';
  let k = 0;
  for (let i = 0; i < str.length; i++) {
    let letra: string = letrasback[letras.indexOf(str[i])];
    if (letra === '') {
      return undefined;
    }
    concat += letra;
  }
  result.push(concat.substring(0, 5));
  console.log(concat);
  return result;
}


export function decodeMessage(array: string[]) {
  for (let i = 0; i < array.length; i++) {
  }
}