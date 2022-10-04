# Kaleidoscript
This version of Kaleidoscript, written with SvelteKit, is not yet functionnal in any way. If you wanna get an idea of it, go check [the vanillaJS version (unmaintained)](https://github.com/ArenorRaxx/Kaleidoscript-vanillaJS) and it works, figure it out. If you can't, well, what are you doing here.

## How to setup

Please be sure to have `nodejs` and `npm` installed and up-to-date on your system, and to have all the rights you'd need. Then, clone the repository and start the server.

```bash
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## How to use
Lol, didn't you read the header ?

## Non-technical milestones before "v1.0" `<<<`

*`<<<` : Current progress of work. (this is a single-threaded process. hi.)*
___
 - [ ] Merge the [vanillaJS version](https://github.com/ArenorRaxx/Kaleidoscript-vanillaJS) to SvelteKit (by merely adapting it); `<<<`

 - [ ] Decide whether discontinuing the use of the GoJS Library would benefit the project by :
 -- Creating custom "GraphObject" and adding it to the document;
 -- Managing movements of custom "GraphObject" in the document;
 -- Managing view translation over the document;
 -- Mimicking diagramEvents, nodeDataArray, nodeTemplate, ...
