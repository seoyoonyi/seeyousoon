// FIXME: tailwind css 설정(필요없을 시 삭제)
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // FIXME: emotion 설정(필요없을 시 삭제)
      jsxImportSource: '@emotion/react',
    }),
    tsconfigPaths(),
    // FIXME: tailwind css 설정(필요없을 시 삭제)
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // FIXME: Sass 설정(필요없을 시 삭제)
    sourcemap: true, // .map 파일 생성 (선택 사항)
  },
})
