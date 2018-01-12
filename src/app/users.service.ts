import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'

@Injectable()
export class UsersService {

    size = 8;

    constructor(private http: Http) { }

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
            .map(response => response.json())
            .map(response => response.results)
            .map(users => {
                return users.map(u => {
                    return {
                        name: u.name.first + ' ' + u.name.last,
                        image: u.picture.large,
                        geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
                    }
                })
            })
    }

changeSize(newSize) {
    this.size = newSize;
}

    users = [
        { name: 'user 1' },
        { name: 'user 2' },
        { name: 'user 3' },
        { name: 'user 4' },
        { name: 'user 5' }
    ]
}