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
export class AddOnsComponent implements OnInit{

  username: string | null = null;

  period : string = '';

  ngOnInit() {

      const userPeriod = localStorage.getItem('billingCycle');

      console.log(userPeriod);


      if (userPeriod === "Monthly") {

        this.period = "Monthly";
        console.log(this.period);
        
      } else {
        console.log('Not working');
      }
    
  }

  

  labels = [1, 2, 2];
  thirdForm: FormGroup;
  constructor(private router: Router) {
    this.thirdForm = new FormGroup({
      add: new FormControl('')
    });

  }





  onSubmit() {
    if (this.thirdForm.valid) {



      // const selectedAddOns = [];

      // if ((document.getElementById('onlineServiceCheck') as HTMLInputElement).checked) {
      //   selectedAddOns.push({
      //     title: 'Online service',
      //     price: this.labels[0]
      //   });
      // }

      // if ((document.getElementById('largerStorageCheck') as HTMLInputElement).checked) {
      //   selectedAddOns.push({
      //     title: 'Larger storage',
      //     price: this.labels[1]
      //   });
      // }

      // if ((document.getElementById('customizableProfileCheck') as HTMLInputElement).checked) {
      //   selectedAddOns.push({
      //     title: 'Customizable profile',
      //     price: this.labels[2]
      //   });
      // }

      // if (selectedAddOns.length > 0) {
      //   localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
      //   localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
      // }

      this.router.navigate(['/summary']);
    } else {
      console.log('Form is not valid');
    }
  }


}
