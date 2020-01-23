import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-back',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.css']
})
export class backComponent {
    @Input() message: string;
    @Output() click = new EventEmitter<void>();

    close() {
        this.click.emit();
    }
}