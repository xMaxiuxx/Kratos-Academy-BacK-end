const users =  [
    {  
      "id":"1232",
      "nickname": "Maxi_Alumno",
        "name":"Maxi",
        "apellido": "Gatica",
        "edad": 24,
        "peso": "78kgs",
        "cinturon":"marron",
        "apodo":"animalito",
        "password": "123",
        "role":"alumno",
        "fetch":"10 años"
        },

        {
          "id":"a72a8caa-5408-11ee-8c99-0242ac120002",
         "nickname": "Aldo_Profe",
        "name":"Aldo",
        "apellido": "Escudero",
        "edad": 38,
        "peso": "110kgs",
        "cinturon":"preta",
        "apodo":"sensei",
        "password":"123",
        "role": "profe",
        "categoria": "pesadito",
        "fetch":"muchos años "
        },

        {
          "id":"a72a8df4-5408-11ee-8c99-0242ac120002",
         "nickname":"Marcos_Alumno",
         "name":"Marcos",
         "apellido": "Lardone",
         "edad": 36,
         "peso": "80kgs",
         "cinturon":"marron",
         "apodo":"Markus",
         "password":"123",
         "role": "alumno",
         "categoria":"medioPesado",
         "fetch": "12 años "
         }
 ];


 const getUsers = () => users;

 module.exports = {
    getUsers

 }

