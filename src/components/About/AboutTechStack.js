const AboutTechStack = () => {
  var myScript = document.createElement('script');
  myScript.setAttribute('src', path + 'js/vendor/tagcanvas.js');
  myScript.setAttribute('id', 'tagcanvas');
  document.body.appendChild(myScript);

  myScript.addEventListener(
    'load',
    function (e) {
      if (
        !$('#myCanvas').tagcanvas({
          textColour: '#08FDD8',
          outlineThickness: 0.5,
          outlineColour: '#FE0853',
          maxSpeed: 0.06,
          freezeActive: true,
          shuffleTags: true,
          shape: 'sphere',
          zoom: 0.8,
          noSelect: true,
          textFont: null,
          pinchZoom: true,
          wheelZoom: false,
          freezeDecel: true,
          fadeIn: 3000,
          initial: [0.3, -0.1],
          depth: 1.1,
        })
      ) {
        // TagCanvas failed to load
      }
    },
    false
  );

  var sectionAbout = jQuery('#section-about');

  var a = 0;

  sectionAbout.find('h2 .blast').each(function () {
    var el = jQuery(this);

    setTimeout(function () {
      el.addClass('animated bounceIn');
    }, a);

    a = a + 80;
  });

  setTimeout(function () {
    sectionAbout.find('.blast').removeClass('animated bounceIn');
    sectionAbout.find('.blast').css('opacity', 1);

    sectionAbout.find('.blast').mouseenter(function () {
      var el = jQuery(this);

      jQuery(this).addClass('animated rubberBand');
      jQuery(this).one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
          el.removeClass('animated rubberBand');
        }
      );
    });
  }, 2000);
};
