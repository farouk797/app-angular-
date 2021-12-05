import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { CassierComponent } from './components/cassier/cassier.component';
import { ComptableComponent } from './components/comptable/comptable.component';
import { ClientComponent } from './components/client/client.component';
import { MagasinierComponent } from './components/magasinier/magasinier.component';



const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'cassier', component: CassierComponent },
  { path: 'comptable', component: ComptableComponent},
  { path: 'client', component: ClientComponent },
  { path: 'magasinier', component: MagasinierComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})  
export class AppRoutingModule { }
