import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.page.html',
  styleUrls: ['./filtercategory.page.scss'],
})
export class FiltercategoryPage implements OnInit {

  parentSelectionIndex : any = 7;
  childSelectionIndex : any = 0;
  // parentArray : any;
  parentArray: any[];
  automaticClose = false;
  cate = 4;
  subcat = 68;

  constructor(private http: HttpClient,
    public dialogRef: MatDialogRef<HomePage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiCall : ApiService) {
    // this.http.get('assets/information.json').subscribe(res => {
    //   this.information = res['items'];
    //   this.information[0].open = true;
    // });
  }
  ngOnInit(): void {
   let category =  localStorage.getItem("category");
   console.log("show category on filter screen:"+category);
    this.getCategory();
   this.toggleSection(this.parentSelectionIndex);

    throw new Error("Method not implemented.");
  }

  getCategory() {
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.parentArray = MyResponse['result']['list'];
     console.log("show category data:"+JSON.stringify(this.parentArray));
    },
      error => {
      
      })
  }

  toggleSection(index) {
    this.parentSelectionIndex = index;
    console.log("check toggle section:"+index);
    this.parentArray[index].open = !this.parentArray[index].open;
    console.log("check toggle section open show:"+this.parentArray[index].open);
    if (this.automaticClose && this.parentArray[index].open) {
      this.parentArray
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
    // this.dialogRef.close(categoryId);
  }

  toggleItem(index, childIndex,categoryId, subCategoryId) {
    console.log("check categoryId:"+categoryId);
    console.log("check subCategoryId:"+subCategoryId);
    console.log("check toggleitem:"+childIndex);
    this.parentArray[index].childrens[childIndex].open = !this.parentArray[index].childrens[childIndex].open;
    let checkId = {
      "categoryId" : categoryId,
      "subCategoryId" : subCategoryId,
      "parentSelectionIndex" : this.parentSelectionIndex
    }
    this.dialogRef.close(checkId);
  }


  applyFilter(titleName) {

    this.dialogRef.close(titleName);
  }

}
