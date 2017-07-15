---
name: bplus
title: B+, A Tiny Programming Language
date: 2017-07-15
template: post
---
As part of my recent foray into programming languages, this week I decided I would try and write a minimal, functioning compiler in JavaScript.

[The result is B+](https://github.com/oscarcs/bplus), a tiny language with 7 statements.

It compiles down to C, and has somewhat similar functionality to BASIC, with curly-brace-style syntax. At the moment, it's not really possible to write meaningful programs with it, but eventually I would like to write a full WebAssembly backend and add proper memory management and string support.

The project is fewer than 1000 lines, which goes to show that there isn't very much to a *minimal* programming language (*fast* is another story).

Probably the most interesting part of the project is the expression parser, which is based on [this tutorial](http://eli.thegreenplace.net/2012/08/02/parsing-expressions-by-precedence-climbing) by Eli Bendersky. I've extended the example in that tutorial to support more of the operators that would be required in a proper programming language.