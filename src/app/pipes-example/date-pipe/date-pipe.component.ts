import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  standalone: false,
  templateUrl: './date-pipe.component.html',
  styleUrl: './date-pipe.component.css'
})
export class DatePipeComponent {
  title = "Date Pipes tutorial";
  todayDate = new Date();

}

/*
expression | pipename : argument
*/