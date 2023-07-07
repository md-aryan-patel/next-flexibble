import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ max: 20, min: 2 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.string().optional(),
  linkedinUrl: g.string().optional(),
  projects: g.relation(() => Project).list(),
});

const Project = g.model("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
