import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePrincipalComponent } from './Components/home-principal/home-principal.component';
import { CompanyProfileComponent } from './Components/company-profile/company-profile.component';
import { CompanyNotificationsComponent } from './Components/company-notifications/company-notifications.component';
import { ModifyDataCompanyComponent } from './Components/modify-data-company/modify-data-company.component';
import { LoginSessionComponent } from './Components/login-session/login-session.component';
import { CategoriesComponent } from './Components/category/categories.component';
import { ExamenOfertaComponent } from './Components/tender-exam/tender-exam.component';
import { HomeEmpresaComponent } from './Components/home-empresa/home-empresa.component';
import { HomeUserComponent } from './Components/home-user/home-user.component';
import { ModifyDataUserComponent } from './Components/modify-data-user/modify-data-user.component';
import { NotificationsUserComponent } from './Components/notifications-user/notifications-user.component';
import { TendersComponent } from './Components/tenders/tenders.component';
import { MorseComponent } from './Components/morse/morse.component';
import { PerfilUserComponent } from './Components/perfil-user/perfil-user.component';
import { RecruiterComponent } from './Components/recruiter/recruiter.component';
import { CompanyRegisterComponent } from './Components/company-register/company-register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserCardsComponent } from './Components/user-cards/user-cards.component';
import { CompanyCardsComponent } from './Components/company-cards/company-cards.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { CompanyPaymentsComponent } from './Components/company-payments/pagos-empresa.component';

const routesApp: Routes = [
  {path: '', component: HomePrincipalComponent},
  {path: 'perfil/Empresa', component: CompanyProfileComponent},
  {path: 'login', component: LoginSessionComponent},
  {path: 'nosotros', component: MorseComponent},
  {path: 'recuperarpassword', component: ForgotpasswordComponent},
  {path: 'crearOferta', component: TendersComponent},
  {path: 'examOferta', component: ExamenOfertaComponent},
  {path: 'notificacion/company', component: CompanyNotificationsComponent},
  {path: 'modificarDatos/company', component: ModifyDataCompanyComponent},
  {path: 'categorias/ofertasLaborales', component: CategoriesComponent},
  {path: 'homeEmpresa', component: HomeEmpresaComponent},
  {path: 'homeUser', component: HomeUserComponent},
  {path: 'ModificarDatos/User', component: ModifyDataUserComponent},
  {path: 'notificacion/User', component: NotificationsUserComponent},
  {path: 'perfil/User', component: PerfilUserComponent},
  {path: 'losMejoresProgramadores/reclutar', component: RecruiterComponent},
  {path: 'registroCompany', component: CompanyRegisterComponent},
  {path: 'registroUser', component: UserRegisterComponent},
  {path: 'pagos', component: PaymentsComponent},
  {path: 'pagos-Empresa', component: CompanyPaymentsComponent},
  {path: 'tarjetas-user', component: UserCardsComponent},
  {path: 'tarjetas-empresa', component:CompanyCardsComponent},
  // {path: 'pasarelaUser', component:TarjetasCompanyComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomePrincipalComponent,
    CompanyProfileComponent,
    CompanyNotificationsComponent,
    ModifyDataCompanyComponent,
    LoginSessionComponent,
    CategoriesComponent,
    ExamenOfertaComponent,
    HomeEmpresaComponent,
    HomeUserComponent,
    ModifyDataUserComponent,
    NotificationsUserComponent,
    TendersComponent,
    MorseComponent,
    PerfilUserComponent,
    RecruiterComponent,
    CompanyRegisterComponent,
    ForgotpasswordComponent,
    UserRegisterComponent,
    UserCardsComponent,
    CompanyCardsComponent,
    PaymentsComponent,
    CompanyPaymentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
