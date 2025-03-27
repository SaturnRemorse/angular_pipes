import { Component } from '@angular/core';

@Component({
  selector: 'app-important-pipes',
  standalone: false,
  templateUrl: './important-pipes.component.html',
  styleUrl: './important-pipes.component.css'
})
export class ImportantPipesComponent {

  name = 'Rengoku Kyujoro';
  description = 'he is fire hashira';
  itemPrice = 1234.5678;
  itemPercent = 0.78;
  amount = 45000;

}

/*
1. uppercase: convert string into uppercase
2. lowercase : convert string into lowercase
3: slice : start :end
extract from start to end -1
5. number : format number
syntax 
  expression | number :digit information
  'min number of integer.min digit after decimal - max digit after decimal'
6. percent - format the percentage
syntax 
  expression | percent :'digit-info'
2. currency : format currencies
expression | currency : true/false :digit-info
*/
