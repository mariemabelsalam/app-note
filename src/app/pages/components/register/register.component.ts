import { UserService } from './../../../core/services/user/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private readonly userService:UserService , private readonly router:Router){}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w{6,}$/)]),
    age: new FormControl(null, [Validators.required, Validators.pattern(/^(1[0-9]|[2-7][0-9]|80)$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

  submit(){
    if(this.registerForm.valid) {
      this.userService.signUp(this.registerForm.value).subscribe({
        next:(res)=>{
          this.router.navigate(['/login'])
          // console.log(res);
        }
      })
    }
    else{
      this.registerForm.markAllAsTouched();
    }
  }

}

