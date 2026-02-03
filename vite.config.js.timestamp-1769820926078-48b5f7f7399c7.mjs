// vite.config.js
import { defineConfig } from "file:///F:/SMU/PWA/node_modules/vite/dist/node/index.js";
import react from "file:///F:/SMU/PWA/node_modules/@vitejs/plugin-react/dist/index.js";
import { VitePWA } from "file:///F:/SMU/PWA/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["vite.svg"],
      manifest: {
        name: "Motivational Task Manager",
        short_name: "TaskMotive",
        description: "Manage tasks with motivation.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.svg",
            sizes: "192x192",
            type: "image/svg+xml"
          },
          {
            src: "pwa-512x512.svg",
            sizes: "512x512",
            type: "image/svg+xml"
          }
        ]
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url }) => url.href.includes("api.quotable.io"),
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "api-cache",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24
              // 1 day
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxTTVVcXFxcUFdBXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxTTVVcXFxcUFdBXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9TTVUvUFdBL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWyd2aXRlLnN2ZyddLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ01vdGl2YXRpb25hbCBUYXNrIE1hbmFnZXInLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVGFza01vdGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTWFuYWdlIHRhc2tzIHdpdGggbW90aXZhdGlvbi4nLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS0xOTJ4MTkyLnN2ZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5zdmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFt7XG4gICAgICAgICAgdXJsUGF0dGVybjogKHsgdXJsIH0pID0+IHVybC5ocmVmLmluY2x1ZGVzKCdhcGkucXVvdGFibGUuaW8nKSxcbiAgICAgICAgICBoYW5kbGVyOiAnU3RhbGVXaGlsZVJldmFsaWRhdGUnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogJ2FwaS1jYWNoZScsXG4gICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgIG1heEVudHJpZXM6IDUwLFxuICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgLy8gMSBkYXlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNOLFNBQVMsb0JBQW9CO0FBQ25QLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLFVBQVU7QUFBQSxNQUMxQixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxnQkFBZ0IsQ0FBQztBQUFBLFVBQ2YsWUFBWSxDQUFDLEVBQUUsSUFBSSxNQUFNLElBQUksS0FBSyxTQUFTLGlCQUFpQjtBQUFBLFVBQzVELFNBQVM7QUFBQSxVQUNULFNBQVM7QUFBQSxZQUNQLFdBQVc7QUFBQSxZQUNYLFlBQVk7QUFBQSxjQUNWLFlBQVk7QUFBQSxjQUNaLGVBQWUsS0FBSyxLQUFLO0FBQUE7QUFBQSxZQUMzQjtBQUFBLFlBQ0EsbUJBQW1CO0FBQUEsY0FDakIsVUFBVSxDQUFDLEdBQUcsR0FBRztBQUFBLFlBQ25CO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
