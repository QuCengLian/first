var Tab_PhotsAndTable = function () {
    this.isFirstTab = true;
};

Tab_PhotsAndTable.prototype.init = function () {
    var self = this;
    $('#Table').hide();
    $('#tab_ptotos')
        .click(function () {
            if (self.isFirstTab) return;
            $('#tab_table').parent().removeClass('selected');
            $('#tab_ptotos').parent().addClass('selected');

            self.isFirstTab = true;
            $('#Photos').show();
            $('#Table').hide();
        });
    $('#tab_table')
        .click(function () {
            if (!self.isFirstTab) return;
            $('#tab_table').parent().addClass('selected');
            $('#tab_ptotos').parent().removeClass('selected');

            self.isFirstTab = false;
            $('#Photos').hide();
            $('#Table').show();

        });

};