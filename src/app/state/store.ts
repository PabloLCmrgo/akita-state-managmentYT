import { Todo } from '../todo.model';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';


/* export interface TodoState {
    key: string;
  }*/

export interface TodoState {
   todos:Todo[];
   isLoaded:boolean;
}

/* export function createInitialState(): SessionState {
  return {
    key: ''
  };
} */

export const getInitialState = () => {
    return {
      todos:[],
      isLoaded: false
    };
  }

/* @Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }
} */

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class TodoStore extends Store<TodoState> {

  constructor() {
    super(getInitialState());
  }
}