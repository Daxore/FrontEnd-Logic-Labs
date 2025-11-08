# 🧠 Bloque 4 — Funciones Utilitarias Avanzadas

Autor: **Hugo Gil**  
Tema: **Funciones con arrow functions — control de ejecución y composición funcional.**

---

## 🎯 Objetivo
Aprender a controlar **cuándo y cómo** se ejecutan las funciones en JavaScript.  
Estas herramientas son esenciales para optimizar rendimiento y escribir código más **seguro, predecible y reutilizable**.

---

## ⚙️ Funciones incluidas

| Función | Descripción | Ejemplo |
|----------|--------------|----------|
| `debounce(fn,wait)` | Retrasa la ejecución hasta que pase cierto tiempo sin llamar a la función. | Evita múltiples clics seguidos. |
| `throttle(fn,limit)` | Limita la frecuencia de ejecución. | Evita spam en eventos de scroll. |
| `memoize(fn)` | Guarda resultados en caché para evitar cálculos repetidos. | `memoize(x=>x*x)(5)` → 25 |
| `once(fn)` | Permite que una función se ejecute solo una vez. | `init()` solo se ejecuta una vez. |
| `compose(...fns)` | Aplica funciones de derecha a izquierda. | `compose(f,g)(x)` → `f(g(x))` |
| `pipe(...fns)` | Aplica funciones de izquierda a derecha. | `pipe(f,g)(x)` → `g(f(x))` |
| `tryCatch(fn,onError)` | Maneja errores sin romper el flujo. | `tryCatch(JSON.parse)` |
| `noop()` | Función vacía (no hace nada). | Placeholder o callback vacío. |
| `identity(x)` | Devuelve el mismo valor recibido. | `identity(5)` → 5 |
| `range(n)` | Crea un array con números de `0` a `n-1`. | `range(5)` → `[0,1,2,3,4]` |

---

## 💻 Cómo usar
1. Abre `index.html` en tu navegador.  
2. Presiona **“Ejecutar Ejemplos”**.  
3. Abre la consola (F12 → pestaña *Console*) para ver los resultados.  

---

## 🧩 Conceptos clave
- **Closures:** funciones internas que recuerdan variables externas.  
- **Timers (`setTimeout`)** y su control.  
- **Inmutabilidad:** no se alteran valores globales.  
- **Composición funcional:** conectar funciones como bloques lógicos.  
- **Control de flujo:** decidir cuándo ejecutar y cuándo detener.

---

## 🧠 Ejemplo visual de resultados
