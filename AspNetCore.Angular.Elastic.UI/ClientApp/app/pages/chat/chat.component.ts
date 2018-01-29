import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import sortBy from 'lodash-es/sortBy';
import { chatDemoData } from './chat.demo';
import Scrollbar from 'smooth-scrollbar';
import { MediaChange } from '@angular/flex-layout';
import { ROUTE_TRANSITION, componentDestroyed, MediaReplayService, ScrollbarService, ScrollbarComponent } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-chat',
  templateUrl: './chat.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ChatComponent implements OnInit, OnDestroy {

  scrollbar: Scrollbar;

  drawerOpen = true;
  drawerMode = 'side';
  drawerDisableClose = true;

  chats: any[];
  activeChat: any;
  newMessage: string;

  @ViewChild('scroll', { read: ElementRef }) scrollElement: ElementRef;
  @ViewChild('scroll') scroll: ScrollbarComponent;

  constructor(
    private cd: ChangeDetectorRef,
    private mediaReplayService: MediaReplayService
  ) { }

  ngOnInit() {
    this.chats = sortBy(chatDemoData, 'lastMessageTime').reverse();
    this.activeChat = this.chats[0];

    this.mediaReplayService.media$.takeUntil(componentDestroyed(this)).subscribe((change: MediaChange) => {
      const isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');

      if (isMobile) {
        this.drawerOpen = false;
        this.drawerMode = 'over';
        this.drawerDisableClose = false;
      } else {
        this.drawerOpen = true;
        this.drawerMode = 'side';
        this.drawerDisableClose = true;
      }
    });
  }

  setActiveChat(chat:any) {
    this.activeChat = chat;
  }

  send() {
    if (this.newMessage) {
      this.chats[0].messages.push({
        message: this.newMessage,
        when: moment(),
        who: 'me'
      });

      this.newMessage = '';

      this.cd.markForCheck();
      this.scrollToBottom();

      setTimeout(() => {
        this.chats[0].messages.push({
          message: 'Oh look! I can even answer you. ;)',
          when: moment(),
          who: 'partner'
        });

        this.cd.markForCheck();
        this.scrollToBottom();
      }, 1000);
    }
  }

  clearMessages(activeChat:any) {
    activeChat.messages.length = 0;
  }

  scrollToBottom() {
    setTimeout(() => {
      this.scroll.scrollbar.scrollTo(0, this.scroll.scrollbar.getSize().content.height, 200);
    }, 100)
  }

  ngOnDestroy() {}
}
