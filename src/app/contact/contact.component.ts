import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeacticateComponent } from '../canDeactiveGraud.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, IDeacticateComponent {
  firstname: any;
  lastname: any;
  country: any;
  subject: any;
  constructor(public route: Router) {}
  ngOnInit(): void {}
  canExit() {
    if (this.firstname || this.lastname || this.country || this.subject) {
      return confirm(
        'you have unshaved changes .do you really want to discard the change'
      );
    } else if (
      !this.firstname &&
      !this.lastname &&
      !this.country &&
      !this.subject
    ) {
      return true;
    } else {
      return false;
    }
  }
  onSubmit() {
    this.firstname = '';
  }
}
