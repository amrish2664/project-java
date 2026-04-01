import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';

import { Quiz } from './pages/quiz/quiz';
import { Content } from './pages/content/content';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Sidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('learnjava');
}
