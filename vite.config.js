

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [react()],
//     resolve: {
//         dedupe: ["react", "react-dom"]
//     }
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/TravelBeyond/",
    resolve: {
        dedupe: ["react", "react-dom"]
    }
});