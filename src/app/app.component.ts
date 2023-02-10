import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "portfolio_v2";
  ngOnInit(): void {
    this.checkForMobileDevice(); //this is your custom function which is you want to call on body load
  }
  checkForMobileDevice() {
    type FlexDirection =
      | "column"
      | "inherit"
      | "-moz-initial"
      | "initial"
      | "revert"
      | "unset"
      | "column-reverse"
      | "row"
      | "row-reverse"
      | undefined;

    type Styles = {
      container: {
        flexDirection: FlexDirection;
      };
    };

    let menuContainer: HTMLElement = document.getElementById(
      "menu"
    ) as HTMLElement;
    let contentHeader: HTMLElement = document.getElementById(
      "home"
    ) as HTMLElement;
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      menuContainer.classList.add("d-none");
      menuContainer.setAttribute("display", "none !important");
      contentHeader.setAttribute("flex-direction", "column");
      contentHeader.setAttribute("z-index", "2");
    } else {
      // test
      menuContainer.classList.add("d-none");
      console.log("No mobile device found. Desktop mode.");
      contentHeader.setAttribute("style", "z-index: 2");
      contentHeader.setAttribute("style", "flex-direction: column");
      // contentHeader.style.flexDirection = column;
    }
  }
}
