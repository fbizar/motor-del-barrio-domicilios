let normalizar = (texto) => texto.trim().toLowerCase();


// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro){

  return `Domicilio entregado a: ${registro.persona}
con valor de \$${registro.valor}
En el barrio: ${registro.categoria}`;
}

function listarTodo(tabla){
  if(tabla === undefined || !Array.isArray(tabla) || tabla.length === 0){
    return `          ##### WARNING #######
  TIPO DE DATO INCORRECTO. VUELVE A INTENTARLO`;
  } else{
    for (const objeto of tabla) {
    console.log(mostrarRegistro(objeto) + "\n");
    }
  }
}

// ---------- NIVEL 2 · Reportes ----------
function totalGeneral(tabla){
  if(tabla === undefined || !Array.isArray(tabla) || tabla.length === 0){
    return `          ##### WARNING #######
  TIPO DE DATO INCORRECTO. VUELVE A INTENTARLO`;
  }else{
    let acomulador = 0;
    for (const objeto of tabla){
      acomulador = acomulador + objeto.valor;
    }
    return acomulador;
  }
}

function promedio(tabla){
  if(tabla === undefined || !Array.isArray(tabla) || tabla.length === 0){
    return `          ##### WARNING #######
  TIPO DE DATO INCORRECTO. VUELVE A INTENTARLO`;
  }else{
    let acomulador=0;
    for (const objeto of tabla){
      acomulador = (acomulador + objeto.valor);
    }
    acomulador = acomulador/tabla.length;
    return acomulador;
  }
  

}

function registroMayor(tabla){
  if(tabla === undefined || !Array.isArray(tabla) || tabla.length === 0){
    return `          ##### WARNING #######
  TIPO DE DATO INCORRECTO. VUELVE A INTENTARLO`;
  }else{
    let mayor = 0;
    let objetoMayor;
    for (const objeto of tabla){
      if (objeto.valor > mayor){
        mayor = objeto.valor;
        objetoMayor = objeto;
      }
    }
    return objetoMayor;
  }
}

function filtrarPorCategoria(tabla, categoria){
  if(tabla === undefined || !Array.isArray(tabla) || tabla.length === 0 || categoria === undefined || typeof categoria != "string"){
    return `          ##### WARNING #######
  TIPO DE DATO INCORRECTO. VUELVE A INTENTARLO`;
  }else{
    let objetosEncontrados = [];
  for (const objeto of tabla){
      if (objeto.categoria.toLowerCase() === categoria.toLowerCase()){
        objetosEncontrados.push(objeto);
      }
    }
    return objetosEncontrados;
  }
  
}

function totalesPorCategoriaMostrar(tabla){
  if(tabla === undefined || !Array.isArray(tabla) || tabla.length === 0){
    return `          ##### WARNING #######
  TIPO DE DATO INCORRECTO. VUELVE A INTENTARLO`;
  }else{
    let totalesCategoria = {};
    for (const registro of tabla) {
      const categoria = registro.categoria.trim().toLowerCase();
      const valor = registro.valor;

      if (totalesCategoria[categoria]){
        totalesCategoria[categoria] += valor;
      } else {
        totalesCategoria[categoria] = valor;
      }
  
    }
    return totalesCategoria;
  }
  
}

function totalesPorCategoria(tabla){
  if(tabla === undefined || !Array.isArray(tabla) || tabla.length === 0){
    return `          ##### WARNING #######
  TIPO DE DATO INCORRECTO. VUELVE A INTENTARLO`;
  }else{
    let totalesCategoria = [];
    for (const registro of tabla) {
      let categoriaExiste = false;
      for (const objeto of totalesCategoria){
        if (registro.categoria.toLowerCase() === objeto.categoria.toLowerCase())
        {
          objeto.total += registro.valor;
          categoriaExiste = true;
        }
      }

      if (!categoriaExiste) 
      {
        totalesCategoria.push({ categoria: registro.categoria, total: registro.valor});
      }
  }
  return totalesCategoria;
  }
}

