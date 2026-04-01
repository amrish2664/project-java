import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Topic, TOPICS } from '../../data/topics';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterLink,CommonModule],
  templateUrl: './content.html',
  styleUrls: ['./content.css']
})
export class Content {
  topic: Topic | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.topic = TOPICS.find((t: Topic) => t.id === id);
    });
  }
}