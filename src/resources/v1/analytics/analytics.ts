// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { EventRecentParams, Events } from './events';
import * as VisitorsAPI from './visitors';
import {
  VisitorByCountryParams,
  VisitorByDeviceParams,
  VisitorByOriginParams,
  VisitorProfileParams,
  VisitorTimelineParams,
  VisitorTopParams,
  Visitors,
} from './visitors';

export class Analytics extends APIResource {
  visitors: VisitorsAPI.Visitors = new VisitorsAPI.Visitors(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export interface CountryDataPoint {
  country_code?: string;

  percentage?: number;

  unique_visitors?: number;
}

export interface EventsOverTimeDataPoint {
  event_count?: number;

  timestamp?: string;
}

export interface OriginDataPoint {
  origin?: string;

  percentage?: number;

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

export interface TopVisitor {
  browser_name?: string;

  device_type?: string;

  event_count?: number;

  first_seen?: string;

  last_seen?: string;

  location_city?: string;

  location_country_iso?: string;

  visitor_id?: string;
}

export interface TopVisitorsResponse {
  total?: number;

  visitors?: Array<TopVisitor>;
}

export interface UniqueVisitorsDataPoint {
  desktop?: number;

  mobile?: number;

  timestamp?: string;
}

export interface UniqueVisitorsTimelineResponse {
  data?: Array<UniqueVisitorsDataPoint>;
}

export interface VisitorDataPoint {
  desktop?: number;

  mobile?: number;

  timestamp?: string;

  unknown?: number;
}

export interface VisitorEvent {
  browser_name?: string;

  client_timestamp_utc?: string;

  device_type?: string;

  event_name?: string;

  page_path?: string;

  page_url?: string;

  referrer_url?: string;
}

export interface VisitorProfileResponse {
  events?: Array<VisitorEvent>;

  events_over_time?: Array<EventsOverTimeDataPoint>;

  first_referrer_url?: string;

  first_seen?: string;

  first_traffic_origin?: string;

  last_seen?: string;

  location_city?: string;

  location_country_iso?: string;

  total_events?: number;

  visitor_id?: string;
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
    Visitors as Visitors,
    type VisitorByCountryParams as VisitorByCountryParams,
    type VisitorByDeviceParams as VisitorByDeviceParams,
    type VisitorByOriginParams as VisitorByOriginParams,
    type VisitorProfileParams as VisitorProfileParams,
    type VisitorTimelineParams as VisitorTimelineParams,
    type VisitorTopParams as VisitorTopParams,
  };

  export { Events as Events, type EventRecentParams as EventRecentParams };
}
