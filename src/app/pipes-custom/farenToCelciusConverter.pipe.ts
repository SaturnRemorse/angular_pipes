import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "farentocelcius",
    standalone:false
})
export class FarenToCelciusPipe implements PipeTransform{
    transform(value: number, ...args: any[]) {

        return ((value - 32) * 5 /9).toFixed(2);
         
    }

}