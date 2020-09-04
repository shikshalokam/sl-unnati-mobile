import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateProfileService } from '../update-profile/update-profile.service';
import { ErrorHandle } from '../error-handling.service';
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
  selectedValues = [];
  limit = 10;
  constructor(
    public modalController: ModalController,
    public updateProfileService: UpdateProfileService,
    public errorHandle: ErrorHandle
  ) { }

  ngOnInit() {
    this.selectedValues = [];
    this.toBeSearch = this.data.options;
    if (this.data.value && this.data.value.length > 0) {
      this.toBeSearch.forEach(option => {
        option.isChecked = false;
        this.data.value.forEach(value => {
          if (value.value && !value._id) {
            value._id = value.value
          }
          if (!value.value && value._id) {
            value.value = value._id
          }
          if (value.value == option._id) {
            option.isChecked = true;
            this.selectedValues.push(value);
          }
        });
      });
    } else {
      this.toBeSearch.forEach(option => {
        if (option.value && !option._id) {
          option._id = option.value
        }
        if (!option.value && option._id) {
          option.value = option._id
        }
        option.isChecked = false;
      });
      this.selectedValues = [];
    }
  }
  public close() {
    this.modalController.dismiss();
  }

  public submit() {
    this.data.value = [];
    if (this.selectedValues && this.selectedValues.length > 0) {
      this.selectedValues.forEach(entity => {
        if (entity.isChecked) {
          let data = {
            label: entity.label,
            value: entity._id
          }
          this.data.value.push(data);
        }
      });
    }
    this.modalController.dismiss(this.data);
  }
  selectedEntity(data) {
    if (this.selectedValues.length > 0) {
      let mapped = false;
      this.selectedValues.forEach(element => {
        if (element._id == data._id) {
          mapped = true;
          element.isChecked = data.isChecked;
        }
      });
      if (!mapped) {
        this.selectedValues.push(data);
      }
    } else {
      this.selectedValues.push(data);
    }
  }

  public search() {
    this.updateProfileService.searchEntities(this.data.dependent, this.data.field, this.searchInput, 1, this.limit).subscribe((data: any) => {
      if ((this.page * this.limit) < data.count) {
        this.page++
      }
      if (this.selectedValues && this.selectedValues.length > 0) {
        this.selectedValues.forEach(option => {
          data.result.data.forEach(value => {
            if (value._id == option._id) {
              option.isChecked = true;
              value.isChecked = true;
            }
          });
        });
      }
      this.toBeSearch = data.result.data;
    }, error => {
      this.errorHandle.errorHandle(error);
    })
  }
}