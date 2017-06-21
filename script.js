var portfolioData = {
    "fcc": [
      {
        "title" : "Random Quotes",
        "link": "http://freecodecamp.allistermoon.com/quotes",
        "image": "images/previews/quotes.png"
      },
      {
        "title" : "Local Weather",
        "link": "http://freecodecamp.allistermoon.com/weather",
        "image": "images/previews/weather.png"
      },
      {
        "title" : "Wikipedia Viewer",
        "link": "http://freecodecamp.allistermoon.com/wikipedia",
        "image": "images/previews/wikipedia.png"
      },
      {
        "title" : "Twitch Streamers",
        "link": "http://freecodecamp.allistermoon.com/twitch",
        "image": "images/previews/twitch.png"
      },
      {
        "title" : "Calculator",
        "link": "http://freecodecamp.allistermoon.com/calculator",
        "image": "images/previews/calculator.png"
      },
      {
        "title" : "Pomodoro Clock",
        "link": "http://freecodecamp.allistermoon.com/pomodoro",
        "image": "images/previews/pomodoro.png"
      },
      {
        "title" : "Tic Tac Toe",
        "link": "http://freecodecamp.allistermoon.com/tictactoe",
        "image": "images/previews/tictactoe.png"
      },
      {
        "title" : "Simon Game",
        "link": "http://freecodecamp.allistermoon.com/simon",
        "image": "images/previews/simon.png"
      },
      {
        "title" : "Markdown Previewer",
        "link": "http://freecodecamp.allistermoon.com/markdown",
        "image": "images/previews/markdown.png"
      },
      {
        "title" : "Free Code Camp Leaderboard",
        "link": "http://freecodecamp.allistermoon.com/leaderboard",
        "image": "images/previews/leaderboard.png"
      },
      {
        "title" : "Recipe Box",
        "link": "http://freecodecamp.allistermoon.com/recipes",
        "image": "images/previews/recipes.png"
      },
      {
        "title" : "Conway's Game of Life",
        "link": "http://freecodecamp.allistermoon.com/gameoflife",
        "image": "images/previews/gameoflife.png"
      },
      {
        "title": "Roguelike Dungeon Crawler",
        "link": "http://freecodecamp.allistermoon.com/dungeoncrawler",
        "image": "images/previews/dungeoncrawler.png"
      },
      {
        title: 'D3 - Bar Graph',
        link: 'http://freecodecamp.allistermoon.com/data-viz-bar',
        image: 'images/previews/data-viz-bar.png'
      },
      {
        title: 'D3 - Scatterplot',
        link: 'http://freecodecamp.allistermoon.com/data-viz-scatterplot',
        image: 'images/previews/data-viz-scatterplot.png'
      },
      {
        title: 'D3 - Heat Map',
        link: 'http://freecodecamp.allistermoon.com/data-viz-heatmap',
        image: 'images/previews/data-viz-heatmap.png'
      },
      {
        title: 'D3 - Force Directed Graph',
        link: 'http://freecodecamp.allistermoon.com/data-viz-force',
        image: 'images/previews/data-viz-force.png'
      },
      {
        title: 'D3 - Meteorite Map',
        link: 'http://freecodecamp.allistermoon.com/data-viz-map',
        image: 'images/previews/data-viz-map.png'
      },
      {
        title: 'API - Timestamp Microservice',
        link: 'http://freecodecamp.allistermoon.com/api-timestamp',
        image: 'images/previews/api-timestamp.png'
      },
      {
        title: 'API - Request Header Parser',
        link: 'http://freecodecamp.allistermoon.com/api-header',
        image: 'images/previews/api-header.png'
      }
    ],
    "twitterbots": [
        {
            "title": "My Friend Catherine",
            "link": "https://twitter.com/CatherineXKCD",
            "image": "images/myfriendcatherine.jpg"
        },
        {
            "title": "Bible/Quran Quote Generator",
            "link": "https://twitter.com/SBS_QuranBible",
            "image": "images/bible-quran.jpg"
        }
    ]
};

$(document).ready(function() {
    fillPortfolio(portfolioData);

    $('.showElement').click(function(event) {
        $(this).toggleClass('collapseElement');
        $('#' + $(this).data('id')).toggle(200).removeClass('hide');
        $('a').blur();

        event.preventDefault();

    });

});

function fillPortfolio(data) {
    Object.keys(data).forEach(function(key) {
        for(var i = data[key].length - 1; i >= 0; i--) {
            $('#showcase-' + key).append(
                    $('<div />')
                        .addClass('col-lg-3 col-md-4 col-sm-6 col-xsm-6 col-xs-12')
                        .append(
                            $('<div />')
                                .addClass('project')
                                .append(
                                    $('<a />')
                                        .attr('target', '_blank')
                                        .attr('href', data[key][i].link)
                                        .append(
                                            $('<div />')
                                                .addClass('project-title')
                                                .text(data[key][i].title)
                                        )
                                )
                                .append(
                                    $('<div />')
                                        .addClass('project-image')
                                        .append(
                                            $('<img />')
                                                .addClass('img-responsive')
                                                .attr('src', data[key][i].image)
                                        )
                                )
                        )
            );
        }
    });

};

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
|      Welcome to the console!       |               |  | / / \n\
|                                    |       ________|  |/ /________ \n\
|                                    |      /_______/    \\_________/\\ \n\
|                                    |     /        /  /           \\ ) \n\
|                                    |    /OO^^^^^^/  / /^^^^^^^^^OO\\) \n\
|                                    |            /  / / \n\
|                                    |           /  / / \n\
|        Ascii art taken from        |          /___\\/ \n\
|     http://www.chris.com/ascii     |           oo \n\
|____________________________________| '

console.log(bonusString)