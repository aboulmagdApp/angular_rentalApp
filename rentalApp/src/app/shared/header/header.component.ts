import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() isAuthenticated = false;
@Input() username = '';
@Input() logout;

  constructor() { }

  ngOnInit() {
  }

}
