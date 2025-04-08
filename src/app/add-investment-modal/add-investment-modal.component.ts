import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-investment-modal',
  standalone: false,
  templateUrl: './add-investment-modal.component.html',
  styleUrl: './add-investment-modal.component.css'
})
export class AddInvestmentModalComponent {

  addData = new EventEmitter<any>();
  investmentForm = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'price': new FormControl(null, [Validators.required, Validators.min(0)]),
    'count': new FormControl(null, [Validators.required, Validators.min(1)])
  })
  addInvestment(){
    if(this.investmentForm.valid){
      let value = this.investmentForm.value
      this.addData.emit({
        name: value.name,
        count: Number(value.count),
        price: Number(value.price)
      })
    }
  }
}
