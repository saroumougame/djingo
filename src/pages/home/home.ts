import { Component, NgZone } from '@angular/core';

import { Platform } from 'ionic-angular';

declare var ApiAIPromises: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  answer;

  constructor(public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {

      ApiAIPromises.init({
        clientAccessToken: "e0118f70086448dc9d347e2d38ae873e"
      })
        .then((result) =>  console.log(result))


    });
  }


  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
      .then(({result: {fulfillment: {speech}}}) => {
        this.ngZone.run(()=> {
          this.answer = speech;
        });
      })
  }

}

