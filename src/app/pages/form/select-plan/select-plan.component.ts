import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.scss'
})
export class SelectPlanComponent {

  secondForm: FormGroup;

  constructor(private router: Router ) {
    this.secondForm = new FormGroup({
      plan: new FormControl('', Validators.required),
    });
  }

  isToggled: boolean = true;

  defaultLabels = [9, 12, 15];
  toggledLabels = [90, 120, 150];

  planName = ["Arcade", "Advanced", "Pro"];

  get labels() {
    return this.isToggled ? this.toggledLabels : this.defaultLabels;
  }

  month = "mo";
  year = "yr";

  get period(){
    return this.isToggled ? this.year : this.month;
  }




  onSubmit() {
    if (this.secondForm.valid) {
      const selectedPlanIndex = this.secondForm.value.plan - 1; 
      const selectedPlanName = this.planName[selectedPlanIndex];
      const selectedPlanLabel = this.labels[selectedPlanIndex];

      const selectedPlan = {
        plan: selectedPlanIndex + 1, 
        planName: selectedPlanName,
        price: selectedPlanLabel, 
        billingCycle: this.isToggled ? 'Yearly' : 'Monthly',
      };

      localStorage.setItem('plan', JSON.stringify(selectedPlan.plan));
      localStorage.setItem('planName', JSON.stringify(selectedPlan.planName));
      localStorage.setItem('price', JSON.stringify(selectedPlan.price));
      localStorage.setItem('billingCycle', JSON.stringify(selectedPlan.billingCycle));

      this.secondForm.reset();
      this.router.navigate(['add-ons']);
    } else {
      console.log('Plan not selected');
    }
  }

}
