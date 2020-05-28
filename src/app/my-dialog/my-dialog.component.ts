import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
//import { get } from 'http';
//import { from } from 'rxjs';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  name: string;
  id: string;
  address: string;
  info;



  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private route: ActivatedRoute,
    private menuComponent : MenuComponent)
     { }


  ngOnInit() {}

  order():void {
    // this.info.get
    this.dialogRef.close();
    alert("Thank you for ordering. It will be delivered to you shortly.");
    this.data.forEach(item => {
      this.data.find(item.key).subscribe(response => {
        item.value = response;    // update value field here.
      });console.log(item.value);
    });



  }

  cancel() {
    this.dialogRef.close();
  }

}