// ---------- NIVEL 3 · Set y Map ----------
function personasUnicas(datos){
  const personaUnique = new Set();
  for (const registro of datos) {
    personaUnique.add(registro.persona.trim().toLowerCase());
  }
  return personaUnique;
}

function recurrentesLento(datos){
  const personasDuplicadas = new Set();
  for (let i = 0; i < datos.length; i++){
    for (let j = 0; j < datos.length; j++) {
      if (i === j) continue;
      if (normalizar(datos[j].persona) === normalizar(datos[i].persona)){
          personasDuplicadas.add(datos[i].persona);
      }
    }
  }
  return personasDuplicadas;
}

function recurrentesRapido(datos){
  const personas = new Set();
  const personasRepetidas = new Set();
  for (const registro of datos){

    if(!personas.has(registro.persona)){
      personas.add(registro.persona);
    }else{
      personasRepetidas.add(registro.persona);
    }
  }
  return personasRepetidas;
}

function categoriaEstrella(datos){
  const conteoPorCategoria = new Map();
  let claveMejor;
  for (const registro of datos){
    conteoPorCategoria[registro.categoria] = (conteoPorCategoria[registro.categoria] || 0) + 1;

    if (conteoPorCategoria[registro.categoria] > (!claveMejor ? 0 : conteoPorCategoria[claveMejor]))
    {
      claveMejor = registro.categoria;
    }
  }
  const mejorCategoria = new Map();
  mejorCategoria[claveMejor] = conteoPorCategoria[claveMejor];

  return !claveMejor ? null : mejorCategoria;
}

function parQueSuma(datos, objetivo){
  for (let i = 0; i < datos.length; i++) {
    const registroi = datos[i];
    
    for (let j = 0; j < datos.length; j++) {
      const registroj = datos[j];

      if (i === j) continue;
      
      if ((registroi.valor + registroj.valor) === objetivo)
        return [registroi,registroj];
    }
  }
  return null;
}

// ---------- NIVEL 4 · Cola y pila ----------
const colaDeAtencion = [];
function llegar(persona){
    colaDeAtencion.push(persona);
    return colaDeAtencion;
}

function atender(){
    if (colaDeAtencion.length === 0){
        return null;
    }
    return colaDeAtencion.shift();
}

const historial = [];

function agregarRegistro(datos, registro){
    datos.push(registro);
    historial.push(registro);
    return datos;
}

function deshacer(datos){
  if (historial.length === 0){
      return null;
  }
  const ultimo = historial.pop();
  datos.pop();
  return datos;
}


