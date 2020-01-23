import { OnInit, Input } from '@angular/core';

export class Shop implements OnInit {
    @Input() public amounta: number = 8;
    constructor(public name: string, public amount: number) {
        this.amounta = 8;
    }
    ngOnInit() {
    }
}