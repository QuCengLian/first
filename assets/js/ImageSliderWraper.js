var ImageSliderWraper = function () {

}

ImageSliderWraper.prototype.init = function () {
    var container = $("#homecards");

    var item = $(".HomeCardContainer");

    var arrURL = [
        "https://ssl.cdn-redfin.com/photo/123/islphoto/073/genIsl.508073_0.jpg",
        "https://ssl.cdn-redfin.com/photo/123/islphoto/360/genIsl.503360_5.jpg",
        "https://ssl.cdn-redfin.com/photo/123/islphoto/632/genIsl.505632_8.jpg",
        "https://ssl.cdn-redfin.com/photo/123/islphoto/897/genIsl.498897_4.jpg",
        "https://ssl.cdn-redfin.com/photo/123/islphoto/133/genIsl.507133_0.jpg",
        "https://ssl.cdn-redfin.com/photo/45/islphoto/816/genIsl.PW18190816_0.jpg"
    ]

    for (var i = 0; i < arrURL.length; i++) {
        var cloned = item.clone();
        cloned.find('.HomeCardImage').css({
            'background-image': 'url(' + arrURL[i] + ')'
        })
        cloned.appendTo(container);
    }

    $('.HomeCardContainer').hover(function () {
        $(this).addClass('selectedHomeCard');
    }, function () {
        $(this).removeClass('selectedHomeCard');
    })

    $(".right-nav")
        .click(function () {
            var self = $(this);
            var image_item = self.parent().parent();
            var origin_image = image_item.find('.HomeCardImage').css('background-image')
            var index = 0;
            for (var i = 0; i < arrURL.length; i++) {
                if (origin_image.includes(arrURL[i])) {
                    index = i;
                    break;
                }
            }
            index = (index + 1) % arrURL.length;
            if (index < 0) index += arrURL.length;
            image_item.find('.HomeCardImage').css({
                'background-image': 'url(' + arrURL[index] + ')'
            })
        })

    $(".left-nav")
        .click(function () {
            var self = $(this);
            var image_item = self.parent().parent();
            var origin_image = image_item.find('.HomeCardImage').css('background-image')
            var index = 0;
            for (var i = 0; i < arrURL.length; i++) {
                if (origin_image.includes(arrURL[i])) {
                    index = i;
                    break;
                }
            }
            index = (index + 1) % arrURL.length;
            if (index < 0) index += arrURL.length;
            image_item.find('.HomeCardImage').css({
                'background-image': 'url(' + arrURL[index] + ')'
            })
        });
}