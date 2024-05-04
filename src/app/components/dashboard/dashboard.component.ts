import { Component } from '@angular/core';
import { BarchartComponent } from '../shared/barchart/barchart.component';
import { PlantComponent } from '../shared/plant/plant.component';
import { PumpComponent } from '../shared/pump/pump.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarchartComponent,PlantComponent,PumpComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
