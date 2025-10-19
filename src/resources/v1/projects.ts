// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new project for the authenticated user's organization
   *
   * @example
   * ```ts
   * const projectResponse = await client.v1.projects.create({
   *   name: 'My Awesome Project',
   *   website_url: 'https://example.com',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectResponse> {
    return this._client.post('/api/v1/projects', { body, ...options });
  }

  /**
   * Update an existing project's details
   *
   * @example
   * ```ts
   * const projectResponse = await client.v1.projects.update(
   *   'id',
   * );
   * ```
   */
  update(id: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<ProjectResponse> {
    return this._client.put(path`/api/v1/projects/${id}`, { body, ...options });
  }

  /**
   * Get a list of all projects belonging to the authenticated user's organization
   *
   * @example
   * ```ts
   * const listProjectsResponse =
   *   await client.v1.projects.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListProjectsResponse> {
    return this._client.get('/api/v1/projects/list', options);
  }

  /**
   * Delete a project and all its associated data
   *
   * @example
   * ```ts
   * const project = await client.v1.projects.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProjectDeleteResponse> {
    return this._client.delete(path`/api/v1/projects/${id}`, options);
  }

  /**
   * Get a single project by its ID
   *
   * @example
   * ```ts
   * const projectResponse = await client.v1.projects.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<ProjectResponse> {
    return this._client.get(path`/api/v1/projects/${id}`, options);
  }
}

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

  created_at?: string;

  domain?: string;

  first_event_received_at?: string;

  name?: string;

  organization?: AuthAPI.Organization;

  organization_id?: string;

  project_token?: string;

  updated_at?: string;
}

export interface ProjectResponse {
  id?: string;

  allow_local_host?: boolean;

  created_at?: string;

  domain?: string;

  first_event_received_at?: string;

  name?: string;

  organization?: AuthAPI.Organization;

  organization_id?: string;

  project_token?: string;

  updated_at?: string;
}

export interface UpdateProjectRequest {
  allow_localhost?: boolean;

  name?: string;

  website_url?: string;
}

export type ProjectDeleteResponse = { [key: string]: string };

export interface ProjectCreateParams {
  name: string;

  website_url: string;

  allow_localhost?: boolean;
}

export interface ProjectUpdateParams {
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
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };
}
