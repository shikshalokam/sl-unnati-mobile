import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastMessageService } from 'src/app/core';
import * as _ from 'underscore';
@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss'],
})
export class CategorySelectComponent implements OnInit {
  @Input() categories;
  @Input() selectedCategories = [];
  @Output() onSubmit = new EventEmitter();
  catgeoryForm: FormGroup;
  categoryData = [];
  otherCategoryValue;
  otherCategory = { input: 'text', field: 'otherCategories', value: '', show: false, validation: { required: true } }
  constructor(
    public fb: FormBuilder,
    public toast: ToastMessageService
  ) { }
  ngOnInit() {
    this.categoryData.push(this.categories);
    this.categoryData.push(this.otherCategory);
    if (this.selectedCategories.length) {
      this.selectedCategories.forEach(selctedCatgory => {
        if (selctedCatgory.label == "Others") {
          this.otherCategory.value = selctedCatgory.value;
          this.otherCategory.show = true;
        }
      })
      this.validateOptions();
    } else {

      this.prepareForm();
    }
  }
  public prepareForm() {
    const controls = {};
    const validationsArray = [];
    this.categoryData.forEach(element => {
      if (element.field == 'otherCategories') {
        if (element.validation.required) {
          element.validation.name = "required",
            validationsArray.push(
              Validators.required
            );
        }
        controls[element.field] = new FormControl('', validationsArray);
      }
    })
    this.catgeoryForm = this.fb.group(
      controls
    );
  }
  validateOptions() {
    this.categoryData.forEach(cd => {
      if (cd.input == 'select') {
        cd.options.forEach(element => {
          let index = _.findIndex(this.selectedCategories, (item) => {
            return item.label == element.label;
          });
          if (index > -1) {
            cd.options[index].isChecked = true;
          }
        });
      }
    });
    this.selectedCategories.forEach(option => {
      if (option.label == "Others") {
        this.otherCategory.show = true;
      }
    });
    this.prepareForm();
  }
  categorySelect(event, option) {
    if (option.label == "Others") {
      this.categoryData.forEach(data => {
        if (data.field == 'otherCategories') {
          data.show = event.detail.checked;
          data.value = '';
        }
      })
    }
    option.isChecked = event.detail.checked;
  }

  submit() {
    let valid = true;
    this.selectedCategories = [];
    this.categoryData.forEach(element => {
      if (element.input == 'select') {
        element.options.forEach(option => {
          if (option.isChecked) {
            if (option.value == "others") {
              if (this.catgeoryForm.value.otherCategories) {
                option.value = this.catgeoryForm.value.otherCategories;
              } else {
                valid = false;
              }
            }
            this.selectedCategories.push(option);
          }
        });
      }
    });
    valid ? this.onSubmit.emit(this.selectedCategories) : this.toast.showMessage('MESSAGES.PLEASE_ADD_OTHERCATEGORIES', 'danger')
  }
  close() {
    this.onSubmit.emit(this.selectedCategories);
  }
}