A project template based on SvelteKit. If you are looking for SvelteKit, please visit [github.com/sveltejs/kit](https://github.com/sveltejs/kit) or [kit.svelte.dev](https://kit.svelte.dev/)

```sh
PROJECT_NAME=myproject_$(date +%s)

if [ -d "$PROJECT_NAME" ]; then
  echo "$PROJECT_NAME already exists!"; exit
fi

wget -O "${PROJECT_NAME}.zip" https://github.com/muonw/sveltekit/archive/refs/heads/main.zip
unzip "${PROJECT_NAME}.zip" -d "${PROJECT_NAME}"
rm "${PROJECT_NAME}.zip"
cd "${PROJECT_NAME}"
default_dir=$(echo */)

if [ ! -z "${default_dir}" ]; then
    shopt -s dotglob
    mv "${default_dir}"* ./ && rm -r ./"${default_dir}"
fi
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
        - versions updated

- svelte.config.js
    - adapter: auto --> static
    - adapter pages & assets: docs

- tsconfig.json
    - sourceMap --> false