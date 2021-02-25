import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'
import { FormBuilder, 
  FormGroup, 
  Validators }      from '@angular/forms';
  import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector    : 'app-layout',
  templateUrl : './layout.component.html',
  styleUrls   : ['./layout.component.css'],
  animations  : [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class LayoutComponent implements OnInit {
  menuState         :string = 'out';
  ticketForm        : FormGroup;
  ticketDatas       = [{
    'Id'  : 'ABC123',
    'ticketName' : 'Bronet Axis',
    'reporter'  : 'Ikhsan',
    'createdTime' : '2020-09-14',
    'status'  : 'yes',
    'activity' : 'Initial Ticket',
    'productStream' : 'AXIS'
  },
  {
    'Id'  : 'ABC234',
    'ticketName' : 'Sisnet Axis',
    'reporter'  : 'Sunarto',
    'createdTime' : '2020-06-01',
    'status'  : 'yes',
    'activity' : 'Approved By BRM',
    'productStream' : 'PREPAID'
  },
  {
    'Id'  : 'ABC345',
    'ticketName' : 'Internet Axis',
    'reporter'  : 'Sunardi',
    'createdTime' : '2020-09-02',
    'status'  : 'warning',
    'activity' : 'Waiting Approval',
    'productStream' : 'POSTPAID'
  },
  {
    'Id'  : 'ABC456',
    'ticketName' : 'Gamers Package',
    'reporter'  : 'Sunjaya',
    'createdTime' : '2020-07-19',
    'status'  : 'no',
    'activity' : 'Withdraw By BRM',
    'productStream' : 'VAS'
  },
  {
    'Id'  : 'ABC567',
    'ticketName' : 'Paket Mantep',
    'reporter'  : 'Kimihime',
    'createdTime' : '2020-08-22',
    'status'  : 'yes',
    'activity' : 'Approved By Tester',
    'productStream' : 'AXIS'
  },
]
 
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    if(this.menuState == 'in') {
      document.getElementById("mySidenav").style.width = "220px";
      document.getElementById("main").style.marginLeft = "150px";
    } else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }

  }

  constructor(
    private fb            : FormBuilder,
  ) {

    this.ticketForm = this.fb.group({
      'ticket_name'  : ['', Validators.compose([Validators.required])],
    })
   }

  ngOnInit() {
  }
}
