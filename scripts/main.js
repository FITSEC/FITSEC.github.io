// JavaScript Document
file = location.pathname.split("/").slice(-1)[0];
x = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
var y;
for (var i = 0; i < x.length; i++) {
    y = x[i].innerHTML.split("\"")[1];
    if (y === file) {
        x[i].className = "active";
    }
}

$(window).on('load resize', function() {
    if(this.matchMedia('(min-width: 992px)').matches) {
        $('.dropdown').hover(
            function() {
                $(this).addClass('show')
                $(this).find($('.dropdown-toggle')).attr('aria-expanded', 'true')
                $menu = $(this).find($('.dropdown-menu'))
                $menu.stop()
                $menu.addClass('show')
                $menu.hide()
                $menu.slideDown(250)
            }, function() {
                $(this).removeClass('show')
                $(this).find($('.dropdown-toggle')).attr('aria-expanded', 'false')
                $(this).find($('.dropdown-menu')).stop()
                $(this).find($('.dropdown-menu')).slideUp(250, function() {
                    $(this).removeClass('show')
                })
            }
        )
    }else{
        //$('.dropdown').unbind('mouseenter mouseleave')
    }
})

$(document).on('scroll', function() {
    $image = $('.nav-image')
    max_image_height = 50
    min_image_height = 0
    if($(document).scrollTop() > 50) {
        if($image.is(':animated')) {
            $image.stop()
        }
        if($image.height() > min_image_height) {
            $image.animate({
                height: min_image_height
            }, 100)
        }
    }else{
        if($image.is(':animated')) {
            $image.stop()
        }
        if($image.height() < max_image_height) {
            $image.animate({
                height: max_image_height
            }, 100)
        }
    }
})
