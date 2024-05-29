import fs from "fs";
import { execSync } from "child_process";
import chalk from "chalk";

function createExpressProject(projectName: string) {
  try {
    fs.mkdirSync(projectName);
    process.chdir(projectName);
    console.log(chalk.green(`Created directory: ${projectName}`));

    // Create src directory
    fs.mkdirSync("src");
    process.chdir("src");
    console.log(chalk.green("Created directory: src"));

    // Read template files
    const serverTemplate = fs.readFileSync("../templates/server.ts", "utf-8");
    const appTemplate = fs.readFileSync("../templates/app.ts", "utf-8");
    const routerTemplate = fs.readFileSync("../templates/router.ts", "utf-8");

    // Write template files to src directory
    fs.writeFileSync("server.ts", serverTemplate);
    console.log(chalk.green("Created file: src/server.ts"));

    fs.writeFileSync("app.ts", appTemplate);
    console.log(chalk.green("Created file: src/app.ts"));

    fs.writeFileSync("router.ts", routerTemplate);
    console.log(chalk.green("Created file: src/router.ts"));

    // Initialize npm
    process.chdir("..");
    execSync("npm init -y");
    console.log(chalk.green("Initialized npm"));

    // Install dependencies
    const dependencies = [
      "express",
      "mongoose",
      "cors",
      "helmet",
      "cookie-parser",
    ];
    const devDependencies = [
      "typescript",
      "@types/node",
      "ts-node-dev",
      "ts-node",
    ];

    execSync(`npm install ${dependencies.join(" ")} --save`);
    execSync(`npm install ${devDependencies.join(" ")} -D`);

    console.log(chalk.green("Installed devDependencies && dependencies"));

    // Modify package.json
    const packageJsonPath = "./package.json";
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.scripts = {
      ...packageJson.scripts,
      start: "ts-node-dev --respawn --transpileOnly src/server.ts",
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(chalk.green("Modified package.json"));

    console.log(
      chalk.green("Express.js TypeScript project created successfully!")
    );

    //creating some folders i need
    process.chdir("src");
    const directories = [
      "routes",
      "utils",
      "middleware",
      "controllers",
      "services",
      "config",
      "__tests__",
      "models",
    ];

    directories.forEach((dir) => {
      fs.mkdirSync(dir);
    });

    //creating db config file in utils
    process.chdir("utils");
    const db_config = fs.readFileSync("../../templates/db_config.ts", "utf-8");
    fs.writeFileSync("connect.db.ts", db_config);
    console.log(chalk.green("Created file: src/utils/connect.db.ts"));
  } catch (err) {
    console.error(chalk.red("Error creating Express.js project:", err));
  }
}

// Parse command-line arguments
const [, , projectName] = process.argv;
if (!projectName) {
  console.error(chalk.red("Please provide a project name."));
} else {
  createExpressProject(projectName);
}
