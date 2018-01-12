import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    @Input() user;
    isMarked = false;

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.isMarked = true;
    }
}