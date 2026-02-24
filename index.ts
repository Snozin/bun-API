// console.log("Hello via Bun!");
const server = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    return new Response('Bun API funcionando OK')
  },
})

// console.log(`Server running on ${server.url}:${server.port}`)
console.log(`Server running on ${server.url}`)