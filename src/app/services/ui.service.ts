import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private settingsSideBarOpen = false;
  private settingsSideBarOpenSubject$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public toggleSettingsSideBar() {
    this.settingsSideBarOpenSubject$.next(!this.settingsSideBarOpenSubject$.value);
  }

  public get settingsSideBarOpen$() {
    return this.settingsSideBarOpenSubject$.asObservable();
  }
}
