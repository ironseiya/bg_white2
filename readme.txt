his might be related to https://github.com/facebook/react-native/issues/4968
To resolve try the following:
  1. Clear watchman watches: `watchman watch-del-all`.
  2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
  3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.
  4. Remove haste cache: `rm -rf /tmp/haste-map-react-native-packager-*`.
    at ModuleResolver.resolveDependency (/Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:139:15)
    at ResolutionRequest.resolveDependency (/Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/node-haste/DependencyGraph/ResolutionRequest.js:49:18)
    at DependencyGraph.resolveDependency (/Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/node-haste/DependencyGraph.js:218:16)
    at Object.resolve (/Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/lib/transformHelpers.js:141:30)
    at dependencies.map.result (/Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/DeltaBundler/traverseDependencies.js:373:31)
    at Array.map (<anonymous>)
    at resolveDependencies (/Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/DeltaBundler/traverseDependencies.js:369:18)
    at /Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/DeltaBundler/traverseDependencies.js:188:33
    at Generator.next (<anonymous>)
    at step (/Users/jason/Documents/GitHub/bg_white2/node_modules/metro/src/DeltaBundler/traverseDependencies.js:298:30)
