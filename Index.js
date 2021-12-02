
function getRandomInt() {
  return Math.floor(Math.random() * personas.length)

};

function insertarNombres(){


  let nombres = document.getElementById("nombres").value
  
  personas.push({'nombre': nombres, 'repeticiones': 0});

 
  const reviewers = JSON.stringify(personas)


  document.getElementById("resultado").innerHTML = `
    
 <p>${reviewers}</p>
 `


}






let personas = [];

let grupo = []; //array vacía para almacenar los nombres

function asignar() {
  let pendiente = true;
  while (pendiente) {
    for (let i = 0; i < personas.length; i++) {

      let num1; //variable para almacenar el numero random
      let contador1 = 0
      do {
        //numero random(entre 0 , y algun numero de "personas")
        num1 = getRandomInt(0, personas.length); //almanacena el numero random que selecionara el nombre en el array
        contador1 = + 1
        if (contador1 > personas.length) { 
          limpiar();
          pendiente = true;
          break;
         }

      } while (num1 === i || personas[num1].repeticiones === 2); //mientras el num1 sea igual al i o repeticiones igual a 2 SEGUIR BUSCANDO


      let p1 = personas[num1].nombre  //llama al array con el numero random y selecciona el nombre
      personas[num1].repeticiones += 1; //llama al array con el numero random y le suma 1 a repeticiones


      let num2 = i;
      let contador2 = 0

      do {

        num2 = getRandomInt(0, personas.length);

        contador2 = + 1

        if (contador2 > personas.length) { 
          limpiar();
          pendiente = true;
          break;
         }

        //num2 === num1 para que no se le asigne dos veces el mismo nombre a un reviewer
      } while (num2 === i || num2 === num1 || personas[num2].repeticiones === 2);



      let p2 = personas[num2].nombre

      personas[num2].repeticiones += 1;

      grupo.push({ 'reviewer': personas[i].nombre, 'p1': p1, 'p2': p2 }); //pushea el objeto en GRUPO

      pendiente = false

    };
  }
}

function limpiar() {

  for (let i = 0; i < personas.length; i++) {
    personas[i].repeticiones = 0

  }

  grupo = []

}


const boton = document.getElementById("boton")
let resultado = document.getElementById("resultado")


boton.addEventListener("click", function () {

  document.getElementById("resultado").innerHTML = "";

  limpiar()

  console.log(JSON.stringify(grupo))

  asignar()

  console.log(JSON.stringify(grupo))

  const reviewers = JSON.stringify(grupo)


  document.getElementById("resultado").innerHTML = `
    
 <p>${reviewers}</p>


 `
 console.log(reviewers)
})





//console.log(grupo)