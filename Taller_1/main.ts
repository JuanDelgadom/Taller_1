import { series } from "./data.js";
import { Serie } from "./serie.js";

const tabla = document.getElementById('tablaSeries') as HTMLTableElement;

console.log("Serie");
let seasons: number = 0;
let totalSeries: number = series.length;

function crearSerie(serie: Serie): HTMLTableRowElement {
    const fila = document.createElement('tr');
    const id = document.createElement('td');
    const name = document.createElement('td');
    const channel = document.createElement('td');
    const seasons = document.createElement('td');

    id.textContent = serie.id.toFixed();
    name.textContent = serie.name;
    channel.textContent = serie.channel;
    seasons.textContent = serie.seasons.toFixed()

    fila.appendChild(id);
    fila.appendChild(name);
    fila.appendChild(channel);
    fila.appendChild(seasons);

    return fila;
}

if (tabla) {
    const tbody = tabla.querySelector('tbody') as HTMLTableSectionElement;
    series.forEach(serie => {
        const fila = crearSerie(serie);
        tbody.appendChild(fila);
        seasons = seasons + serie.seasons;
    });
    const p = document.getElementById("average") as HTMLParagraphElement;
    const average = document.createTextNode("Seasons average: " + (seasons/totalSeries).toFixed());
    p.appendChild(average);
    
}

