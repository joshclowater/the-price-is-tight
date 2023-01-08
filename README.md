## The Price is Tight

A web app where multiple players join a hosted game to play. It uses [Fresh](https://fresh.deno.dev) +
[Supabase](https://supabase.io) + [twind](https://twind.dev) +
[BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) and [ReadableStream API](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
on [Deno Deploy](https://deno.land).

To get started, setup your `.env` with Supabase:

- `cp .env.example .env`

Create/use a Supabase project:

- Go to app.supabase.io
- Click on "New Project".
- Enter project details and wait for the database to launch.
- Grab the URL and anon key and DB from and add them to the `.env` file.

Run the server locally:

```
deno task start
```
