<<<<<<< HEAD
let nombrePlanetas=["Tierra","Marte",'Jupiter','Saturno','Urano']
let distancia = [6, 3,4,5,6, "67"]
=======
let nombrePlanetas=["Tierra","Marte"]
let distancia = [6, 3, "67"]
>>>>>>> developers
const tamanio =[]

let i=0;
while (i<= nombrePlanetas.length - 1) {
    console.log(i)
    console.log(nombrePlanetas[i]);
    i=i+1
}

for(const key in distancia){
    if (distancia[key] == "5") {
        console.log("Se Encontro La Distancia")
    } else {
        console.log("No Se Encontro La Distancia")
        
    }
<<<<<<< HEAD
}   

nombrePlanetas.forEach((value,index,array)=>{
    console.log('planeta',index,value)
})


nombrePlanetas.map((planetas,index)=>{
    return(
        console.log('El planeta', planetas, 'tiene tamaño de :', index)
    )
})
=======
}
>>>>>>> developers