const domiciliosMedellin = [
  {
    persona: "Alejandro Restrepo",
    categoria: "Las brisas",
    dia: 1,
    valor: 9500,
    tipoDePago: "Transferencia",
    cedula: "1036789456",
    fechaDeEntrega: "2026-11-17"
  },
  {
    persona: "Alejandro Restrepo",
    categoria: "Laureles",
    dia: 2,
    valor: 7800,
    tipoDePago: "Efectivo",
    cedula: "1036789456",
    fechaDeEntrega: "2026-11-18"
  },
  {
    persona: "Daniela Osorio",
    categoria: "Robledo",
    dia: 3,
    valor: 11000,
    tipoDePago: "Transferencia",
    cedula: "43215987",
    fechaDeEntrega: "2026-11-19"
  },
  {
    persona: "Daniela Osorio",
    categoria: "La Candelaria",
    dia: 4,
    valor: 6500,
    tipoDePago: "Efectivo",
    cedula: "43215987",
    fechaDeEntrega: "2026-11-20"
  },
  {
    persona: "Esteban Jaramillo",
    categoria: "Belén",
    dia: 5,
    valor: 8200,
    tipoDePago: "Transferencia",
    cedula: "71234567",
    fechaDeEntrega: "2026-11-21"
  },
  {
    persona: "Esteban Jaramillo",
    categoria: "Aranjuez",
    dia: 6,
    valor: 9000,
    tipoDePago: "Efectivo",
    cedula: "71234567",
    fechaDeEntrega: "2026-11-22"
  },
  {
    persona: "Sofia Valencia",
    categoria: "Las brisas",
    dia: 7,
    valor: 10500,
    tipoDePago: "Transferencia",
    cedula: "1017234890",
    fechaDeEntrega: "2026-11-23"
  },
  {
    persona: "Sofia Valencia",
    categoria: "Guayabal",
    dia: 1,
    valor: 7200,
    tipoDePago: "Efectivo",
    cedula: "1017234890",
    fechaDeEntrega: "2026-11-24"
  },
  {
    persona: "Mateo Giraldo",
    categoria: "Buenos Aires",
    dia: 2,
    valor: 8500,
    tipoDePago: "Transferencia",
    cedula: "1020456789",
    fechaDeEntrega: "2026-11-25"
  },
  {
    persona: "Camila Zapata",
    categoria: "San Javier",
    dia: 3,
    valor: 12000,
    tipoDePago: "Efectivo",
    cedula: "39123456",
    fechaDeEntrega: "2026-11-26"
  },
  {
    persona: "Felipe Cardona",
    categoria: "La América",
    dia: 4,
    valor: 7500,
    tipoDePago: "Transferencia",
    cedula: "71567890",
    fechaDeEntrega: "2026-11-27"
  },
  {
    persona: "Valeria Mejía",
    categoria: "Floresta",
    dia: 5,
    valor: 6800,
    tipoDePago: "Efectivo",
    cedula: "1035412367",
    fechaDeEntrega: "2026-11-28"
  },
  {
    persona: "Lucas Echeverri",
    categoria: "Calasanz",
    dia: 6,
    valor: 9100,
    tipoDePago: "Transferencia",
    cedula: "1040123456",
    fechaDeEntrega: "2026-11-29"
  },
  {
    persona: "Isabella Henao",
    categoria: "Prado Centro",
    dia: 7,
    valor: 6000,
    tipoDePago: "Efectivo",
    cedula: "43987654",
    fechaDeEntrega: "2026-11-30"
  },
  {
    persona: "Santiago Londoño",
    categoria: "Las brisas",
    dia: 1,
    valor: 8300,
    tipoDePago: "Transferencia",
    cedula: "71987654",
    fechaDeEntrega: "2026-12-01"
  },
  {
    persona: "Mariana Quintero",
    categoria: "Villa Hermosa",
    dia: 2,
    valor: 11500,
    tipoDePago: "Efectivo",
    cedula: "1026457890",
    fechaDeEntrega: "2026-12-02"
  },
  {
    persona: "Juan David Gómez",
    categoria: "Robledo",
    dia: 3,
    valor: 9800,
    tipoDePago: "Transferencia",
    cedula: "1017345678",
    fechaDeEntrega: "2026-12-03"
  },
  {
    persona: "Manuela Rúa",
    categoria: "Doce de Octubre",
    dia: 4,
    valor: 12500,
    tipoDePago: "Efectivo",
    cedula: "43876543",
    fechaDeEntrega: "2026-12-04"
  },
  {
    persona: "Tomás Betancur",
    categoria: "San Germán",
    dia: 5,
    valor: 7900,
    tipoDePago: "Transferencia",
    cedula: "1038912345",
    fechaDeEntrega: "2026-12-05"
  },
  {
    persona: "Sara Agudelo",
    categoria: "Robledo",
    dia: 6,
    valor: 8400,
    tipoDePago: "Efectivo",
    cedula: "1020345678",
    fechaDeEntrega: "2026-12-06"
  },
  {
    persona: "Jerónimo Cano",
    categoria: "Boston",
    dia: 7,
    valor: 6700,
    tipoDePago: "Transferencia",
    cedula: "71345678",
    fechaDeEntrega: "2026-12-07"
  },
  {
    persona: "Luciana Marín",
    categoria: "Conquistadores",
    dia: 1,
    valor: 7600,
    tipoDePago: "Efectivo",
    cedula: "1037890123",
    fechaDeEntrega: "2026-12-08"
  },
  {
    persona: "Samuel Arango",
    categoria: "San Joaquín",
    dia: 2,
    valor: 8100,
    tipoDePago: "Transferencia",
    cedula: "1041234567",
    fechaDeEntrega: "2026-12-09"
  },
  {
    persona: "Antonia Posada",
    categoria: "Pontevedra",
    dia: 3,
    valor: 9200,
    tipoDePago: "Efectivo",
    cedula: "43654321",
    fechaDeEntrega: "2026-12-10"
  }
];

