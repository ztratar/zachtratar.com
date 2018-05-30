---
title: 'Mobile Dynamic Card Stack'
description: 'Custom, card-based walkthroughs in React Native'
layout: 'project'
date: '2017-1-1'
---

When helping someone with a task or explaining a concept, we want to both provide information & ask the individual questions about their knowledge. Then, based on that knowledge, we may want to change the conversation entirely... explore new topics, ask new questions, recommend new content, and encourage new action.

This dynamic process can be now digitized & automated: simply input JSON and get a custom, card-based walkthrough for your mobile users!

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZjcGBdJnc7M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Features

- Fully customizable, dynamic card stack from JSON
- Question → Answer Data Sync w/ Backend APIs
- Question → Answer Cache
- Card Selectors: Create conditional paths in your walkthroughs
- Asset pre-loading & caching
- Smooth, hardware accelerated animations

Note: The provided code was used for a personal development mobile app prototype. The demo shows the code being used within that context, but the provided code is stripped down into a cleaner version.

## Supported Cards & Card Selectors

- Card Stack Start
- Card Stack Complete
- Content
  - Rolling Text
  - Scaled
  - Video
  - Image
  - Quote
  - Link / Resource URL
  - Countdown
- Questions
  - Multiple Choice
  - Multi-line, Full Text
  - Single-line Text
  - Happiness Rating
- Card Selectors
  - OR
  - GOTO
  - DELAY
  - RANDOM
  - WEIGHTED_CHANCE

## Requirements

- React Native
- Expo
