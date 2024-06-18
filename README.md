# Remix Sample App

> Mainly used to evaluate problems or solutions ;-)

## Some Background

There is a legacy app (simple old-school SPA frontend and a Node.js backend with firestore data).
My goal is to develop a new Remix app with sqlite data. Until go-live i want to keep the
firestore data in-sync for the legacy app.

## The pain point

My idea was to use a simple EventEmitter event bus. But where should i register the two event
listeners? I am looking for the single best place. My first idea was to place them into the
backend layout loader (i do not need this in the frontend) - but of course i am registering listeners too
often then. Any loader (root as well) won't work. Was a silly idea.

So is the only place a (here not present) custom server.js?

## Relevant files

- `app/routes/manager._index.tsx`: Sample route with action that emits the event
- `app/utils/api-bus.server.ts`: The very simple event bus
- `app/utils/firestore/listener.server.ts`: The firestore listener
- `app/utils/sqlite/listener.server.ts`: The sqlite listener
