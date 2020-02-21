import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit() {
  }

}
