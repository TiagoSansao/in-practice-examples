import { IServiceFactory } from './serviceFactoryInterface';

export class Application {
  private serviceFactory: IServiceFactory;

  constructor(serviceFactory: IServiceFactory) {
    this.serviceFactory = serviceFactory;
  }

  public start(): void {
    const service = this.serviceFactory.makeSvc();
    service.action();
  }
}
