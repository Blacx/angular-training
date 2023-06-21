import { Component, ViewChild } from '@angular/core';
import { createMask } from '@ngneat/input-mask';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title = 'learn-ngx-translation';
  @ViewChild('frm') commentForm: NgForm;
  emailMask = createMask({ alias: 'email' });
  npwpMask = createMask('99.999.999.9-999.999');

  constructor(
      public translate: TranslateService,
      private routes: Router,
      private route: ActivatedRoute
    ) {
    translate.addLangs(['en', 'id', 'fr']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.translate.use(localStorage.getItem('lang') || 'en');
  }
  
  onSubmit(form: NgForm) {
    const navigationExtras: NavigationExtras = {
      state: { 
        email: this.commentForm.value.email
      },
    };
    this.routes.navigate(['/done'], navigationExtras);
  }

  onBack() {
    this.routes.navigate(['/']);
  }
}
