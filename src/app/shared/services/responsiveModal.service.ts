import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveModalService {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
  ) {}

  open(component: any, data?: any): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        take(1),
        map((result) => result.matches)
      )
      .subscribe((isMobile) => {
        if (isMobile) {
          this.bottomSheet.open(component, { data });
        } else {
          this.dialog.open(component, { data });
        }
      });
  }
}
