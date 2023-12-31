#!/bin/env node

// B68/CLI command tool
// Usage: b68 <command>
// Commands:
//   help    Show this help
//   cs      Create new service along with controller and routes
//   cso     Create new service only
//   cp      Create new provider
//   ch      Create new helper of type factory or client
//   ct      Create new type
//   cv      Create new view
//   ci      Create new interface

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const __dirname = path.resolve();

const commands = {
    help: () => {
        console.log("B68/CLI command tool");
        console.log("Usage: b68 <command>");
        console.log("Commands:");
        console.log("  help    Show this help");
        console.log("  cs      Create new service along with controller and routes");
        console.log("  cso     Create new service only");
        console.log("  cp      Create new provider");
        console.log("  ch      Create new helper of type factory or client");
        console.log("  ct      Create new type");
        console.log("  ci      Create new interface");
        process.exit(0);
    },
    cs: () => {
        const serviceName = args[1];
        const servicePath = path.join(
            __dirname,
            "services",
            serviceName.toLocaleLowerCase() + ".service.ts",
        );
        const controllerPath = path.join(
            __dirname,
            "controllers",
            serviceName.toLocaleLowerCase() + ".controller.ts",
        );
        const routesPath = path.join(
            __dirname,
            "routes",
            serviceName.toLocaleLowerCase() + ".routes.ts",
        );

        const serviceTemplate = `export default class ${serviceName} {}`;
        const controllerTemplate = `import ${serviceName}Service from '../services/${serviceName.toLocaleLowerCase()}.service';\nimport { Context } from 'hono'\nimport { makeResponse } from '../libs'\n\nexport default class ${serviceName}Controller extends ${serviceName}Service {}\n`;
        const routesTemplate = `import { Hono } from 'hono';\nimport ${serviceName}Controller from '../controllers/${serviceName.toLocaleLowerCase()}.controller';\nconst router = new Hono()\n\nexport default router\n`;

        if (fs.existsSync(servicePath || controllerPath || routesPath)) {
            console.log("Already exists");
            process.exit(1);
        }

        fs.writeFileSync(servicePath, serviceTemplate);
        fs.writeFileSync(controllerPath, controllerTemplate);
        fs.writeFileSync(routesPath, routesTemplate);

        console.log("Service created successfully");
    },
    cso: () => {
        const serviceName = args[1];
        const servicePath = path.join(
            __dirname,
            "services",
            serviceName.toLocaleLowerCase() + ".service.ts",
        );

        const serviceTemplate = `export default class ${serviceName} {}`;

        if (fs.existsSync(servicePath)) {
            console.log("Already exists");
            process.exit(1);
        }

        fs.writeFileSync(servicePath, serviceTemplate);

        console.log("Service created successfully");
    },
    cp: () => {
        const providerName = args[1];
        const providerPath = path.join(
            __dirname,
            "providers",
            providerName.toLocaleLowerCase() + ".provider.ts",
        );

        const providerTemplate = `export default class ${providerName} {}`;

        if (fs.existsSync(providerPath)) {
            console.log("Already exists");
            process.exit(1);
        }

        fs.writeFileSync(providerPath, providerTemplate);

        console.log("Provider created successfully");
    },
    ch: () => {
        const helperName = args[1];
        let helperType = args[2];

        if (!helperType || (helperType !== "--factory" && helperType !== "--client")) {
            console.log("Invalid helper type");
        }

        helperType = helperType === "--factory" ? "factory" : "client";
        const isFactory = helperType === "factory";

        const helperPath = path.join(
            __dirname,
            "helpers",
            helperName.toLocaleLowerCase() + isFactory ? ".factory" + ".ts" : "_client" + ".ts",
        );

        const helperTemplate = `export default class ${helperName} {}`;

        if (fs.existsSync(helperPath)) {
            console.log("Already exists");
            process.exit(1);
        }

        fs.writeFileSync(helperPath, helperTemplate);

        console.log("Helper created successfully");
    },
    ct: () => {
        const typeName = args[1];
        let typeCase = args[2];

        if (!typeCase || (typeCase !== "--interface" && typeCase !== "--type")) {
            console.log("Invalid type case");
            process.exit(1);
        }

        typeCase = typeCase === "--interface" ? "interface" : "type";
        const isInterface = typeCase === "interface";

        const typePath = path.join(__dirname, "types", "index.d.ts");

        const typeTemplate = `\nexport ${typeCase} ${typeName} ${isInterface ? "{}" : "= any"}`;

        fs.appendFileSync(typePath, typeTemplate);

        console.log("Type/Interface created successfully");
    },
    ci: () => {
        console.log("Not implemented yet");
    },
};

const command = args[0];

if (!command) {
    console.log("No command provided");
    process.exit(1);
}

if (!commands[command]) {
    console.log("Invalid command");
    process.exit(1);
}

commands[command]();

// Path: packages/cli/index.ts
