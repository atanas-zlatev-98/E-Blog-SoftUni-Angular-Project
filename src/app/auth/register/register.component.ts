import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  // register(form: NgForm) {
  //   console.log(form.value);
  // }
  constructor(private userService:UserService,private router:Router){

  }

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    const {imgUrl, username, email,userSummary,password } = form.value;
    this.userService.register(imgUrl!,username!,email!,userSummary!,password!).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }
}
