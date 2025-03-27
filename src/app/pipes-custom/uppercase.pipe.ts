import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'upper',
    standalone: false,
}
)
export class UppercasePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        console.log(value);
        return value.toUpperCase();
    }

}