# What is Maker?

Most people contributing to and using Maker will be familiar with [Orbit](https://github.com/square/orbit), but they might have some wrong ideas about Maker's goals, by assuming they're the same as Orbit's. This is incorrect. Maker is not Orbit. Their key high-level differences in a table:

| | Orbit | Maker |
|-|-------|-------|
| **Visual Design** | <ul><li>Desktop-first design, mobile was an afterthought or not considered at all</li><li>Designed for information-dense dashboards</li><li>Not themeable, specifically designed to reflect Weebly's and Square's brand</li></ul> | <ul><li>Mobile-first design</li><li>Designed for ecommerce sites</li><li>Designed to be themeable, should be able to be customized to fit any Seller's brand</li></ul> |
| **API Design** | <ul><li>High-level, opinionated, batteries-included components</li><li>Many inter-component dependencies, e.g. OButton is reused in the public API of a dozen other components</li><li>Doesn't export components for low-level concerns like transitions & animations</li><li>Icon set bundled with library</li></ul> | <ul><li>Mid-level, modular, compose-these-parts-together-yourself components</li><li>Components are standalone, there's no inter-component dependencies (at least not in the public API)</li><li>Exports components for low-level concerns like transitions & animations</li><li>Bring your own icons</li></ul> |
| **Maintanence** | <ul><li>Maintained by a single team</li><li>Only one team had the authority to approve & publish changes</li></ul> | <ul><li>Collectively maintained by all teams</li><li>All teams have authority to approve & publish changes (which includes taking responsiblity for breaking other teams' code if that becomes the case)</li></ul> |
| **Versioning** | <ul><li>Follows semver conventions</li><li>Infrequent but large major releases with many breaking changes across many components</li><li>Rarely publishs pre-releases</li></ul> | <ul><li>Follows semver conventions</li><li>Frequent but small major releases with breaking changes typically scoped to a single component</li><li>Regularly publishs pre-releases to experiment with and stabilize eventual breaking API changes before making official releases</li></ul> |




## FAQs

Maker is both a Design System which can be used by designers to create mockups and a Component Library which can be used by engineers to implement those mockups. "Maker" broadly refers to both simultaneously, however for the purpose of clearing answering all of the questions below we'll refer to the Maker Design System as **MDS** and the Maker Component Library as **MCL**.

Furthermore, all the questions below assume you're a product engineer working on a product project designed by a product designer.

### When should I use MCL in my project?

If the designer on your project is using MDS to design their mockups then you should use MCL to implement those mockups. If there is no designer on your project and you're developing any kind of Buyer-facing UI then you should use MCL.


### There's a component that is in Orbit but not in MCL, should I add it?

No. Orbit and MCL do not have the same goals and so they will not have the same set of components. And even for the components they do currently share in common, the MCL version of the components have a considerably different visual and technical design.



### I've been asked to add a component to MCL that is currently in Orbit, can I copy & paste it over?

No. Start from first principles. Review the table above. It's okay to look at an Orbit component's implementation to get some ideas of how to approach the implementation in MCL, but if you are just copying & pasting a component from Orbit directly into MCL then you are definitely doing something wrong.



### When should I update an MCL component vs implementing a one-off in my project?

There is a [Maker Design System Figma file](https://www.figma.com/file/2cgnI0Cb5L7DqdCNiIRrot/%F0%9F%8D%81-Maker-Design-System?node-id=2379%3A19587). To make an engineering-friendly analogy, this Figma file is like the `master` branch of MDS. The `master` branch of MCL should always faithfully represent the designs in the `master` branch of MDS, i.e. [its Figma file](https://www.figma.com/file/2cgnI0Cb5L7DqdCNiIRrot/%F0%9F%8D%81-Maker-Design-System?node-id=2379%3A19587). MDS is the source of truth for MCL.

Ideally, when a product designer uses MDS to design a mockup, they design the entire mockup using only MDS. If you're working with such a designer then you'll be able to use MCL as-is to implement the mockup without having to do any hacks, overrides, or opening any PRs to change MCL.

Occasionally a product designer may find MDS to be too limiting or constraining for what they're trying to design. The ideal way to handle this situation would be for the designer to extend MDS by contributing changes back to MDS and then getting those changes approved & merged into MDS `master`. Once their changes are in MDS `master` they update and hand-off their mockups to engineering. However, this approach can be time-consuming, which is why some designers choose to skip contributing back to MDS and hand-off their mockups as-is to engineering and let the engineers figure it out.

If you're an engineer and your recieved a mockup from a designer that looks like it was designed with MDS but when you try to implement it using MCL you notice the components in MCL don't quite match the ones in the mockup and to make them match would require you making a bunch of unexpected hacks or overrides then you should follow these steps:

- Check MDS `master`. Do the components in MDS `master` match the mockup you have received? If yes, then MCL `master` must be lagging behind MDS `master` and you should make a PR on MCL to update the relevant components.
- If the components in the mockup do not match MDS `master` then you need to start a dialogue with your designer. Ask them if they are aware their mockups don't match what's in MDS `master`. If they say no then politely ask them to update their mockups to match MDS. Problem solved, no need to make any changes to MCL.
- If they say yes, ask them if the designs in the mockups should be added to MDS or if they should be implemented as one-offs for this particular project. If they say implement the designs as one-offs then do that. Problem solved, no need to make any changes to MCL.
- If they say the designs should be added to MDS then ask your designer to first get the designs approved & merged into MDS `master` and once that is done you can start on the engineering work to update MCL `master`.

Do not, under any circumstances, start making changes to MCL without first checking MDS `master` and if necessary, talking to your designer.



### When should I add a new component to MCL vs implementing a one-off in my project?

Although this is a slightly different question it has the same answer as the previous question.


### When and how should I introduce breaking changes and make a major version release of MCL?

This question assumes that you are introducing a breaking change to MCL so that it stays consistent with MDS. If not, please review the answer to the previous two questions.

In the scenario you need to introduce breaking changes and eventually make a major version release of MCL you should follow these steps:

1. Minimize the scope of your breaking changes. Ideally scope them down to a single component. This will make it significantly easier for your team and every other team which depends on MCL to migrate to the new major version. If you need to introduce breaking changes to multiple components, but these changes are otherwise independent, consider doing multiple major version releases. Making a major version release which introduces breaking changes to many components should only be done as a last resort.
1. Before making a major version release, please do a pre-release and test the changes in your codebase. Please notify other teams of this pre-release so they can optionally test the changes in their codebases as well. It's likely you will get feedback which will make your reconsider some of your technical decisions, in which case it's good you did a pre-release to validate your ideas before finalizing them in an official major version release, instead of making two major version releases in the same week with breaking changes to the same component.
1. Once you have made your major version release write a changelog and migration guide which other teams can follow to migrate to this new major version. Again, this is significantly easier if you followed step 1 and minimized the scope of your breaking changes. Notify teams that a new major version of MCL has been released and point them to your changelog and migration guide. Be available to answer questions and offer migration help.
