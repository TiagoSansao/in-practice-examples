import { AdminActions } from './adminActions';
import { UserActions } from './userActions';

export class Actions implements UserActions, AdminActions {
  public watchVideo() {
    console.log('Watching video...');
    // Code implementation
  }
  public banUser() {
    console.log('Banning user...');
    // Code implementation
    // Comenta salve se você leu isso ^^
  }
}
