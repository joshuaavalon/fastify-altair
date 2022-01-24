import fastifyPlugin from "fastify-plugin";
import { getDistDirectory, renderAltair } from "altair-static";
import fastifyStatic from "fastify-static";

import type { PluginOption } from "./plugin-option";

const plugin = fastifyPlugin<PluginOption>(
  async (fastify, opts = {}) => {
    const {
      path = "/altair",
      baseURL = "/altair/",
      endpointURL = "/graphql",
      ...renderOptions
    } = opts;

    await fastify.register(fastifyStatic, {
      root: getDistDirectory(),
      prefix: baseURL
    });

    const altairPage = renderAltair({ baseURL, endpointURL, ...renderOptions });

    fastify.get(path, (_req, res) => {
      res.type("text/html").send(altairPage);
    });
  },
  {
    name: "@joshuaavalon/plugin-altair",
    fastify: "3.x"
  }
);

export default plugin;
