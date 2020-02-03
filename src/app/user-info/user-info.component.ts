import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  private subscription: Subscription;
  userId: number;
  user: User;

  constructor(public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.userId = +params.id;
          this.getUser(this.userId);
        }
      }
    );
  }

  getUser(id: number): void {
    this.user = this.dataService.fetchUser(id);
  }
}
