import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText='';

  @Output()
  onSearchTextChange:EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('InputText') searchInputElement : ElementRef;

  seach(event:any){
    //  to print the search text in console.log
    this.searchText=event.target.value;

    this.onSearchTextChange.emit(this.searchText);
    
  }

  setsearchText(inputEL:any){
    this.searchText=inputEL.value;
    this.onSearchTextChange.emit(this.searchText);
  }
  
  setsearchTextByViewChild(){
    this.searchText=this.searchInputElement.nativeElement.value;
    console.log(this.searchText);
    this.onSearchTextChange.emit(this.searchText);
  }
}
