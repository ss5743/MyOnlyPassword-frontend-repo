import { Component } from '@angular/core';

@Component({
  selector: 'passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css'],
})
export class PasswordsComponent {
  pass = [
    { name: 'workday', password: '1234560' },
    { name: 'linkedin', password: '098765' },
    { name: '9anime', password: '345876' },
  ];
}
