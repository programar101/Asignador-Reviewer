
function getRandomInt() {
    return  Math.floor( Math.random() * personas.length )    
    
};

let personas = [
    {
        nombre:'Maru',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        },
    {
        nombre:'Christian',
        repeticiones: 0,
        },
    {
        nombre:'Ricardo',
        repeticiones: 0,
        },
    {
        nombre:'Puni',
        repeticiones: 0,
        },
    {
        nombre:'Pepe',
        repeticiones: 0,
        },
    {
        nombre:'Papa',
        repeticiones: 0,
        },
];

let grupo = []; //array vacía para almacenar los nombres

function asignar(){

for (let i=0; i < personas.length; i++) {
    
   
   
   
    let num1; //variable para almacenar el numero random
    do { 
                                                //numero ranom(entre 0 , y algun numero de "personas")
        num1 = getRandomInt(0, personas.length ); //almanacena el numero random que selecionara el nombre en el array
    
        
        } while ( num1 === i || personas[num1].repeticiones === 2 ); //mientras el num1 sea igual al i o repeticiones igual a 2 SEGUIR BUSCANDO
    
    
    let p1 = personas[num1].nombre  //llama al array con el numero random y selecciona el nombre
    personas[num1].repeticiones += 1; //llama al array con el numero random y le suma 1 a repeticiones
    
   
   
   
   
   
    let num2 = i;
    do {
        
        num2 = getRandomInt(0, personas.length );
                                                            //num2 === num1 para que no se le asigne dos veces el mismo nombre a un reviewer
        } while ( num2 === i || num2 === num1 || personas[num2].repeticiones === 2); 

    let p2 = personas[num2].nombre 
    
        personas[num2].repeticiones += 1; 

    grupo.push({'reviewer': personas[i].nombre, 'p1': p1, 'p2': p2}); //pushea el objeto en GRUPO
    

};
}


const boton = document.getElementById("boton")
let resultado = document.getElementById("resultado")


boton.addEventListener("click", function(){

document.getElementById("resultado").innerHTML="";
   
 asignar()

 const reviewers = JSON.stringify(grupo)


 document.getElementById("resultado").innerHTML = `
    
 <p>${reviewers}</p>


 `
})




//console.log(grupo)