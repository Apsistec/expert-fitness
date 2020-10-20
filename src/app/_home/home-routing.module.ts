import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageOneComponent } from "./home-page-one/home-page-one.component";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "faq",
        loadChildren: () =>
          import("../_home/faq/faq.module").then((m) => m.FaqPageModule),
      },

      {
        path: "testimonials",
        loadChildren: () =>
          import("../_home/testimonials/testimonials.module").then(
            (m) => m.TestimonialsPageModule
          ),
        // outlet: "homeOutlet",
      },
      {
        path: "products",
        loadChildren: () =>
          import("../_home/products/products.module").then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("../_home/contact/contact.module").then(
            (m) => m.ContactPageModule
          ),
      },
      {
        path: "mind",
        loadChildren: () =>
          import("../_home/mind/mind.module").then((m) => m.MindPageModule),
      },
      {
        path: "body",
        loadChildren: () =>
          import("../_home/body/body.module").then((m) => m.BodyPageModule),
      },
      {
        path: "soul",
        loadChildren: () =>
          import("../_home/soul/soul.module").then((m) => m.SoulPageModule),
      },
      {
        path: "",
        component: HomePageOneComponent,
        // outlet: "homeOutlet",
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
