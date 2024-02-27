// user.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<any[]> {
    // Mock user data, replace with actual API call if needed
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Main St' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '456 Elm St' },
      // Add more users as needed
    ];
    return of(users);
  }
}
