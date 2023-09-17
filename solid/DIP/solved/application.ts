import { IServiceFactory } from './serviceFactoryInterface';
import { Service } from './serviceImplementation';

export class Application {
  private serviceFactory: IServiceFactory;

  constructor(serviceFactory: IServiceFactory) {
    this.serviceFactory = serviceFactory;
  }

  public start(): void {
    const service: Service = this.serviceFactory.makeSvc();
    service.action();
  }
}
