import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'summarySlice',
    standalone:true,
})

export class SummaryPipe implements PipeTransform{
    transform(value:string = '', maxCharCount = 200): unknown {
        const dots = value.length > maxCharCount ? '...' : '';
        return `${value.substring(0, maxCharCount)}${dots}`;
      }
}