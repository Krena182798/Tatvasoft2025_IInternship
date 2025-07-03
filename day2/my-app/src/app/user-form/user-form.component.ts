import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    name: '',
    email: '',
    age: null
  };

  submitForm() {
    alert(`Form Submitted:\n${JSON.stringify(this.user, null, 2)}`);
  }
}