import { Component } from '@angular/core';
import { EmailCardComponent } from './email-card/email-card.component';
import { Email } from '../models/email';

@Component({
  selector: 'app-mails-list',
  standalone: true,
  imports: [EmailCardComponent],
  templateUrl: './mails-list.component.html',
  styleUrl: './mails-list.component.css'
})
export class MailsListComponent {
  email1: Email = {
    id: 1,
    author: "Bob Saget",
    subject: "New soap store in town",
    trail: "You wouldn't believe what they do with"
  }
  
  email2: Email = {
    id: 2,
    author: "Robert Pattinson",
    subject: "Look at me",
    trail: "I am The Batman now"
  }

  emailsList: Email[] = [this.email1, this.email2];
}
