import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { NumberData } from './number.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numberData: NumberData | undefined;
  month: string = '';
  date: string = '';
  myForm!: FormGroup;

  constructor(private servicesservice: ServicesService,private fb: FormBuilder) {}

  ngOnInit(): void {
    // You may choose whether to make the initial API call on component initialization
    // this.getNumberData(this.month, this.date);
    this.myForm = this.fb.group({
      // Define your form controls here based on your requirements
      // For example:
      month: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    this.getNumberData(this.month, this.date);
    this.month = this.month;
    this.date = this.date;
  }

  private getNumberData(month: string, date: string) {
    this.servicesservice.getNumberData(month, date).subscribe({
      next: (response) => {
        this.numberData = response;
        console.log(response);
      }
    });
  }
}
