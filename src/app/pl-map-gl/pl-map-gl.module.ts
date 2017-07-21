import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapGlComponent } from './map/map.component'

@NgModule({
  imports: [ CommonModule ],
  declarations: [MapGlComponent],
  exports: [MapGlComponent]
})
export class PlMapGlModule { 


}
