import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // posts = [
  //   {
  //     title: 'this is 1st Post',
  //     content: 'im in an expansion panel',
  //   },
  //   {
  //     title: 'this is 2nd Post',
  //     content: 'im in an expansion panel',
  //   },
  //   {
  //     title: 'this is 3rd Post',
  //     content: 'im in an expansion panel',
  //   },
  // ];
  @Input() posts: Post[] = [];
}
