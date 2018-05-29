(function(){


    $('.root').fullpage({
        easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
        loopHorizontal: false,
        continuousVertical: false,
        verticalCentered: false,
        resize : false,
        sectionSelector: '.full-section',
        scrollBar: true,
        navigation: true,
        afterResize: function(){
            $(window).trigger('resize.px.parallax')
        }
    });


    var $navLinks = $('.main-nav a');
    var sections = $('[data-anchor]').map(function(){
        return $(this).attr('data-anchor');
    }).slice(1, -1).toArray()

    $(window).on('hashchange', function(){
        var hash = window.location.hash;
        $navLinks.removeClass('-active');

        if (sections.indexOf(hash.slice(1)) !== -1) {
            $navLinks.eq(0).addClass('-active');
        } else if (hash == '#about') {
            $navLinks.eq(1).addClass('-active');
        }
    }).trigger('hashchange')

    // Analytics
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-30542995-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
}())