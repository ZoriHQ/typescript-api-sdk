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
  ProjectCreateParams,
  ProjectDeleteResponse,
  ProjectResponse,
  ProjectUpdateParams,
  Projects,
  UpdateProjectRequest,
} from './projects';
import * as AnalyticsAPI from './analytics/analytics';
import {
  Analytics,
  CountryDataPoint,
  EventsOverTimeDataPoint,
  OriginDataPoint,
  RecentEvent,
  RecentEventsResponse,
  TopVisitor,
  TopVisitorsResponse,
  UniqueVisitorsDataPoint,
  UniqueVisitorsTimelineResponse,
  VisitorDataPoint,
  VisitorEvent,
  VisitorProfileResponse,
  VisitorsByCountryResponse,
  VisitorsByDeviceResponse,
  VisitorsByOriginResponse,
} from './analytics/analytics';

export class V1 extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
}

V1.Analytics = Analytics;
V1.Projects = Projects;
V1.Auth = Auth;

export declare namespace V1 {
  export {
    Analytics as Analytics,
    type CountryDataPoint as CountryDataPoint,
    type EventsOverTimeDataPoint as EventsOverTimeDataPoint,
    type OriginDataPoint as OriginDataPoint,
    type RecentEvent as RecentEvent,
    type RecentEventsResponse as RecentEventsResponse,
    type TopVisitor as TopVisitor,
    type TopVisitorsResponse as TopVisitorsResponse,
    type UniqueVisitorsDataPoint as UniqueVisitorsDataPoint,
    type UniqueVisitorsTimelineResponse as UniqueVisitorsTimelineResponse,
    type VisitorDataPoint as VisitorDataPoint,
    type VisitorEvent as VisitorEvent,
    type VisitorProfileResponse as VisitorProfileResponse,
    type VisitorsByCountryResponse as VisitorsByCountryResponse,
    type VisitorsByDeviceResponse as VisitorsByDeviceResponse,
    type VisitorsByOriginResponse as VisitorsByOriginResponse,
  };

  export {
    Projects as Projects,
    type CreateProjectRequest as CreateProjectRequest,
    type ListProjectsResponse as ListProjectsResponse,
    type Project as Project,
    type ProjectResponse as ProjectResponse,
    type UpdateProjectRequest as UpdateProjectRequest,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
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
