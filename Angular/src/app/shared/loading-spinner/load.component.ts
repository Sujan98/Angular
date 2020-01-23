import { Component } from '@angular/core';

@Component({
    selector: 'loading-spinner',
    template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
    styleUrls: ['./load.component.css']
})

export class loadingComponent { }