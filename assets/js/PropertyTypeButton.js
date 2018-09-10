var PropertyTypeButton = function () {

}
PropertyTypeButton.prototype.init = function () {
    $('button.propertyTypeButton')
        .click(function () {
            $(this).toggleClass('pressed');
        })
}