---
name: haxe-linux
title: Haxe Development on Linux
date: 2016-11-22
template: post
---

I recently moved my main Haxe development environment over from Windows to Ubuntu, and so I thought it would be useful to document that process.

Haxe doesn't isn't perfectly supported on Linux -- although things are getting better -- and generally a `little` more setup is required to get things to work nicely.

## Installing the compiler

The first change is in installation. While there are installers for Windows, the Haxe folks don't have an equivalent easy-to-install package for Linux, only an archive containing the binaries. There is a PPA, but it's not always up to date, and if you need the latest compiler features (we'll get onto this in a second), then this isn't that useful.

Hence we need to be able to install the binaries in the right places ourselves. There's a [bash script by jgranick](https://gist.github.com/jgranick/8cc40e2e0f277146725f) that I found that does the job nicely. You'll need to modify it to update it with the latest versions of Haxe and Neko. I also [modified the bash script](https://gist.github.com/oscarcs/651f9ce28811784cbf84b4b7ac3d6b6b) myself to clean it up and fix a bug. My version only works on x86_64 Ubuntu.

## Code Editors

I explored the options for editors on Linux. HaxeDevelop (or FlashDevelop) is the best option on Windows, but it isn't available under Linux. The website claims you can run it under WINE, but I havent't tried this as it seemed like a poor solution.

I also tried IntelliJ IDEA, but the Haxe plugin hasn't been updated fully yet for the latest versions. In the end, I decided learning a new development environment was too much effort, but if you also do development in one of the JVM languages, this might be worthwhile.

I do much of my web development in Adobe Brackets, but unfortunately the Haxe plugins aren't very good and not maintained, so I also ruled that out as an option.

Eventually, I settled on Visual Studio Code, which has a [well-supported Haxe plugin](https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe) developed by one the language's core contributors. However, this requires the use of the latest Haxe compiler, which at the time of writing wasn't available in the PPA, hence the intstallation process above.

Of course, a 'true' Linux hacker would probably use the [vim plugin](https://github.com/jdonaldson/vaxe). I haven't tried it and I don't use vim, so I can't vouch for how good it is, but it seems to be receiving updates.

## Workflow

In VS Code, you can use commands to do project-management tasks. You can access the commands (and see the keyboard shortcuts) by pressing F1 and searching 'haxe'.

The way I setup my project, I wrote a 'build.hxml' file that contained the required compiler directives and then I wrote a 'build.sh' file that I run via the command line, which compiles the file and then runs the generated code. 
For my node-based project, it just looks like this:
``` bash
haxe build.hxml
node main.js
```
You might also do this by [creating a 'task'](https://code.visualstudio.com/Docs/editor/tasks) in VS Code that you can then run using a keyboard shortcut. You could employ different build.hxml or build.sh files for different platforms, giving you IDE-like functionality quite easily.