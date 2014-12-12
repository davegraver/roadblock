jQuery(document).ready(function() {
    // Check if they've been shown the roadblock already
    if (! $.cookie('roadblock_ad')) {
        $('body').append('<div class="overlay"></div>');
        $('.roadblock').css('display', 'block');
        $('.content').append('<a href="#" title="Close" class="close"><i class="fa fa-times-circle"></i><span class="sr-only">Close</span></a>');

        // Ad Click
        $('.roadblock-link').click(function() {
            $('.overlay').remove();
            $('.roadblock').css('display', 'none');

            // Track event
            // pageTracker._trackEvent('Ad Promo Name', 'Clicked Ad');

            $.cookie('roadblock_ad', 'TRUE', { path: '/', expires: 1000 });
        });

        // Close Click
        $('.close').click(function(event) {
            $('.overlay').remove();
            $('.roadblock').css('display', 'none');

            // Track event
            // pageTracker._trackEvent('Ad Promo Name', 'Closed Ad');

            $.cookie('roadblock_ad', 'TRUE', { path: '/', expires: 1000 });
            return false;
        });
    }
});