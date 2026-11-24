import { Component } from '@angular/core';

@Component({
  selector: 'app-list-conf',
  standalone: true,
  imports: [],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css'
})
export class ListConf {

  conferences = [
    {
      picture: 'https://placehold.co/600x350?text=Angular',
      title: 'Angular Development Conference',
      date: '20 November 2026',
      address: 'Tunis, Tunisia',
      availablePlaces: 25
    },
    {
      picture: 'https://placehold.co/600x350?text=AI',
      title: 'Artificial Intelligence Summit',
      date: '25 November 2026',
      address: 'Sousse, Tunisia',
      availablePlaces: 15
    },
    {
      picture: 'https://placehold.co/600x350?text=Cloud',
      title: 'Cloud Computing Conference',
      date: '30 November 2026',
      address: 'Sfax, Tunisia',
      availablePlaces: 10
    }
  ];

}