// ---------- ZONA DE PRUEBAS ----------
// console.log("---------- IMPRIMIR REGISTROS ----------");
// console.table(domiciliosMedellin);
// console.log("");
// // Nivel 1:
// //console.table(domiciliosMedellin);
// console.log("---------- LISTAR TODO ----------");
// console.log(listarTodo());
// console.log("");

// // Nivel 2:
// // Total general
// console.log("---------- TOTAL GENERAL ----------");
// console.log(`El total general es de: \n $${totalGeneral(domiciliosMedellin)}`);
// console.log("");

// Promedio
// console.log("---------- PROMEDIO ----------");
// let promedioValores  = promedio([]);
// console.log("El promedio de la variable valor es : \n" + promedioValores);
// console.log("");

// Registro mayor
// let objetoMayor = registroMayor("lola");
// console.log("---------- REGISTRO MAYOR ----------");
// console.table(objetoMayor);
// console.log("");

// // Lista de registros filtrados
// console.log("---------- REGISTROS FILTRADOS POR CATEGORIA ----------");
// console.table(filtrarPorCategoria(domiciliosMedellin,"Las brisas"));
// console.log("");

// Totales por categoría
// console.log("---------- TOTALES POR CATEGORIA ----------");
// console.table(totalesPorCategoria("LA"));
// console.log("");

// // Nivel 3:
// Personas únicas
// console.log(personasUnicas(domiciliosMedellin).size);

// //Personas repetidas
// console.log(recurrentesLento(domiciliosMedellin));
// console.log(recurrentesRapido(domiciliosMedellin));

// //Mejor categoria
// console.log(categoriaEstrella(domiciliosMedellin));

// // Dos registros que sumados dan (objetivo)
// console.table(parQueSuma(domiciliosMedellin,14200));

// //pruebas colas
// llegar({
//   nombre : 'julian guanume',
//   cedula: '1000194376'
// });
// llegar({
//   nombre : 'samuel velez',
//   cedula: '1000194376'
// });
// llegar({
//   nombre : 'angel bernal',
//   cedula: '1000194376'
// });

// console.log(llegar({
//   nombre : 'andres hernandez',
//   cedula: '1000194376'
// }));

// let registro = {
//     persona: "Julian Guanume",
//     categoria: "Las brisas",
//     dia: 1,
//     valor: 9500,
//     tipoDePago: "Transferencia",
//     cedula: "1000194376",
//     fechaDeEntrega: "2026-11-22"
//   }

// console.log(atender());
// console.table(agregarRegistro(domiciliosMedellin,registro));
// registro = {
//     persona: "valentina Garcia",
//     categoria: "aranjuez",
//     dia: 1,
//     valor: 9500,
//     tipoDePago: "Transferencia",
//     cedula: "1000194376",
//     fechaDeEntrega: "2026-11-23"
//   };

// console.table(agregarRegistro(domiciliosMedellin,registro));
// console.table(deshacer(domiciliosMedellin));
// console.table(agregarRegistro(domiciliosMedellin,registro));
// console.table(deshacer(domiciliosMedellin));