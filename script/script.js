// timer
var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 57); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {
    // Timer done
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

$(document).ready(function() {
  $(".spoiler-title").click(function() {
    $(this)
      .parent()
      .children(".spoiler-body")
      .slideToggle();
    return false;
  });
});

//dots
var dot = $(".dot");

dot.on("click", function() {
  dot.removeClass("active");
  $(this).addClass("active");
});

// var card = $(".card");

// $(card).on("mouseenter", function (e) {
//     var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
//     var ay = ($(window).innerHeight() / 2 - e.pageY) / 10;
//     card.attr("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg)");
// });

// (function handleHover() {
//     let win = $(window);
//     let el = $();
//     let children = $();
//     let w = 0;
//     let h = 0;
//     let ratio = 0.10;

//     let absoluteOffsetX = 0, absoluteOffsetY = 0, relativeOffsetX = 0, relativeOffsetY = 0;

//     $('.tilt__item').on('mouseenter', function (e) {
//         el = $(this);
//         children = el.children();
//         w = el.outerWidth();
//         h = el.outerHeight();

//         console.log('mouseenter');
//     }).on('mousemove', function (e) {
//         absoluteOffsetX = e.offsetX - w / 2;
//         absoluteOffsetY = e.offsetY - h / 2;
//         relativeOffsetX = absoluteOffsetX * 100 / w * 2 * ratio;
//         relativeOffsetY = absoluteOffsetY * 100 / h * 2 * ratio;

//         children.css({
//             'transform': `rotateY(${relativeOffsetX}deg) rotateX(${relativeOffsetY * -1}deg)`,
//             'transition': `.05s`,
//         });

//         $('h3').css('transform', 'translateX(' + relativeOffsetX + 'px');

//     }).on('mouseleave', function () {
//         children.css({
//             'transform': `none`,
//             'transition': `1s`,
//         });
//     });

// })();

//select
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    $(this).attr("placeholder") +
    "</span>";
  template += '<div class="custom-options">';
  $(this)
    .find("option")
    .each(function() {
      template +=
        '<span class="custom-option ' +
        $(this).attr("class") +
        '" data-value="' +
        $(this).attr("value") +
        '">' +
        $(this).html() +
        "</span>";
    });
  template += "</div></div>";

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(
  function() {
    $(this)
      .parents(".custom-options")
      .addClass("option-hover");
  },
  function() {
    $(this)
      .parents(".custom-options")
      .removeClass("option-hover");
  }
);
$(".custom-select-trigger").on("click", function() {
  $("html").one("click", function() {
    $(".custom-select").removeClass("opened");
  });
  $(this)
    .parents(".custom-select")
    .toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this)
    .parents(".custom-select-wrapper")
    .find("select")
    .val($(this).data("value"));
  $(this)
    .parents(".custom-options")
    .find(".custom-option")
    .removeClass("selection");
  $(this).addClass("selection");
  $(this)
    .parents(".custom-select")
    .removeClass("opened");
  $(this)
    .parents(".custom-select")
    .find(".custom-select-trigger")
    .text($(this).text());
});

//copy to clipboard in cabinet ICO
var button = document.querySelector(".copy");
button.addEventListener("click", function(event) {
  var text = document.querySelector(".text");
  text.select();
  document.execCommand("copy");
});

var button_referal = document.querySelector(".copy-referal");
button_referal.addEventListener("click", function(event) {
  var text = document.querySelector(".text-referal");
  text.select();
  document.execCommand("copy");
});

