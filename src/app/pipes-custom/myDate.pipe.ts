import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"mydate",
    standalone:false
})
export class MyDatePipe implements PipeTransform{
    transform(value: Date, ...args: any[]) {
        //return value.getDate()+"/"+value.getMonth()+"/"+value.getFullYear()+" "+value.getTimezoneOffset();
        return value.toLocaleString();
        
    }

}