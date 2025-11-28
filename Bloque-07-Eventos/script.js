//Eventos - Ejemplos (Bloque 7)
//autor: Hugo Gil
//Descripción: Ejemplos de manejo de eventos y lógica interactiva en JavaScript.

//----- Funciones Principales -----

//1️⃣ Añadir un evento
const on = (sel, ev, fn) =>
    document.querySelector(sel)?.addEventlistener(ev, fn);

//2️⃣ Remover un evento
const off = (sel, ev, fn) =>
     document.querySelector(sel)?.addEventListener(ev, fn);

// 3️⃣ Eventos una sola vez
const onceEvent = (sel, ev, fn) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const wrapper = e => {
        fn(e);
        el.addEventListener(ev, wrapper);
    };
    el.addEventListener(ev, wrapper);
};

// 4️⃣ Evento delegado
const delegate = (parentSel, chilSel, ev, fn) => {
    const parent = document.querySelector(parentSel);
    if (!parent) return;

    parent.addEventListener(ev, e => {
        if (e.target.matches(chilSel)) fn(e);
    });
};

// 5️⃣ Simplificar input
const onIput = (sel, fn) => 
    on(sel, "input", fn);

//6️⃣ Detectar Enter
const onEnter = (sel, fn) => 
    on(sel, "keydown", e => e.key === "Enter" && fn(e));

// 7️⃣ Hover
const hover = (sel, enterFn, leaveFn) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.addEventListener("mouseover", enterFn);
    el.addEventListener("mouseout", leaveFn);
};

// 8️⃣ Prevenir comportamiento por defecto
const prevent = fn => e => {
    e.preventDefault();
    fn(e);
};

// 9️⃣ Detener propagación
const stop = fn => e => {
    e.stopPropagation();
    fn(e);
};

// 1️⃣0️⃣ Evento personalizado
const eventInfo = e => ({
    x: e.clientX,
    y: e.clientY,
    key: e.key,
    target: e.target,
    value: e.target?.value
});


// --- Ejecutar ejemplos --- //
const run = () => {
    console.log("--- Bloque 7: Eventos y Lógica Interactiva. ---");
const out = document.getElementById('output')
    out.textContent = '✅ Abre la consola (F12) para ver los resultados detallaldos.'

    try {
    //click básico
    on("#btnTest", "click", () => console.log("¡Botón clickeado!"));

    // Enter en input
    onEnter("#inputTest", () => console.log("¡Precionaste Enter!"));

    // hover
    hover("#box",
        () => console.log("Mouse entró al cuadro."),
        () => console.log("Mouse salió del cuadro.")
    );

    // Delegación 
    delegate("#list", "li", "click", e =>
        console.log(`Clickeaste el ítem: ${e.target.textContent}`)
    );

    // Evento personalizado
    onceEvent("#btnOnce", "Click", e =>
        console.log("¡Este mensaje solo aparece una vez!")
    );

     } catch (e) {
        console.error('Error al ejecutar Funciones:', e)
        out.textContent = '❌ Error al ejecutar las funciones. Revisa la consola para más detalles.'
    }

};

document.getElementById("runExamples").addEventListener("click", run);