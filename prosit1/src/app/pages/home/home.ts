import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  list: Conference[] = [];
  searchTitle: string = '';

  ngOnInit(): void {
    this.list = [
      {
        title: 'Conference Angular',
        description: 'Web dev conference and workshop',
        date: '2026-11-20',
        nbrMax: 20,
        nbrReservation: 5,
        picture: 'https://placehold.co/600x350?text=Angular'
      },
      {
        title: 'Conference AI',
        description: 'Introduction to machine learning and its uses',
        date: '2026-11-25',
        nbrMax: 15,
        nbrReservation: 15,
        picture: 'https://placehold.co/600x350?text=AI'
      },
      {
        title: 'Conference Cloud',
        description: 'Cloud services, deployment and DevOps',
        date: '2026-11-30',
        nbrMax: 10,
        nbrReservation: 4,
        picture: 'https://placehold.co/600x350?text=Cloud'
      }
    ];
  }

  participate(conf: Conference): void {
     
      conf.nbrReservation++;
    
  }
}
