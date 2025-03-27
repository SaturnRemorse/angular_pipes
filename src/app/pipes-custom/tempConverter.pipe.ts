import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"tempConverter",
    standalone:false

})
export class TempConverter implements PipeTransform{
    transform(value: number, ...args: string[]) {
        
        const arg = args[0];
        if(arg === "FAR"){
            return this.celToFaren(value)+"F";
        }
        else if(arg ==="CEL"){
            return this.farenToCel(value)+"C";
        }
        else{
            return "wrong argument";
        }
    }

    celToFaren(temp: number){
        return ((temp*9/5)+32).toFixed(2);
    }

    farenToCel(temp: number){
        return ((temp - 32)*5/9).toFixed(2);
    }

}