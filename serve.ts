import { Application, send } from 'https://deno.land/x/oak@v6.5.0/mod.ts'

const app = new Application()

app.use(async (ctx, next) => {
  const match = ctx.request.url.pathname.match((/\/bundle\/(?<relative>.+)/))
  if (match === null) { await next(); return }

  const groups = match.groups ?? null
  if (groups === null) { return }

  await send(ctx, groups.relative, {
    root: `${Deno.cwd()}/dist`,
  })
})

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/public`,
    index: 'index.html',
  })
})

console.log('Listening at http://127.0.0.1:8000/')

await app.listen({
  hostname: '127.0.0.1',
  port: 8000,
})
