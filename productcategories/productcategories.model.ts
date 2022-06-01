export class Productcategories {
  id: number;
  businessid: number;
  srno: number;
  picpath: any;
  name:string;
  imagecode: any;
  
    constructor(productcategories) {
        this.id = productcategories.id || 0;
        this.businessid = productcategories.businessid || 0;
        this.srno = productcategories.srno || 0;
        this.picpath = productcategories.picpath || "";
        this.name = productcategories.name || "";
       
    }
  }
  