import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/visitor/visitor.module').then(m => m.VisitorModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'creator',
    loadChildren: () => import('./features/creator/creator.module').then(m => m.CreatorModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
