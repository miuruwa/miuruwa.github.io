import {
    defineConfig
} from "vite";

import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

const path = require("path")
const config = defineConfig({
    base: "/",
    build: {
        outDir: "build",
    },
    server: {
        open: '/',
    },
    resolve:{
        alias: [
            {
                find: '@webx', replacement: path.resolve(__dirname, 'src/@webx')
            },
            {
                find: '~', replacement: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        reactRefresh(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
    ],
});

export default config;