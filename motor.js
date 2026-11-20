let normalizar = (texto) => texto.trim().toLowerCase();


// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro){
  return `Domicilio entregado a: ${registro.persona}
con valor de \$${registro.valor}
En el barrio: ${registro.categoria}`;
}

function listarTodo(tabla){
  for (const objeto of tabla) {
    console.log(mostrarRegistro(objeto) + "\n");
  }
}

// ---------- NIVEL 2 · Reportes ----------
function totalGeneral(tabla){
  let acomulador = 0;
  for (const objeto of tabla){
    acomulador = acomulador + objeto.valor;
  }
  return acomulador
}

function promedio(tabla){
  let acomulador=0;
  for (const objeto of tabla){
    acomulador = (acomulador + objeto.valor);
  }
  acomulador = acomulador/tabla.length;
  return acomulador;

}

function registroMayor(tabla){
  let mayor = 0;
  let objetoMayor;
  for (const objeto of tabla){
    if (objeto.valor > mayor){
      mayor = objeto.valor;
      objetoMayor = objeto
    }
  }
  return objetoMayor;
}

function filtrarPorCategoria(tabla, categoria){
  let objetosEncontrados = [];
  for (const objeto of tabla){
    if (objeto.categoria.toLowerCase() === categoria.toLowerCase()){
      objetosEncontrados.push(objeto);
    }
  }
  return objetosEncontrados;
}

// function totalesPorCategoria(tabla){
//   let totalesCategoria = {};
//   for (const registro of tabla) {
//     const categoria = registro.categoria.trim().toLowerCase();
//     const valor = registro.valor;

//     if (totalesCategoria[categoria]){
//       totalesCategoria[categoria] += valor
//     } else {
//       totalesCategoria[categoria] = valor;
//     }
  
//   }
//   return totalesCategoria;
// }

function totalesPorCategoria(tabla){
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
      
      if ((registroi.valor+registroj.valor) === objetivo)
        return [registroi,registroj];
    }
  }
  return null;
}


const domiciliosMedellin = [
  {
    persona: "Alejandro Restrepo",
    categoria: "El Poblado",
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
    categoria: "El Poblado",
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
    categoria: "El Poblado",
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


// Nivel 1:
console.table(domiciliosMedellin);
//listarTodo(domiciliosMedellin);

// Nivel 2:
// Total general
console.log(totalGeneral(domiciliosMedellin));
// Promedio
let promedioValores  = promedio(domiciliosMedellin);
console.log("El promedio de la variable valor es : " + promedioValores);
// Registro mayor
let objetoMayor = registroMayor(domiciliosMedellin);
console.log(objetoMayor);

// Lista de registros filtrados
console.table(filtrarPorCategoria(domiciliosMedellin,"El Poblado"))

// Totales por categoría
console.table(totalesPorCategoria(domiciliosMedellin));

// Nivel 3:
//Personas únicas
console.log(personasUnicas(domiciliosMedellin).size);

//Personas repetidas
console.log(recurrentesLento(domiciliosMedellin));
console.log(recurrentesRapido(domiciliosMedellin));

//Mejor categoria
console.log(categoriaEstrella(domiciliosMedellin));

// Dos registros que sumados dan (objetivo)
console.table(parQueSuma(domiciliosMedellin,14200))