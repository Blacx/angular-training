import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve) => {
      setTimeout(() => {
        const mockUsers: User[] = [
          { id: 1, name: 'Roger', email: 'roger@example.com', phone: '1234567890' },
          { id: 2, name: 'Robert', email: 'robert@example.com', phone: '9876543210' },
          { id: 3, name: 'Rudholf', email: 'Rudholf@example.com', phone: '4567891230' },
        ];
        resolve(mockUsers);
      }, 2000);
    });
  }
}