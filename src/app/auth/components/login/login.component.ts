import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  valCheck: string[] = ['remember'];
  password!: string;

  constructor(private authService: AuthService,private router: Router){ }

  ngOnInit(): void {
  }

  ingresar() {
    //peticion al servidor
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("access_token", res.accessToken);

        this.router.navigate(["/admin/perfil"]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
