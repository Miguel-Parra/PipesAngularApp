import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {

    transform(valorATransformar: string, enMayusculas: boolean = true): string {
        return (enMayusculas)
            ? valorATransformar.toUpperCase()
            : valorATransformar.toLowerCase()
    }
}