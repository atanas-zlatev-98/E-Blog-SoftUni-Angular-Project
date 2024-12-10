import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';
import { passwordsMatch } from '../../validators/passwords.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {

  }

  formRegister = new FormGroup({
    imgUrl: new FormControl('',
      [Validators.required],
    ),
    username: new FormControl('',
      [Validators.required, Validators.minLength(6)]
    ),
    email: new FormControl('', [Validators.required, Validators.email]),
    userSummary: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(500)]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        rePass: new FormControl('', [Validators.required]),
      },
      {
        validators: [passwordsMatch('password', 'rePass')],
      })
  })


  register() {

    if (this.formRegister.invalid) {
      return;
    }

    const { imgUrl, username, email, userSummary, passwordGroup: { password, rePass } = {} } = this.formRegister.value;
    this.userService.register(imgUrl!, username!, email!, userSummary!, password!).subscribe(() => {
      this.router.navigate(['/home']);
    });


  }
}
