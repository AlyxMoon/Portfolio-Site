const skillCategories = ['web', 'frontend', 'backend', 'other']
const skills = {
  'web': ['HTML', 'CSS', 'CSS Animations', 'JavaScript'],
  'frontend': ['JQuery', 'Bootstrap', 'Vue', 'React', 'Angular'],
  'backend': ['Node', 'Express', 'Feathers'],
  'other': ['Electron']
}

const projectsClient = [
  {
    name: 'Business Valuation Form',
    image_link: './img/project_placeholder.png',
    link_code: '',
    link_website: '',
    description: `This project was a full stack app that can be summed up as "A dynamic web form with user profiles and access control." It was intended to ease the entry and review of data provided by clients, and to export as a PDF and to Excel to fit within their existing business practice.
    This project had an Angular frontend, a Node/Feathers backend, with a PostgreSQL database.`
  }
]

var app = new Vue({
  el: '#app',

  data: {
    year: (new Date()).getFullYear(),
    skills,
    activeSkill: [-1, -1],
    showSkills: false,
    timer: null,
    projectsGithubRecent: null,
    projectsClient,
    projectsPersonal: []
  },

  filters: {
    normalizeGithubTitle (string) {
      if (!string) return ''
      return string.replace(/[-]/g, ' ')
    },

    getTimeSince (pastDateTime) {
      if (!pastDateTime) return ''

      // Time for a year, month, week, and day, in milliseconds
      // Not exact for week to month, this assumes 7 days -> 1 week, 4 weeks -> 1 month, 12 months -> 1 year
      let factors = [29030400000, 2419200000, 604800000, 86400000]
      let factorNames = ['year', 'month', 'week', 'day']

      let diff = Date.parse(new Date()) - Date.parse(pastDateTime)
      let chosenFactor = factors.findIndex(f => Math.floor(diff / f) > 0)

      if (chosenFactor === -1) {
        return 'today'
      } else {
        let timeAgo = Math.floor(diff / factors[chosenFactor])
        let timeFactor = factorNames[chosenFactor]
        return `${timeAgo} ${timeFactor}${timeAgo > 1 ? 's' : ''} ago`
      }
    },

    trim (string) {
      if (!string) return ''
      return ('' + string).trim()
    }
  },

  created() {
    let params = 'affiliation=owner&sort=pushed&per_page=4'
    fetch(`https://api.github.com/users/AlyxMoon/repos?${params}`)
      .then(res => res.json())
      .then(data => {
        this.projectsGithubRecent = data
      })
  },

  beforeDestroy() {
    clearInterval(this.timer)
  },

  methods: {
    toggleShowSkills() {
      this.showSkills = !this.showSkills

      if (!this.showSkills) {
        clearInterval(this.timer)
        this.activeSkill = [-1, -1]
      } else {
        this.timer = window.setInterval(() => {
          this.activeSkill.splice(0, 1, Math.floor(Math.random() * skillCategories.length))
          this.activeSkill.splice(1, 1, Math.floor(Math.random() * skills[skillCategories[this.activeSkill[0]]].length))
        }, 3000)
      }
    }
  }
})

var bonusString = ' \
_________________ \n\
/                /| \n\
/                / | \n\
/________________/ /| \n\
###|      ____      |//| \n\
#   |     /   /|     |/.| \n\
#  __|___ /   /.|     |  |_______________ \n\
#  /      /   //||     |  /              /|                  ___ \n\
#  /      /___// ||     | /              / |                 / \\ \n\
# /______/!   || ||_____|/              /  |                /   \\ \n\
#| . . .  !   || ||                    /  _________________/     \\ \n\
#|  . .   !   || //      ________     /  /\\________________  {   /  } \n\
/|   .    !   ||//~~~~~~/   0000/    /  / / ______________  {   /  / \n\
/ |        !   |\'/      /9  0000/    /  / / /             / {   /  / \n\
/ #\\________!___|/      /9  0000/    /  / / /_____________/___  /  / \n\
/ #     /_____\\/        /9  0000/    /  / / /_  /\\_____________\\/  / \n\
/ #                      ``^^^^^^    /   \\ \\ . ./ / ____________   / \n\
+=#==================================/     \\ \\ ./ / /.  .  .  \\ /  / \n\
|#                                   |      \\ \\/ / /___________/  / \n\
#                                    |_______\\__/________________/ \n\
|                                    |               |  |  / / \n\
|      Hey, you like checking out    |               |  | / / \n\
|      the console?                  |       ________|  |/ /________ \n\
|      Nice                          |      /_______/    \\_________/\\ \n\
|                                    |     /        /  /           \\ ) \n\
|                                    |    /OO^^^^^^/  / /^^^^^^^^^OO\\) \n\
|                                    |            /  / / \n\
|                                    |           /  / / \n\
|        Ascii art from              |          /___\\/ \n\
|     http://www.chris.com/ascii     |           oo \n\
|____________________________________| '

 console.log(bonusString)
