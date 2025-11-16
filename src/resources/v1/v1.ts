// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthLoginParams, LoginRequest, LoginResponse } from './auth';
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
  AnalyticsRetrieveTimelineParams,
  AnalyticsRetrieveTimelineResponse,
  ChurnRateResponse,
  CohortAnalysisResponse,
  CohortData,
  EventFilterOptionsResponse,
  EventsOverTimeDataPoint,
  ManualIdentifyRequest,
  ManualIdentifyResponse,
  RecentEvent,
  RecentEventsResponse,
  TopVisitor,
  TopVisitorsResponse,
  VisitorDataPoint,
  VisitorEvent,
  VisitorProfileResponse,
  VisitorsByDeviceResponse,
} from './analytics/analytics';
import * as PaymentProvidersAPI from './payment-providers/payment-providers';
import {
  CreatePaymentProviderRequest,
  ListPaymentProvidersResponse,
  PaymentProviderCreateParams,
  PaymentProviderDeleteResponse,
  PaymentProviderInstructionsParams,
  PaymentProviderListParams,
  PaymentProviderResponse,
  PaymentProviderUpdateParams,
  PaymentProviders,
  ProviderField,
  ProviderInstructionsResponse,
  UpdatePaymentProviderRequest,
} from './payment-providers/payment-providers';
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
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  revenue: RevenueAPI.Revenue = new RevenueAPI.Revenue(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  paymentProviders: PaymentProvidersAPI.PaymentProviders = new PaymentProvidersAPI.PaymentProviders(
    this._client,
  );
}

V1.Auth = Auth;
V1.Analytics = Analytics;
V1.Revenue = Revenue;
V1.Projects = Projects;
V1.PaymentProviders = PaymentProviders;

export declare namespace V1 {
  export {
    Auth as Auth,
    type LoginRequest as LoginRequest,
    type LoginResponse as LoginResponse,
    type AuthLoginParams as AuthLoginParams,
  };

  export {
    Analytics as Analytics,
    type ChurnRateResponse as ChurnRateResponse,
    type CohortAnalysisResponse as CohortAnalysisResponse,
    type CohortData as CohortData,
    type EventFilterOptionsResponse as EventFilterOptionsResponse,
    type EventsOverTimeDataPoint as EventsOverTimeDataPoint,
    type ManualIdentifyRequest as ManualIdentifyRequest,
    type ManualIdentifyResponse as ManualIdentifyResponse,
    type RecentEvent as RecentEvent,
    type RecentEventsResponse as RecentEventsResponse,
    type TopVisitor as TopVisitor,
    type TopVisitorsResponse as TopVisitorsResponse,
    type VisitorDataPoint as VisitorDataPoint,
    type VisitorEvent as VisitorEvent,
    type VisitorProfileResponse as VisitorProfileResponse,
    type VisitorsByDeviceResponse as VisitorsByDeviceResponse,
    type AnalyticsRetrieveTimelineResponse as AnalyticsRetrieveTimelineResponse,
    type AnalyticsRetrieveTimelineParams as AnalyticsRetrieveTimelineParams,
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
    PaymentProviders as PaymentProviders,
    type CreatePaymentProviderRequest as CreatePaymentProviderRequest,
    type ListPaymentProvidersResponse as ListPaymentProvidersResponse,
    type PaymentProviderResponse as PaymentProviderResponse,
    type ProviderField as ProviderField,
    type ProviderInstructionsResponse as ProviderInstructionsResponse,
    type UpdatePaymentProviderRequest as UpdatePaymentProviderRequest,
    type PaymentProviderDeleteResponse as PaymentProviderDeleteResponse,
    type PaymentProviderCreateParams as PaymentProviderCreateParams,
    type PaymentProviderUpdateParams as PaymentProviderUpdateParams,
    type PaymentProviderListParams as PaymentProviderListParams,
    type PaymentProviderInstructionsParams as PaymentProviderInstructionsParams,
  };
}
