import { series } from "./series.js";
const tabla = document.getElementById('tablaSeries');
console.log("Serie");
let seasons = 0;
let totalSeries = series.length;
function crearSerie(serie) {
    const fila = document.createElement('tr');
    const id = document.createElement('td');
    const name = document.createElement('td');
    const channel = document.createElement('td');
    const seasons = document.createElement('td');
    id.textContent = serie.id.toFixed();
    name.textContent = serie.name;
    channel.textContent = serie.channel;
    seasons.textContent = serie.seasons.toFixed();
    fila.appendChild(id);
    fila.appendChild(name);
    fila.appendChild(channel);
    fila.appendChild(seasons);
    fila.addEventListener('click', () => {
        const image = document.getElementById("cardSerieImage");
        const name = document.getElementById("cardSerieTitle");
        const desc = document.getElementById("cardSerieDesc");
        const link = document.getElementById("cardSerieLink");
        image.src = serie.image.trim();
        name.textContent = serie.name;
        desc.textContent = serie.desc;
        link.href = serie.url;
        link.textContent = serie.url;
        document.getElementById("card").style.visibility = "visible";
    });
    return fila;
}
if (tabla) {
    const tbody = tabla.querySelector('tbody');
    series.forEach(serie => {
        const fila = crearSerie(serie);
        tbody.appendChild(fila);
        seasons = seasons + serie.seasons;
    });
    const p = document.getElementById("average");
    const average = document.createTextNode("Seasons average: " + (seasons / totalSeries).toFixed());
    p.appendChild(average);
}
