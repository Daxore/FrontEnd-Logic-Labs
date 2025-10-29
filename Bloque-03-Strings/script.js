// 🌙 Bloque 3 — Manipulación de Strings
// Autor: Hugo Gil
// Tema: funciones con arrow functions, explicadas para principiantes

//  🧩 Ejercicios principales — implementaciones simples y prácticas

// 1️⃣ Invertir un texto
const reverseString = s => String(s).split('').reverse().join()

// 2️⃣ Contar vocales en un texto
const countChars = s => [...String(s)].reduce((acc,c)=> (acc[c]=(acc[c]||0) + 1, acc), {})

// 3️⃣ crear un "slug" para URls limpias
const slugify = s =>
    String(s)
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/(^-|-$)/g,'')

// 4️⃣ Convertir texto a formato de título
const titleCase = s =>
  String(s)
    .toLowerCase()
    .split(' ')
    .map(w => (w ? w[0].toUpperCase() + w.slice(1) : ''))
    .join(' ')
  
   
// 5️⃣ Verificar si un texto es un palíndromo
const isPalindrome = s => {
    const t = String(s).toLowerCase().replace(/[^a-z0-9]/g, '')
    return t === t.split('').reverse().join('')
}     

// 6️⃣ contar palabras en cadena de texto
const wordCount = s =>
    String(s).trim() === '' ? 0 : String(s).trim().split(/\s+/).length

// 7️⃣ Truncar texto largo y agregar puntos suspensivos  
const truncate = (s, n = 100) =>
    String(s).length > n ? String(s).slice(0, n - 3) + '...' : String(s)

// 8️⃣ Escapar caracteres HTML especiales
const escapeHTML = s =>
    String(s)
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')
        .replace("'", '&#39;')

// 9️⃣ Extraer emails de un texto 
 const extractEmails = s => 
    String(s)
        .match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || []

// 🔟 Encontrar la palabra mas larga 
const longestWord = s =>
  String(s).split(/\s+/).sort((a, b) => b.length - a.length)[0] || ''

// 🚀 ejecutar ejemplos en consola

const run = () => {
    console.clear()
    console.log('--- 🧩 Bloque 3: Strings - Ejecución de ejemplos ---')
    const out = document.getElementById('output')
    out.textContent = '✅ Abre la consola (F12) para ver los resultados detallaldos.'

    try {
        

        console.log('1️⃣ reverseStr("Hola mundo") => ', reverseString("Hola Mundo"))
        console.log('2️⃣ counterChars("banana") =>', countChars("banana"))
        console.log('3️⃣ slugify("Hola mundo JS!") =>', slugify("Hola mundo JS!"))
        console.log('4️⃣ titleCase("Javascript es genial") =>', titleCase('Javascript es genial'))
        console.log('5️⃣ isPalindromo("Anita lava la tina") =>', isPalindrome('Anita lava la tina'))
        console.log('6️⃣ wordCount("Aprender javaScript paso a paso") =>', wordCount('Aprender javaScript paso a paso'))
        console.log('7️⃣ truncate("Esto es un texto demasiado largo para mostrar completo", 25) =>', truncate("Esto es un texto demasiado largo para mostrar completo", 25))
        console.log('8️⃣ escapeHTML(""<h1>Hola & Bienvenido</h1>"") =>', escapeHTML("<h1>Hola & Bienvenido</h1>"))
        console.log('9️⃣ extractEmails("Contáctame en hugo@ejemplo.com o info@dev.com") =>',extractEmails('Contáctame en hugo@ejemplo.com o info@dev.com'))
       console.log('🔟 longestWord("El desarrollo front-end es impresionante") ➜', longestWord('El desarrollo front-end es impresionante'))


    } catch (e) {
        console.error('Error al ejecutar Funciones:', e)
        out.textContent = '❌ Error al ejecutar las funciones. Revisa la consola para más detalles.'
    }
}

document.getElementById('runExamples').addEventListener('click', run)