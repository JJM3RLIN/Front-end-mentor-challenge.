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
            addElements(padre, timeframes.daily.current, timeframes.daily.previous, title, "Yesterday");
         });
         db.forEach(element => {
            const {title, timeframes} = element;
            const weekly = document.querySelector('.exercise-weekly')
            addElements(weekly, timeframes.weekly.current, timeframes.weekly.previous, title,"Last week");
         });
         db.forEach(element => {
            const {title, timeframes} = element;
            const monthly = document.querySelector('.exercise-monthly')
            addElements(monthly, timeframes.monthly.current, timeframes.monthly.previous, title, "Last month")
         });
    }
    catch(error){
        console.log('Error');
    }
    
}
function addElements(padre,horasT, anteriorT, tituloT, last){
    const titulo = document.createElement('H5');
    const button = document.createElement('BUTTON');
    const icono = document.createElement('IMG');
    const horas = document.createElement('P');
    const anterior = document.createElement('H5');
    const contenedorInfo = document.createElement('DIV');
    const contenedorTitulo = document.createElement('DIV');
    const contenedorCard = document.createElement('DIV');
    const subBg = document.createElement('DIV');
    const subBgIcon = document.createElement('IMG');
    const card = document.createElement('DIV');
    titulo.textContent = tituloT;
    icono.src = "images/icon-ellipsis.svg";
    button.appendChild(icono)
    horas.textContent =  `${horasT}hrs`;
    anterior.textContent = `${last} - ${anteriorT}hrs`;
    contenedorTitulo.appendChild(titulo);
    contenedorTitulo.appendChild(button);
    contenedorTitulo.classList.add('display');
     contenedorInfo.appendChild(horas);
     contenedorInfo.classList.add('card-text');
    contenedorInfo.appendChild(anterior);
    card.appendChild(contenedorTitulo);
    card.appendChild(contenedorInfo);
    card.classList.add('card');
    if(titulo.textContent == 'Work'){ 
        subBg.classList.add('orange')
        subBgIcon.src ="images/icon-work.svg"
        subBg.appendChild(subBgIcon);
    }
    else if(titulo.textContent == 'Play'){ 
        subBg.classList.add('blue')
        subBgIcon.src ="images/icon-play.svg"
        subBg.appendChild(subBgIcon);
    }
    else if(titulo.textContent == 'Study'){ 
        subBg.classList.add('red')
        subBgIcon.src ="images/icon-study.svg"
        subBg.appendChild(subBgIcon);
    }
    else if(titulo.textContent == 'Exercise'){ 
        subBg.classList.add('green')
        subBgIcon.src ="images/icon-exercise.svg"
        subBg.appendChild(subBgIcon);
    }
    else if(titulo.textContent == 'Social'){ 
        subBg.classList.add('violet')
        subBgIcon.src ="images/icon-social.svg"
        subBg.appendChild(subBgIcon);
    }
    else if(titulo.textContent == 'Self Care'){ 
        subBg.classList.add('yellow')
        subBgIcon.src ="images/icon-self-care.svg"
        subBg.appendChild(subBgIcon);
    }
    contenedorCard.appendChild(subBg);
    contenedorCard.appendChild(card);
    padre.appendChild(contenedorCard);
}
function mostrarSeccion(){
    const seccionActual = document.querySelector(`#paso-${seccion}`);
     seccionActual.classList.add('mostrar-seccion');
     const btnActual = document.querySelector(`[data-paso= "${seccion}"]`)
     btnActual.classList.add('activo');
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
            mostrarSeccion()

        });
    });
}

