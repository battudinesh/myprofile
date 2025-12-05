import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
            babel: {
              plugins: [
                [
                  '@stylexjs/babel-plugin',
                  {
                    dev: true,               // enables dev mode
                    runtimeInjection: true,  // injects styles at runtime
                    genConditionalClasses: true,
                  },
                ],
              ],
            },
          }),],
})
