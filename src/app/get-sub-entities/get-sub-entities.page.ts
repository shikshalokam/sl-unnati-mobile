import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateProfileService } from '../update-profile/update-profile.service';
@Component({
  selector: 'app-get-sub-entities',
  templateUrl: './get-sub-entities.page.html',
  styleUrls: ['./get-sub-entities.page.scss'],
})
export class GetSubEntitiesPage implements OnInit {
  @Input() data;
  searchInput = '';
  entity;
  page = 1;
  limit = 10;
  constructor(
    public modalController: ModalController,
    public updateProfileService: UpdateProfileService,
  ) { }

  ngOnInit() {
    console.log(this.data, "data in get sub entities", this.data.value.length);
    if (this.data.value && this.data.value.length > 0) {
      this.data.options.forEach(option => {
        this.data.value.forEach(value => {
          console.log(value.value + '==' + option._id)
          if (value.value == option._id) {
            option.isChecked = true;
          }
        });
      });
    }
  }
  public close() {
    this.modalController.dismiss();
  }

  public submit() {
    this.data.value = [];
    this.data.options.forEach(entity => {
      if (entity.isChecked) {
        let data = {
          label: entity.label,
          value: entity._id
        }
        this.data.value.push(data);
      }
    });
    console.log(this.data, " this.data on submit");
    this.modalController.dismiss(this.data);
  }
  public search() {
    this.updateProfileService.searchEntities(this.data.dependent, this.data.field, this.searchInput, 1, this.limit).subscribe((data: any) => {
      console.log(data, 'data');
      if ((this.page * this.limit) < data.count) {
        this.page++
      }
      this.data.options = data.result.data;
    })
  }
}