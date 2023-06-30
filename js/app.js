// variables

const estado = document.querySelector('#estado')
const servicio = document.querySelector('#servicio')
const texto = document.querySelector('#texto')

const reesultado = document.querySelector('#cartas')


// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarveterinarias(veterinarias);
});

//event listener
estado.addEventListener('change', e => {
    datosBusqueda.estado = e.target.value;

    filtarvet();
})
servicio.addEventListener('change', e => {
    datosBusqueda.servicio = e.target.value;

    filtarvet();
})
texto.addEventListener('change', e => {
    datosBusqueda.texto = e.target.value;

    filtarvet();
})
//gnerar un objero con la bsqueda
const datosBusqueda = {
    texto: '',
    estado: '',
    servicio: '',
}
var coord1, coord2, coord3, coord4, coord5;

// funciones
function mostrarveterinarias(veterinarias) {
    limpiarHtml();//elimina el html previo

    const tarjetas = document.createElement('div');
    tarjetas.classList.add('cont-cartas');
    veterinarias.forEach(vet => {

        const { titulo, texto, imagen, enlace, servicio, estado, id } = vet

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
        boton.classList.add('btn', 'btn-primary');
        boton.setAttribute('href', enlace);
        boton.innerText = 'Visitar';

        boton.addEventListener('click', function (e) {
            e.preventDefault();
            var lat = coord1.lat;
            var lng = coord1.lng;
            map.panTo({ lat: lat, lng: lng });
            console.log('click')
        })

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
function limpiarHtml() {
    while (reesultado.firstChild) {
        reesultado.removeChild(reesultado.firstChild)
    }
}
function filtarvet() {
    const resultado = veterinarias.filter(filtrarestado).filter(filtrarservicio).filter(filtrarcolonia)


    if (resultado.length) {
        mostrarveterinarias(resultado)
    } else {
        noresultado();
    }
}
function noresultado() {

    limpiarHtml()
    const noresultado = document.createElement("DIV")
    noresultado.classList.add('alert', 'alert-danger', 'text-center');
    noresultado.textContent = "No hay resultados"

    reesultado.appendChild(noresultado)
}
function filtrarestado(vet) {
    const { estado } = datosBusqueda
    if (estado) {
        return vet.estado === estado
    }

    return vet;
}

function filtrarservicio(vet) {
    const { servicio } = datosBusqueda

    if (servicio) {
        return vet.servicio === servicio
    }

    return vet;
}

function filtrarcolonia(vet) {
    const { texto } = datosBusqueda

    if (texto) {
        return vet.texto === texto
    }

    return vet;
}

var map;

var tarjeta1 = document.getElementById('vet1');
var tarjeta2 = document.getElementById('vet2');
var tarjeta3 = document.getElementById('vet3');
var tarjeta4 = document.getElementById('vet4');
var tarjeta5 = document.getElementById('vet5');



// tarjeta1.addEventListener('click', function () {
//     var lat = coord1.lat;
//     var lng = coord1.lng;
//     map.panTo({ lat: lat, lng: lng });
// })
// tarjeta2.addEventListener('click', function () {
//     var lat = coord2.lat;
//     var lng = coord2.lng;
//     map.panTo({ lat: lat, lng: lng });
// });
// tarjeta3.addEventListener('click', function () {
//     var lat = coord3.lat;
//     var lng = coord3.lng;
//     map.panTo({ lat: lat, lng: lng });
// });
// tarjeta4.addEventListener('click', function () {
//     var lat = coord4.lat;
//     var lng = coord4.lng;
//     map.panTo({ lat: lat, lng: lng });
// });
// tarjeta5.addEventListener('click', function () {
//     var lat = coord5.lat;
//     var lng = coord5.lng;
//     map.panTo({ lat: lat, lng: lng });
// });

function iniciarMap() {
    var coord = { lat: 16.7940431, lng: -99.8029122 };
    
    coord1 = { lat: 16.80093680747825, lng: -99.80409096199409 };
    coord2 = { lat: 16.807644168779564, lng: -99.82223532793019 };
    coord3 = { lat: 16.7997121, lng: -99.8066849 };
    coord4 = { lat: 16.842807133531252, lng: -99.81245062952244 };
    coord5 = { lat: 16.7972851, lng: -99.8098145 };
    // coord1 = { lat: 16.80093680747825, lng: -99.80409096199409 };
    // coord2 = { lat: 16.807644168779564, lng: -99.82223532793019 };
    // coord3 = { lat: 16.7997121, lng: -99.8066849 };
    // coord4 = { lat: 16.842807133531252, lng: -99.81245062952244 };
    // coord5 = { lat: 16.7972851, lng: -99.8098145 };
    var coord6 = { lat: 16.7972967, lng: -99.8091473 };
    var coord7 = { lat: 16.7993173, lng: -99.8041376 };
    var coord8 = { lat: 16.800165, lng: -99.8165951 };
    var coord9 = { lat: 16.7997702, lng: -99.8169348 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: coord,
        styles: [
            {
                featureType: 'poi.business',
                stylers: [{ visibility: 'off' }] // Oculta los negocios locales
            },
            {
                elementType: 'geometry',
                stylers: [{ color: '#1d1c1d' }] // Cambia el color de fondo del mapa
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#141414' }] // Cambia el color del contorno de las etiquetas
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ffffff' }] // Cambia el color del texto de las etiquetas
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#131e34' }] // Cambia el color del agua
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#141414' }] // Cambia el color del paisaje
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#3a3e40' }] // Cambia el color de las carreteras
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#dddddd' }] // Cambia el color de los puntos de interés
            },
            {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [{ color: '#a7a7a7' }] // Cambia el color de los elementos administrativos
            },

        ],
        // gestureHandling: 'greedy',

    });

    var iconoPersonalizado = {
        url: './img/iconlocation.png',
        scaledSize: new google.maps.Size(30, 50), // Tamaño del ícono
    };
    var marker1 = new google.maps.Marker({
        position: coord1,
        map: map,
        icon: iconoPersonalizado,
    });

    var marker2 = new google.maps.Marker({
        position: coord2,
        map: map,
        icon: iconoPersonalizado,
    });
    var marker3 = new google.maps.Marker({
        position: coord3,
        map: map,
        icon: iconoPersonalizado,
    });
    var marker4 = new google.maps.Marker({
        position: coord4,
        map: map,
        icon: iconoPersonalizado,
    });
    var marker5 = new google.maps.Marker({
        position: coord5,
        map: map,
        icon: iconoPersonalizado,
    });

    // Resto de los marcadores ...
}