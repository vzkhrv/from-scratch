import React from 'react';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

import '../src/components/styles.css';
import '../src/styles.css';

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withTests({
    results,
  }),
  (Story) => (
    <div className='root-container'>
      <Story />
    </div>
  ),
];

export default preview;
