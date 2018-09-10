const A_Z = true;
const Z_A = false;

var SortOrder = function () {
    this.sortOrder = A_Z;
};

SortOrder.prototype.init = function () {
    var self = this;
    $('#sort-order-up')
        .click(function () {
            if (self.sortOrder == A_Z) return;
            self.sortOrder ==  A_Z;
            $('#sort-order-down').removeClass('selected')
            $('#sort-order-up').addClass('selected')
        });

    $('#sort-order-down')
        .click(function () {
            if (self.sortOrder == Z_A) return;
            self.sortOrder ==  Z_A;
            $('#sort-order-down').addClass('selected')
            $('#sort-order-up').removeClass('selected')
        });

    var svgIcon = $('#sort-order-selected-mark');

    $('.sortOptions .sortOption')
        .click(function () {
            $('.sortOptions .sortOption').removeClass('selected');

            svgIcon.remove();
            $(this).addClass('selected');
            svgIcon.appendTo($(this));
        })
};