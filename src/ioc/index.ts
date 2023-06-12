import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import type { IApiConfig } from '../types';

interface ContainerResources {
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  apiConfig: IApiConfig;
}

export const createIoCContainer = (): IoCContainer<ContainerResources> => {
  const ioc = new IoCContainer<ContainerResources>();

  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);

  return ioc;
};
