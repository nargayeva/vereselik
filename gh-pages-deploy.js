/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
    try {
        await execa("git", ["checkout", "--orphan", "gh-pages-live"]);
        // eslint-disable-next-line no-console
        console.log("Building started...");
        await execa("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await execa("git", ["--work-tree", folderName, "add", "--all"]);
        await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages-live"]);
        console.log("Pushing to gh-pages-live...");
        await execa("git", ["push", "origin", "HEAD:gh-pages-live", "--force"]);
        await execa("rm", ["-r", folderName]);
        await execa("git", ["checkout", "-f", "project/to-vue"]);
        await execa("git", ["branch", "-D", "gh-pages-live"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();