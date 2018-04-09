import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  NgZone
} from '@angular/core';
import { requestFullScreen, SphereComponent } from '../../webGLLibrary';

@Component({
  selector: 'app-spheres',
  templateUrl: './spheres.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpheresComponent implements AfterViewInit {
  count: number = 50;
  balls: any[] = this.createSpheres();
  isVRMode: boolean = false;

  @ViewChildren(SphereComponent/* , { descendants: true } */)
  spheres: any;

  constructor(private element: ElementRef, private ngZone: NgZone) {}


  test(parent) {
    console.log(parent);
    console.log('width: ', parent.clientWidth);
    console.log('height: ', parent.clientHeight);
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  animate() {
    const balls = this.spheres.toArray();
    const zone = this.ngZone;

    let circleRotation = Math.random() * Math.PI * 2;
    const circle = Math.floor(Math.random() * 100 + 300);
    const size = Math.random();

    function animate() {
      for (const shape of balls) {
        shape.positionZ = Math.cos(circleRotation) * circle;
        circleRotation += 0.0002;
      }

      zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));
    }

    zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));
  }

  createSpheres(): any[] {
    const result = [];
    for (let i = 0; i < this.count; i++) {
      result.push({
        x: (Math.random() - 0.5) * 250,
        y: (Math.random() - 0.5) * 250,
        z: (Math.random() - 0.5) * 250
      });
    }
    return result;
  }

  onFullScreen(): void {
    requestFullScreen(document.body);
  }
}
