import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigs } from '../app.config'

import { AbstractControl, ValidatorFn } from '@angular/forms';

export class validateFieldsService {
   static checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        return null;
    };
  }
}