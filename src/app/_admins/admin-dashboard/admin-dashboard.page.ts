import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth.service';
import { CollectionService } from '../../_services/collection.service';
import { TicketService } from '../../_services/ticket.service';
import { TicketComponent } from '../../_shared/ticket/ticket.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tickets: Observable<any>;
  title = 'Admin Dashboard';
  admins;
  users;
  customers;
  feed;
  employees;

  constructor(
    public auth: AuthService,
    private ticket: TicketService,
    private modalCtrl: ModalController,
    private collection: CollectionService
  ) {}

  ngOnInit() {
    this.admins = this.collection.getAllAdmins();
    this.users = this.collection.getUsers();
    this.customers = this.collection.getCurrentCustomers();
    this.feed = this.collection.getUserFeed();
    this.employees = this.collection.getEmployees();
    this.tickets = this.ticket.getAdminTickets();
  }

  async openTicket(id) {
    const ticketModal = await this.modalCtrl.create({
      component: TicketComponent,
      componentProps: {
        id,
      },
    });
    await ticketModal.present();
  }

  signOut() {
    this.auth.SignOut();
  }
}
