# @user-credits/svelte-ui Library Readme

## Introduction

A demo using this library with SvelteKit is [available at this link](https://user-credits.dev)

**[@user-credits/svelte-ui](https://www.npmjs.com/package/@user-credits/svelte-ui)** 
is an open-source library designed to streamline the management 
of user credits (pay-as-you-go models). It ships with user interface components for handling offers, 
order management, payment tracking, and credit consumption in web applications.

Whether you're developing a subscription-based service, a digital marketplace, 
or an e-commerce platform, svelte-ui is built on top of [@user-credits/core](https://www.npmjs.com/package/@user-credits/core) and
relies on its implementations' server side (like [@user-credits/stripe-mongoose](https://www.npmjs.com/package/@user-credits/stripe-mongoose)) 
to allow flexible and technology-agnostic solutions for your billing offer needs.
While the primary implementation is in Svelte, the library is adaptable to other
view technologies, making it a versatile choice for your projects.

**Sorry I don't know how reduce the button size, I like coffee but not to that extent.**
[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-blue.png)](https://www.buymeacoffee.com/credits)

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Features

### Screens and Process Flows

user-credits-ui includes screens and process flows for handling offers, offer groups, order management, payment tracking, and credit consumption. The library is built with SvelteKit but may easily be translated to other view technologies like React, Vue or Angular.

### Offers and Offer Groups

- **Offers:** With [@user-credits/stripe-mongoose](https://www.npmjs.com/package/@user-credits/stripe-mongoose), you can create and manage offers, allowing you to define different pricing models, discounts, and customizations. It includes features like offer overriding, enabling tailored pricing for specific user groups or offer groups. You can check the unit tests to see that in action.

- **Offer Groups:** Examples of offer groups include monthly or yearly billing with advantageous or exclusive offers unlocks by purchasing a specific "offer" (offerGroup actually), such as "Insurance" or "Online Course."

### Order Management and Payment

- **Order and Payment:** Users can easily order and pay for offers through user-credits-ui. The library handles the entire order and payment process, allowing users to follow the progress and confirmation of their payments.

- **Subscription Management:** user-credits-ui supports different use cases of offers, including subscription-based offers, consulting offers, and token-based offers.

### Token-Based Offers

- **Token-Based Offers:** Token-based offers provide users with a certain number of credits. These credits can be consumed by related services or products. Users can track their credit consumption for each offer they've purchased.

- **Stats and Monitoring:** user-credits-ui offers detailed statistics and monitoring capabilities, allowing users to see the current state of each token-based offer, making it easy to keep track of their credit usage.

### Multi-Currency Support

user-credits-ui allows you to display orders and prices in multiple currencies, making it suitable for a global audience. While currency conversion is not built-in, user-credits-ui offers seamless integration to sync and manage international payments effortlessly.


## Usage

## Getting Started

### Prerequisites:
This library is intended to be used by a UI technology like Svelte, React, Vue, Angular or hybrid mobile apps. 

A SvelteKit project using it is available at **[@user-credits/svelte-ui](https://www.npmjs.com/package/@user-credits/svelte-ui)**


## Contributing

user-credits-ui is an open-source project, and we welcome contributions from the community. If you'd like to contribute, please follow the standard [contribution guidelines](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

## License

user-credits-ui is licensed under the MIT License. You can find the full license details in the [LICENSE](LICENSE) file.

We hope you find user-credits-ui useful for your project. If you have any questions or need assistance, please don't hesitate to reach out to us.

Happy coding with user-credits-ui! 🚀

---

[GitHub Repository](https://github.com/ziedHamdi/svelte-user-credits)

Some code will be moved to a [front-end agnostic library project](https://github.com/ziedHamdi/user-credits-ui)

[comment]: <> ([API Documentation]&#40;https://user-credits-ui-docs.com/api&#41;)

[comment]: <> ([User Guide]&#40;https://user-credits-ui-docs.com/guide&#41;)
