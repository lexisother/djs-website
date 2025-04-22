<template>
  <div id="home">
    <Slide id="jumbotron">
      <Logo :light="true" id="logo" />
      <code>npm install discord.js</code>
    </Slide>

    <section id="info">
      <div class="info-item">
        <h2>About</h2>
        <p>
          discord.js is a powerful <a href="https://nodejs.org/">node.js</a> module that allows you
          to interact with the
          <a href="https://discordapp.com/developers/docs/intro">Discord API</a> very easily. It
          takes a much more object-oriented approach than most other JS Discord libraries, making
          your bot's code significantly tidier and easier to comprehend.
        </p>
        <p>
          Usability, consistency, and performance are key focuses of discord.js, and it also has
          nearly 100% coverage of the Discord API. It receives new Discord features shortly after
          they arrive in the API.
        </p>
      </div>

      <div class="info-item">
        <h2>Example</h2>
        <highlightjs language="javascript" :code="code" />
      </div>

      <div class="info-item">
        <h2>Why?</h2>
        <ul>
          <li>Object-oriented</li>
          <li>Speedy and efficient</li>
          <li>Feature-rich</li>
          <li>Flexible</li>
          <li>100% Promise-based</li>
        </ul>
      </div>

      <div class="info-item">
        <h2>Statistics</h2>
        <Stats />

        <p class="center">...and growing!</p>
      </div>

      <div class="full-info-item">
        <RouterLink to="/docs" class="big-ass-btn">Get started</RouterLink>
        <a href="https://discord.gg/bRCvFy9" class="big-ass-btn discord">Discord</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const code = `const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(\`Logged in as \${client.user.tag}!\`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');`;
</script>

<style lang="scss">
@use 'sass:color';
@use '../../styles/theming';
@use '../../styles/mq';

#home {
  text-align: center;
  background: theming.$color-content-bg;
  color: theming.$color-content-text;

  h2 {
    font-size: 2rem;
    margin: 0;
    font-weight: 600;
    letter-spacing: -1px;
  }

  p {
    font-size: 1rem;
    line-height: 2rem;
    text-align: left;

    @include mq.mq($until: tablet) {
      margin: 0 1rem;
    }

    & > a {
      font-weight: bold;
    }

    &.center {
      text-align: center;
    }
  }

  ul {
    width: 100%;
    font-size: 1rem;
    line-height: 2rem;
    text-align: left;
  }

  #jumbotron {
    flex: 0 0 100%;
    padding: 80px 16px;
    background-color: theming.$color-primary;
    background-image: linear-gradient(
      to bottom,
      theming.$color-primary,
      color.adjust(theming.$color-primary, $lightness: -5%)
    );

    code {
      display: inline-block;
      padding: 16px;
      border-radius: 5px;
      background: #f5f5f5;
      color: theming.$color-content-text;
      font-family: theming.$font-monospace;
    }
  }

  #logo {
    display: block;
    margin: 16px auto;
    width: 95%;
    max-width: 700px;
    overflow: visible;
    filter: drop-shadow(0 3px 4px #333);
  }

  #info {
    display: flex;
    flex-flow: row wrap;
    margin: 64px auto 0 auto;
    max-width: 1120px;

    @include mq.mq($until: tablet) {
      margin: 32px auto 0 auto;
    }
  }

  .info-item {
    flex: 1 1 45%;
    padding: 24px;

    ul {
      display: inline-block;
      margin: 0 auto;
      text-align: left;
    }

    pre {
      padding: 8px;
      border-radius: 4px;
      text-align: left;
      font-size: 0.875rem;
      background: #f0f0f0;
    }
  }

  .full-info-item {
    flex: 1 0 100%;
    margin: 48px 0;
  }

  .big-ass-btn {
    display: inline-block;
    padding: 12px 10px;
    border-radius: 4px;
    background: theming.$color-primary;
    color: white;
    font-size: 1.1rem;

    &:hover {
      background: color.adjust(theming.$color-primary, $lightness: 10%);
    }

    &:not(:first-of-type) {
      margin-left: 8px;
    }

    &.discord {
      background-color: #7289da;

      &:hover {
        background: color.adjust(#7289da, $lightness: 10%);
      }
    }
  }
}

#app.dark #home {
  background: theming.$color-content-bg-dark;
  color: theming.$color-content-text-dark;

  pre {
    background: color.adjust(theming.$color-content-bg-dark, $lightness: 4%);
    color: color.adjust(theming.$color-content-text-dark, $lightness: -20%);
  }

  #jumbotron {
    flex: 0 0 100%;
    padding: 80px 16px;
    background-color: #121212;
    background-image: linear-gradient(
      to bottom,
      theming.$color-primary,
      color.adjust(theming.$color-primary, $lightness: -50%)
    );

    code {
      display: inline-block;
      padding: 16px;
      border-radius: 5px;
      background: #121212;
      color: theming.$color-content-text-dark;
      font-family: theming.$font-monospace;
    }
  }
}
</style>
