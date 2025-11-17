# 🧠 Bloque 5 — Objetos (Estructuras clave-valor & Destructuring)

Autor: **Hugo Gil**  
Tema: **Manipulación profesional de objetos en JavaScript con funciones modernas.**

---

## 🎯 Objetivo del Bloque
Aprender a trabajar con **objetos**, una de las estructuras más importantes de JavaScript.  
Dominarás:

- Clonado y copias profundas  
- Fusión de objetos  
- Extracción selectiva (pick)  
- Omitir propiedades (omit)  
- Conversión a QueryString  
- Ordenamiento por clave  
- Agrupación  
- Destructuring aplicado  

---

## ⚙️ Funciones incluidas

| Función | Descripción | Ejemplo |
|--------|-------------|---------|
| `deepClone(obj)` | Crea una copia 100% independiente del objeto. | `{a:1} → {a:1}` |
| `mergeDeep(a,b)` | Fusiona objetos recursivamente. | `mergeDeep({x:{a:1}},{x:{b:2}})` |
| `pick(obj, keys)` | Devuelve un objeto sólo con las claves seleccionadas. | `pick(user,["nombre"])` |
| `omit(obj, keys)` | Elimina propiedades indicadas. | `omit(user,["edad"])` |
| `hasKeys(obj, keys)` | Verifica si el objeto contiene todas las claves. | `true / false` |
| `mapValues(obj, fn)` | Aplica una función a cada valor del objeto. | `{a:1}→{a:10}` |
| `toQuery(obj)` | Convierte a formato URL. | `{a:1,b:2} → "a=1&b=2"` |
| `fromQuery(qs)` | Convierte de query a objeto. | `"a=1&b=2"` → `{a:1,b:2}` |
| `sortByKey(arr,key)` | Ordena objetos según una propiedad. | `edad → asc` |
| `groupBy(arr,key)` | Agrupa elementos por clave. | `tipo → {admin:[..], user:[..]}` |

---

## 💻 Cómo usar

1. Abre `index.html`.  
2. Da clic en **"Ejecutar ejemplos"**.  
3. Abre la consola 🤓 (F12 → *Console*).  
4. Observa cada prueba ordenada y explicada.

---

## 🧩 Conceptos clave del Bloque 5

### 🔸 1. Objetos clave-valor  
Los objetos almacenan datos en forma:  
```js
{ clave: valor }