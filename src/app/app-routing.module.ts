import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ClientGuard} from "./core/guards/client.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/visitor/visitor.module').then(m => m.VisitorModule),
  },
  {
    path: 'client',
    canActivate: [ClientGuard],
    loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled' ,
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
