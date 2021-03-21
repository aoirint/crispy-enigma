bundle:
	mkdir -p build
	deno bundle src/main.ts dist/main.js

serve:
	deno run --allow-net --allow-read serve.ts

