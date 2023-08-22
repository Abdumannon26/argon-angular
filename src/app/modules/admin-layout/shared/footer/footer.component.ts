import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
