import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Productcategories } from "./productcategories.model";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { ApiService } from "src/app/igap/service/api.service";
@Injectable()
export class ProductcategoriesService extends UnsubscribeOnDestroyAdapter {
  isTblLoading = true;
  dataChange: BehaviorSubject<Productcategories[]> = new BehaviorSubject<Productcategories[]>(
    []
  );
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private api:ApiService) {
    super();
  }

  get data(): Productcategories[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  list(): void {
    let formdata = {businessid:localStorage.getItem("userid")}
    this.api.post("business/productcategory/list", formdata).subscribe((result:any)=>{
      if(result.data.status == "success"){
        this.isTblLoading = false;
        this.dataChange.next(result.data.data);
      }
      else{
        this.isTblLoading = false;
      }
    });
  }

  save(productcategories: Productcategories) {
    return this.api.post("business/productcategory/save", productcategories);
  }
  
  delete(id: number): void {
    this.api.post("business/productcategory/delete", {id:id}).subscribe((result:any) => {
      if(result.data.status == "success")
        return true;
      else
        return false;
    });
  }
}
