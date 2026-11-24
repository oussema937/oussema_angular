import { Component } from '@angular/core';
import { Footer } from './sharedComponent/footer/footer';
import { Home } from './pages/home/home';
import { Header } from './sharedComponent/header/header';
import { ListConf } from './pages/list-conf/list-conf';
import { Accueil } from './pages/accueil/accueil';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Accueil, Home,ListConf, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
