run-build:
	mkdir -p build
	mkdir -p build/bundle
	deno bundle src/main.ts build/bundle/main.js
	cp -r public/* build/

run-serve: run-build
	deno run --allow-net --allow-read serve.ts
