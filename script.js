const url = 'http://api.openweathermap.org/data/2.5/weather'; 
const apiKey = 'f291ee7a7b5a62e5ce6a3841e9a76441';

const botonBusqueda = document.querySelector('#botonBusqueda');
const ciudadEntrada = document.querySelector('#ciudadEntrada');
const datosClima = document.querySelector('#datosClima');

botonBusqueda.addEventListener('click', () =>{
    let ciudad = ciudadEntrada.value;
    if(ciudad){
        fetchDatosClima(ciudad);
    };
})

function fetchDatosClima(ciudad){
    datosClima.innerHTML='';
    fetch(`${url}?q=${ciudad}&lang=es&appid=${apiKey}&units=metric`)
    .then(data => data.json())
    .then(data => mostrarDatosClimas(data));
}
function mostrarDatosClimas(data){
    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const temperaturaMin = data.main.temp_min;
    const temperaturaMax = data.main.temp_max;

    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadMuestra = document.createElement('h2');
    ciudadMuestra.textContent = `${ciudadNombre}, ${paisNombre}.`;

    const temperaturaMuestra = document.createElement('h3');
    temperaturaMuestra.textContent = `La temperatura es ${temperatura} ºC.`
    
    const temperaturaRangoMuestra = document.createElement('h6');
    temperaturaRangoMuestra.textContent = `MIN ${temperaturaMin}  /  MAX ${temperaturaMax}`;

    const humedadMuestra = document.createElement('p');
    humedadMuestra.textContent = `La humedad es ${humedad} %`;

    const descripcionMuestra = document.createElement('p');
    descripcionMuestra.textContent = `La descripción metereológica es ${descripcion}.`;

    const imagenMuestra = document.createElement('img');
    imagenMuestra.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;


    datosClima.appendChild(ciudadMuestra);
    datosClima.appendChild(temperaturaMuestra);
    datosClima.appendChild(temperaturaRangoMuestra);
    datosClima.appendChild(humedadMuestra);
    datosClima.appendChild(descripcionMuestra);
    datosClima.appendChild(imagenMuestra);
}

