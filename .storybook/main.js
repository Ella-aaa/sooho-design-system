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
  /** "typescript" 세팅 ( 공식문서에서 제공하는 세팅 ) */
  typescript: {
    /** "fork-ts-checker-webpack-plugin" 사용 여부 ( 별도의 타입 검사 플러그인 ) */
    check: false,

    /** "check" 활성화 시 "fork-ts-checker-webpack-plugin" 옵션 설정 */
    checkOptions: {},

    /** "react-docgen-typescript-plugin" 추가 ( 컴포넌트에서 사용한 타입을 추출해 문서로 만들어주는 도구 ) */
    reactDocgen: "react-docgen-typescript",

    /** "react-docgen-typescript"가 활성화된 경우 옵션 설정 */
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
export default config;
