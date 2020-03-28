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
  searchInput;
  toBeSearch;
  entity;
  page = 1;
  limit = 10;
  constructor(
    public modalController: ModalController,
    public updateProfileService: UpdateProfileService,
  ) { }

  ngOnInit() {
    this.toBeSearch = this.data.options;
    console.log(this.toBeSearch,"tobeasearch")
    if (this.data.value && this.data.value.length > 0) {
      this.toBeSearch.forEach(option => {
        option.isChecked = false;
        this.data.value.forEach(value => {
          if (value.value == option._id) {
            option.isChecked = true;
          }
        });
      });
    } else {
      this.toBeSearch.forEach(option => {
        option.isChecked = false;
      });
    }
  }
  public close() {
    this.modalController.dismiss();
  }

  public submit() {
    this.data.value = [];
    this.toBeSearch.forEach(entity => {
      if (entity.isChecked) {
        let data = {
          label: entity.label,
          value: entity._id
        }
        this.data.value.push(data);
      }
    });
    this.modalController.dismiss(this.data);
  }
  public search() {
    this.updateProfileService.searchEntities(this.data.dependent, this.data.field, this.searchInput, 1, this.limit).subscribe((data: any) => {
      if ((this.page * this.limit) < data.count) {
        this.page++
      }
      this.toBeSearch = data.result.data;
      console.log(this.toBeSearch.length);
    })
  }
}