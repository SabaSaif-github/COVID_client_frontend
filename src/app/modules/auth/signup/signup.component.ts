import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  currentPage = 'individualPage';


  constructor() { }

  ngOnInit(): void {
    
  }
  showPage(page: string) {
    this.currentPage = page;
  }

}
