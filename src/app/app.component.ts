import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddInvestmentModalComponent } from './add-investment-modal/add-investment-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'use-case';

  constructor(private ngbModal: NgbModal){

  }

  mockInvestmentData = [
    {
      name:'investment-1',
      price: 2000,
      count: 20
    },
    {
      name:'investment-2',
      price: 2000,
      count: 40
    },
    {
      name:'investment-3',
      price: 2000,
      count: 20
    }
  ]

  addInvestment(){
    let modalRef = this.ngbModal.open(AddInvestmentModalComponent,{
      backdrop: true
    })
    modalRef.componentInstance.addData.emit = (data) => {
      this.mockInvestmentData.push(data);
      this.mockInvestmentData = [...this.mockInvestmentData]
      modalRef.close();
    }

  }
}
