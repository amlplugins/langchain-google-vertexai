/**
 * @amlplugins/langchain-google-vertexai
 *
 * Thin namespaced re-export of the native @langchain/google-vertexai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * LangChain Google Vertex AI provider — Gemini and Anthropic models via Google Cloud Vertex region endpoints.
 */

import * as _sdk from "@langchain/google-vertexai";
export * from "@langchain/google-vertexai";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "@langchain/core";
export * as secondary from "@langchain/core";
export { _secondary };
