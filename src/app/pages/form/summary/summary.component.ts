import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

  plan: any = JSON.parse(localStorage.getItem('planName') || '""');
  planPeriod: any = JSON.parse(localStorage.getItem('billingCycle') || '""');
  planPrice: number = JSON.parse(localStorage.getItem('price')|| '""');
  period: any = '';

  addOns: any = [];
  title: string[] = [];
  price: number[] = [];
  billingCycle: string[] = [];

  combinedArray: number[] = [];
  totalSum: number = 0;


  ngOnInit() {
    const getAddOnsString = localStorage.getItem('selectedAddOns');

    if (getAddOnsString) {
      try {
        const getAddOns: { title: string; price: number; billingCycle: string }[] = JSON.parse(getAddOnsString);

        this.title = getAddOns.map((addOn) => addOn.title);
        this.price = getAddOns.map((addOn) => addOn.price);
        this.billingCycle = getAddOns.map((addOn) => addOn.billingCycle);

        console.log('Title:', this.title);
        console.log('Price:', this.price);
        console.log('Billing Cycle:', this.billingCycle);

        this.addOns = getAddOns.map((addOn, index) => ({
          title: this.title[index],
          price: this.price[index],
          billingCycle: this.billingCycle[index],
        }));

      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.warn('No data found for "selectedAddOns".');
    }


    this.combinedArray = [ this.planPrice, ...this.price];

    this.totalSum = this.combinedArray.reduce((sum, num) => sum + num, 0);
    console.log(this.totalSum);

    const userPeriod = localStorage.getItem('billingCycle');
    console.log(userPeriod);
    
    if (userPeriod?.trim() === '"Monthly"') {

      this.period = "mo";

    } else if (userPeriod?.trim() === '"Yearly"') {

      this.period = "yr";

    } else {
      console.log('Not working');
    }
  }


}
