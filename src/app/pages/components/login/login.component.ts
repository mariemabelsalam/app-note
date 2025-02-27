import { UserService } from './../../../core/services/user/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private readonly userService:UserService , private readonly router:Router){}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w{6,}$/)]),
  })

  submit(){
    if(this.loginForm.valid) {
      this.userService.signIn(this.loginForm.value).subscribe({
        next:(res)=>{
          localStorage.setItem('token',res.token);
          this.userService.decode();
          this.router.navigate(['/home'])
          console.log(res);
        }
      })
    }
    else {
      this.loginForm.markAllAsTouched()
    }
  }

}
