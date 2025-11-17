// Objetos - ejemplos (Bloque 5)
// Autor: Hugo Gil
// Tema: funciones con arrow functions, explicadas para principiantes.

// ---------------------------------------------------------------------
// 🧠 Ejercicios principales (implementaciones compactas)
// ---------------------------------------------------------------------

const deepClone = obj => JSON.parse(JSON.stringify(obj));

const mergeDeep = (a, b) => {
        const isObj = v => v && typeof v === 'object' && !Array.isArray(v);
        const res = {...a}

        Object.keys(b).forEach(k => {
            res[k] = isObj(b[k])
            ? mergeDeep(res[k] || {}, b[k])
            : b[k];
        });

        return res;
    };

const pick = (obj, keys = []) =>
    keys.reduce((acc, k) => {
        if (k in obj) acc[k] = obj[k];
        return acc;
    }, {});

const omit = (obj, keys = []) =>
    Object.keys(obj).reduce((acc, k) => {
        if (!keys.includes(k)) acc[k] = obj[k];
        return acc;
    }, {});

const hasKeys = (obj, keys = []) =>
    keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

const mapValues = (obj, fn) =>
    Object.fromEntries(
        Object.entries(obj).map(
            ([k, v]) => [k, fn(v, k, obj)]
        )
    );

const toQuery = obj => new URLSearchParams(obj).toString();

const fromQuery = qs => Object.fromEntries(new URLSearchParams(qs));

const sortByKey = (arr, key) =>
    [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1));

const groupBy = (arr, key) =>
    arr.reduce((acc, item) => { 
        acc[item[key]] = acc[item[key]] || [];
        acc[item[key]].push(item);
        return acc;
    }, {});

//---------------------------------------------------------------------
// ▶️ Ejecutar ejemplos y mostrar en consola
// ---------------------------------------------------------------------

const run = () => {
  console.log('--- Bloque 5: Objetos - Ejecución de ejemplos ---');

  const out = document.getElementById('output');
  out.textContent = 'Revisa la consola (F12) para ver los ejemplos.';

  try {
    // Ejemplos de prueba 🧪

    const user = { nombre: "Hugo", edad: 25, pais: "AR" };

    console.log("1️⃣ deepClone => ", deepClone(user));

    console.log(
      "2️⃣ mergeDeep: =>",
      mergeDeep(
        { datos: { nombre: "Hugo", activo: true } },
        { datos: { activo: false, nivel: 3 } }
      )
    );

    console.log("3️⃣ pick: =>", pick(user, ["nombre", "pais"]));

    console.log("4️⃣ omit: =>", omit(user, ["edad"]));

    console.log("5️⃣ hasKeys: =>", hasKeys(user, ["nombre", "edad"]));

    console.log(
      "6️⃣ mapValues: =>",
      mapValues({ a: 1, b: 2 }, (v) => v * 10)
    );

    console.log("7️⃣ toQuery: =>", toQuery({ page: 2, search: "hola mundo" }));

    console.log(
      "8️⃣ fromQuery: =>",
      fromQuery("page=3&order=asc")
    );

    const personas = [
      { id: 1, edad: 30 },
      { id: 2, edad: 18 },
      { id: 3, edad: 25 }
    ];

    console.log("9️⃣ sortByKey: =>", sortByKey(personas, "edad"));

    console.log(
      "🔟 groupBy: =>",
      groupBy(
        [
          { tipo: "admin", nombre: "Ana" },
          { tipo: "user", nombre: "Pedro" },
          { tipo: "admin", nombre: "Luis" }
        ],
        "tipo"
      )
    );

  } catch (e) {
    console.error(e);
  }
};

document.getElementById("runExamples").addEventListener("click", run);