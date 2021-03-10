# What is Maker?

Most people contributing to and using Maker will be familiar with [Orbit](https://github.com/square/orbit) and will likely have a lot of wrong ideas about Maker's goals by assuming they're the same as Orbit's. This is incorrect. Maker is not Orbit. Their key high-level differences in a table:

| | Orbit | Maker |
|-|-------|-------|
| **Visual Design** | <ul><li>Desktop-first design, mobile was an afterthought or not considered at all</li><li>Designed for information-dense dashboards</li><li>Not themeable, specifically designed to reflect Weebly's and Square's brand</li></ul> | <ul><li>Mobile-first design</li><li>Designed for ecommerce sites</li><li>Designed to be themeable, should be able to be customized to fit any Seller's brand</li></ul> |
| **API Design** | <ul><li>High-level, opinionated, batteries-included components</li><li>Many inter-component dependencies, e.g. OButton is reused in the public API of a dozen other components</li><li>Doesn't export components for low-level concerns like transitions & animations</li><li>Icon set bundled with library</li></ul> | <ul><li>Mid-level, modular, compose-these-parts-together-yourself components</li><li>Components are standalone, there's no inter-component dependencies (at least not in the public API)</li><li>Exports components for low-level concerns like transitions & animations</li><li>Bring your own icons</li></ul> |
| **Maintanence** | <ul><li>Maintained by a single team</li><li>Only one team had the authority to approve & publish changes</li></ul> | <ul><li>Collectively maintained by all teams</li><li>All teams have authority to approve & publish changes (which includes taking responsiblity for breaking other teams' code if that becomes the case)</li></ul> |
| **Versioning** | <ul><li>Follows semver conventions</li><li>Infrequent but large major releases with many breaking changes across many components</li><li>Rarely publishs pre-releases</li></ul> | <ul><li>Follows semver conventions</li><li>Frequent but small major releases with breaking changes typically scoped to a single component</li><li>Regularly publishs pre-releases to experiment with and stabilize eventual breaking API changes before making official releases</li></ul> |



## FAQs



### There's a component that is in Orbit but not in Maker, should I add it?

No. Orbit and Maker do not have the same goals and so they will not have the same set of components. And even for the components they do currently share in common, the Maker version of the components have a considerably different visual and technical design.



### I've been asked to add a component to Maker that is currently in Orbit, can I copy & paste it over?

No. Start from first principles. Review the table above. It's okay to look at an Orbit component's implementation to get some ideas of how to approach the implementation in Maker, but if you are just copying & pasting a component from Orbit into Maker then you are definitely doing something wrong.



### When should I update a Maker component vs implementing a one-off in my project?

This question assumes you are a product engineer working on the product based on product designs you received from a product designer.

First of all, Maker is both a Vue.js component library and a design system. The Maker Design System (MDS) has its own Figma file with designs for all of the components within the design system. To make an engineering-friendly analogy, this Figma file is like the `master` branch of MDS. The `master` branch of the Maker repo, which contains the Maker Vue.js Components (MVC), should always faithfully represent the components in the `master` branch of MDS, i.e. its Figma file.

Second, at any given point in time, a product designer can be in one of two buckets: they can be an Ideal Designer or they can be a Cowboy Designer.

Ideal Designers produce product designs that follow MDS, and when MDS is too constraining they first seek ways to change or extend MDS before they update their product design and ship it off to a product engineer. If you are working with an Ideal Designer then you should never be getting put into a position where you have to hack or override MVC within your project. If a project requires making updates to MVC that is something your designer should be able to tell you upfront, which is a green flag that they have considered how their changes fit within MDS. Once your designer's changes have been approved and merged into MDS `master` then you can begin the engineering work to get the same changes approved and merged into MVC `master`.

Cowboy Designers view the design system rules more as _soft guidelines_ rather than _hard rules_ and will regularly bend or break design system rules within their product designs. If you are working with a Cowboy Designer you will often be put into a position where you need to unexpectedly hack or override MVC within your project. Being a Good Engineer you will think to yourself, _"Gee, I'm sure hacking MVC a lot to achieve these product designs, I should probably make these changes in the upstream Maker repo."_ Do not fall for this! This is a trap! All design system changes need to be made explicitly and need to go through a designer first. If the designs are not in MDS `master` then they should not be in MVC `master`. Start a dialogue with your designer, and follow these steps:

1. Ask your designer if they're aware their product design doesn't follow MDS.
1. If they say no then ask them to politely update their product designs to follow MDS. Problem solved, and no changes to MVC are required.
1. If they say yes then ask them if these new designs should be introduced into MDS or implemented as one-offs just for this particular project.
1. If they say the designs should be implemented as one-offs then implement them as one-offs. Problem solved, and no changes to MVC are required.
1. If they say the designs should be introduced into the design system then ask them to get the changes approved and merged into MDS `master`, i.e. the changes are visible in the MDS Figma file. Once that is done then you can begin the engineering work to get the same changes approved and merged into MVC `master`.



### When should I add a new component to Maker vs implementing a one-off in my project?

Although this is a slightly different question it has the same answer as the previous question.


### When and how should I introduce breaking changes and make a major version release of Maker?

This question assumes that you are introducing a breaking change to MVC so that it stays consistent with MDS, and not to appease a Cowboy Designer. Otherwise, please review the answer to the previous 2 questions.

In the scenario you need to introduce breaking changes and eventually make a major version release of Maker you should follow these steps:

1. Minimize the scope of your breaking changes. Ideally scope them down to a single component. This will make it significantly easier for your team and every other team which depends on Maker to migrate to the new major version. If you need to introduce breaking changes to multiple components, but these changes are otherwise independent, consider doing multiple major version releases. Making a major version release which introduces breaking changes to many components should only be done as a last resort.
1. Before making a major version release, please do a pre-release and test the changes in your codebase. Please notify other teams of this pre-release so they can optionally test the changes in their codebases as well. It's likely you will get feedback which will make your reconsider some of your technical decisions, in which case it's good you did a pre-release to validate your ideas before finalizing them in an official major version release, instead of making 2 major version releases in the same week with breaking changes to the same component.
1. Once you have made your major version release write a changelog and migration guide which other teams can follow to migrate to this new major version. Again, this is significantly easier if you followed step 1 and minimized the scope of your breaking changes. Notify teams that a new major version of Maker has been released and point them to your changelog and migration guide. Be available to answer questions and offer migration help.
