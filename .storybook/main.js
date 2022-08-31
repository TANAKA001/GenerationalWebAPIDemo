module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [{
    name: "@storybook/addon-essentials",
    options: {
      backgrounds: true,
      docs: true,
      viewport: true,
      controls: true,
      actions: true,
      measure: true,
      outline: true,
    }},
    // '@storybook/addon-interactions',
    // '@storybook/addon-links',
    "@storybook/preset-create-react-app"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  }
}
