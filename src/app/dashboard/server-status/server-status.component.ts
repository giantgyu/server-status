import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = "";
  statuses = ["online", "offline", "unknown"];
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentStatus =
        this.statuses[Math.floor(Math.random() * this.statuses.length)];
    }, 5000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
