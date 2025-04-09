import { CommonModule } from '@angular/common';
import { Component, Optional } from '@angular/core';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-base-modal',
  imports: [CommonModule, MatDialogModule, MatBottomSheetModule],
  templateUrl: './baseModal.component.html',
  styleUrl: './baseModal.component.scss',
})
export class BaseModalComponent {
  title: string = '';
  content: any;

  constructor(
    @Optional() private dialogRef?: MatDialogRef<BaseModalComponent>,
    @Optional() private bottomSheetRef?: MatBottomSheetRef<BaseModalComponent>
  ) {}

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else if (this.bottomSheetRef) {
      this.bottomSheetRef.dismiss();
    }
  }
}
