import { Routes } from '@angular/router';
import { YourInfoComponent } from './pages/form/your-info/your-info.component';
import { SelectPlanComponent } from './pages/form/select-plan/select-plan.component';
import { AddOnsComponent } from './pages/form/add-ons/add-ons.component';
import { SummaryComponent } from './pages/form/summary/summary.component';
import { ThankYouComponent } from './pages/form/thank-you/thank-you.component';

export const routes: Routes = [
    { path: 'your-info', component: YourInfoComponent },
    { path: 'select-plans', component: SelectPlanComponent},
    { path: 'add-ons', component: AddOnsComponent},
    { path: 'summary', component: SummaryComponent},
    { path: 'thank-you', component: ThankYouComponent},
    { path: '', redirectTo: '/your-info', pathMatch: 'full'},
    { path: '**', component: YourInfoComponent },
];
