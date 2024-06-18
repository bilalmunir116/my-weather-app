import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAirPollution]'
})
export class AirPollutionDirective implements OnChanges {
  private readonly airPollution = ['good', 'fair', 'air-moderate', 'poor', 'very-poor'];

  @Input('appAirPollution') airPollutionIndex: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.airPollutionIndex.currentValue !== undefined) {
      if (!changes.airPollutionIndex.firstChange) {
        this.renderer.removeClass(this.el.nativeElement,
          this.airPollution[changes.airPollutionIndex.previousValue - 1]);
      }
      this.renderer.addClass(this.el.nativeElement,
        this.airPollution[changes.airPollutionIndex.currentValue - 1]);
    }
  }

}
