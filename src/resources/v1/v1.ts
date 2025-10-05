// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import {
  Account,
  Auth,
  AuthConfirmPasswordRecoveryParams,
  AuthLoginParams,
  AuthLogoutParams,
  AuthRefreshAccessTokenParams,
  AuthRegisterAccountParams,
  AuthRequestPasswordRecoveryParams,
  AuthResponse,
  MessageResponse,
  Organization,
} from './auth';
import * as ProjectsAPI from './projects';
import {
  CreateProjectRequest,
  ListProjectsResponse,
  Project,
  ProjectResponse,
  Projects,
  UpdateProjectRequest,
} from './projects';

export class V1 extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
}

V1.Projects = Projects;
V1.Auth = Auth;

export declare namespace V1 {
  export {
    Projects as Projects,
    type CreateProjectRequest as CreateProjectRequest,
    type ListProjectsResponse as ListProjectsResponse,
    type Project as Project,
    type ProjectResponse as ProjectResponse,
    type UpdateProjectRequest as UpdateProjectRequest,
  };

  export {
    Auth as Auth,
    type Account as Account,
    type AuthResponse as AuthResponse,
    type MessageResponse as MessageResponse,
    type Organization as Organization,
    type AuthConfirmPasswordRecoveryParams as AuthConfirmPasswordRecoveryParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthLogoutParams as AuthLogoutParams,
    type AuthRefreshAccessTokenParams as AuthRefreshAccessTokenParams,
    type AuthRegisterAccountParams as AuthRegisterAccountParams,
    type AuthRequestPasswordRecoveryParams as AuthRequestPasswordRecoveryParams,
  };
}
