import type {  RenderOptions } from "altair-static";

export interface PluginOption extends RenderOptions {
  /**
   * URL to set as the server endpoint.
   *
   * By default is `/graphql`
   */
  endpointURL?: string;
  /**
   * URL to be used as a base for relative URLs and hosting needed static files.
   *
   * By default is `/altair/`
   */
  baseURL?: string;
  /**
   * Path in which Altair will be accessible.
   *
   * By default is `/altair`
   */
  path?: string;
}
