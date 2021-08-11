// If you do not know what this is for, do not touch it. You will never need to use it :)

let javadoc = require('./javadoc.json');
const fs = require('fs');

// fs.mkdir('./t', (e) => {})

let masteriteration = 0;
for (section in javadoc) {
  masteriteration++
  console.log(javadoc[section].title)
  let dir = javadoc[section].title.split('.').join('-')
  fs.mkdirSync(`../${dir}`)

  fs.writeFileSync(
    `../${dir}/${dir}.md`, 
    `---
layout: default
title: ${javadoc[section].title.replace('com.qualcomm.', 'qc.').replace('org.firstinspires.ftc.', 'ftc.')}
nav_order: ${masteriteration}
has_children: true
---
# \`${javadoc[section].title}\`
---
**Further descriptions have not yet been written for this package**. Here is the link to the [official Javadoc](${javadoc[section].javadoc})
    `
  )

  console.log(section)
  let section_ = javadoc[section]
  console.log(section_.title)
  let iteration = 0;
  for (subsection in section_.packages) {
    iteration++
    console.log(`--${section_.title}/${subsection}`)
    fs.mkdirSync(`../${dir}/${subsection}`)
    fs.writeFileSync(
      `../${dir}/${subsection}/${subsection}.md`,
      `---
layout: default
title: ${subsection}
parent: ${javadoc[section].title.replace('com.qualcomm.', 'qc.').replace('org.firstinspires.ftc.', 'ftc.')}
nav_order: ${iteration}
has_children: true
---
# \`${javadoc[section].title}\` / ${subsection}
      `
    )
    let subiteration = 0;
    for (package in section_.packages[subsection]) {
      subiteration++
      let package_ = section_.packages[subsection];
      let fname = package_[package].title
      fs.writeFileSync(
        `../${dir}/${subsection}/${fname.split('.').join('-')}.md`,
        `---
layout: default
title: ${fname}
parent: ${subsection}
grand_parent: ${javadoc[section].title.replace('com.qualcomm.', 'qc.').replace('org.firstinspires.ftc.', 'ftc.')}
nav_order: ${subiteration}
---
# \`${fname}\`
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---
**This page has not yet been written**. Here is the link to the [official JavaDoc](${package_[package].javadoc})
        `
      )
    }

  }
}