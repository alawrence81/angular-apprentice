import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Use styleUrls instead of styleUrl
})
export class AppComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch users from service
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  // Function to filter users based on search input
  filterUsers(value: string) {
    if (!value) {
      this.filteredUsers = this.users;
      return;
    }
    const filterValue = value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(filterValue) || user.email.toLowerCase().includes(filterValue)
    );
  }

  // Function to edit user
  editUser(user: any) {
    // Implement edit functionality here
    console.log('Editing user:', user);
  }
}
