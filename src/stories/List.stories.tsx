import { List } from "../components/List";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof List> = {
  title: 'core/List',
  component: List,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof List>;

export default meta;

export const ItemList: Story = {
  args: {
    items: [
      {
        id: 'item1',
        done: false,
        header: 'купить молоко'
      },
      {
        id: 'item2',
        done: true,
        header: 'купить хлеб'
      },
    ],
    onDelete: () => void 0,
    onToggle: () => void 0,
  }
};

export const EmptyList: Story = {
  args: {
    items: [],
    onDelete: () => void 0,
    onToggle: () => void 0,
  }
};
