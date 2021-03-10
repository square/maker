# What is Maker?

Most people contributing to and using Maker will be familiar with [Orbit](https://github.com/square/orbit) and will likely have a lot of wrong ideas about Maker's goals by assuming they're the same as Orbit's. This is incorrect. Maker is not Orbit. Their key high-level differences in a table:

| | Orbit | Maker |
|-|-------|-------|
| **Visual Design** | <ul><li>Desktop-first design, mobile was an afterthought or not considered at all</li><li>Designed for information-dense dashboards</li><li>Not themeable, specifically designed to reflect Weebly's and Square's brand</li></ul> | <ul><li>Mobile-first design</li><li>Designed for ecommerce sites</li><li>Designed to be themeable, should be able to be customized to fit any Seller's brand</li></ul> |
| **API Design** | <ul><li>High-level, opinionated, batteries-included components</li><li>Many inter-component dependencies, e.g. OButton is reused in the public API of a dozen other components</li><li>Doesn't export components for low-level concerns like transitions & animations</li><li>Icon set bundled with library</li></ul> | <ul><li>Mid-level, modular, compose-these-parts-together-yourself components</li><li>Components are standalone, there's no inter-component dependencies (at least not in the public API)</li><li>Exports components for low-level concerns like transitions & animations</li><li>Bring your own icons</li></ul> |
| **Maintanence** | <ul><li>Maintained by a single team</li><li>Only one team had the authority to approve & publish changes</li></ul> | <ul><li>Collectively maintained by all teams</li><li>All teams have authority to approve & publish changes (which includes taking responsiblity for breaking other teams' code if that becomes the case)</li></ul> |
| **Versioning** | <ul><li>Follows semver conventions</li><li>Infrequent but large major releases with many breaking changes across many components</li><li>Rarely publishs pre-releases</li></ul> | <ul><li>Follows semver conventions</li><li>Frequent but small major releases with breaking changes typically scoped to a single component</li><li>Regularly publishs pre-releases to experiment with and stabilize eventual breaking API changes before making official releases</li></ul> |

## FAQs

### I got a product design from a product designer which looks very Maker-ish but the current Maker components don't 100% support the designs I got, should I create a PR to update the components?

Product designers should be using the Maker Design System, however product designers make mistakes all the time. They also intentionally design outside of the design system all the time. If your designer gives you designs which are not supported by Maker bring this to their attention and ask them if they can refactor their designs to use Maker. If they intentionally made the decision to not to use Maker then you have have to implement a one-off component specific to your application.

To get a change into Maker your product designer should coordinate with a design system designer or put on their own design system hat and make sure the change is compatible with the rest of the design system. There's a higher bar for what goes into Maker than what goes into the product.

### I want to add a new component to Maker, should I?

Was the component specifically designed with Maker in mind? Then yes. If not, then it has to pass this checklist of minimum requirements to be considered for inclusion into Maker:

- Must be responsive, should look good on mobile first and then look good on desktop second.
- Must be themeable (within reason, and if appropriate for the component).
- Must be used across several product areas.

If those requirements are not met then the component should be implemented as a one-off specific to your application.

### There's a component that is in Orbit but not in Maker, should I add it?

No. Orbit and Maker do not share the same goals and so they will not have the same set of components.
