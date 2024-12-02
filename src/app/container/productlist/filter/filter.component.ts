import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  selectedRadioButton:string='all'

@Input()
all:number=0;

@Input()
inStock:number=0;

@Input()
outOfStock:number=0

@Output()
filterChange: EventEmitter<string>=new EventEmitter<string>();

onRadioButtonChange(event:any){
  // console.log('event change raised')
  this.selectedRadioButton=event.target.value;
  this.filterChange.emit(this.selectedRadioButton);
}
}
