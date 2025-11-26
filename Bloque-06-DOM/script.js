//Dom - Ejemplos (Bloque 6)
//Autor: Hugo Gil
//Tema: Funciones con manipulación del DOM


//Ejercicio principales (implementaciones compactas)

//
// 1️⃣ Seleccionar un elemento
const q = sel => document.querySelector(sel);

// 2️⃣ Seleccionar múltiples elementos
const qa = sel => Array.from(document.querySelectorAll(sel));

// 3️⃣ Crear elemento
const createEl = (tag, options = {}) => {
    const el = document.createElement(tag)
Object.assign(el, options);
    return el;
};

// 4️⃣ Cambiar texto
const setText = (el, text) => 
    el.textContent = text;


// 5️⃣ Cambiar HTML interno
const setHTML = (el, html) => 
    el.innerHTML = html;

// 6️⃣ Añadir clase
const addClass = (el, cls) =>
    el.classList.add(cls);

// 7️⃣ Eliminar clase
const removeClass = (el, cls) => el.classList.remove(cls);

// 8️⃣ Toggle de clase
const toggleClass = (el, cls) => el.classList.toggle(cls);

// 9️⃣ Añadir elemento hijo
const append = (parent, child) => parent.appendChild(child);

// 🔟 Eliminar un elemento
const removeEl = el => el.remove();

//1️⃣1️⃣ Reemplazar contenido de un contenedor
const replaceContent = (el, content) => {
    el.innerHTML = '';
    el.appendChild(content)
};

//1️⃣2️⃣ Estilos en línea
const setStyle = (el, styles = {}) => {
    Object.assign(el.style, styles);
};

//1️⃣3️⃣ Obtener o cambiar atributo

const setAttr = (el, attr, value) => el.setAttribute(attr, value); 
const getAttr = (el, attr) => el.getAttribute(attr);

//1️⃣4️⃣ insertar antes de otro elemento 
const insertBeforeEl = (parent, newEl, reference) => 
    parent.insertBefore(newEl, reference);

//1️⃣5️⃣ Clonar un elemento
const clone = (el, deep = true) => el.cloneNode(deep);

//-----------------------------------------------------
// Ejecutar ejemplos
//-----------------------------------------------------

const run = () => {
    console.log("---- Bloque 6 — Manejo del DOM ----")

    //Ejemplo 1: Crear un párrafo y montarlo
    const p = createEl('p', { textContent: 'Hola desde el DOM!'});
    append(q('.app'), p);

    //Ejemplo 2: Cambiar texto
    setText(p,'Texto actualizado ✔️');

    //Ejemplo 3: Añadir estilos
    setStyle(p, { color: 'blue', fontSize: '20px'});

    //Ejemplo 4: Toggle de clase
    addClass(p, 'Resaltado');
    toggleClass(p, 'Oculto');
    toggleClass(p, 'Oculto');

    //Ejemplo 5: Insertar antes de otro elemento
    const titulo = createEl('h2', { textContent: 'Título insertado'});
    insertBeforeEl(q('.app'), titulo, p); 

    //Ejemplo 6: Clonar un elemento
    const pClone = clone(p);
    append(q('.app'), pClone);

    console.log("Ejemplos ejecutados ✔️ Revisa la página y consola.");
};

//Iniciar al hacer click
q('#runExamples').addEventListener('click', run);
