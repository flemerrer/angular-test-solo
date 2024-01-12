import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav-menu/nav.component';
import { DirectoriesComponent } from './directories/directories.component';
import { MailsListComponent } from './mails-list/mails-list.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { MailMenuComponent } from './mail-menu/mail-menu.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavComponent, 
    SearchComponent,
    DirectoriesComponent, 
    MailsListComponent, 
    MailDetailComponent,
    MailMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chimere';
}
