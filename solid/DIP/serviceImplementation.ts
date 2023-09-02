import { IService } from './serviceInterface';

export class Service implements IService {
  action(): void {
    console.log('vapo vapo');
  }
}
