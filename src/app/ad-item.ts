import { Type } from '@angular/core';
import { ParentModel } from './parent-model';

export class AdItem {
  constructor(public component: Type<any>, public data: ParentModel) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
