A project template based on SvelteKit. If you are looking for SvelteKit, please visit [github.com/sveltejs/kit](https://github.com/sveltejs/kit) or [kit.svelte.dev](https://kit.svelte.dev/)

```sh
PROJECT_NAME=myproject
wget -O "${PROJECT_NAME}.zip" https://github.com/muonw/sveltekit/archive/refs/heads/main.zip
unzip "${PROJECT_NAME}.zip" -d "${PROJECT_NAME}" && rm "${PROJECT_NAME}.zip"
```

Base: Skeleton project + Typescript + ESLint + Prettier


### Summary of the modifications:

- src/lib/index.js added

- src/routes/+layout.ts
    - prerender: true
    - ssr: false

- static
    - .nojekyll added
    - favicon.png cleaned

- package.json
    - skeleton & library combined
    - dependencies
        - @sveltejs/adapter-auto --> @sveltejs/adapter-static
        - @sveltejs/package added
        - sass added
        - svelte-preprocess added
        - versions updated

- svelte.config.js
    - adapter: auto --> static
    - preprocessor: @sveltejs/kit/vite --> svelte-preprocess
    - adapter pages & assets: docs
    - scss includePaths: node_modules

- tsconfig.json
    - sourceMap --> false