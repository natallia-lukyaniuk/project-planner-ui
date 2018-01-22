import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'user-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.userService.getUser(param.id)
        .subscribe(user => {
          this.user = user;
        });
    });
  }
}
