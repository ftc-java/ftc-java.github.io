---
layout: default
title: Contributing
nav_order: 10000
permalink: /contributing
---

<style>
.main-content .task-list-item {
  /* Code samples were getting messed up because of the flexbox design. Because we are using a remote theme, there is little we can do about this. */
  display:block;
}
</style>

# Contributing
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## GitHub procedure

Visit our GitHub repository [ftc-java/ftc-java.github.io](https://github.com/ftc-java/ftc-java.github.io) and poke around the files. If you find something that you want to change or add, clone and open a pull request. 

If you are thinking of doing a small change (i.e. fixing a spelling error or a syntax issue) simply open a pull request. If you are thinking of doing a large change, submit an issue or, if you have some content written, open a Draft Pull Request before you waste too much time. 

If you want to contribute but don't know where to start, check out the [issues](https://github.com/ftc-java/ftc-java.github.io/issues) or the todo list below.

Before opening/submitting a pull request, you must do each of the following:
- [ ] Check for spelling and grammatical errors
- [ ] Make sure you are clearly and completely defining any methods or properties you discussed
- [ ] Test all code samples to verify they are running and functional
- [ ] Run `bundle exec jekyll serve` (without the -I flag) to make sure you rebuild all the pages with dependencies (like the 404 page, index, and sitemaps)
- [ ] Test the page at a handful of screen sizes just to make sure nothing weird occurs. If it does, you can choose to fix it or open an issue and someone else will tackle it.
- [ ] Add yourself to the contributors list at the bottom of this page.
- [ ] In your PR comment, write what you changed and what resources you used to write your content.

We are very open and accepting to ideas for new pages and sections. If you are not sure, open an issue and we will discuss there.

## Building from source

### Prerequisites

#### Ruby

[Visit the official installation documentation](https://www.ruby-lang.org/en/documentation/installation/)

(You will also need to install Gem if it is not already installed by Ruby.)

#### Jekyll
[Jekyll](https://jekyllrb.com/docs/) is a powerful static site generator that parses markdown into HTML that can be hosted on a static platform (like our provider, GitHub pages).

```bash
gem install jekyll bundler
```

### Usage

1. Clone the source code from [ftc-java/ftc-java.github.io](https://github.com/ftc-java/ftc-java.github.io) using git or github desktop.
```bash
git clone https://github.com/ftc-java/ftc-java.github.io.git
```

2. Navigate to the directory
```bash
cd ftc-java.github.io
```

3. Tell Jekyll to watch for changes, and compile on save (Initially, compilation will take several minutes. This is normal, but using the -I flag tells Jekyll only to rebuild the page we are working, not the entire project.)
```
bundle exec jekyll serve -I
```

## Using the framework

We are using [just-the-docs](https://github.com/pmarsceill/just-the-docs), a documentation theme for Jekyll. Documentation on how to use it's search, layout, design, and scripting features are on their [documentation page](https://pmarsceill.github.io/just-the-docs/)

## Expectations

You are expected to keep everything neat, clean, and appropriate on your documentation. For the most part, I am flexible when checking PR's. The largest things of issue are low-quality content, foul language, or targeted comments. 

**Refer to the [telemetry](/org-firstinspires-ftc-robotcore-external/interfaces/Telemetry.md) page as a good example of how to write a page**

## ToDo List

- [ ] Start everything. At the time of writing (August 10), nothing has been written

If you are looking for something to tackle, find a page and get to work! There is a lot of content to be written. I have included a link to the official javadoc document on each page as reference. You could also check the github issues for more technical issues to take care of.

## Contributors

[@jackcrane](https://github.com/jackcrane)