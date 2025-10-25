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
import * as PaymentProvidersAPI from './payment-providers';
import {
  CreatePaymentProviderRequest,
  ListPaymentProvidersResponse,
  PaymentProviderCreateParams,
  PaymentProviderDeleteResponse,
  PaymentProviderListParams,
  PaymentProviderResponse,
  PaymentProviderUpdateParams,
  PaymentProviders,
  UpdatePaymentProviderRequest,
} from './payment-providers';
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
  ActiveUsersResponse,
  Analytics,
  AnalyticsDashboardParams,
  BounceRateByPageMetric,
  BounceRateResponse,
  ChurnRateResponse,
  CohortAnalysisResponse,
  CohortData,
  CountryDataPoint,
  DashboardMetricsResponse,
  EventFilterOptionsResponse,
  EventsOverTimeDataPoint,
  ManualIdentifyRequest,
  ManualIdentifyResponse,
  OriginDataPoint,
  RecentEvent,
  RecentEventsResponse,
  ReturnRateResponse,
  SessionMetricsResponse,
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
import * as RevenueAPI from './revenue/revenue';
import {
  AttributionByOriginResponse,
  AttributionByUtmResponse,
  ConversionMetricsResponse,
  CustomerProfileResponse,
  DashboardResponse,
  OriginAttributionDataPoint,
  Payment,
  Revenue,
  RevenueDashboardParams,
  RevenueOverTimeDataPoint,
  RevenueTimelineParams,
  TimelineDataPoint,
  TimelineResponse,
  TopCustomer,
  TopCustomersResponse,
  UtmAttributionDataPoint,
} from './revenue/revenue';

export class V1 extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  revenue: RevenueAPI.Revenue = new RevenueAPI.Revenue(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  paymentProviders: PaymentProvidersAPI.PaymentProviders = new PaymentProvidersAPI.PaymentProviders(
    this._client,
  );
}

V1.Analytics = Analytics;
V1.Revenue = Revenue;
V1.Projects = Projects;
V1.Auth = Auth;
V1.PaymentProviders = PaymentProviders;

export declare namespace V1 {
  export {
    Analytics as Analytics,
    type ActiveUsersResponse as ActiveUsersResponse,
    type BounceRateByPageMetric as BounceRateByPageMetric,
    type BounceRateResponse as BounceRateResponse,
    type ChurnRateResponse as ChurnRateResponse,
    type CohortAnalysisResponse as CohortAnalysisResponse,
    type CohortData as CohortData,
    type CountryDataPoint as CountryDataPoint,
    type DashboardMetricsResponse as DashboardMetricsResponse,
    type EventFilterOptionsResponse as EventFilterOptionsResponse,
    type EventsOverTimeDataPoint as EventsOverTimeDataPoint,
    type ManualIdentifyRequest as ManualIdentifyRequest,
    type ManualIdentifyResponse as ManualIdentifyResponse,
    type OriginDataPoint as OriginDataPoint,
    type RecentEvent as RecentEvent,
    type RecentEventsResponse as RecentEventsResponse,
    type ReturnRateResponse as ReturnRateResponse,
    type SessionMetricsResponse as SessionMetricsResponse,
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
    type AnalyticsDashboardParams as AnalyticsDashboardParams,
  };

  export {
    Revenue as Revenue,
    type AttributionByOriginResponse as AttributionByOriginResponse,
    type AttributionByUtmResponse as AttributionByUtmResponse,
    type ConversionMetricsResponse as ConversionMetricsResponse,
    type CustomerProfileResponse as CustomerProfileResponse,
    type DashboardResponse as DashboardResponse,
    type OriginAttributionDataPoint as OriginAttributionDataPoint,
    type Payment as Payment,
    type RevenueOverTimeDataPoint as RevenueOverTimeDataPoint,
    type TimelineDataPoint as TimelineDataPoint,
    type TimelineResponse as TimelineResponse,
    type TopCustomer as TopCustomer,
    type TopCustomersResponse as TopCustomersResponse,
    type UtmAttributionDataPoint as UtmAttributionDataPoint,
    type RevenueDashboardParams as RevenueDashboardParams,
    type RevenueTimelineParams as RevenueTimelineParams,
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

  export {
    PaymentProviders as PaymentProviders,
    type CreatePaymentProviderRequest as CreatePaymentProviderRequest,
    type ListPaymentProvidersResponse as ListPaymentProvidersResponse,
    type PaymentProviderResponse as PaymentProviderResponse,
    type UpdatePaymentProviderRequest as UpdatePaymentProviderRequest,
    type PaymentProviderDeleteResponse as PaymentProviderDeleteResponse,
    type PaymentProviderCreateParams as PaymentProviderCreateParams,
    type PaymentProviderUpdateParams as PaymentProviderUpdateParams,
    type PaymentProviderListParams as PaymentProviderListParams,
  };
}
