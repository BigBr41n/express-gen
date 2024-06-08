#!/usr/bin/env node

import { createExpressProject } from "../commands/create";

const projectName = process.argv[2];

if (!projectName) {
  console.error("Please provide a project name.");
  process.exit(1);
}

createExpressProject(projectName);
