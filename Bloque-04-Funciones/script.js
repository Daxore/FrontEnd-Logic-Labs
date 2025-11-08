//🧩 Bloque 4 - Funciones Utilitarias Avanzadas
//Autor: Hugo Gil
// Tema: Control de ejecución, composición y optimización de funciones (arrow functions).
// -----------------------------------------------------------
// Ejercicios principales (implementaciones compactas)
// -----------------------------------------------------------

// 🔁 Evita que una función se ejecute demasiadas veces seguidas
const debounce = (fn, wait = 300) => {
    let t
    return (...a) => {
        clearTimeout(t)
        t = setTimeout(()=> fn(...a), wait)
    }
}

// ⚡ Limita la cantidad de ejecuciones en un intervalo
const throttle = (fn, limit = 200) => {
    let inThrottle = false
    return (...a) => {
        if (!inThrottle) {
            fn(...a)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

// 🧠 Memoriza resultados para evitar cálculos repetidos
    const memoize = fn => {
        const cache = new Map()
        return arg => 
            cache.has(arg)
            ? cache.get(arg)
           : (cache.set(arg, fn(arg)), cache.get(arg))
    }

 // 🔒 Ejecuta una función solo una vez
    const once = fn => {
        let done = false
        let res
        return (...a) => {
            if (done) return res
            done = true
            return(res = fn(...a))
        }
    }

    // 🧩 Composición de funciones (de derecha a izquierda)
    const compone = (...fns) => arg => fns.reduceRight((v, f)=> f(v), arg)

    // 🚀 Encadenamiento de funciones (de izquierda a derecha)
    const pipe = (...fns) => arg => fns.reduce((v, f) => f(v), arg)

    // 🧯 Maneja errores sin romper la ejecución
const tryCatch = (fn, onError = e => console.error(e)) => (...a) => {
  try {
    return fn(...a)
  } catch (e) {
    return onError(e)
  }
}

// 🪣 Funciones auxiliares simples
const noop = () => {}
const identity = x => x
const range = n => Array.from({ length: n }, (_, i) => i)

// -----------------------------------------------------------
// Ejecución de ejemplos
// -----------------------------------------------------------
const run = () => {
  console.log('--- Bloque 4: Funciones - Ejecución de ejemplos ---')
  const out = document.getElementById('output')
  out.textContent = 'Revisa la consola (F12) para ver los ejemplos. 🧠'

  try {
    const log = msg => console.log('🟢', msg)

    // debounce
    const debounced = debounce(() => log('Debounce ejecutado'), 500)
    debounced()
    debounced()
    debounced() // solo se ejecuta una vez tras 500ms

    // throttle
    const throttled = throttle(() => log('Throttle ejecutado'), 1000)
    throttled()
    throttled()
    throttled() // solo ejecuta una vez por segundo

    // memoize
    const cuadrado = memoize(x => x * x)
    log('Memoize: ' + cuadrado(5)) // 25
    log('Memoize (cacheado): ' + cuadrado(5)) // usa cache

    // once
    const init = once(() => 'Solo se ejecuta una vez')
    log(init())
    log(init())

    // compose y pipe
    const doble = x => x * 2
    const sumar1 = x => x + 1
    const compuesto = compone(doble, sumar1)
    const encadenado = pipe(sumar1, doble)
    log('Compose (doble(sumar1(3))) → ' + compuesto(3))
    log('Pipe (sumar1→doble(3)) → ' + encadenado(3))

    // tryCatch
    const seguro = tryCatch(x => JSON.parse(x), e => 'Error capturado')
    log(seguro('{"ok":true}'))
    log(seguro('{mal json}'))

    // identity / noop / range
    log('Identity(7): ' + identity(7))
    log('Range(5): ' + range(5))
    noop() // no hace nada

  } catch (e) {
    console.error(e)
  }
}

document.getElementById('runExamples').addEventListener('click', run)