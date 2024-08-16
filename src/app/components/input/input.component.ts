import { Component } from '@angular/core';
import { cilImage, cilMic } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { HttpClient } from '@angular/common/http';
import { ImageToTextService } from '../../services/image-to-text.service';
import { GridModule } from '@coreui/angular';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    IconDirective,
    GridModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  icons = { cilImage, cilMic };
  
  fileName = '';

  constructor(private http: HttpClient, private itts: ImageToTextService) {}

  onFileSelected(event: any) {

      const file:File = event.target.files[0];

      if (file) {
          this.fileName = file.name;
          console.log(this.fileName);
          this.itts.processImage(file).subscribe(response => {
            console.log(">>", response);
          });
      }
  }

  public xxx(){
    this.itts.itt();
  }
}
