import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { CompanyService} from '../../Services/company.service';
import { StorageService } from '../../Services/storage.service';
import { StorageCompanyService} from '../../Services/storage-company.service';
import { Router } from '@angular/router';    
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './login-session.component.html',
  styleUrls: ['./login-session.component.css']
})
export class LoginSessionComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private userService: UserService,
    private StorageCompanyService : StorageCompanyService,
    private CompanyService: CompanyService,
    private storageService: StorageService,
    private router: Router

  ) {
    this.validator()
  }

  ngOnInit(): void {
  }
  
  validator() {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  login() {
 
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (dataUser) => {
          this.storageService.saveToken(dataUser['token'])
          const infoUser = this.storageService.dataUser()
          this.selectRole(infoUser)
        },
        (error) => {
          console.error('Error ->', error)
        }
      )
    } else {
      alert('Debes llenar todos los campos ')
    } 
  }
  loginCompany() {
    if (this.loginForm.valid) {
      this.CompanyService.loginCompany(this.loginForm.value).subscribe(
        (dataCompany) => {
          this.storageService.saveToken(dataCompany['token'])
          const infoCompany = this.StorageCompanyService.dataCompany()
          this.selectRole(infoCompany)
        },
        (error) => {
          console.error('Error ->', error)
        }
      )
    } else {
      alert('Debes llenar todos los campos ')
    }
  }  

  selectRole(optionRole){
    switch(optionRole){
      case 'Company':
        this.router.navigate(['/homeEmpresa'])
      case 'programador':
        this.router.navigate(['/homeUser'])
    }
  }
}
