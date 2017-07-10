var vuePortfolio = new Vue({
  el: '#portfolio',
  data: {
    items: fccProjects.reverse()
  }
})

var vueYear = new Vue({
  el: '.trademark',
  data: {
    year: (new Date()).getFullYear()
  }
})
