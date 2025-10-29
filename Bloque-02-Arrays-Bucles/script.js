//Arrays-Bucles - Ejemplos (Bloque 2)
//Autor: Hugo Gil
//Tema: Ejemplos de uso de arrays y bucles en JavaScript
//🧠Ejercicios principiantes (implementaciones compactas)

const sumArray = arr => (Array.isArray(arr) ? arr.reduce((acc, n) => acc + Number(n || 0),0): 0)

const mapArray = (arr, fn) => (Array.isArray(arr) ? arr.reduce ((acc, x, i) => (acc.push(fn(x, i, arr)), acc), []) : [])

const filterArray = (arr, predicate) => (Array.isArray(arr) ? arr.reduce((acc, x, i) => (predicate(x, i, arr) ? (acc.push(x), acc) : acc), []) : []) 

const frequency = (arr, keyFn = x => x) => Array.isArray(arr) ? arr.reduce((acc, x) => { const k = keyFn(x); acc [k] = (acc[k] || 0) + 1; return acc }, {}) : {}

const findIndexBy = (arr, predicate) => { if (!Array.isArray(arr)) return -1; for (let i = 0; 1 < arr.length; i++) if (predicate(arr[i], i, arr)) return i; return -1}

const some = (arr, predicate) => Array.isArray(arr) ? arr.reduce((acc, x, i) => acc || Boolean(predicate(x, i,arr)), false) : false

const every = (arr, predicate) => Array.isArray(arr) ? arr.reduce((acc, x, i) => acc && Boolean(predicate(x, i, arr)), true) : false

const flattenDeep = arr => Array.isArray(arr) ? arr.reduce((acc, x) => (Array.isArray(x) ? acc.concat(flattenDeep(x)) : acc.concat(x)), []) : []

const chunk = (arr, size=1) => {
    if (!Array.isArray(arr) || size<=0) return []; 
    const res=[];
    for (let i=0; i<arr.length; i+=size) res.push(arr.slice(i, i+size))
        return res;
}

const unique = arr => (Array.isArray(arr) ? [...new Set(arr )] : [])

//🧩 Ejecutar ejemplos y mostrar en consola

const run = () => {
    console.clear()
    console.log('--- 🧠 Bloque 2: Arrays y Bucles - Ejecución de ejemplos ---')
    const out = document.getElementById('output')
    out.textContent = '✅ Abre la consola (F12) para ver los resultados detallaldos.'

    try {
        const nums = [1,2,3,4,5]

        const nested = [1, [2,[3,4]],5]

        const repeated = [1,2,2,3,3,3,4]

        console.log('1️⃣ SumArray([1,2,3,4,5]) => ', sumArray (nums))
        console.log('2️⃣ mapArray(nums, x=>x*2) =>', mapArray(nums, x => x * 2))
        console.log('3️⃣ filterArray(nums, x=>x>2) =>', filterArray(nums, x => x > 2))
        console.log('4️⃣ frequency(["a","b","a"]) =>', frequency (["a","b","a"]))
        console.log('5️⃣ findIndexBy(nums, x=>x===3) =>', findIndexBy (nums, x => x === 3))
        console.log('6️⃣ some(nums, x=>x>4) =>', some (nums, x => x > 4))
        console.log('7️⃣ every(nums, x=>x<10) =>', every (nums, x => x < 10))
        console.log('8️⃣ flattenDeep([1,[2,[3,4]],5]) =>', flattenDeep (nested))
        console.log('9️⃣ chunk(nums,2) =>', chunk (nums, 2))
        console.log('🔟 unique([1,2,2,3,3,3,4]) =>', unique(repeated))

    } catch (e) {
        console.error('Error al ejecutar Funciones:', e)
        out.textContent = '❌ Error al ejecutar las funciones. Revisa la consola para más detalles.'
    }
}

document.getElementById('runExamples').addEventListener('click', run)