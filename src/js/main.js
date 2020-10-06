'use strict';

//Variables
const projects = document.querySelectorAll ('.project');

//Funciones

function openProject() {
  let openProject = document.querySelector('.open');
  if (openProject === null){
    this.classList.toggle('open');
  }
  else
  if(openProject === this){
    this.classList.toggle('open');
  }
  else{
    this.classList.toggle('open');
    openProject.classList.toggle('open');
  }
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

