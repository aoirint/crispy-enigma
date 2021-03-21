bundle:
	mkdir -p dist
	deno bundle src/main.ts dist/main.js

serve: bundle
	deno run --allow-net --allow-read serve.ts
