import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { YourInfoComponent } from './pages/form/your-info/your-info.component';
import { SelectPlanComponent } from './pages/form/select-plan/select-plan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent,
    YourInfoComponent, SelectPlanComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-step-form';
}
