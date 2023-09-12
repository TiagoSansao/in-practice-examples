import { UserActions } from './userActions';
import { ActionsFactory } from './actionsFactory';

class RandomUser {
  private actions: UserActions;

  constructor(actions: UserActions) {
    this.actions = actions;
  }

  public watchVideo() {
    this.actions.watchVideo();
  }
}
const randomUserActions: UserActions = ActionsFactory.createActions();
const randomUser = new RandomUser(randomUserActions);

randomUser.watchVideo();
