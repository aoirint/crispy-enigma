bundle:
	mkdir -p dist
	deno bundle src/main.ts dist/main.js

serve:
	deno run --allow-net --allow-read serve.ts
