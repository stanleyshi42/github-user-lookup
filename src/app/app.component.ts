import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'github-user-lookup';
  user: any = null;
  username = '';

  constructor(private service: GithubService) {}

  getUser(username: string) {
    if (username == '') return;
    username = username.trim();

    this.service.getUser(username).subscribe(
      (data) => {
        //console.log(data);
        this.user = data;
      },
      (error) => {
        this.user = null;
      }
    );
  }
}
