import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userService:UserService,private router: Router) { }

  login(form: NgForm) {

    if(form.invalid){
      return
    }

    const {email,password} = form.value;
  
    this.userService.login(email,password).subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }
}
