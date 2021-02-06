import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  //{
  //  path: '',
  //  redirectTo: 'login',
  //  pathMatch: 'full'
  //},

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },


  {
    path: 'logoff',
    loadChildren: () => import('./logoff/logoff.module').then(m => m.LogoffPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
    
  
  {
    path: 'cadastrar-cliente',
    loadChildren: () => import('./cadastrar-cliente/cadastrar-cliente.module').then(m => m.CadastrarClientePageModule)
  },
  {
    path: 'interpretes',
    loadChildren: () => import('./interpretes/interpretes.module').then(m => m.InterpretesPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'interpretes-detalhe/:id',
    loadChildren: () => import('./interpretes-detalhe/interpretes-detalhe.module').then(m => m.InterpretesDetalhePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
 
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then(m => m.CalModalPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  
   {
    path: 'interpretes-update/:id',
    loadChildren: () => import('./interpretes-update/interpretes-update.module').then(m => m.InterpretesUpdatePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  
  {
    path: 'clientes-perfil-detalhe',
    loadChildren: () => import('./clientes-perfil-detalhe/clientes-perfil-detalhe.module').then(m => m.ClientesPerfilDetalhePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'clientes-update/:id',
    loadChildren: () => import('./clientes-update/clientes-update.module').then(m => m.ClientesUpdatePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'clientes-perfil-foto/:id',
    loadChildren: () => import('./clientes-perfil-foto/clientes-perfil-foto.module').then( m => m.ClientesPerfilFotoPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'solicitacao-agendamento/:id',
    loadChildren: () => import('./solicitacao-agendamento/solicitacao-agendamento.module').then( m => m.SolicitacaoAgendamentoPageModule)
  },
 



 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
