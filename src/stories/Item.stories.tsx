import { Item } from "../components/Item";

import '../components/styles.css';

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Item> = {
  title: 'core/Item',
  component: Item,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Item>;

export default meta;

export const ListItemNew: Story = {
  args: {
    id: "item",
    header: "Заголовок элемента списка",
    done: false,
    onDelete: () => void 0,
    onToggle: () => void 0,
  }
};

export const ListItemDone: Story = {
  args: {
    id: "item",
    header: "Заголовок элемента списка",
    done: true,
    onDelete: () => void 0,
    onToggle: () => void 0,
  }
};

ListItemDone.storyName = "Выполенный элемент списка";
