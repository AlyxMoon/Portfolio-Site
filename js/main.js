var app = new Vue({
  el: '#placeholder',
  data: {
    message: 'And hello from Vue!'
  }
})

var vuePortfolio = new Vue({
  el: '#portfolio',
  data: {
    items: fccProjects.reverse()
  }
})
