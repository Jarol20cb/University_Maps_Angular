module.exports = function () {
  var data = {
    sugerencias: [
      {
        id:1,
        descripcionSugerencia: "Hace falta más descuentos",
        usuario:
        {
            id: 1,
            nombreUsuario: "Luis",
            apellidoPaternoUsuario: "aaa",
            apellidoMaternoUsuario: "aaa",
            fechaNacimientoUsuario: "2010-10-10",
            telefonoUsuario: "aaa",
            correoUsuario: "aaa",
            universidad: "aaa",
        }
      },
      {
        id:2,
        descripcionSugerencia: "Podrían habilitar más idiomas",
        usuario:
        {
          id: 2,
          nombreUsuario: "Rosa",
          apellidoPaternoUsuario: "aaa",
          apellidoMaternoUsuario: "aaa",
          fechaNacimientoUsuario: "2010-10-10",
          telefonoUsuario: "aaa",
          correoUsuario: "aaa",
          universidad: "aaa"
        }
      },
      {
        id:3,
        descripcionSugerencia: "Muy completa la aplicación",
        usuario:
        {
          id: 3,
          nombreUsuario: "Maria",
          apellidoPaternoUsuario: "aaa",
          apellidoMaternoUsuario: "aaa",
          fechaNacimientoUsuario: "2010-10-10",
          telefonoUsuario: "aaa",
          correoUsuario: "aaa",
          universidad: "aaa"
        }
      },
      {
        id:4,
        descripcionSugerencia: "Funciona de maravilla",
        usuario:
        {
          id: 4,
          nombreUsuario: "Pedro",
          apellidoPaternoUsuario: "aaa",
          apellidoMaternoUsuario: "aaa",
          fechaNacimientoUsuario: "2010-10-10",
          telefonoUsuario: "aaa",
          correoUsuario: "aaa",
          universidad: "aaa"
        }
      }
    ],
    destinos:[
      {
        id:1,
        aulaDestino: "201",
        pabellonDestino: "A",
        facultadDestino: "Facultad de Ciencias",
      },
      {
        id:2,
        aulaDestino: "301",
        pabellonDestino: "B",
        facultadDestino: "Facultad de ingenieria",
      },
      {
        id:3,
        aulaDestino: "401",
        pabellonDestino: "C",
        facultadDestino: "Facultad de derechos",
      },
      {
        id:4,
        aulaDestino: "501",
        pabellonDestino: "D",
        facultadDestino: "Facultad de Ciencias Sociales",
      }
    ],
    membresias:[
      {
        id:1,
        descripcionTipoDeMembresia: "Premium",
        fechainicioTipoDeMembresia: "2022-03-10",
        fechafinTipoDeMembresia: "2023-03-15",
      },
      {
        id:2,
        descripcionTipoDeMembresia: "platino",
        fechainicioTipoDeMembresia: "2022-03-11",
        fechafinTipoDeMembresia: "2023-03-15",
      },
      {
        id:3,
        descripcionTipoDeMembresia: "Freemium",
        fechainicioTipoDeMembresia: "2022-03-12",
        fechafinTipoDeMembresia: "2023-03-15",
      },
      {
        id:4,
        descripcionTipoDeMembresia: "Premium",
        fechainicioTipoDeMembresia: "2022-03-05",
        fechafinTipoDeMembresia: "2023-03-15",
      }
    ],
    universidades:[
      {
        id: 1,
        nombreUniversidad: "Universidad Nacional de Ingeniería",
        regionUniversidad: "Lima",
        distritoUniversidad: "Rímac",
        calleUniversidad: "Av. Túpac Amaru 210",
        telefonoUniversidad: "(01) 4811070"
      },
      {
        id: 2,
        nombreUniversidad: "Universidad del Pacífico",
        regionUniversidad: "Lima",
        distritoUniversidad: "Magdalena del Mar",
        calleUniversidad: "Av. Salaverry 2020",
        telefonoUniversidad: "(01) 2190100"
      },
      {
        id: 3,
        nombreUniversidad: "Universidad Nacional de Trujillo",
        regionUniversidad: "La Libertad",
        distritoUniversidad: "Trujillo",
        calleUniversidad: "Av. Juan Pablo II s/n",
        telefonoUniversidad: "(044) 233678"
      },
      {
        id: 4,
        nombreUniversidad: "Universidad Nacional San Antonio Abad del Cusco",
        regionUniversidad: "Cusco",
        distritoUniversidad: "Cusco",
        calleUniversidad: "Av. de la Cultura 733",
        telefonoUniversidad: "(084) 237890"
      }

    ],
    pagos:[
      {
        id: 1,
        descripcionPago: "aaa",
        montoPago: "10",
        metodoPago: "aaa",
        tipodemembresia: "aaa",
        usuario: "aaa"
      },
      {
        id: 2,
        descripcionPago: "bbb",
        montoPago: "20",
        metodoPago: "bbb",
        tipodemembresia: "bbb",
        usuario: "bbb"
      },
      {
        id: 3,
        descripcionPago: "ccc",
        montoPago: "30",
        metodoPago: "ccc",
        tipodemembresia: "ccc",
        usuario: "ccc"
      },
      {
        id: 4,
        descripcionPago: "ddd",
        montoPago: "40",
        metodoPago: "ddd",
        tipodemembresia: "ddd",
        usuario: "ddd"
      }

    ],
    profesores:[
      {
        id: 1,
        nombreProfesor: "aaa",
        apellidoPaternoProfesor: "aaa",
        apellidoMaternoProfesor: "aaa",
        calificacionProfesor: "1",
        universidad: "aaa"
      },
      {
        id: 2,
        nombreProfesor: "aaa",
        apellidoPaternoProfesor: "aaa",
        apellidoMaternoProfesor: "aaa",
        calificacionProfesor: "1",
        universidad: "aaa"
      },
      {
        id: 3,
        nombreProfesor: "aaa",
        apellidoPaternoProfesor: "aaa",
        apellidoMaternoProfesor: "aaa",
        calificacionProfesor: "1",
        universidad: "aaa"
      },
      {
        id: 4,
        nombreProfesor: "aaa",
        apellidoPaternoProfesor: "aaa",
        apellidoMaternoProfesor: "aaa",
        calificacionProfesor: "2",
        universidad: "aaa"
      }

    ],
    ubicaciones:[
      {
        id: 1,
        descripcionUbicacion: "aaa",
        universidad: "aaa"
      },
      {
        id: 2,
        descripcionUbicacion: "aaa",
        universidad: "aaa"
      },
      {
        id: 3,
        descripcionUbicacion: "aaa",
        universidad: "aaa"
      },
      {
        id: 4,
        descripcionUbicacion: "aaa",
        universidad: "aaa"
      }

    ],
    rutas:[
      {
        id: 1,
        usuario: "aaa",
        destino: "aaa"
      },
      {
        id: 2,
        usuario: "aaa",
        destino: "aaa"
      },
      {
        id: 3,
        usuario: "aaa",
        destino: "aaa"
      },
      {
        id: 4,
        usuario: "aaa",
        destino: "aaa"
      }

    ],
    ubicacionesfavoritas:[
      {
        id: 1,
        descripcionUbicacionFavorita: "aaa",
	      ubicacion: "aaa",
        usuario: "aaa"
      },
      {
        id: 2,
        descripcionUbicacionFavorita: "aaa",
      	ubicacion: "aaa",
        usuario: "aaa"
      },
      {
        id: 3,
        descripcionUbicacionFavorita: "aaa",
      	ubicacion: "aaa",
        usuario: "aaa"
      },
      {
        id: 4,
        descripcionUbicacionFavorita: "aaa",
	      ubicacion: "aaa",
        usuario: "aaa"
      }

    ],
    usuarios:[
      {
        id: 1,
        nombreUsuario: "aaa",
        apellidoPaternoUsuario: "aaa",
        apellidoMaternoUsuario: "aaa",
        fechaNacimientoUsuario: "2010-10-10",
        telefonoUsuario: "aaa",
	      correoUsuario: "aaa",
        universidad:
        {
          id: 1,
          nombreUniversidad: "Universidad Nacional de Ingeniería",
          regionUniversidad: "Lima",
          distritoUniversidad: "Rímac",
          calleUniversidad: "Av. Túpac Amaru 210",
          telefonoUniversidad: "(01) 4811070"
        }
      },
      {
        id: 2,
        nombreUsuario: "aaa",
        apellidoPaternoUsuario: "aaa",
        apellidoMaternoUsuario: "aaa",
        fechaNacimientoUsuario: "2010-10-10",
        telefonoUsuario: "aaa",
	      correoUsuario: "aaa",
        universidad:
        {
          id: 2,
          nombreUniversidad: "Universidad del Pacífico",
          regionUniversidad: "Lima",
          distritoUniversidad: "Magdalena del Mar",
          calleUniversidad: "Av. Salaverry 2020",
          telefonoUniversidad: "(01) 2190100"
        }
      },
      {
        id: 3,
        nombreUsuario: "aaa",
        apellidoPaternoUsuario: "aaa",
        apellidoMaternoUsuario: "aaa",
        fechaNacimientoUsuario: "2010-10-10",
        telefonoUsuario: "aaa",
      	correoUsuario: "aaa",
        universidad:
        {
          id: 3,
          nombreUniversidad: "Universidad Nacional de Trujillo",
          regionUniversidad: "La Libertad",
          distritoUniversidad: "Trujillo",
          calleUniversidad: "Av. Juan Pablo II s/n",
          telefonoUniversidad: "(044) 233678"
        }
      },
      {
        id: 4,
        nombreUsuario: "aaa",
        apellidoPaternoUsuario: "aaa",
        apellidoMaternoUsuario: "aaa",
        fechaNacimientoUsuario: "2010-10-10",
        telefonoUsuario: "aaa",
	      correoUsuario: "aaa",
        universidad:
        {
          id: 4,
          nombreUniversidad: "Universidad Nacional San Antonio Abad del Cusco",
          regionUniversidad: "Cusco",
          distritoUniversidad: "Cusco",
          calleUniversidad: "Av. de la Cultura 733",
          telefonoUniversidad: "(084) 237890"
        }
      }

    ],
  }
  return data
}