//animated dots
particlesJS("particles-js", {
  particles: {
    number: { value: 17, density: { enable: true, value_area: 1200 } },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      image: {
        src: "img/qualiti dot.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: false, speed: 40, size_min: 10, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { distance: 500, line_linked: { opacity: 0.4 } },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});
particlesJS("particles-js2", {
  particles: {
    number: { value: 25, density: { enable: true, value_area: 800 } },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      image: {
        src: "img/qualiti dot.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: false, speed: 40, size_min: 10, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { distance: 500, line_linked: { opacity: 0.4 } },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});

particlesJS("particles-js3", {
  particles: {
    number: { value: 25, density: { enable: true, value_area: 800 } },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      image: {
        src: "img/qualiti dot.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: false, speed: 40, size_min: 10, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { distance: 500, line_linked: { opacity: 0.4 } },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});

particlesJS("particles-js4", {
  particles: {
    number: { value: 22, density: { enable: true, value_area: 800 } },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      image: {
        src: "img/qualiti dot.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: false, speed: 40, size_min: 10, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { distance: 500, line_linked: { opacity: 0.4 } },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});

particlesJS("particles-js5", {
  particles: {
    number: { value: 20, density: { enable: true, value_area: 800 } },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      image: {
        src: "img/qualiti dot.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: false, speed: 40, size_min: 10, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { distance: 500, line_linked: { opacity: 0.4 } },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});

particlesJS("particles-js6", {
  particles: {
    number: { value: 20, density: { enable: true, value_area: 800 } },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      image: {
        src: "img/qualiti dot.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: false, speed: 40, size_min: 10, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { distance: 500, line_linked: { opacity: 0.4 } },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});

// card animation
function calculateDistanceX(elem, mouseX) {
  return Math.pow(mouseX - (elem.offset().left + elem.width() / 2), 1);
}

function calculateDistanceY(elem, mouseY) {
  return Math.pow(mouseY - (elem.offset().top + elem.height() / 2), 1);
}

function bouncingValue(elem, valX, valY) {
  var matrix = elem.css("transform");
  var results = matrix
    .split("(")[1]
    .split(")")[0]
    .split(",");
  var array = $({
    a: results[0],
    b: results[1],
    c: results[2],
    d: results[3],
    e: results[4],
    f: results[5],
    g: results[6],
    h: results[7],
    i: results[8],
    j: results[9],
    k: results[10],
    l: results[11],
    m: results[12],
    n: results[13],
    o: results[15],
    p: results[15],
    x: valX,
    y: valY
  });
  array.animate(
    {
      a: 1,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 1,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 1,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 1,
      x: 0,
      y: 0
    },
    {
      duration: 2000,
      easing: "easeOutElastic",
      step: function() {
        elem.css({
          transform:
            "matrix3d(" +
            this.a +
            "," +
            this.b +
            "," +
            this.c +
            "," +
            this.d +
            "," +
            this.e +
            "," +
            this.f +
            "," +
            this.g +
            "," +
            this.h +
            "," +
            this.i +
            "," +
            this.j +
            "," +
            this.k +
            "," +
            this.l +
            "," +
            this.m +
            "," +
            this.n +
            "," +
            this.o +
            "," +
            this.p +
            ")",
          "box-shadow":
            "" + this.x * 3 * -1 + "px " + this.y * 3 + "px 10px rgba(0,0,0,.3)"
        });
        elem
          .find("img")
          .css(
            "transform",
            "matrix3d(" +
              this.a +
              "," +
              this.b +
              "," +
              this.c +
              "," +
              this.d +
              "," +
              this.e +
              "," +
              this.f +
              "," +
              this.g +
              "," +
              this.h +
              "," +
              this.i +
              "," +
              this.j +
              "," +
              this.k +
              "," +
              this.l +
              "," +
              this.m +
              "," +
              this.n +
              "," +
              this.o +
              "," +
              this.p +
              ")"
          );
      }
    }
  );

  elem.on("mousemove", function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distanceY = (calculateDistanceY(elem, mY) / 100) * -2;
    distanceX = (calculateDistanceX(elem, mX) / 100) * 2;
    elem.css({
      transform: "rotateY(" + distanceX + "deg) rotateX(" + distanceY + "deg)",
      "box-shadow":
        "" +
        distanceX * 3 * -1 +
        "px " +
        distanceY * 3 +
        "px 10px 0px rgba(0,0,0,0.3)",
      transition: "all 0s"
    });
    array.finish();
  });
}

var mX, mY, distance;

var $teaser = $(".weather__teaser");

var teaser = function(box) {
  var onMouseLeave,
    onMouseEnter,
    onMouseMove,
    mX,
    mY,
    distance,
    $teaser = $(box);

  onMouseEnter = function(e) {
    e.stopImmediatePropagation();
    $element = $(this);
  };

  onMouseMove = function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distanceY = (calculateDistanceY($element, mY) / 100) * -2;
    distanceX = (calculateDistanceX($element, mX) / 100) * 2;
    $element.css({
      transform: "rotateY(" + distanceX + "deg) rotateX(" + distanceY + "deg)",
      "box-shadow":
        "" +
        distanceX * 3 * -1 +
        "px " +
        distanceY * 3 +
        "px 10px 0px rgba(0,0,0,0.3)",
      transition: "all 0s"
    });
    $element
      .find("img")
      .css(
        "transform",
        "scale(1.2) translate3d(" +
          distanceY * 3 +
          "px, " +
          distanceX * 2 +
          "px, 0)"
      );
  };
  onMouseLeave = function(e) {
    e.stopImmediatePropagation();
    bouncingValue($element, distanceX, distanceY);
  };
  return {
    bindHandlers: function(e) {
      $teaser.on("mouseenter", onMouseEnter);
      $teaser.on("mousemove", onMouseMove);
      $teaser.on("mouseleave", onMouseLeave);
      return this;
    }
  };
};
t = teaser(".weather__teaser").bindHandlers();
