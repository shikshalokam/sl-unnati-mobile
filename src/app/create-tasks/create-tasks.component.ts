import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.scss'],
})
export class CreateTasksComponent implements OnInit {
  task:any={};
  constructor(
    public datepipe: DatePipe,
    public datePicker: DatePicker,
  ) { }

  ngOnInit() { }
  public share() {
  }
  public setDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.task.endDate = this.datepipe.transform(new Date(date));
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  add() {

  }
}
