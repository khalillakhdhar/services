import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mdpoublie',
    loadChildren: () => import('./mdpoublie/mdpoublie.module').then( m => m.MdpoubliePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'messagerie',
    loadChildren: () => import('./messagerie/messagerie.module').then( m => m.MessageriePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'deconnexion',
    loadChildren: () => import('./deconnexion/deconnexion.module').then( m => m.DeconnexionPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'commentaire',
    loadChildren: () => import('./commentaire/commentaire.module').then( m => m.CommentairePageModule)
  },
  {
    path: 'evaluation',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'gestion-service',
    loadChildren: () => import('./gestion-service/gestion-service.module').then( m => m.GestionServicePageModule)
  },
  {
    path: 'gestion-demande',
    loadChildren: () => import('./gestion-demande/gestion-demande.module').then( m => m.GestionDemandePageModule)
  },
  {
    path: 'gestion-reservation',
    loadChildren: () => import('./gestion-reservation/gestion-reservation.module').then( m => m.GestionReservationPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'date',
    loadChildren: () => import('./date/date.module').then( m => m.DatePageModule)
  },
  {
    path: 'prix',
    loadChildren: () => import('./prix/prix.module').then( m => m.PrixPageModule)
  },
  {
    path: 'home-client',
    loadChildren: () => import('./home-client/home-client.module').then( m => m.HomeClientPageModule)
  },
  {
    path: 'home-artisan',
    loadChildren: () => import('./home-artisan/home-artisan.module').then( m => m.HomeArtisanPageModule)
  },
  {
    path: 'liste',
    loadChildren: () => import('./liste/liste.module').then( m => m.ListePageModule)
  },
  {
    path: 'addservice',
    loadChildren: () => import('./addservice/addservice.module').then( m => m.AddservicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
