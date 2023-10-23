import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit {


  posts:Posts[]=[];
  constructor(public postsService: PostsService){}

  ngOnInit(): void {
  this.postsService.getPosts().subscribe(
 {
  next:(data)=>{

  this.posts=data;


  },
}
)
  }


}
