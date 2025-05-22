import { Hono } from 'hono'

const app = new Hono()

app.post('/', async(c) => {
  // body, headers, query parameters, middlewares, connecting to a database.
  const body = await c.req.json();
  const query = await c.req.queries("param");
  const headers = await c.req.header("Authorization");
  console.log("body: ", body, "query: ", query, "headers: ", headers);
  
  return c.json({
    message: "Hello World"
  })
})

export default app
