import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  getFilterName = "";
  popupModel: any = {};
  constructor(
    public dialogRef: MatDialogRef<HomePage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.getFilterName = localStorage.getItem('applyFilter');
    if(this.getFilterName == undefined || this.getFilterName == "" || this.getFilterName == null){
      this.popupModel['filterName'] = "";
    }else{
      this.popupModel['filterName'] = this.getFilterName;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }


  applyFilter(titleName) {

    this.dialogRef.close(titleName);
  }

  resetFilter() {
    this.popupModel['filterName'] = "";
  }
}
