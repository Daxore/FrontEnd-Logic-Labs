# 🧠 Bloque 7 --- Eventos y Lógica Interactiva

Autor: **Hugo Gil**
Tema: **Eventos, listeners y control de interaccion en la interfaz**

---

## 🎯 Objetivo del Bloque 
Aprender a trabajar con **Eventos del Navegador**, escuchar acciones del usuario y crear interfaces dinámicas.
Dominarás:

- Clicks
- Inputs y formularios
- Teclado
- Mouse
- Eventos delegados
- Remover listeners
- Funciones modernas como debounce/Thottle aplicadas a eventos

---

## ⚙️ Funciones incluidas
| Función                              | Descripción                                            | Ejemplo                        |
| ------------------------------------ | ------------------------------------------------------ | ------------------------------ |
| `on(sel, ev, fn)`                    | Agrega un listener a un elemento.                      | `on("#btn","click",fn)`        |
| `off(sel, ev, fn)`                   | Remueve un listener.                                   | `off("#btn","click",fn)`       |
| `delegate(parent, selector, ev, fn)` | Manejo de eventos delegados.                           | Clics en items dinámicos       |
| `onceEvent(sel, ev, fn)`             | Listener que se ejecuta una sola vez.                  | `onceEvent("#btn","click",fn)` |
| `onInput(sel, fn)`                   | Listener simplificado para inputs.                     | `onInput("#txt", fn)`          |
| `onEnter(sel, fn)`                   | Ejecuta una función al presionar Enter.                | Buscar algo                    |
| `hover(sel, enterFn, leaveFn)`       | Detecta mouseover / mouseout.                          | Menús, tooltips                |
| `prevent(fn)`                        | Envuelve una función para evitar behavior por defecto. | Formularios                    |
| `stop(fn)`                           | Detiene propagación de eventos.                        | Elementos superpuestos         |
| `eventInfo(ev)`                      | Devuelve datos limpios del evento.                     | `{x,y,key,target}`             |

---

## 💻 Cómo usar

1. Abre index.html.
2. Haz clic en "Ejecutar Ejemplos".
3. Abre la consola (F12 → Console) para ver cómo reaccionan los eventos.
4. Prueba escribir, hacer click, mover el mouse, etc.

---

## 🧩 Conceptos clave del Bloque 7

### 🔸 1. ¿Qué es un evento?
Un evento es algo que sucede en la página, por ejemplo:
✔ un click
✔ escribir en un input
✔ mover el mouse
✔ presionar una tecla

JavaScript puede escuchar esos eventos y ejecutar funciones.

### 🔸2. ¿Qué es un “listener”?
Es una función que se activa cuando ocurre un evento:

element.addEventListener("click", () => {
    console.log("hiciste click");
});

### 🔸3. Delegación de eventos

En vez de poner un listener a cada elemento, puedes escuchar el evento desde el padre:
ul.addEventListener("click", e => {
    if (e.target.matches("li")) {
        console.log("Clic en un <li>");
    }
});

### Ventajas:

1. Menos memoria
2. Funciona incluso con elementos nuevos
3. Más orden

### 🔸 4. Evitar comportamiento por defecto

Muchos elementos tienen acciones automáticas, como:

1. Enviar un formulario
2. Seguir un enlace
3. Seleccionar texto

Se evita así:

e.preventDefault();

### 🔸5. Propagación del evento (bubbling)

Un evento sube por el árbol del DOM.
A veces eso **no es deseado:**

e.stopPropagation();
