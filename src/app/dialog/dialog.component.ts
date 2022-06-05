import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "Refurbished"]
  productForm !: FormGroup;

  constructor(private FormBuilder: FormBuilder, private apiService: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.FormBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  addProduct() {
    if (this.productForm.valid) {
      this.apiService.postProduct(this.productForm.value)
        .subscribe({
          next: (res) => {
            alert("Product added succesfuly!")
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("Error while adding de product")
          }
        })
    }
    console.log(this.productForm.value);
  }

}
