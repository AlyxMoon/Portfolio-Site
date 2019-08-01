var skillCategories = ['web', 'frontend', 'backend', 'other']
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
    activeSkill: [-1, -1],
    showSkills: false,
    timer: null
  },
  created() {
    this.timer = window.setInterval(() => {
      this.activeSkill.splice(0, 1, Math.floor(Math.random() * skillCategories.length))
      this.activeSkill.splice(1, 1, Math.floor(Math.random() * skills[skillCategories[this.activeSkill[0]]].length))

      console.log(this.activeSkill)
    }, 3000)
  },

  beforeDestroy() {
    clearInterval(this.timer)
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
