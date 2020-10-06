'use strict';

//Variables
const projects = document.querySelectorAll ('.project');

//Funciones

function openProject() {
  //TODO se puede quitar el for para que se cierren al clickar, pero no se cerrarían al abrir otro.
  for (let i of document.querySelectorAll('.open')){
    if(i.classList.contains('open')){
      i.classList.remove('open');
    }i.classList.toggle('open');
  }
  this.classList.toggle('open');
}

function activeProject(e) {
  if (e.propertyName === 'flex-grow'){
    let tools = e.currentTarget.querySelector('.tools');
    tools.classList.toggle('open-active');
  }
}

//Listeners
projects.forEach(project => project.addEventListener('click', openProject));
projects.forEach(project => project.addEventListener('transitionend', activeProject));

