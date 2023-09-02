import { IServiceFactory } from './serviceFactoryInterface';
import { Service } from './serviceImplementation';

export class ServiceFactoryImplementation implements IServiceFactory {
  makeSvc(): Service {
    return new Service();
  }
}
