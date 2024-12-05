import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }

  // errorMsg= string as string;

  formLogin = new FormGroup({

    loginEmail: new FormControl('',
      [Validators.required],
    ),

    loginPassword: new FormControl('',
      [Validators.required]
    ),

  })


  login() {

    if (this.formLogin.invalid) {
      // this.errorMsg = 'Invalid Username or Password'
      return
    }

    const { loginEmail, loginPassword } = this.formLogin.value;

      this.userService.login(loginEmail!, loginPassword!).subscribe(() => {
        this.router.navigate(['/home'])
      })

  }
}
