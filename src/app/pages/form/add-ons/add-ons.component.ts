import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.scss'
})
export class AddOnsComponent implements OnInit {

  period: string = '';
  
  addOnsPrice : any = [];
  monthlyAddOnsPrice = [1, 2, 2];
  yearlyAddOnsPrice = [10, 20, 20];

  // const plan = localStorage .getItem('');

  isChecked = false;

  ngOnInit() {
    const userPeriod = localStorage.getItem('billingCycle');
    console.log(userPeriod);
    
    if (userPeriod?.trim() === '"Monthly"') {

      this.period = "mo";
      this.addOnsPrice = this.monthlyAddOnsPrice;
      console.log(this.period);

    } else if (userPeriod?.trim() === '"Yearly"') {

      this.period = "yr";
      this.addOnsPrice = this.yearlyAddOnsPrice;
      console.log(this.period);

    } else {
      console.log('Not working');
    }

  }
  

  thirdForm: FormGroup;
  constructor(private router: Router) {
    this.thirdForm = new FormGroup({
      add: new FormControl('')
    });

  }

  onSubmit() {
    if (this.thirdForm.valid) {
      const selectedAddOns = [];

      if ((document.getElementById('onlineServiceCheck') as HTMLInputElement).checked) {
        selectedAddOns.push({
          title: 'Online service',
          price: this.addOnsPrice[0],
          billingCycle: this.period
        });
      }

      if ((document.getElementById('largerStorageCheck') as HTMLInputElement).checked) {
        selectedAddOns.push({
          title: 'Larger storage',
          price: this.addOnsPrice[1],
          billingCycle: this.period
        });
      }

      if ((document.getElementById('customizableProfileCheck') as HTMLInputElement).checked) {
        selectedAddOns.push({
          title: 'Customizable profile',
          price: this.addOnsPrice[2],
          billingCycle: this.period
        });
      }

      if (selectedAddOns.length > 0) {
        localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
        localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
      }

      this.thirdForm.reset();
      this.router.navigate(['/summary']);
    } else {
      console.log('Form is not valid');
    }
  }


}
