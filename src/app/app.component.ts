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
  repos!: any[];
  username = '';

  constructor(private service: GithubService) {}

  getUser(username: string) {
    username = username.trim();
    if (username == '') return;

    this.service.getUser(username).subscribe(
      (data) => {
        this.user = data;

        // Get user's repos
        this.service.get(data.repos_url).subscribe((data) => {
          this.repos = data;
        });
      },
      (error) => {
        this.user = null;
        console.error(error);
      }
    );
  }
}
