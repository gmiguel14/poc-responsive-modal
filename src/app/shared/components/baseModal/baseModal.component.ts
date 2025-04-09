import { CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-base-modal',
  imports: [CommonModule, MatDialogModule, MatBottomSheetModule],
  templateUrl: './baseModal.component.html',
  styleUrl: './baseModal.component.scss',
})
export class BaseModalComponent {
  data: any;
  title: string = '';
  content: any;

  constructor(
    @Optional() private dialogRef?: MatDialogRef<BaseModalComponent>,
    @Optional() private bottomSheetRef?: MatBottomSheetRef<BaseModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData?: any,
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) private bottomSheetData?: any
  ) {
    this.data = this.dialogData || this.bottomSheetData || {};
  }

  ngOnInit() {
    console.log(this.data)
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close(true);
    } else if (this.bottomSheetRef) {
      this.bottomSheetRef.dismiss(true);
    }
  }
}
