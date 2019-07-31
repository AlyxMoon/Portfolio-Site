var skills = {
  'web': ['HTML', 'CSS', 'CSS Animations', 'JavaScript'],
  'frontend': ['JQuery', 'Bootstrap', 'Vue', 'React', 'Angular'],
  'backend': ['Node', 'Express', 'Feathers'],
  'other': ['Electron']
}

var app = new Vue({
  el: '#app',
  data: {
    year: (new Date()).getFullYear(),
    skills,
    showSkills: false
  }
})
