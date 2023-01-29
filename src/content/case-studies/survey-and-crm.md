---
title: In-House Survey & CRM Platform
description: A survey tool and CRM built in-house for clinical trial recruitment and management.
---

## Background

Clinical trials generate protected health information (PHI) from the beginning of the patient journey when they complete a web survey, through duration of the study as they work through numerous site visits. 

## Challenge

Due to the sensitive nature of this data, there was a huge degree of trepidation around pursuing third-party SaaS solutions. Both a **survey tool** and a **customer relationship manager (CRM)** application were to be built in-house.

<section class="flex flex-nowrap overflow-x-scroll translate-x-6 -ml-12">
<figure class="flex-none">
  <img src="https://via.placeholder.com/640" />
  <figcaption>A survey</figcaption>
</figure>
<figure class="flex-none">
  <img src="https://via.placeholder.com/640" />
  <figcaption>A survey</figcaption>
</figure>
</section>

The survey tool could potentially be **administered by staff employees** in charge with designing the surveys. The CRM tool needed to be able to intake the data and display it in any number of views at various macro and micro-levels of detail, with **role based authentication controls (RBAC)**.

## Execution

For Survey 1.0, I shipped **Ruby on Rails** on the backend and **React** for the browser client in about 4 months. Features included unlimited survey panels, multiple prompt types to support a wide range of prompt styles, and **conditional rendering** of prompts or complete panels based on the end user’s multiple choice selection. 

**Survey2** shipped about a year after launch, this time with developers working under me. I conducted group and one-on-one crash courses on React to a team of developers that mostly worked with traditional server-side view templating. We built an app supporting **multi-tenancy**, with **webhooks** for posting data to our legacy and future CRMs, and I designed a contemporary admin interface that is intuitive and easy to use.

[ Pluto admin screenshot ] [ Pluto admin screenshot ]

Survey2 supports numerous clinical trial surveys on one instance, and each survey is configured with a webhook callback to its respective CRM.

The CRM build began as core Survey 2.0 was winding down. The CRM was built as a **meta-platform**, where every instance is a blank slate. We provided

* A UI to shape the database as needed through virtual tables, columns, and relationships
* Pages with rich user interface components, as well as custom code blocks
* Users and roles
* Document storage systems
* Twilio integration for virtual phone numbers, voicemail, SMS and call-center configuration
* API endpoint configuration for data import
* Reporting and notification tools

The CRM allows dozens of end users to easily filter through tens of thousands of records on our busiest instance. We re-platformed one legacy system onto this platform, and have one more to do.

### Tools

React, **Blueprint.js** and custom CSS in a Webpack-bundled environment sits in front of a Rails API backend. **Tailwind** was introduced along the way and gradually replaced all the custom CSS, which minimized inconsistency across components worked on by separate developers.

For the CMS build, I gave my team some time to trial **Vue** and **Svelte** before determining the front end framework. Everyone agreed the Vue developer experience was superior to what we had built with React, and so **Nuxt** and Vue became the front end framework, with Tailwind providing most of the CSS, although with a highly customized config file. 

A Rails API still powered the backend, but we used a **GraphQL** implementation accessible in-app for admins to easily build data queries without having to write custom API endpoints or SQL code. We support non-destructive mutations as well, which makes for on-demand form generation. 

Database is **Postgres** with **Redis** for caching and delayed jobs, all hosted on AWS.