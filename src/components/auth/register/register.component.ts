import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });
  // constructor(private registerService: UserService) {}
  onRegister(): void {
    // this.registerService.registerUser(this.registerForm).subscribe(
    //   (res: any) => console.log(res),
    //   (err: any) => console.log(err)
    // );
    // console.log(this.registerForm.value);
  }
}
