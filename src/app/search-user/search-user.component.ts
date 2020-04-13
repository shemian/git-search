import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  userName: string;
  @Output() searchOutput = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}
  search() {
    this.searchOutput.emit(this.userName);
    this.userName = '';
  }

}
