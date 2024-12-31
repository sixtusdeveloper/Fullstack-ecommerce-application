import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ecommerce-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faYoutube, faFacebook, faTwitter, faTruckFast);  // Add truck-fast icon here
  }
}
