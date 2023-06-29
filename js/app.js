// variables
const estado = document.querySelector('#estado')
const servicio = document.querySelector('#servicio')
const texto = document.querySelector('#texto')

const reesultado = document.querySelector('#cartas')


// eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarveterinarias(veterinarias);
});

//event listener
estado.addEventListener('change',e=>{
   datosBusqueda.estado =  e.target.value;
   
   filtarvet();
})
servicio.addEventListener('change',e=>{
    datosBusqueda.servicio =  e.target.value;

    filtarvet();
})
texto.addEventListener('change',e=>{
    datosBusqueda.texto =  e.target.value;

    filtarvet();
})
//gnerar un objero con la bsqueda
const datosBusqueda ={ 
    texto:'',
    estado:'',
    servicio:'',
}

// funciones
function mostrarveterinarias(veterinarias){
limpiarHtml();//elimina el html previo

    const tarjetas = document.createElement('div');
    tarjetas.classList.add('cont-cartas');
    veterinarias.forEach(vet =>{
       
        const {titulo,texto,imagen,enlace,servicio,estado,id} = vet

        const tarjeta = document.createElement('DIV');
        tarjeta.classList.add('card');
        tarjeta.setAttribute('id', id);

        // cuerpo de tarjeta
        const cuerpo = document.createElement('div');
        cuerpo.classList.add('card-body');
        
        const figure = document.createElement('div');

        const img = document.createElement('img');
        img.setAttribute('src', imagen);
        img.classList.add('card-img-top');

        
        const tituloHTML = document.createElement('p')
        tituloHTML.textContent = `
        ${titulo}
        `;

        const colonia = document.createElement('p');
        colonia.textContent = `
            ${texto}
        `

        const serv = document.createElement('p');
        serv.classList.add('text-success')
        serv.textContent = `
            ${servicio}
        `

        const esta = document.createElement('p');
        esta.textContent = `
            ${estado}
        `

        const boton = document.createElement('a');
        boton.classList.add('btn','btn-primary');
        boton.setAttribute('href', enlace);
        boton.innerText= 'Visitar';

        //insertar en el html
        figure.appendChild(img)
        tarjeta.appendChild(figure);
        cuerpo.appendChild(tituloHTML)
        
        cuerpo.appendChild(colonia)
        cuerpo.append(boton)
        
        tarjeta.appendChild(cuerpo);
        tarjetas.appendChild(tarjeta);

        reesultado.appendChild(tarjetas);
    })
    
}
function limpiarHtml(){
    while(reesultado.firstChild){
        reesultado.removeChild(reesultado.firstChild)
    }
}
function filtarvet(){
    const resultado = veterinarias.filter(filtrarestado).filter(filtrarservicio).filter(filtrarcolonia)

    
    if(resultado.length){
        mostrarveterinarias(resultado)
    }else{
        noresultado();
    }
}
function noresultado(){

     limpiarHtml()
    const noresultado = document.createElement("DIV")
    noresultado.classList.add('alert','alert-danger','text-center');
    noresultado.textContent = "No hay resultados"

    reesultado.appendChild(noresultado)
}
function filtrarestado(vet){
    const { estado } = datosBusqueda
    if(estado){
        return vet.estado === estado
    }

    return vet;
}

function filtrarservicio(vet){
    const { servicio } = datosBusqueda

    if(servicio){
        return vet.servicio === servicio
    }

    return vet;
}

function filtrarcolonia(vet){
    const { texto } = datosBusqueda

    if(texto)
    {
        return vet.texto === texto
    }

    return vet;
}


