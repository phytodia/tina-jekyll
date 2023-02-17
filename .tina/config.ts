import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "b98f5e71-04b2-4f13-b35a-c5eb4363ce4f", // Get this from tina.io
  token: "cf2754f109016ab845ea64763cded00aa686721e", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/.",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "/.",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
