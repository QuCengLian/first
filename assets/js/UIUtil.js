var UIUtil = function () {

};

UIUtil.makeToggle = function (button, showContent, isHidden = true, callback, duration = 100) {

    if (isHidden)
        showContent.hide();

    button
        .click(function () {
            var show = showContent.data('show');
            if (!show) {
                showContent.show(duration);
                showContent.data('show', true);

                $(this).find('.SvgIcon').removeClass('expandArrow')
                $(this).find('.SvgIcon').addClass('collapseArrow');
                if (callback) {
                    callback(true);
                }
            } else {
                showContent.hide(duration);
                showContent.data('show', false);
                $(this).find('.SvgIcon').addClass('expandArrow')
                $(this).find('.SvgIcon').removeClass('collapseArrow')
                if (callback) {
                    callback(false);
                }
            }
        })
};

UIUtil.makeMinMaxSelect = function (minSelect, maxSelect) {
    
    minSelect
        .on('change', function () {

            var selectedValue = parseInt(this.value)
            var maxOptions = maxSelect.find('option');
            maxOptions.each(function (index, element) {
                var item = $(this)
                var value = item.val();
                if (isNaN(selectedValue) || isNaN(value)) {
                    item.show();
                    return;
                }

                if (parseInt(selectedValue) < parseInt(value)) {
                    item.show();
                } else {
                    item.hide();
                }
            });
        });

    maxSelect
        .on('change', function () {
            var selectedValue = parseInt(this.value)
            var minOptions = minSelect.find('option');
            minOptions.each(function (index, element) {
                var item = $(this)
                var value = item.val();
                if (isNaN(selectedValue) || isNaN(value)) {
                    item.show();
                    return;
                }

                if (parseInt(selectedValue) > parseInt(value)) {
                    item.show();
                } else {
                    item.hide();
                }
            });
        });
};