import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  public dataEle: number[] = [1, 2, 3, 4];
  public index = signal<number>(0);
  public disableHere: any = false;
  public disableHere1: any = false;
  public data: any = this.dataEle[this.index()];
  public previous(): void {
    this.index.update((pre) => pre - 1);
    if (this.index() >= 0) {
      this.data = this.dataEle[this.index()];
    } else {
      this.disableHere1 = true;
      this.disableHere = false;
    }
  }
  public forward(index: any): void {
    this.data = this.dataEle[index];
    this.index.set(index);
    if (this.index() < this.dataEle.length) {
      this.disableHere = false;
      console.log(this.index());
    }
    if (this.index() >= 0) {
      this.disableHere1 = false;
    }
  }
  public next(): void {
    this.index.update((pre) => pre + 1);
    if (this.index() < this.dataEle.length) {
      this.data = this.dataEle[this.index()];
    } else {
      this.disableHere = true;
      this.disableHere1 = false;
    }
  }
}
