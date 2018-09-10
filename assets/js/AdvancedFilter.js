var PriceFilter = function () {};

PriceFilter.prototype.init = function () {
    UIUtil.makeMinMaxSelect($('#quickMinPrice'), $('#quickMaxPrice'));
};

var BedsFilter = function () {};

BedsFilter.prototype.init = function () {
    UIUtil.makeMinMaxSelect($('#minBeds'), $('#maxBeds'));
};

var SquareFeet = function () {};

SquareFeet.prototype.init = function () {
    UIUtil.makeMinMaxSelect($('#sqftMin'), $('#sqftMax'));
};

var LotSize = function () {};

LotSize.prototype.init = function () {
    UIUtil.makeMinMaxSelect($('#lotSqftMin'), $('#lotSqftMax'));
};

var YearBuilt = function () {};

YearBuilt.prototype.init = function () {
    UIUtil.makeMinMaxSelect($('#yearBuiltMin'), $('#yearBuiltMax'));
};