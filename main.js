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
        if(seccion == 1){
            db.forEach(element => {
                const {title, timeframes} = element;
                addElements(timeframes.daily.current, timeframes.daily.previous, title, "Yesterday")
               });
        }
       else if(seccion == 2){
        db.forEach(element => {
            const {title, timeframes} = element;
            addElements(timeframes.weekly.current, timeframes.weekly.previous, title, "Last week")
           });
       }
       else if(seccion == 3){
        db.forEach(element => {
            const {title, timeframes} = element;
            addElements(timeframes.monthly.current, timeframes.monthly.previous, title, "Last month")
           });
       }
       
         console.log("adentro");
    }
    catch(error){
        console.log('Error');
    }
    
}
function addElements(horasT, anteriorT, tituloT, last){
    
    if(tituloT == 'Work'){ 
     const horas = document.querySelector('.horas-work');
     const lastTime = document.querySelector('.last-work');
     horas.textContent = `${horasT}hrs`;
     lastTime.textContent = `${last} - ${anteriorT}hrs`;
    }
    else if(tituloT == 'Play'){ 
        const horasP = document.querySelector('.horas-play');
        const lastTime = document.querySelector('.last-play');
        horasP.textContent = `${horasT}hrs`;
        lastTime.textContent = `${last} - ${anteriorT}hrs `;
    }
    else if(tituloT == 'Study'){ 
        const horas = document.querySelector('.horas-study');
        const lastTime = document.querySelector('.last-study');
        horas.textContent = `${horasT}hrs`;
        lastTime.textContent = `${last} - ${anteriorT}hrs`;
    }
    else if(tituloT == 'Exercise'){ 
        const horas = document.querySelector('.horas-exercise');
        const lastTime = document.querySelector('.last-exercise');
        horas.textContent = `${horasT}hrs`;
        lastTime.textContent = `${last} - ${anteriorT}hrs`;
    }
    else if(tituloT== 'Social'){ 
        const horas = document.querySelector('.horas-social');
        const lastTime = document.querySelector('.last-social');
        horas.textContent = `${horasT}hrs`;
        lastTime.textContent = `${last} - ${anteriorT}hrs`;
    }
    else if(tituloT == 'Self Care'){ 
        const horas = document.querySelector('.horas-self');
        const lastTime = document.querySelector('.last-self');
        horas.textContent = `${anteriorT}hrs`;
        lastTime.textContent = `${last} - ${anteriorT}hrs`;
    }
}


function mostrarSeccion(){
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
            document.querySelector('.activo').classList.remove('activo');
            console.log(seccion); 
            mostrarSeccion()
            mostarInfo();
        });
    });
}

