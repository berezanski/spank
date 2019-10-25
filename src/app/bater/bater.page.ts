import { Component, OnInit } from '@angular/core';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';


@Component({
  selector: 'app-bater',
  templateUrl: './bater.page.html',
  styleUrls: ['./bater.page.scss'],
})
export class BaterPage implements OnInit {
  contagem = 500;
  x = 0;
  y = 0;
  z = 0;
  forca ;
  constructor(private deviceMotion: DeviceMotion) { }
  pegaAceleracaoCorrente() {
    this.deviceMotion.getCurrentAcceleration().then(

      (acceleration: DeviceMotionAccelerationData) => {
        if (acceleration.x > this.x) {
          this.x = acceleration.x;
        }
        if (acceleration.y > this.y) {
          this.y = acceleration.y;
        }
        if (acceleration.z > this.z) {
          this.z = acceleration.z;
        }
      }


    );
  }
  verAceleracao() {
    var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
    });
  }
  ngOnInit() {
    this.contaSegundo();
    this.pegaAceleracao();
  }

  pegaAceleracao() {
    this.pegaAceleracaoCorrente();
    if (this.contagem == 0) {
      this.forca=(this.x+this.y+this.z)/3;
      return;
    }
    setTimeout(() => {
      this.contagem = this.contagem - 1;
      this.pegaAceleracao();
    }, 100);
  }
  contaSegundo() {
    if (this.contagem == 0) {
      return;
    }
    setTimeout(() => {
      this.contagem = this.contagem - 1;
      this.contaSegundo();
    }, 1000);
  }

}
