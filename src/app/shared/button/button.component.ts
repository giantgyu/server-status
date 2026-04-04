import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
} from "@angular/core";

@Component({
  selector: "button[appButton]",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) icon!: string;

  @HostListener("click") onClick() {
    console.log(`A button is clicked`);
    console.table(this.el);
  }

  //doing this now gives access to the element of the host component
  private el = inject(ElementRef);
}
