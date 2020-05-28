import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class MenuComponent {
 //title = 'Aup-Cafeteria-Angular';
 order = [];

  constructor(public dialog: MatDialog) {}

    openDialog() {
      //openDialog(product)
      //this.order.push(product);
      let dialogRef = this.dialog.open(MyDialogComponent,{

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog was closed');
        console.log(result);
      });
    }
}

