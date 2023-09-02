import { IService } from './serviceInterface';

export interface IServiceFactory {
  makeSvc(): IService;
}
