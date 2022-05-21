import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(valorATransformar: boolean): string {
        return valorATransformar ?
            'vuela' : 'no vuela';
    }
}