const fs = require('fs');

// Helps fetch files from a directory, means we don't need a big index.ts file exporting all components
// I've left this as JS to match rollup.config.js
// Kindly borrowed from:
// https://www.codefeetime.com/post/rollup-config-for-react-component-library-with-typescript-scss/

export const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [
        ...fileNames,
        ...getFiles(path, extensions, excludeExtensions),
      ];

      return;
    }

    if (!excludeExtensions.some((exclude) => dir.endsWith(exclude))
      && extensions.some((ext) => dir.endsWith(ext))
    ) {
      fileNames.push(path);
    }
  });

  return fileNames;
};