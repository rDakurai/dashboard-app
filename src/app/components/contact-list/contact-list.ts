import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';
import { ContactsService } from '../../servicios/contacts';

export interface Contact {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactRow],
  templateUrl: './contact-list.html',
})
export class ContactList implements OnInit {
  private contactsService = inject(ContactsService);
  private cdr = inject(ChangeDetectorRef);

  contacts: Contact[] = [];
  cargando = true;

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (d) => {
        console.log('Datos recibidos:', d);
        this.contacts = d;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al consultar la API:', err);
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}