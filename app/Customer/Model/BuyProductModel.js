"use strict";
var BuyProductModel = (function () {
    function BuyProductModel(cusID, detailslList, payment) {
        this.cusID = cusID;
        this.detailslList = detailslList;
        this.payment = payment;
        this.detailsModelList = [];
        this.customerId = this.cusID;
        this.detailsModelList = this.detailslList;
        this.paymentId = this.payment;
    }
    return BuyProductModel;
}());
exports.BuyProductModel = BuyProductModel;
//# sourceMappingURL=BuyProductModel.js.map