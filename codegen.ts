import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/schema",
  // documents: "src/pages/graphql/index.graphql",
  generates: {
    "src/graphql/generated/client.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-query"],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
