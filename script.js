var portfolioData = {
    "fcc": [
        {
            "title" : "Personal Portfolio",
            "link": "http://codepen.io/AlyxMoon/full/KdqRRr",
            "image": "http://codepen.io/AlyxMoon/pen/KdqRRr/image/small.png"
        },
        {
            "title" : "Pomodoro Clock",
            "link": "http://codepen.io/AlyxMoon/full/OyqMwe",
            "image": "http://codepen.io/AlyxMoon/pen/OyqMwe/image/small.png"
        },
        {
            "title" : "Random Quotes",
            "link": "http://codepen.io/AlyxMoon/full/gaEPjy",
            "image": "http://codepen.io/AlyxMoon/pen/gaEPjy/image/small.png"
        },
        {
            "title" : "Calculator",
            "link": "http://codepen.io/AlyxMoon/full/GoKNYG",
            "image": "http://codepen.io/AlyxMoon/pen/GoKNYG/image/small.png"
        },
        {
            "title" : "Local Weather",
            "link": "http://codepen.io/AlyxMoon/full/adBmag",
            "image": "http://codepen.io/AlyxMoon/pen/adBmag/image/small.png"
        },
        {
            "title" : "Stylized Camper News",
            "link": "http://codepen.io/AlyxMoon/full/PZKxWb",
            "image": "http://codepen.io/AlyxMoon/pen/PZKxWb/image/small.png"
        },
        {
            "title" : "Wikipedia Viewer",
            "link": "http://codepen.io/AlyxMoon/full/JGOPKy",
            "image": "http://codepen.io/AlyxMoon/pen/JGOPKy/image/small.png"
        },
        {
            "title" : "Twitch Streamers",
            "link": "http://codepen.io/AlyxMoon/full/ZQRrNw",
            "image": "http://codepen.io/AlyxMoon/pen/ZQRrNw/image/small.png"
        },
        {
            "title" : "Tic Tac Toe",
            "link": "http://codepen.io/AlyxMoon/full/zqjqVE",
            "image": "http://codepen.io/AlyxMoon/pen/zqjqVE/image/small.png"
        },
        {
            "title" : "Simon Game",
            "link": "http://codepen.io/AlyxMoon/full/YqORyx",
            "image": "http://codepen.io/AlyxMoon/pen/YqORyx/image/small.png"
        },
        {
            "title" : "Recipe Box",
            "link": "http://codepen.io/AlyxMoon/full/MbzeRy",
            "image": "http://codepen.io/AlyxMoon/pen/MbzeRy/image/small.png"
        },
        {
            "title" : "Markdown Previewer",
            "link": "http://codepen.io/AlyxMoon/full/VmwYjb",
            "image": "http://codepen.io/AlyxMoon/pen/VmwYjb/image/small.png"
        },
        {
            "title" : "Free Code Camp Leaderboard",
            "link": "http://codepen.io/AlyxMoon/full/MbqBre",
            "image": "http://codepen.io/AlyxMoon/pen/MbqBre/image/small.png"
        },
        {
            "title" : "Conway's Game of Life",
            "link": "http://codepen.io/AlyxMoon/full/kkEOXv",
            "image": "http://codepen.io/AlyxMoon/pen/kkEOXv/image/small.png"
        }

    ]
};

$(document).ready(function() {
    fillPortfolio(portfolioData);

    $(".btn").mouseup(function(){
        $(this).blur();
    })

    $('.showElement').click(function(event) {
        $(this).toggleClass('collapseElement');
        $('#' + $(this).data('id')).toggle(100).removeClass('hide');
        $('a').blur();

        event.preventDefault();

    });

});

function fillPortfolio(data) {
    var fccPortfolio = $('#showcase-fcc');

    for(var i = data.fcc.length - 1; i >= 0; i--) {
        fccPortfolio.append(
                $('<div />')
                    .addClass('col-lg-3 col-md-4 col-sm-6 col-xsm-6 col-xs-12')
                    .append(
                        $('<div />')
                            .addClass('project')
                            .append(
                                $('<a />')
                                    .attr('target', '_blank')
                                    .attr('href', data.fcc[i].link)
                                    .append(
                                        $('<div />')
                                            .addClass('project-title')
                                            .text(data.fcc[i].title)
                                    )
                            )
                            .append(
                                $('<div />')
                                    .addClass('project-image')
                                    .append(
                                        $('<img />')
                                            .addClass('img-responsive')
                                            .attr('src', data.fcc[i].image)
                                    )
                            )
                    )
        );
    }
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