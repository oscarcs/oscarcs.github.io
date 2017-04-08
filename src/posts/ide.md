---
name: ide
title: Why I dislike IDEs
date: 2017-04-08
template: post
---

Abstractions are a pretty fundamental part of software development. They're helpful for reducing the mental load when reasoning about code, which allows us to write code more quickly and easily. The IDE is one such abstraction. It sits atop the regular tooling, to provide a helpful interface to usual programming language tools.

My first experiences with IDEs were with Code::Blocks, Eclipse, and FlashDevelop. It took me a while, as a self-taught programmer, to understand what a compiler is and why they're important, thanks to the abstraction provided by those IDEs. This meant that if my build system broke, I had no way to fix it, and I would often re-create my project files from scratch and copy my code just to get things working again.

I like abstractions, but I don't like IDEs. I feel that it's time to move on from them, at least for new projects. They've produced a number of useful ideas that have been carried forward into other classes of editors, but IDEs are ultimately a failure. Here's why:

## IDE interfaces aren't more convenient

The interface provided by most IDEs is in many cases more complex than the underlying CLI systems they aim to replace. Even traditionally 'IDE-heavy' languages, like Java, are probably better served using handwritten build files. Why would a wrestle with a GUI representation of a 'solution'? I'm a programmer, my domain is text. Abstracting command-line arguments to a compiler with menus takes more time than simply typing those arguments out. If I need multiple build strategies, I can have multiple build files that I can run.

## They don't play nice with source control

Having a set of handwritten config files (or source to generate the config files) is far more convenient than trying to manage IDE-generated config files using a VCS. This problem is mitigated somewhat by IDEs that use the normal config schemes of their environment, but IDEs still inevitably bleed their settings into the build files. Editor settings should play no part in building the program.

## They're slow 

This is the most obvious criticism. They take time to start, they have a high memory footprint. Even the 'wasteful' Javascript-based text editors generally perform better in this regard.

## Modern CLI tools are nicer

As Unix-like systems have gradually become the preferred systems of more and more developers recently, the Unix philosophy has been integrated to a great extent in modern programming languages and their tools -- even Javascript. While I'm not a full-on proponent of the Unix way of doing things, this at least means there are many high-quality command-line tools today.

## Conclusion

Modern text editors incorporate the most useful features of IDEs, like autocomplete, definition jumping, plugin systems, and so forth. Even the traditional CLI-based editors like vim and emacs have these features now -- but without a slow, crufty interface. My current setup for pretty much every language I use involves a bash file with a couple of calls to some command-line tools. 

Ultimately, I hope a change occurs in our development culture where we consider the build files an integral part of our program -- and make build systems part of our programming languages. The goal should be to design systems so we can build our program into a binary (and optionally run it) using a single call to the compiler.