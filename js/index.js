#!/usr/bin/env node

const fs = require('fs');
const yamlLint = require('yaml-lint');

function lintYAMLFile(filePath) {
  const pendingMessage = `Checking ${filePath} ... [pending]`;
  process.stdout.write(pendingMessage);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        process.stdout.write(`\r${pendingMessage.replace('[pending]', '[ERROR]'.padEnd('[pending]'.length))}\n`);
        reject(new Error(`Error reading YAML file: ${filePath}`));
      } else {
        yamlLint.lint(data)
          .then(() => {
            process.stdout.write(`\r${pendingMessage.replace('[pending]', '[OK]'.padEnd('[pending]'.length))}\n`);
            resolve();
          })
          .catch(error => {
            process.stdout.write(`\r${pendingMessage.replace('[pending]', '[ERROR]'.padEnd('[pending]'.length))}\n`);
            reject(new Error(`Checking YAML file ${filePath} Unsuccessful.\nError: ${error}\n\nYAML file check failed. Exiting ...`));
          });
      }
    });
  });
}

async function checkYAMLFilesSequentially() {
  const files = [
    '../.github/workflows/4.yml'
    '../.github/workflows/esp32-linux.yml'
    '../.github/workflows/debian-armel.yml'
    '../.github/workflows/devuan-armel.yml'
    '../.github/workflows/3ds.yml',
    '../.github/workflows/dtale.yml',
    '../.github/workflows/c.yml',
    '../.github/dependabot.yml',
  ];

  const checkStart = Date.now();
  console.log('Starting check...');
  console.log('YAML Checker v0.0.0\n');
  for (const file of files) {
    try {
      await lintYAMLFile(file);
    } catch (error) {
      console.error(error.message);
      process.exit(255);
    }
  }

  const totalDuration = Date.now() - checkStart;
  console.log(`\nAll YAML files checked successful,Total duration: ${totalDuration}ms`);
}

checkYAMLFilesSequentially();
