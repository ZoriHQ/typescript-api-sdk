// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { EventRecentParams, Events } from './events';
import * as VisitorsAPI from './visitors';
import { VisitorByCountryParams, VisitorByDeviceParams, VisitorByOriginParams, Visitors } from './visitors';

export class Analytics extends APIResource {
  visitors: VisitorsAPI.Visitors = new VisitorsAPI.Visitors(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export interface CountryDataPoint {
  country_code?: string;

  unique_visitors?: number;
}

export interface OriginDataPoint {
  origin?: string;

  unique_visitors?: number;
}

export interface RecentEvent {
  browser_name?: string;

  client_timestamp_utc?: string;

  device_type?: string;

  event_name?: string;

  location_city?: string;

  location_country_iso?: string;

  page_path?: string;

  page_url?: string;

  referrer_url?: string;

  visitor_id?: string;
}

export interface RecentEventsResponse {
  events?: Array<RecentEvent>;

  total?: number;
}

export interface VisitorDataPoint {
  desktop?: number;

  mobile?: number;

  tablet?: number;

  timestamp?: string;

  unknown?: number;
}

export interface VisitorsByCountryResponse {
  data?: Array<CountryDataPoint>;
}

export interface VisitorsByDeviceResponse {
  data?: Array<VisitorDataPoint>;
}

export interface VisitorsByOriginResponse {
  data?: Array<OriginDataPoint>;
}

Analytics.Visitors = Visitors;
Analytics.Events = Events;

export declare namespace Analytics {
  export {
    type CountryDataPoint as CountryDataPoint,
    type OriginDataPoint as OriginDataPoint,
    type RecentEvent as RecentEvent,
    type RecentEventsResponse as RecentEventsResponse,
    type VisitorDataPoint as VisitorDataPoint,
    type VisitorsByCountryResponse as VisitorsByCountryResponse,
    type VisitorsByDeviceResponse as VisitorsByDeviceResponse,
    type VisitorsByOriginResponse as VisitorsByOriginResponse,
  };

  export {
    Visitors as Visitors,
    type VisitorByCountryParams as VisitorByCountryParams,
    type VisitorByDeviceParams as VisitorByDeviceParams,
    type VisitorByOriginParams as VisitorByOriginParams,
  };

  export { Events as Events, type EventRecentParams as EventRecentParams };
}
