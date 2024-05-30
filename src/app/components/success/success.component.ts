import { Component, OnInit } from '@angular/core';
import { StripeServices } from '../../_services/stripe';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatButton } from "@angular/material/button"
import { LoaderComponent } from "../loader/loader.component"

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [ NgIf, MatButton, LoaderComponent ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent implements OnInit {
  public sessionDetails: any;

  constructor(
    private route: ActivatedRoute,
    private stripeServices: StripeServices
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const sessionId = params['session_id'];
      if (sessionId) {
        this.stripeServices.getSessionDetails(sessionId).subscribe(details => {
          this.sessionDetails = details;
        });
      }
    });
  }

  public sendMail(): void {
    const vide = ''
    this.stripeServices.send(vide);
  }
}
