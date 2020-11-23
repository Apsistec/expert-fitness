import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth.service';
import { TicketService } from '../../_services/ticket.service';
import { TicketComponent } from '../../_shared/ticket/ticket.component';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.scss']
})
export class UserTicketsComponent implements OnInit {
  tickets: Observable<any>;
  title = 'User Dashboard';
  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private ticket: TicketService
  ) {}

  ngOnInit() {
    this.tickets = this.ticket.getUserTickets();
  }

  async openTicketModal() {
    const modal = await this.modalCtrl.create({
      component: TicketComponent
    });
    await modal.present();
  }

  SignOut() {
    this.auth.SignOut();
  }
}
