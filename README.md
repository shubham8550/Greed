project...

![cover.png](assets\logo\cover.png)

<p align="center">An over-engineered all-in-one bot framewok for building efficient and scalable bots.</p>

> Yep that's not a typo u heard it right "scalable bots" :)

### Description

Greed is a framework for building efficient, scalable Whatsapp, Discord, and Telegram bots. It uses [NestJs](https://nestjs.com/), which is built with TypeScript and combines the power of microservices
[microservices](https://docs.nestjs.com/microservices/basics)

Under the hood, Project Greed makes use of [NATS](https://nats.io/)(messaging system), For [microservices](https://docs.nestjs.com/microservices/nats), and concepts like monkey-patching for making BotClient Objects accessible to multiple instances of command microservices

### Philosophy

- in recent years bots are getting popular as their userbase is increasing it becomes hard to scale bots.
- users want to increase their reach by making bots for multiple platforms(WhatsApp, discord, telegram) which leads problem to invest in multiple bot developments.

Project Greed aims to provide an bot development architecture out of the box which allows for effortless creation of highly testable, scalable, loosely coupled and easily maintainable

It is used to develop cross-platform bots WhatsApp, Discord, Telegram,more in a single codebase

### Getting started

- Prerequisites

  - create .env file,refer .env.example
  - yep you need nats server
  - <b>npm install</b> to install dependancies

- to start bot(s) (handler)

```

nest start handler

```

- To start Ping command microservice eg.

```

nest start ping

```

### Roadmap

- [x] Add Readme.md
- [ ] Update Roadmap

See the [open issues](https://github.com/shubham8550/Greed/issuess) for a full list of proposed features (and known issues).

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

```

```
