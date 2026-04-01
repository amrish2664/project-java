import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
topics = [
  { id: 'intro', title: 'Java Intro' },
  {id:'Keywords',title:'Keywords'},
  {id: 'variables', title: 'Variables' },
  {id:'Identifiers',title:'Identifiers'},
  {id:'data-Types',title:'Data Types'},
  {id:'Operators',title:'Operators'},
  {id:'operators-precedence',title:'Operator Precedence'},
  {id:'Type-conversion',title:'Type Conversion'},
  {id:'Control-Structure',title:'Control Structure'},
  {id:'Switch-case',title:'Switch Case'},
  {id:'Iteration',title:'Iteration Control Structure'},
  {id:'Build-in-classes',title:'Introduction to Built-in Classes'},
  {id:'break-continue',title:'Break And Continue'},
  {id:'Nested-loop',title:'Nested Loop'},
  {id:'Arrays',title:'Arrays'},
  {id:'Methods-in-java',title:'Mathods in Java'}
];
}
