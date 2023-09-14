 let users = [
    {
        "user":  "Maxi",
        "apellido": "Gatica",
        "edad": 24,
        "peso": "78kgs",
        "cinturon":"marron",
        "apodo":"animalito",
        "password":123,
        "role":"alumno"

        },
        {
            "user":  "Aldo",
            "apellido": "Escudero",
            "edad": 38,
            "peso": "110kgs",
            "cinturon":"preta",
            "apodo":"sensei",
            "password":123,
            "role":"profe"

            },

            {
               "user":  "Marcos",
               "apellido": "Lardone",
               "edad": 36,
               "peso": "80kgs",
               "cinturon":"marron",
               "apodo":"Markus",
               "password":123,
               "role":"alumno"
       
               },
 ];
 const getUsers = () => users;

 module.exports = {
    getUsers

 }

