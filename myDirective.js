angular.module("myApp")
  .directive('myDirective', function() {
    return {
      restrict: "AE",
      templateUrl: './myDirective.html',
      link: function(scope, element, attributes) {
        element.on('click', function() {
          $('svg').removeClass('hidden');

          function fish() {
            var tm = TweenMax;
            var tl = new TimelineMax();
            var nose = $('#noseBone'),
              eyeBone = $('#eyeBone'),
              back = $('#backBone'),
              front = $('#frontBone'),
              tail = $('#tailBone'),
              mid = $('#midBone'),
              equalsT = $('#equalsTop'),
              equalsB = $('#equalsBottom'),
              flesh = $('.flesh'),
              skinTail = $('#skinTail'),
              wing = $('#wing'),
              topFin = $('#topFin'),
              pupil = $('#pupil');



            tl.from(nose, 1, {
                opacity: 0,
                x: 150,
                ease: Bounce.easeOut
              }, '+=1')
              .from(front, .5, {
                opacity: 0,
                y: 150,
                ease: Bounce.easeOut
              }, '-=0.2')
              .from(back, .5, {
                opacity: 0,
                y: 950,
                x: -300,
                ease: Bounce.easeOut
              }, '-=0.2')
              .from(tail, .8, {
                opacity: 0,
                x: -150,
                ease: Bounce.easeOut
              }, '+=.2')
              .from(mid, .5, {
                opacity: 0,
                y: -250,
                x: -300,
                ease: Bounce.easeOut
              }, '-=0.2')
              .from(equalsT, 1, {
                opacity: 0,
                y: -950,
                ease: Bounce.easeOut
              }, 2.5)
              .from(equalsB, 1, {
                opacity: 0,
                y: 950,
                ease: Bounce.easeOut
              }, 2.5)
              .from(eyeBone, 2, {
                autoAlpha: 0,
                ease: Power4.easeOut,
              }, '-=1')
              .from(flesh, 20, {
                autoAlpha: 0,
                ease: Power4.easeOut,
              }, '-=.5')
          };
          fish();


        })

      }
    }
  })
