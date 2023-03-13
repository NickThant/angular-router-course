import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { NgModule, Component } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { CanLoadAuthGuard } from "./services/can-load-auth.guard";

const routes: Routes = [
  
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
    canLoad: [CanLoadAuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanLoadAuthGuard],
})
export class AppRoutingModule {}
