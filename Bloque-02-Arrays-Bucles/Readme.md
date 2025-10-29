# 🧠 Bloque 2 — Arrays y Bucles

Autor: **Hugo Gil**  
Tema: **Funciones con arrow functions, explicadas para principiantes.**

## 🎯 Objetivo
Aprender a manipular arreglos y utilizar bucles funcionales en JavaScript usando `reduce`, `map`, `filter`, `Set`, y recursividad.

## ⚙️ Funciones incluidas

| Función | Descripción | Ejemplo |
|----------|--------------|----------|
| `sumArray(arr)` | Suma los valores de un array. | `[1,2,3] → 6` |
| `mapArray(arr, fn)` | Aplica una función a cada elemento. | `x*2 → [2,4,6]` |
| `filterArray(arr, predicate)` | Filtra los elementos que cumplan una condición. | `x>2 → [3,4,5]` |
| `frequency(arr)` | Cuenta cuántas veces aparece cada valor. | `["a","b","a"] → {a:2,b:1}` |
| `findIndexBy(arr, fn)` | Devuelve el índice del primer valor que cumpla la condición. | `x===3 → 2` |
| `some(arr, fn)` | Devuelve `true` si al menos un valor cumple la condición. | `x>4 → true` |
| `every(arr, fn)` | Devuelve `true` si todos cumplen la condición. | `x<10 → true` |
| `flattenDeep(arr)` | Aplana arrays anidados en uno solo. | `[1,[2,[3]]] → [1,2,3]` |
| `chunk(arr, size)` | Divide un array en subarrays de tamaño dado. | `([1,2,3,4],2) → [[1,2],[3,4]]` |
| `unique(arr)` | Elimina elementos duplicados. | `[1,2,2,3] → [1,2,3]` |

## 💻 Cómo usar
1. Abre `index.html` en tu navegador.  
2. Haz clic en **“Ejecutar Ejemplos”**.  
3. Abre la consola (F12 → pestaña *Console*) para ver los resultados.

## 🧩 Conceptos clave
- Uso de funciones flecha (`=>`).
- Recorridos de arrays con `reduce`.
- Inmutabilidad (no se modifican los arrays originales).
- Limpieza y legibilidad de código.

---

📚 **Siguiente bloque:** *Bloque 3 — Objetos y Manipulación de Datos*