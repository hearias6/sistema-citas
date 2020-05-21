import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _loginService : LoginService
  ) { 
    this.construirFormulario();
  }

  ngOnInit() {
  }

  construirFormulario():void{
    this.formulario =new FormGroup({
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required)
    });
  }

  login(){
    try {
      console.log('login');    

      const body = new HttpParams()
      .set('username', this.formulario.controls.username.value)
      .set('password', this.formulario.controls.password.value)
      .set('grant_type', 'password');

      console.log('body : ', body.toString());

      this._loginService.login(body.toString()).subscribe(
        (info : any)=>{
          console.log('success ', info);
        },
        (error : any)=>{
          let mensaje = error.error.error_description;
          console.log('error ', mensaje);
          alert(mensaje);
        }
      );
    } catch (error) {
      console.log('error login : ', error);
    }
  }

}
