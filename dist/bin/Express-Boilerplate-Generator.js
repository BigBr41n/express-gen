#!/usr/bin/env ts-node
import "ts-node/register";
import { createExpressProject } from "../commands/create.js";
const projectName = process.argv[2];
if (!projectName) {
  console.error("Please provide a project name.");
  process.exit(1);
}
createExpressProject(projectName);
