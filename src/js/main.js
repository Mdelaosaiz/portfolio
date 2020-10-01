'use strict';

//Variables
const projects = document.querySelectorAll ('.project');

//Funciones

function openProject() {
  for (let i of document.querySelectorAll('.open')){
    i.classList.toggle('open');
  }
  this.classList.toggle('open');
}

function activeProject(e) {
  console.log(e.propertyName);
  if (e.propertyName === 'flex-grow'){
    let tools = e.currentTarget.querySelector('.tools');
    tools.classList.toggle('open-active');
  }
}

//Listeners
projects.forEach(project => project.addEventListener('click', openProject));
projects.forEach(project => project.addEventListener('transitionend', activeProject));

