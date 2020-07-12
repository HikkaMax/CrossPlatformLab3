import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { GroupsComponent } from './groups/groups.component';
import { GroupsService } from './services/groups.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HTTPInterceptorService } from './services/http-interceptor';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    GroupsComponent,
    LoginComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    GroupsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
