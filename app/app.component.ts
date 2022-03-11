import { Component } from '@angular/core';
import { contacts } from './contacts';

@Component({
  selector: 'my-app',
  template: `
    <button class="k-button k-primary" (click)="onClick()">add new </button>
    <kendo-listview
      [data]="contacts"
      containerClass="k-d-flex k-flex-col k-flex-nowrap"
    >
      <ng-template kendoListViewHeaderTemplate>
        <div class="header">
          Friends
        </div>
      </ng-template>
      <ng-template
        kendoListViewItemTemplate
        let-dataItem="dataItem"
        let-isFirst="isFirst"
      >
        <contact-card
          class="contact"
          [contact]="dataItem"
          [borderTop]="!isFirst"
        >
        </contact-card>
      </ng-template>
      <ng-template kendoListViewFooterTemplate>
        
      </ng-template>
    </kendo-listview>
  `,
  styles: [
    `
      .k-listview {
        font-family: sans-serif;
        width: 400px;
        margin: auto;
      }
      .header,
      .footer {
        color: #a0a0a0;
        font-size: 16px;
        padding: 6px 10px;
      }
      .footer {
        font-size: 14px;
      }
      .contact {
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {
  public contacts: any[] = [
    {
      id: 1,
      name: 'Jenson Delaney',
      email: 'jenson.delany@mail.com',
      messagesCount: 3,
    },
    {
      id: 2,
      name: 'Amaya Coffey',
      email: 'amaya.coffey@mail.com',
      messagesCount: 1,
    },
    {
      id: 3,
      name: 'Habib Joyce',
      email: 'habib.joyce@mail.com',
      messagesCount: 5,
    },
  ];

  onClick() {
    let newContact = {
      id: 4,
      name: 'Tesla Joyce',
      email: 'habib.joyce@mail.com',
      messagesCount: 5,
    };
    this.contacts.push(newContact);
    this.contacts = [...this.contacts];
  }
}
