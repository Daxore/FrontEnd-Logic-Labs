//Basicos - ejemplos de funciones simples
//autor Hugo Gil
//Tema : Funciones con arrow functions, explicadas para principiantes

//Ejercicios principiantes(implementaciones compactas)
//
const sumar = (a, b) => a + b

const esPar = num => num % 2 === 0

const inicial = nombre => nombre?.charAt(0)?.toUpperCase() || ''

const esPalindromo = s => { const t = s.toLowerCase().replace(/\s/g, ''); return t === [...t].reverse().join(''); }

const promedio = arr => Array.isArray(arr) && arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0

const aFahrenheit = c => (c * 9/5) + 32

const maximo = arr => Array.isArray(arr) && arr.length ? Math.max(...arr) : null

const contarVocales = s => (s.match(/[aeiouáéíóú]/gi)||[]).length

const capitalizar = s => s.toLowerCase().split('').map(w=> w? w[0].toUpperCase() + w.slice(1):'').join('')

const aleatorio = (min, max) => Math.floor(Math.random()*(max - min + 1)) + min


//Ejecutar ejemplos en consola
const run = () => {
    console.log('----Bloque 1: Basicos - Ejecucion de ejemplos----');
    const out = document.getElementById('output')
    out.textContent = 'Revisa la consola para ver los resultados de los ejemplos.';

     // Pequeños ejemplos de prueba (si existen funciones conocidas)
  try {
     console.log('1️⃣ sumar(5,3)=>', sumar(5,3))
     console.log('2️⃣ esPar(4)=>', esPar(4))
     console.log('3️⃣ inicial ("Hugo") =>', inicial("Hugo"))  
     console.log('4️⃣es Palindromo("Ana come lava" ) =>', esPalindromo("Ana come lava"))
     console.log('5️⃣ promedio([10,20,30]) =>', promedio([10,20,30]))
     console.log('6️⃣ aFahrenheit(25) =>', aFahrenheit(25))
     console.log('7️⃣ maximo ([9,5,4,12,15]) =>', maximo ([9,5,4,12,15]))
     console.log('8️⃣ Contar vocales ("Hola Mundo") =>', contarVocales ("Hola Mundo"))    
     console.log('9️⃣ capitalizar("hOlA mUnDo, Soy Hugo") =>', capitalizar("hOlA mUnDo, Soy Hugo"))
     console.log('🔟 aleatorio (1, 100) =>', aleatorio(1,100))

     out.textContent += '\n✅ Ejemplos ejecutados. Revisa la consola para ver los resultados.';
  } catch(e) {
    console.error('Error al ejecutar las funciones',e);
    out.textContent += '\n❌ Error al ejecutar los ejemplos. Revisa la consola para más detalles.';
  }
};
document.getElementById('runExamples').addEventListener('click', run);
