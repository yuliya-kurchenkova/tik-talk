import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {catchError, map, startWith, switchMap} from 'rxjs';
import {ChatsService} from '../../../data/services/chats.sertvice';
import {ChatsBtnComponent} from '../chats-btn/chats-btn.component';

@Component({
  selector: 'app-chats-list',
  standalone: true,
  imports: [
    ChatsBtnComponent,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './chats-list.component.html',
  styleUrl: './chats-list.component.scss'
})
export class ChatsListComponent {
  chatsService = inject(ChatsService)

  filterChatsControl = new FormControl('')

  chats$ = this.chatsService.getMyChats()
    .pipe(
      switchMap(chats => {
        return this.filterChatsControl.valueChanges
          .pipe(
            startWith(''),
            map(inputValue => {
              return chats.filter(chat => {
                return `${chat.userFrom.lastName} ${chat.userFrom.firstName}`.toLowerCase().includes(inputValue?.toLowerCase() ?? '')
              })
            })
          )
      })
    )
}
