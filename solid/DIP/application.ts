import { IServiceFactory } from './serviceFactoryInterface';

export class Application {
  constructor(serviceFactory: IServiceFactory) {
    const service = serviceFactory.makeSvc();
    service.action();
  }
}
