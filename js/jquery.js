let delayAnimations = 300;
let durationAnimations = 2000;

let isAnimating = false;

let currentSection = "intro";
let intFrameWidth = window.innerWidth;
let intFrameHeight = window.innerHeight;

let sizeImg;
let topImg;
let opacityText;
let topText;

let sizeImgLeft;
let sizeImgRight;
let topImgLeft;
let topImgRight;

const printWheelDelta = (event) => {
  if (isAnimating) {
    return;
  }

  if (event.wheelDelta > 0) {
  } else {
    switch (currentSection) {
      case "intro":
        currentSection = "section-1";
        animateDecoration();

        break;
      case "section-1":
        currentSection = "section-2";
        transitionBirdDetailLeft();

        break;
      case "section-2":
        currentSection = "intro";
        transitionBirdDetailRight();

        break;
    }
  }
};

const animateDecoration = () => {
  isAnimating = true;

  const _top = $(".bottomSeparation").height();

  let round = 0;
  let isExecuted = false;

  $(".bottomSeparation").animate(
    {
      top: _top * -1,
    },
    {
      queue: false,
      duration: durationAnimations,
      step: function (currentTop) {
        round = Math.round(currentTop);

        if (!isExecuted && round <= 10 && round >= -10) {
          isExecuted = true;

          hideIntro();

          removeArrow();

          showBirdDetailsLeft();
        }
      },
      complete: function () {
        isAnimating = false;
        //Reset css
        $(".bottomSeparation").css("top", "100vh");
        $("#intro").css({
          opacity: 0,
        });
      },
    }
  );
};

const hideIntro = () => {
  $("#intro").css("display", "none");
};

const showBirdDetailsLeft = () => {
  $(".birdDetailsLeft").css("display", "flex");

  $(".imageSectionLeft").animate(
    {
      width: "53%",
      top: "35vh",
      left: "-4vw",
    },
    durationAnimations,
    function () {}
  );

  $(".textLeft")
    .delay(delayAnimations)
    .animate(
      {
        opacity: 1,
        top: "25vh",
      },
      durationAnimations + 500,
      function () {}
    );
};

const showBirdDetailsRight = () => {
  $(".imageSectionRight").animate(
    {
      width: "53%",
      top: "35vh",
      left: "35vw",
    },
    {
      duration: durationAnimations,
      complete: function () {},
    }
  );

  $(".textRight")
    .delay(delayAnimations)
    .animate(
      {
        opacity: 1,
        top: "25vh",
      },
      {
        duration: durationAnimations + 500,
        complete: function () {
          isAnimating = false;
        },
      }
    );
};

const transitionBirdDetailLeft = () => {
  const _left = $(window).width();
  const _right = $(window).width();
  isAnimating = true;

  $(".imageSectionLeft").animate(
    {
      left: _left * -1,
    },
    {
      duration: durationAnimations,
      complete: function () {},
    }
  );

  $(".textLeft").animate(
    {
      left: _right,
    },
    {
      duration: durationAnimations,
      complete: function () {
        $(".birdDetailsLeft").css("display", "block");

        showBirdDetailsRight();
      },
    }
  );
};

const transitionBirdDetailRight = () => {
  const _left = $(window).width();
  const _right = $(window).width();
  isAnimating = true;

  $(".imageSectionRight").animate(
    {
      left: _right,
    },
    {
      duration: durationAnimations,
      complete: function () {},
    }
  );

  $(".textRight").animate(
    {
      left: _left * -1,
    },
    {
      duration: durationAnimations,
      complete: function () {
        isAnimating = false;
        reinitIntro();
      },
    }
  );
};

const fadeIn = () => {
  $(".fa-chevron-down").animate(
    {
      opacity: 1,
    },
    {
      duration: durationAnimations,
      complete: function () {
        fadeOut();
      },
    }
  );
};

const fadeOut = () => {
  $(".fa-chevron-down").animate(
    {
      opacity: 0,
    },
    {
      duration: durationAnimations,
      complete: function () {
        fadeIn();
      },
    }
  );
};

// REMOVE ARROW

const removeArrow = () => {
  $(".fa-chevron-down").css("display", "none");
};

//REINIT ANIMATION

const reinitIntro = () => {
  isAnimating = true;
  $("#intro").css({
    display: "flex",
    opacity: 0,
  });

  $("#intro").animate(
    {
      opacity: 1,
    },
    durationAnimations * 2,
    function () {}
  );

  $(".bottomSeparation").animate(
    {
      top: "60vh",
    },
    {
      duration: durationAnimations,
      complete: function () {
        isAnimating = false;
        resetValues();
      },
    }
  );

  $(".fa-chevron-down").css("display", "flex");
};

const resetValues = () => {
  //reseteo valores section-1

  $(".birdDetailsLeft").css("display", "none");
  $(".imageSectionLeft").css({
    width: "40vw",
    marginBottom: 0,
    top: "100vh",
    left: 0,
    bottom: 0,
  });
  $(".textLeft").css({
    top: "30vh",
    left: "55vw",
    opacity: 0,
  });

  //reseteo valores section-2

  $(".imageSectionRight").css({
    width: "50vw",
    marginBottom: 0,
    top: "100vh",
    left: "40vw",
    bottom: 0,
  });
  $(".textRight").css({
    top: "30vh",
    left: "9vw",
    opacity: 0,
  });
};

$(document).on("ready", function () {
  if (window.matchMedia("(width: 414px)").matches) {
    $("#intro").css({
      display: "flex",
      opacity: 1,
    });
    $(".textLeft").css({
      display: "flex",
      opacity: 1,
    });

    $(".imageSectionRight").css({
      marginTop: "40px",
    });
    $("footer").css({
      position: "relative",
      top: "60px",
    });
  }
  if (window.matchMedia("(width: 768px)").matches) {
    $("#intro").css({
      display: "flex",
      opacity: 1,
    });
    $(".textLeft").css({
      display: "flex",
      opacity: 1,
    });

    $(".imageSectionRight").css({
      marginTop: "40px",
    });
  }

  if (window.matchMedia("(width: 1024px)", "(height: 768px)").matches) {
    $("#intro").css({
      display: "flex",
      opacity: 1,
    });
    $(".textLeft").css({
      display: "flex",
      opacity: 1,
    });

    $(".imageSectionRight").css({
      marginTop: "40px",
    });
  }
  if (window.matchMedia("(width: 1024px)", "(height: 1366px)").matches) {
    $("#intro").css({
      display: "flex",
      opacity: 1,
    });
    $(".textLeft").css({
      display: "flex",
      opacity: 1,
    });

    $(".imageSectionRight").css({
      marginTop: "40px",
    });
  }
  if (window.matchMedia("(min-width: 1025px)").matches) {
    fadeOut();

    window.addEventListener("scroll", printWheelDelta);
    window.addEventListener("wheel", printWheelDelta);

    $("#intro").css("display", "flex");

    $("#intro").animate(
      {
        opacity: "1",
      },
      durationAnimations * 2,
      function () {}
    );
  }
});
