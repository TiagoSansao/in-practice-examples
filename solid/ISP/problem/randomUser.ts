import { Actions } from './actions';

class RandomUser {
  private actions: Actions;

  constructor(actions: Actions) {
    this.actions = actions;
  }

  public watchVideo() {
    this.actions.watchVideo();
  }
}

const randomUserActions: Actions = new Actions();
const randomUser = new RandomUser(randomUserActions);

randomUser.watchVideo();
