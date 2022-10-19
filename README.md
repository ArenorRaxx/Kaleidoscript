
Kaleidoscript
==========

#### A tool to visually manage document sources and easily share them across the web *( -- not yet -- )*.

We hope to propose someday a full-stack app running on the web. For the moment, you can try it on your system. Don't worry, it's fairly easy and this shouldn't affect much the features we plan to add.

###### <p>&nbsp;</p>  

How do I set it up locally ?
--------------------------------

Please be sure to have `nodejs` and `npm` installed and up-to-date on your system, and to have all the rights you'd need. Then, clone the repository and run
```bash
npm install

# then start the server

npm run dev

# or start the server and open the app in a new browser tab

npm run dev -- --open
```
Now, open [localhost:5173](http://localhost:5173/)

`your system:the port to connect to`

###### <p>&nbsp;</p>  

What do I see ?
-------------------

![ ](https://github.com/ArenorRaxx/Kaleidoscript/blob/master/KaleidoscriptDemo.gif)

At the top of the screen, you can find the **Navbar** of the app. You get a **Nav** file where the Navbar Component gets a list of the icons and actions it has to display. It will add one specific `<svelte:component>` for every options to the page, which you reference in the **Nav** file, giving you fully modular option-picker.

For now, you have two options :

- **Settings** : *Do nothing*<br/>
- **Add file** : *It.. well.. it adds file to the **Diagram***

The **Diagram** is *almost* all the space on the screen. It has no limit, just a viewport. It means you have plenty space to add complex documents and massive compilations of files, and work with them a comfortable way.

Because files, for conveniance, are not displayed full size, a side panel, called the **Visualiser** is here for consultation ~~and soon for editing~~ of imported documents. Our goal is to make a versatile tool to which everyone may contribute, as there are a **lot** of file types.

#### Fine, but what can I add to the Diagram ?

To the Diagram, you can, add:
- Plain text file -- *(default, if you add a file which type is not known by the app)*
- Image files -- *(every image going in a `<img/>` balise is valid image)*

It adds your file to the diagram as a **Node**. This Node is the in-app representation of your file, and every object that might end up on the Diagram will be a Node. If the Diagram is the heart, Nodes are the blood-cells. *(i guess)*  

###### <p>&nbsp;</p>  

How do I use it ?
--------------------

So far, with one file, all you can do is :

- **Move the viewport around the diagram**, click&drag on the background
- **Zoom on the diagram**, hold control and roll the mouse wheel

- **Move your file**, just good'ol click&drag mechanic

- **Visualise your file**, a simple click on your file is enough

- **Close the Visualiser**, click on the background, or click again on the visualised file

Fair-enough. But this app aims at being used for treating tons of docs of any types, so the real magic happens when you add more files to your session.
With multiple files, you can :

- **Link files together**, for that, click&drag from the transparent border to another Node

###### <p>&nbsp;</p>  

Non-technical milestones before "v1.0"
=========================

*`<<<` : Current progress of work. (this is a single-threaded dev process. hi.)*
____________________________________________________________________

 - [X] ~~Merge the [vanillaJS version](https://github.com/ArenorRaxx/Kaleidoscript-vanillaJS) to SvelteKit (by merely adapting it)~~; 
 > ##### Well, some options are missing, but we did not just merely adapted it. <u>We improved it</u>.

 - [X] ~~Decide whether discontinuing the use of the *GoJS Library* would benefit the project at this stage and experiment on the *modularity* of the API *(as it is not an OpenSource library)*~~;
 > ##### GoJS is not OpenSource, nor does it possess a Non-Commercial Licence. As GoJS is a fairly modular and permissive library, at this stage there's no good reason to put hard work into remaking the wheel.

 - [ ] MO' *TYPES OF FILE* (like PDF, source code, LaTeX would be nice too). A ~~complete~~ list will be composed  in the future; `<<<`

 - [ ] Working on the user-friendliness. Planning to add contextual menu, give use to the Settings button, add a "tool" option to select different tools *GoJS/our library* implements.

 - [ ] "The Visualiser is feeling empty and useless. Let's make an *Editor*."

 - [ ] A *kaleidoscript file* is a thing 🎊🎉🎉 (i'm excited for this one)

 - [ ] We go online. User subscription, login, and documents save, share, research, download, view and review. All of it live, on the web.
<br/>***-- Last Milestone before release --***
