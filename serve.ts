import { Application, send } from 'https://deno.land/x/oak@v6.5.0/mod.ts'

const app = new Application()

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/public`,
    index: 'index.html',
  })
})

console.log('Listening on http://127.0.0.1:8000/')

await app.listen({
  hostname: '127.0.0.1',
  port: 8000,
})
