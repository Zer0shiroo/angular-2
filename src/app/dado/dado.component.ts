import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  @Input() valor: number = 0;  // Cambiar a tipo number

  constructor() { }

  ngOnInit() {
  }
}
