var skills = {
  'front-end': ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'React', 'Redux', 'Vue'],
  'back-end': ['Node.js', 'Express', 'Electron.js'],
  'other': ['C++', 'Python', 'Linux Server', 'Network Administration']
}

var app = new Vue({
  el: '#app',
  data: {
    skills: skills,
    clientProjects: clientProjects,
    fccProjects: fccProjects.reverse(),
    year: (new Date()).getFullYear()
  }
})
