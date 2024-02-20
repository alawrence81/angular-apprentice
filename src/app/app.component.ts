import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoshHomeComponent } from "./josh-home/josh-home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, JoshHomeComponent]
})
export class AppComponent {
  title = 'angular-apprentice';
}
