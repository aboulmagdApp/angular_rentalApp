import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent {
@Input() rental;
@Input() childData;

@Output() childDataChange = new EventEmitter<any>();

changeData(){
  this.childData = 100;
  this.childDataChange.emit(this.childData);
}
}
