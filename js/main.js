var vuePortfolio = new Vue({
  el: '#portfolio',
  data: {
    clientProjects: clientProjects,
    fccProjects: fccProjects.reverse()
  }
})

var vueYear = new Vue({
  el: '.trademark',
  data: {
    year: (new Date()).getFullYear()
  }
})
