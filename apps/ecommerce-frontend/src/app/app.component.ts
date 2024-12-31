import { Component, inject, OnInit } from '@angular/core';
import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';  // Remove FaIconComponent import
import { RouterModule } from '@angular/router';
import { fontAwesomeIcons } from './shared/font-awesome-icons';  // Your custom icon list
import { NavbarComponent } from './layout/navbar/navbar.component'; // Import NavbarComponent
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],  // Remove FaIconComponent from here
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesomeIcons();
  }

  private initFontAwesomeIcons(): void {
    this.faConfig.defaultPrefix = 'far';  // Default prefix for Regular icons
    this.faIconLibrary.addIcons(...fontAwesomeIcons);  // Add your custom icons to the library
  }
}



//============== This code is working properly but it contains the FaIconComponent import in the AppComponent file. The FaIconComponent is not required in the AppComponent file. It should be removed from the imports array in the @Component decorator. The FaIconComponent should be imported in the NavbarComponent file, where it is used. The updated code is as follows:
// import { Component, inject, OnInit } from '@angular/core';
// import { FaIconLibrary, FaConfig, FaIconComponent } from '@fortawesome/angular-fontawesome';  // Add FaIconComponent
// import { RouterModule } from '@angular/router';
// import { fontAwesomeIcon } from './shared/font-awesome-icons';  // Your custom icon list
// import { NavbarComponent } from './layout/navbar/navbar.component'; // Import NavbarComponent
// import { FooterComponent } from './layout/footer/footer.component';

// @Component({
//   standalone: true,
//   imports: [RouterModule, NavbarComponent, FooterComponent, FaIconComponent],  // Add FaIconComponent here
//   selector: 'ecommerce-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   private faIconLibrary = inject(FaIconLibrary);
//   private faConfig = inject(FaConfig);

//   ngOnInit(): void {
//     this.initFontAwesomeIcons();
//   }

//   private initFontAwesomeIcons(): void {
//     this.faConfig.defaultPrefix = 'far';  // Default prefix for Regular icons
//     this.faIconLibrary.addIcons(...fontAwesomeIcon);  // Add your custom icons to the library
//   }
// }
