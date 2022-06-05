import { ApiService } from './services/api.service';
import { DialogComponent } from './dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  getAllProducts() {
    this.apiService.getProduct()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          alert("Error while fetching the Records!")
        }
      })
  }
}