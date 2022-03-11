import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-card',
  template: `
        <div
            class="contact"
            [class.border-top]="borderTop"
        >
            <kendo-avatar
                [imageSrc]="getImageUrl(contact.id)"
                shape="circle"
                [width]="40"
                [height]="40"
            >
            </kendo-avatar>
            <div class="contact-details">
                <div class="contact-name">{{ contact.name }}</div>
                <div class="contact-email">{{ contact.email }}</div>
            </div>
            
        </div>
    `,
  styles: [
    `
        .contact{
            display: flex;
            height: 55px;
            padding: 10px;
            align-items: center;
        }
        .contact.border-top {
            border-top: solid;
            border-color: #ECEBEB;
            border-width: thin;
        }
        .contact-details {
            flex: 1;
            margin-left: 10px;
        }
        .contact-name {
            color: #656565;
            font-weight: bolder;
        }
        .contact-email {
            font-size: 0.7rem;
            color: #BEBEBE;
        }
        .messages-label {
            height: 20px;
            width: 95px;
            font-size: 11px;
            line-height: 11px;
            text-transform: none;
        }
    `,
  ],
})
export class ContactComponent {
  @Input() public contact: {
    id: number;
    name: string;
    email: string;
    messagesCount: number;
  };

  @Input() public borderTop: boolean;

  public getImageUrl(contactId: number): string {
    return `https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/${contactId}.png`;
  }
}
