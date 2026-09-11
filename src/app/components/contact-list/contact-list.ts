import { Component } from '@angular/core';
import { ContactRow} from
  '../contact-row/contact-row';

@Component({
  selector: 'app-contact-list',
  imports: [ContactRow],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})

export class ContactListComponent {
  contacts: Contact[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Maria Garcia', email: 'maria.garcia@example.com' }
  ];

}


export interface Contact {
  id: number;
  name: string;
  email: string;
}