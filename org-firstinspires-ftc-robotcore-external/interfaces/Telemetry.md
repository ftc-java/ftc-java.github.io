---
layout: default
title: Telemetry
parent: interfaces
grand_parent: ftc.robotcore.external
nav_order: 9
---
# `Telemetry`
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

## Description
Telemetry is a way of displaying information from the robot live on the driver station. You can think of it as a remote `stdout` interface for console logging. It does not support input.

Telemetry provides a means by which data can be transmitted from the robot controller to the driver station and displayed on the driver station screen.

## Simple use
Simple use of Telemetry consists of a series of addData() calls, followed by a call to update().
```java
telemetry.addData("label", "value");
telemetry.update();
```

## `telemetry.addData()`

### Signature
The call to the `.addData()` method will always return a [Telemetry.Item](./Telemetry-Item.html).

- 
```java
Telemetry.Item addData(java.lang.String caption,
                       java.lang.String format,
                       java.lang.Object... args)
```

**This page is in the process of being written**. Here is the link to the [official JavaDoc](https://ftctechnh.github.io/ftc_app/doc/javadoc/org/firstinspires/ftc/robotcore/external/Telemetry.html)
        