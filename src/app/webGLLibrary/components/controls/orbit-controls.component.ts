import { Component, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls as OrbitControlsType, Scene } from 'three';
import * as createOrbitControls from 'three-orbit-controls';

const OrbitControls = createOrbitControls(THREE);

@Component({
  selector: 'ngx-orbit-controls',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrbitControlsComponent implements OnDestroy {

  @Input() enabled: boolean = true;
  @Input() enableRotate: boolean = true;
  @Input() enablePan: boolean = true;
  @Input() enableKeys: boolean = true;
  @Input() enableZoom: boolean = true;

  controls: OrbitControlsType;

  setupControls(camera, renderer) {
    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enabled = this.enabled;
    this.controls.enableKeys = true;

    this.controls.enableRotate = this.enableRotate;
    this.controls.rotateSpeed = 1.0;

    this.controls.enableZoom = this.enableZoom;
    this.controls.zoomSpeed = 2;

    this.controls.enablePan = this.enablePan;
    this.controls.keyPanSpeed = 100;

    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
  }

  ngOnDestroy(): void {
    this.controls.dispose();
  }

  updateControls(scene: Scene, camera) {
    this.controls.update();
  }

}
