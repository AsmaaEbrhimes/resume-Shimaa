

import { Component, OnInit, HostListener, ElementRef } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(private el: ElementRef) {}
  data: any;
  animated = false;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data = [
      { title: "Business Domains Analyzed", number: 15, displayNumber: 0 },
      { title: "Feedback Reviews", number: 100, displayNumber: 0 },
      { title: "Linkedin Network Of Followers", number: 2500, displayNumber: 0 },
      { title: "Learnes Impected Via Interactive", number: 500, displayNumber: 0 },
      { title: "Certificates Showcaing Expertise", number: 50, displayNumber: 0 },
      { title: "Impactful Data Analysis Projects", number: 30, displayNumber: 0 },
    ];
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (!this.animated) {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset + window.innerHeight;

      if (scrollPosition > componentPosition + 100) {
        this.animated = true;
        this.animateCounters();
      }
    }
  }

  animateCounters() {
    this.data.forEach((item: any, index: number) => {
      const increment = item.number / 100;
      const duration = 2000;
      const stepTime = duration / 100;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= item.number) {
          item.displayNumber = item.number;
          clearInterval(timer);
        } else {
          item.displayNumber = Math.floor(current);
        }
      }, stepTime);
    });
  }
}
