export class BuyProductModel{
     customerId:number;
     detailsModelList:any[]=[];
     paymentId:number;
    constructor(private cusID:number,private detailslList:any[],private payment:number){
        this.customerId=this.cusID;
        this.detailsModelList=this.detailslList;
        this.paymentId=this.payment;
    }
}