---
layout: default
title: LinearOpMode
parent: classes
grand_parent: qc.robotcore.eventloop.opmode
nav_order: 2
---
# `LinearOpMode`
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

## Description
LinearOpMode is the base class that you derive from when creating a Linear Operation Mode.

As opposed to a regular [OpMode](./OpMode.html), which runs in a loop, a LinearOpMode runs everything in order from the start to the end.

A LinearOpMode is generally easier than a regular [OpMode](./OpMode.html) for newer programmers, especially for autonomous.

Like a regular [OpMode](./OpMode.html), LinearOpMode comes with all the necessary methods, interfaces, and classes to run your robot like [Telemetry](/org-firstinspires-ftc-robotcore-external/interfaces/Telemetry.html), [HardwareMap](/com-qualcomm-robotcore-hardware/classes/HardwareMap.html), etc.

## Simple use
Makes a class that inherits from LinearOpMode and implements the runOpMode method. 
The name that will show up on the driver station is "MyLinearOpMode" and it will be under the Autonomous section.
```java
@Autonomous(name="MyLinearOpMode")
class MyLinearOpMode extends LinearOpMode{

    @Override
    public void runOpMode(){

    }
}
```


**This page is still being written*. Here is the link to the [official JavaDoc](https://ftctechnh.github.io/ftc_app/doc/javadoc/com/qualcomm/robotcore/eventloop/opmode/LinearOpMode.html)
