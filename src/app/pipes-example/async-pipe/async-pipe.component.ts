import { Component, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  standalone: false,
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css'
})
export class AsyncPipeComponent {

  eventEmitter = new EventEmitter<string>();
  counter = 0;
  asyncPipe = new Observable<string>((observe)=>{
    // observe.next("hi");
    // observe.next("hello");
    // let i = 0;
    // setInterval(()=>{
    //   observe.next('hello'+i);
    //   i++;
    // }, 2000);

    observe.next("Initial value");
  });

  emitValue(){
    this.eventEmitter.emit("this is event emitter " +this.counter);
    this.counter++;
    
  }

}
