Bun.serve({
  fetch() {
    return new Response('Hello Bun!');
  },
});
