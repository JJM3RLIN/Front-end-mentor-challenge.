let seccion = 1;
document.addEventListener('DOMContentLoaded', ()=>{
    mostarInfo();
    mostrarSeccion();
    cambiarSeccion();
});
async function mostarInfo(){
    try{
        const resultado = await fetch('data.json');
        const db = await resultado.json();
        db.forEach(element => {
            const {title, timeframes} = element;
            const padre = document.querySelector('.exercise')
            const titulo = document.createElement('H5');
            const horas = document.createElement('P')
            const anterior = document.createElement('H5');
            const contenedorInfo = document.createElement('DIV');
            const contenedorTitulo = document.createElement('DIV');
            const card = document.createElement('DIV');
            titulo.textContent = title;
            horas.textContent =  `${timeframes.daily.current}hrs`;
            anterior.textContent = `Last week - ${timeframes.daily.previous}hrs`;
            contenedorTitulo.appendChild(titulo);
            contenedorTitulo.classList.add('display');
             contenedorInfo.appendChild(horas);
             contenedorInfo.classList.add('card-text');
            contenedorInfo.appendChild(anterior);
            card.appendChild(contenedorTitulo);
            card.appendChild(contenedorInfo);
            card.classList.add('card');
            padre.appendChild(card);
         });
         db.forEach(element => {
            const {title, timeframes} = element;
            const weekly = document.querySelector('.exercise-weekly')
            const titulo = document.createElement('H5');
            const horas = document.createElement('P')
            const anterior = document.createElement('H5');
            const contenedorInfo = document.createElement('DIV');
            const contenedorTitulo = document.createElement('DIV');
            const card = document.createElement('DIV');
            titulo.textContent = title;
            horas.textContent =  `${timeframes.weekly.current}hrs`;
            anterior.textContent = `Last week - ${timeframes.weekly.previous}hrs`;
            contenedorTitulo.appendChild(titulo);
            contenedorTitulo.classList.add('display');
             contenedorInfo.appendChild(horas);
             contenedorInfo.classList.add('card-text');
            contenedorInfo.appendChild(anterior);
            card.appendChild(contenedorTitulo);
            card.appendChild(contenedorInfo);
            card.classList.add('card');
            weekly.appendChild(card);
         });
         db.forEach(element => {
            const {title, timeframes} = element;
            const monthly = document.querySelector('.exercise-monthly')
            const titulo = document.createElement('H5');
            const horas = document.createElement('P')
            const anterior = document.createElement('H5');
            const contenedorInfo = document.createElement('DIV');
            const contenedorTitulo = document.createElement('DIV');
            const card = document.createElement('DIV');
            titulo.textContent = title;
            horas.textContent =  `${timeframes.monthly.current}hrs`;
            anterior.textContent = `Last week - ${timeframes.monthly.previous}hrs`;
            contenedorTitulo.appendChild(titulo);
            contenedorTitulo.classList.add('display');
             contenedorInfo.appendChild(horas);
             contenedorInfo.classList.add('card-text');
            contenedorInfo.appendChild(anterior);
            card.appendChild(contenedorTitulo);
            card.appendChild(contenedorInfo);
            card.classList.add('card');
            monthly.appendChild(card);
         });
    }
    catch(error){
        console.log('Error');
    }
    
}
function mostrarSeccion(){
    const seccionActual = document.querySelector(`#paso-${seccion}`);
     seccionActual.classList.add('mostrar-seccion');
     seccionActual.classList.add('activo');
}
function cambiarSeccion(){
    const buttons = document.querySelectorAll('.time button');
    buttons.forEach(boton=>{

        boton.addEventListener('click', (e)=>{
            e.preventDefault();
            seccion = parseInt(e.target.dataset.paso);

            //eliminar de la seccion anterior
            document.querySelector('.mostrar-seccion').classList.remove('mostrar-seccion');
            document.querySelector('.activo').classList.remove('activo');

            const sec = document.querySelector(`#paso-${seccion}`);
            sec.classList.add('mostrar-seccion');
            boton.classList.add('activo');
            mostrarSeccion()

        });
    });
}

