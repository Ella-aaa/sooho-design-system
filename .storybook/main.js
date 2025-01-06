/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  typescript: {
    //스토리북에서 컴포넌트 props type에 문자열 리터럴 유니온 타입을 좀더 구체적으로 표시하기 위해 설정
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
