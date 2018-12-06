import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { fadeAnimation } from '../app/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  ourApp: Electron.BrowserWindow;
  appTitle: string;

  constructor(
    public elSvc: ElectronService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (elSvc.isElectron()) {
      this.ourApp = elSvc.getAppWindow();
    }
  }

  ngOnInit(): void {
    this.appTitle = 'YEA Smart App';
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
