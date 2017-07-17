---
name: ides-suck
title: Everything But the Kitchen Sink
date: 2017-04-08
template: post
---

Abstractions are a pretty fundamental part of software development. They can be helpful for reducing the mental load when reasoning about code, which allows us to write code more quickly and easily.

Traditionally, the IDE has been a useful type of abstraction. It sits atop the regular tooling, to provide a helpful interface to the usual programming language tools.

My first experiences with IDEs were with Code::Blocks, Eclipse, and FlashDevelop. When I was first starting out, IDEs actually hindered my learning more than they helped; they abstract away the compiler, making it tricky to reason about what is actually happening. One consequence of this was that if my build tooling stopped working, I had no way to fix it. I would often simply re-create my project files from scratch and copy my code just to get things working again.

I like abstractions, but I don't like IDEs. I feel that it's time to move on from them. They've produced a number of useful ideas that have been carried forward into other classes of editors, but in my opinion the idea of an IDE with 'everything but the kitchen sink' is no longer useful. Here's why:

## IDE interfaces aren't more convenient

Scope creep has meant that the interface provided by many modern IDEs is in many cases more complex than the underlying systems they aim to replace. Even languages like Java -- where traditionally many programmers have relied on IDEs -- are probably better served using handwritten build files or custom build systems. IDEs use conventional GUI menus as the interface to compiler flags and package managers; this UI tends to be more cumbersome to use than simply typing some flags into a file. 

## They don't play nice with source control

Having a set of handwritten config files (or source to generate the config files) is far more convenient than trying to manage IDE-generated config files using a version control system. Even in IDEs that use the usual build methods of a particular language (as opposed to some custom 'solution' non-solution), there is a tendency to pollute project folder with editor settings files. Granted, this is less of a problem recently, but that misses the point. Build processes are now complex enough and important enough that they should be as transparent as the application code itself.

## They're slow 

This point should be obvious to anyone who has ever used an IDE. They take time to start, they have a high memory footprint. Even the 'wasteful' JavaScript-based text editors generally perform better in this regard.

## Modern tools are nicer

Unix-like systems (Linux, MacOS) have gradually become the preferred systems of developers again. Simultaneously, Unix philosophy has been integrated to a great extent in modern programming languages and their tools -- even JavaScript now, with Node's command-line package management tools. While I'm not a full-on proponent of the Unix way of doing things, this at least means there are many high-quality command-line tools today.

## Conclusion

Modern text editors incorporate the most useful features of IDEs, like syntax highlighting, autocomplete, definition jumping, plugin systems, and so forth -- but they mostly stay out of your way. Even the traditional CLI-based editors like vim and emacs have these features now, but without a slow, crufty interface. My current setup for pretty much every language I use involves a bash file with a couple of calls to some command-line tools. 

Ultimately, I hope a change occurs in our development culture where we consider the build files an integral part of our program -- and make build systems part of our programming languages.