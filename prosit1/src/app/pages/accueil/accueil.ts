import { Component } from '@angular/core';
import { Profile } from '../../components/profile/profile';
import { Friends } from '../../components/friends/friends';
import { Notifications } from '../../components/notifications/notifications';

@Component({
  selector: 'app-accueil',
  imports: [Profile, Friends, Notifications],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {}
