import anyName from './util.js'; //imports default define-se o nome no import
import { apiKey } from './util.js';
import { obj as content } from './util.js'; //Renomear a variavel importada com 'as'
import * as util from './util.js'; // Amazenar todos os exports de Util "*" no objeto 'util'

console.log(anyName);
console.log(apiKey);
console.log(util.obj);
console.log(content);
