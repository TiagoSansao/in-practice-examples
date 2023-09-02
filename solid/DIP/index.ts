import { Application } from './application';
import { ServiceFactoryImplementation } from './serviceFactoryImplementation';

const serviceFactory = new ServiceFactoryImplementation();
const application = new Application(serviceFactory);
