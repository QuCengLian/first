$(document).ready(function () {
    UIUtil.makeToggle($('#sort-button'), $('#filter-order-content'), true, null, 0);
    UIUtil.makeToggle($('#forSaleFiltersButton'), $('#forSaleFiltersContainer'));
    UIUtil.makeToggle($('#paring-showMore'), $('#homeAmenitiesMoreContent'));

    UIUtil.makeToggle($('#wideSidepaneFilterButtonContainer'), $('#WideSidepaneOverlay'), true, null, 0);
    UIUtil.makeToggle($('#wideSidepaneFilterButtonContainer2'), $('#WideSidepaneOverlay'), true, null, 0);

    new ImageSliderWraper().init();
    new PriceFilter().init();
    new PropertyTypeButton().init();
    new SortOrder().init();
    new Tab_PhotsAndTable().init();
    new BedsFilter().init();
    new SquareFeet().init();
    new LotSize().init();
    new YearBuilt().init();
})