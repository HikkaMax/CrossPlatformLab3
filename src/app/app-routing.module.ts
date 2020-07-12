import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:AdminComponent,
    pathMatch:'full',
  },
  {
    path:'about',
    children:[
      {
      path: ':id',
      component: AboutComponent,
      pathMatch:'full',
      }
    ]
  },
  {
    path:'groups',
    children:[
      {
        path:'',
        component:GroupsComponent,
        pathMatch:'full',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
