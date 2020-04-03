import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";

import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";

import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactComponent } from "./contact/contact.component";
import { CommentService } from "./comment.service";
import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "contact", component: ContactComponent },
      { path: "admin", component: AdminComponent },
      { path: "", component: HomeComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
