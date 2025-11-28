# 📦 Bloque 6 — Manejo del DOM con funciones flecha

Autor: **Hugo Gil**  
Tema: **Manipulación del DOM, creación de elementos, eventos, texto, HTML y utilidades visuales usando funciones flecha.**

---

## 🎯 Objetivo del Bloque
Aprender a manipular la interfaz **(DOM)** de una página web creando, modificando y eliminando elementos con JavaScript y funciones flecha de forma sencilla.
Dominarás:

- Selección de nodos
- Creación de elementos dinámicos
- Cambio de texto y HTML
- Manejo de clases CSS
- Estilos en línea
- Atributos
- Inserciones y reemplazos
- Clonado de elementos

---

| Función                          | Descripción                                 | Ejemplo                              |
| -------------------------------- | ------------------------------------------- | ------------------------------------ |
| `q(sel)`                         | Selecciona **1 elemento** del DOM.          | `q("#titulo")`                       |
| `qa(sel)`                        | Selecciona **varios elementos** como array. | `qa(".item")`                        |
| `createEl(tag, options)`         | Crea un nuevo elemento con propiedades.     | `createEl("p",{textContent:"Hola"})` |
| `setText(el, text)`              | Cambia el **texto interno**.                | `"Nuevo texto"`                      |
| `setHTML(el, html)`              | Cambia el **HTML interno**.                 | `" <b>Hola</b> "`                    |
| `addClass(el, cls)`              | Añade una clase CSS.                        | `"activo"`                           |
| `removeClass(el, cls)`           | Quita una clase CSS.                        | `"oculto"`                           |
| `toggleClass(el, cls)`           | Alterna una clase.                          | `"dark-mode"`                        |
| `append(parent, child)`          | Inserta un elemento hijo.                   | `append(div, p)`                     |
| `removeEl(el)`                   | Elimina un nodo.                            | `removeEl(p)`                        |
| `replaceContent(el, new)`        | Reemplaza el contenido de un contenedor.    | `replaceContent(div, span)`          |
| `setStyle(el, styles)`           | Aplica estilos CSS en línea.                | `{color:"red"}`                      |
| `setAttr(el, k, v)`              | Asigna un atributo.                         | `"src","img.png"`                    |
| `getAttr(el, k)`                 | Obtiene un atributo.                        | `getAttr(img,"alt")`                 |
| `insertBeforeEl(parent,new,ref)` | Inserta un nodo antes de otro.              | `insertBeforeEl(div,h2,p)`           |
| `clone(el, deep)`                | Clona un nodo.                              | `clone(boton,true)`                  |

---

## 💻 Cómo usar

1. Abre index.html.
2. Haz clic en "Ejecutar Ejemplos".
3. Abre la consola (F12 → Console) para ver resultados.
4. Observa cómo se crean, actualizan y manipulan elementos del DOM.

---

## 🧩 Conceptos clave del Bloque 6

### 🔸 1. ¿Qué es el DOM?
Es una representación en forma de árbol de todo lo que ves en una página web.
Cada etiqueta HTML es un nodo que puedes modificar con JavaScript.

### 🔸2. Selección de elementos
Permite encontrar elementos dentro del documento

q("#titulo")      // uno
qa(".items")      // varios

### 🔸3. Creación de elementos dinámicos
Puedes crear nuevos nodos y añadirlos en cualquier parte:

const p = createEl("p", { textContent: "Hola!" });
append(q("#app"), p);

### 🔸4. Manejo de clases CSS
Sirve para aplicar estilos visuales

addClass(p, "activo");
toggleClass(p, "oculto");

### 🔸5. Modificacion de contenido 
Permite actualizar textos y estructuras HTML:

setText(p, "Nuevo texto");
setHTML(p, "<b>Texto en negrita</b>");

### 🔸6. Estilos en línea
para aplicar cambios rápidos:

setStyle(p, { color: "blue", fontSize: "20px" });

### 🔸7. Atributos HTML
Modificar cosas como src, href, alt, etc.:

setAttr(img, "src", "foto.png");

### 🔸8. Inserciones, reemplazos y clonado
Manera profesional de crear interfaces dinámicas:

insertBeforeEl(div, h2, p);
clone(p, true);
