import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private document = inject(DOCUMENT);

  // label affiché + id de la section vers laquelle on défile
  links = [
    { label: 'Accueil', target: 'accueil' },
    { label: 'Profil', target: 'profil' },
    { label: 'Conférences', target: 'conferences' },
    { label: 'Amis', target: 'amis' },
    { label: 'Notifications', target: 'notifications' },
    { label: 'Admin', target: 'bas' },
  ];
  active: string = 'Accueil';

  // Event binding : (click) -> lien actif + défilement fluide vers la section
  go(link: { label: string; target: string }): void {
    this.active = link.label;
    if (link.target === 'bas') {
      const win = this.document.defaultView;
      win?.scrollTo({ top: this.document.body.scrollHeight, behavior: 'smooth' });
      return;
    }
    this.document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' });
  }
}
