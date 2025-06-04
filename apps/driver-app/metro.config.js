// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config');
const { FileStore } = require('metro-cache');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot, { isCSSEnabled: true });

// #1 - Watch all files in the monorepo
config.watchFolders = [workspaceRoot];

// #2 - Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// #3 - Add `bin/` to `resolver.assetExts`
// config.resolver.assetExts.push('bin');

// Needed for NativeWind CSS processing on web
config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
  // Options for metro-minify-terser, if needed
};

// Use a unique cache store for each project in the monorepo
config.cacheStores = [new FileStore({ root: path.join(projectRoot, 'node_modules', '.cache', 'metro') })];

module.exports = config;
