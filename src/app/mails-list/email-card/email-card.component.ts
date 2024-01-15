import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Email } from '../../models/email';

@Component({
  selector: 'app-email-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './email-card.component.html',
  styleUrl: './email-card.component.css'
})
export class EmailCardComponent {
  @Input() email!: Email;
}
