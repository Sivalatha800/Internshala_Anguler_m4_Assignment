import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.css'],
})
export class AcomponentComponent implements OnInit {
  name: any;
  constructor(public router: Router) {}

  goToBComp() {
    this.router.navigate(['/bcomponent/', this.name]);
  }

  ngOnInit(): void {}
}
