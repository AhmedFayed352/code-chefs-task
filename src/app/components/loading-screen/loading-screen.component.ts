import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [AsyncPipe , NgIf],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.css'
})
export class LoadingScreenComponent {
  constructor(public _LoaderService:LoaderService){}
}
