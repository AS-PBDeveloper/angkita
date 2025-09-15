import express, { static as serveStatic } from "express";
import { renderToString } from "react-dom/server";
import { readFileSync } from "fs";
import { resolve } from "path";
import { createElement } from "react";

// Import your root React component
import App from './src/App'

const app = express();

// Serve static assets from Vite's output directory
app.use(serveStatic(resolve(__dirname, "dist")));

// SSR handler
app.get("*", (req, res) => {
    const appHtml = renderToString(createElement(App));
    const template = readFileSync(
        resolve(__dirname, "dist/index.html"),
        "utf-8"
    );
    const html = template.replace(`<!--ssr-outlet-->`, appHtml);
    res.send(html);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
