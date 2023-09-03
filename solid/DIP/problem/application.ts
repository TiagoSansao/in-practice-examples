import { Service } from './service';

export class Application {
  private service: Service;

  constructor() {
    this.service = new Service();
  }
  public start(): void {
    this.service.action();
  }
}
