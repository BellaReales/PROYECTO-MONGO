db.estudiantes.insertMany([
  {
    "code": "001",
    "firstName": "Hermenegildo",
    "lastName": "Menendez",
    "identificationNumber": 261525484,
    "gender": "M",
    "birthDate": "2007-06-11",
    "email": "luquejuan-luis@porras.es",
    "address": "Ronda Eva María Feliu 67 Piso 0 \nOurense, 19608",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BAR",
      "name": "Barranquilla"
    },
    "inscriptions": [
      {
        "date": "2024-04-24",
        "grade": 3.14,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2024-08-27",
        "grade": 3.44,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "002",
    "firstName": "María Jesús",
    "lastName": "Roca",
    "identificationNumber": 734518043,
    "gender": "M",
    "birthDate": "2004-07-15",
    "email": "wcaceres@gmail.com",
    "address": "Urbanización Vilma Tormo 44 Puerta 8 \nLugo, 91979",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAL",
      "name": "Cali"
    },
    "inscriptions": [
      {
        "date": "2024-09-28",
        "grade": 4.81,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      },
      {
        "date": "2023-04-12",
        "grade": 4.89,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "003",
    "firstName": "Adán",
    "lastName": "Baró",
    "identificationNumber": 555584362,
    "gender": "M",
    "birthDate": "2007-06-26",
    "email": "arsenio69@checa.net",
    "address": "Acceso de Feliciana Gárate 77\nCuenca, 11688",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "MED",
      "name": "Medellín"
    },
    "inscriptions": [
      {
        "date": "2024-12-31",
        "grade": 3.31,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2025-03-09",
        "grade": 4.41,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "004",
    "firstName": "Marcelo",
    "lastName": "Criado",
    "identificationNumber": 583990120,
    "gender": "M",
    "birthDate": "2009-05-30",
    "email": "fatima38@roura.com",
    "address": "Alameda Luz Blanca 89\nMurcia, 99621",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BOG",
      "name": "Bogotá"
    },
    "inscriptions": [
      {
        "date": "2024-06-26",
        "grade": 2.4,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2024-05-28",
        "grade": 3.35,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "005",
    "firstName": "Alondra",
    "lastName": "Huerta",
    "identificationNumber": 377602324,
    "gender": "F",
    "birthDate": "2006-04-19",
    "email": "pavoncustodio@gual-chaves.es",
    "address": "Plaza Eligio Belmonte 84\nGuadalajara, 11324",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BAR",
      "name": "Barranquilla"
    },
    "inscriptions": [
      {
        "date": "2024-09-08",
        "grade": 2.53,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2023-09-05",
        "grade": 2.57,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "006",
    "firstName": "Montserrat",
    "lastName": "Cuadrado",
    "identificationNumber": 566084894,
    "gender": "M",
    "birthDate": "2010-03-05",
    "email": "cerveradorotea@echevarria-escobar.com",
    "address": "Rambla de Reyna Casals 34\nMelilla, 19019",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAR",
      "name": "Cartagena"
    },
    "inscriptions": [
      {
        "date": "2023-05-18",
        "grade": 4.51,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      },
      {
        "date": "2025-02-08",
        "grade": 2.74,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "007",
    "firstName": "Anselma",
    "lastName": "Iglesias",
    "identificationNumber": 753987340,
    "gender": "M",
    "birthDate": "2006-01-29",
    "email": "vallejoencarnita@oliver-pozuelo.es",
    "address": "Vial de Isaías Plana 70\nÁvila, 56081",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAL",
      "name": "Cali"
    },
    "inscriptions": [
      {
        "date": "2024-09-24",
        "grade": 2.07,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      },
      {
        "date": "2025-04-07",
        "grade": 4.65,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "008",
    "firstName": "Alex",
    "lastName": "Blázquez",
    "identificationNumber": 119151617,
    "gender": "F",
    "birthDate": "2007-03-18",
    "email": "ikerarteaga@gmail.com",
    "address": "Pasadizo Lorenza Pavón 430 Piso 9 \nMelilla, 57448",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BAR",
      "name": "Barranquilla"
    },
    "inscriptions": [
      {
        "date": "2023-08-18",
        "grade": 2.91,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2023-08-17",
        "grade": 3.72,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "009",
    "firstName": "Aurelio",
    "lastName": "Bonilla",
    "identificationNumber": 28982865,
    "gender": "F",
    "birthDate": "2005-02-23",
    "email": "martinezloreto@yahoo.com",
    "address": "Callejón de Urbano Alfonso 7\nSegovia, 42465",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BOG",
      "name": "Bogotá"
    },
    "inscriptions": [
      {
        "date": "2023-10-11",
        "grade": 3.69,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2024-11-08",
        "grade": 4.7,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "010",
    "firstName": "Reynaldo",
    "lastName": "Lopez",
    "identificationNumber": 111047027,
    "gender": "M",
    "birthDate": "2005-07-18",
    "email": "wolivera@gmail.com",
    "address": "Acceso Rosaura Arjona 33\nLa Coruña, 91284",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAL",
      "name": "Cali"
    },
    "inscriptions": [
      {
        "date": "2024-10-02",
        "grade": 3.26,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      },
      {
        "date": "2025-03-08",
        "grade": 3.7,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "011",
    "firstName": "Ramiro",
    "lastName": "Girona",
    "identificationNumber": 524355887,
    "gender": "M",
    "birthDate": "2005-09-04",
    "email": "qjuarez@cordoba-lago.com",
    "address": "Via de Fito Segarra 79 Apt. 55 \nZaragoza, 88124",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAL",
      "name": "Cali"
    },
    "inscriptions": [
      {
        "date": "2024-08-02",
        "grade": 3.67,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      },
      {
        "date": "2024-03-16",
        "grade": 2.5,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "012",
    "firstName": "Yago",
    "lastName": "Benet",
    "identificationNumber": 471358931,
    "gender": "F",
    "birthDate": "2006-11-30",
    "email": "naranjoanastasia@yahoo.com",
    "address": "Ronda de Celso Bartolomé 133 Piso 7 \nToledo, 03895",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAL",
      "name": "Cali"
    },
    "inscriptions": [
      {
        "date": "2023-04-22",
        "grade": 3.84,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      },
      {
        "date": "2023-07-07",
        "grade": 2.47,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "013",
    "firstName": "Damián",
    "lastName": "Borja",
    "identificationNumber": 919354401,
    "gender": "F",
    "birthDate": "2006-07-03",
    "email": "santamariavioleta@mata.org",
    "address": "Vial de Nereida Águila 6 Puerta 3 \nLugo, 26595",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BOG",
      "name": "Bogotá"
    },
    "inscriptions": [
      {
        "date": "2024-01-29",
        "grade": 3.9,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2023-06-08",
        "grade": 3.61,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "014",
    "firstName": "Maite",
    "lastName": "Espada",
    "identificationNumber": 818054073,
    "gender": "F",
    "birthDate": "2010-01-23",
    "email": "bernardino64@querol.com",
    "address": "Callejón de Pascual Yuste 45\nTarragona, 57102",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAR",
      "name": "Cartagena"
    },
    "inscriptions": [
      {
        "date": "2025-04-03",
        "grade": 4.89,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      },
      {
        "date": "2023-05-06",
        "grade": 4.38,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "015",
    "firstName": "Sabas",
    "lastName": "Perelló",
    "identificationNumber": 891142332,
    "gender": "M",
    "birthDate": "2009-12-12",
    "email": "tamaritjacinto@hotmail.com",
    "address": "Via de Ignacio Soler 68\nLa Coruña, 39032",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BOG",
      "name": "Bogotá"
    },
    "inscriptions": [
      {
        "date": "2023-08-27",
        "grade": 2.26,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2023-10-14",
        "grade": 4.73,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "016",
    "firstName": "Natividad",
    "lastName": "Gargallo",
    "identificationNumber": 423035857,
    "gender": "F",
    "birthDate": "2005-01-13",
    "email": "bernardino26@casanovas.es",
    "address": "Camino de Adora Barragán 27 Apt. 17 \nLleida, 54860",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAL",
      "name": "Cali"
    },
    "inscriptions": [
      {
        "date": "2024-12-20",
        "grade": 3.54,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2024-08-29",
        "grade": 3.45,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "017",
    "firstName": "Marcio",
    "lastName": "Sandoval",
    "identificationNumber": 811323979,
    "gender": "F",
    "birthDate": "2008-03-01",
    "email": "fortunatoenriquez@gmail.com",
    "address": "Pasaje Lupe Barberá 84\nMálaga, 95081",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BAR",
      "name": "Barranquilla"
    },
    "inscriptions": [
      {
        "date": "2023-07-01",
        "grade": 3.29,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2025-03-22",
        "grade": 4.17,
        "course_schedule": {
          "course": {
            "code": "HIS102",
            "name": "Historia Universal",
            "description": "Desde la antigüedad hasta la era moderna",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "C3",
            "name": "Aula 3"
          },
          "teacher": {
            "firstName": "Andrés",
            "lastName": "Gómez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "456123789",
            "email": "agomez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "018",
    "firstName": "Macaria",
    "lastName": "Villa",
    "identificationNumber": 485660859,
    "gender": "F",
    "birthDate": "2009-01-27",
    "email": "ligiavera@hernando.com",
    "address": "Calle Valentín Carmona 10\nHuelva, 82880",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAR",
      "name": "Cartagena"
    },
    "inscriptions": [
      {
        "date": "2025-01-25",
        "grade": 3.49,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2023-04-19",
        "grade": 2.67,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "019",
    "firstName": "René",
    "lastName": "Vicens",
    "identificationNumber": 534097401,
    "gender": "F",
    "birthDate": "2006-03-13",
    "email": "imelda58@portillo.com",
    "address": "Avenida Dani Morante 60\nValencia, 76786",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "BOG",
      "name": "Bogotá"
    },
    "inscriptions": [
      {
        "date": "2024-11-07",
        "grade": 4.55,
        "course_schedule": {
          "course": {
            "code": "SCI301",
            "name": "Ciencias Naturales",
            "description": "Biología, química y física",
            "credits": 4
          },
          "schedule": {
            "day": "Miércoles",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "D4",
            "name": "Aula 4"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2024-12-05",
        "grade": 4.71,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      }
    ]
  },
  {
    "code": "020",
    "firstName": "Manolo",
    "lastName": "Ballester",
    "identificationNumber": 482330891,
    "gender": "M",
    "birthDate": "2005-06-02",
    "email": "leocadio71@agusti.com",
    "address": "Acceso de África Sales 23\nCantabria, 69235",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "city": {
      "code": "CAL",
      "name": "Cali"
    },
    "inscriptions": [
      {
        "date": "2025-02-15",
        "grade": 4.68,
        "course_schedule": {
          "course": {
            "code": "MAT101",
            "name": "Matemáticas Básicas",
            "description": "Curso de fundamentos matemáticos",
            "credits": 3
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "A1",
            "name": "Aula 1"
          },
          "teacher": {
            "firstName": "Carlos",
            "lastName": "Pérez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "987654321",
            "email": "cperez@example.com"
          }
        }
      },
      {
        "date": "2023-12-29",
        "grade": 4.55,
        "course_schedule": {
          "course": {
            "code": "LIT201",
            "name": "Literatura Clásica",
            "description": "Obras y análisis de autores clásicos",
            "credits": 2
          },
          "schedule": {
            "day": "Lunes",
            "startTime": "08:00",
            "endTime": "10:00"
          },
          "classroom": {
            "code": "B2",
            "name": "Aula 2"
          },
          "teacher": {
            "firstName": "Luisa",
            "lastName": "Martínez",
            "identificationType": {
              "code": "CC",
              "name": "cédula",
              "description": "cédula de ciudadanía"
            },
            "identificationNumber": "123789456",
            "email": "lmartinez@example.com"
          }
        }
      }
    ]
  }
]);

// Insert profesores
db.maestros.insertMany([
  {
    "firstName": "Carlos",
    "lastName": "Pérez",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "identificationNumber": "987654321",
    "email": "cperez@example.com"
  },
  {
    "firstName": "Luisa",
    "lastName": "Martínez",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "identificationNumber": "123789456",
    "email": "lmartinez@example.com"
  },
  {
    "firstName": "Andrés",
    "lastName": "Gómez",
    "identificationType": {
      "code": "CC",
      "name": "cédula",
      "description": "cédula de ciudadanía"
    },
    "identificationNumber": "456123789",
    "email": "agomez@example.com"
  }
]);

// Insert cursos
db.cursos.insertMany([
  {
    "code": "MAT101",
    "name": "Matemáticas Básicas",
    "description": "Curso de fundamentos matemáticos",
    "credits": 3,
    "topics": [
      {
        "code": "T001",
        "name": "Álgebra",
        "description": "Ecuaciones y desigualdades"
      },
      {
        "code": "T002",
        "name": "Geometría",
        "description": "Figuras y medidas"
      }
    ],
    "course_schedules": [
      {
        "schedule": {
          "day": "Lunes",
          "startTime": "08:00",
          "endTime": "10:00"
        },
        "classroom": {
          "code": "A1",
          "name": "Aula 1"
        },
        "teacher": {
          "firstName": "Carlos",
          "lastName": "Pérez",
          "identificationType": {
            "code": "CC",
            "name": "cédula",
            "description": "cédula de ciudadanía"
          },
          "identificationNumber": "987654321",
          "email": "cperez@example.com"
        }
      }
    ]
  },
  {
    "code": "LIT201",
    "name": "Literatura Clásica",
    "description": "Obras y análisis de autores clásicos",
    "credits": 2,
    "topics": [
      {
        "code": "T003",
        "name": "Grecia",
        "description": "Homero y Sófocles"
      },
      {
        "code": "T004",
        "name": "Roma",
        "description": "Virgilio y Ovidio"
      }
    ],
    "course_schedules": [
      {
        "schedule": {
          "day": "Lunes",
          "startTime": "08:00",
          "endTime": "10:00"
        },
        "classroom": {
          "code": "B2",
          "name": "Aula 2"
        },
        "teacher": {
          "firstName": "Luisa",
          "lastName": "Martínez",
          "identificationType": {
            "code": "CC",
            "name": "cédula",
            "description": "cédula de ciudadanía"
          },
          "identificationNumber": "123789456",
          "email": "lmartinez@example.com"
        }
      }
    ]
  },
  {
    "code": "HIS102",
    "name": "Historia Universal",
    "description": "Desde la antigüedad hasta la era moderna",
    "credits": 3,
    "topics": [
      {
        "code": "T005",
        "name": "Edad Media",
        "description": "Feudalismo y cruzadas"
      },
      {
        "code": "T006",
        "name": "Edad Moderna",
        "description": "Renacimiento y revolución"
      }
    ],
    "course_schedules": [
      {
        "schedule": {
          "day": "Lunes",
          "startTime": "08:00",
          "endTime": "10:00"
        },
        "classroom": {
          "code": "C3",
          "name": "Aula 3"
        },
        "teacher": {
          "firstName": "Andrés",
          "lastName": "Gómez",
          "identificationType": {
            "code": "CC",
            "name": "cédula",
            "description": "cédula de ciudadanía"
          },
          "identificationNumber": "456123789",
          "email": "agomez@example.com"
        }
      }
    ]
  },
  {
    "code": "SCI301",
    "name": "Ciencias Naturales",
    "description": "Biología, química y física",
    "credits": 4,
    "topics": [
      {
        "code": "T007",
        "name": "Biología",
        "description": "Células y genética"
      },
      {
        "code": "T008",
        "name": "Física",
        "description": "Fuerzas y energía"
      }
    ],
    "course_schedules": [
      {
        "schedule": {
          "day": "Miércoles",
          "startTime": "08:00",
          "endTime": "10:00"
        },
        "classroom": {
          "code": "D4",
          "name": "Aula 4"
        },
        "teacher": {
          "firstName": "Carlos",
          "lastName": "Pérez",
          "identificationType": {
            "code": "CC",
            "name": "cédula",
            "description": "cédula de ciudadanía"
          },
          "identificationNumber": "987654321",
          "email": "cperez@example.com"
        }
      }
    ]
  }
]);
