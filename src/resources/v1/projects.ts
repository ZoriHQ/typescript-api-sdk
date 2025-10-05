// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';

export class Projects extends APIResource {}

export interface CreateProjectRequest {
  name: string;

  website_url: string;

  allow_localhost?: boolean;
}

export interface ListProjectsResponse {
  projects?: Array<Project>;

  total?: number;
}

export interface Project {
  id?: string;

  allow_local_host?: boolean;

  domain?: string;

  first_event_received_at?: string;

  name?: string;

  organization?: AuthAPI.Organization;

  organization_id?: string;
}

export interface ProjectResponse {
  id?: string;

  allow_local_host?: boolean;

  domain?: string;

  first_event_received_at?: string;

  name?: string;

  organization?: AuthAPI.Organization;

  organization_id?: string;
}

export interface UpdateProjectRequest {
  allow_localhost?: boolean;

  name?: string;

  website_url?: string;
}

export declare namespace Projects {
  export {
    type CreateProjectRequest as CreateProjectRequest,
    type ListProjectsResponse as ListProjectsResponse,
    type Project as Project,
    type ProjectResponse as ProjectResponse,
    type UpdateProjectRequest as UpdateProjectRequest,
  };
}
