import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {};
export default meta;
 
type Story = StoryObj<Meta>;
 
export const Basic: Story = {
  name: "Basic Styling",
  decorators: [() => {
    return <>
    <section>
      <h1>Headings</h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </section>
    <section>
      <h1>Standard Text</h1>
      <p>Paragraph</p>
      <em>Emphasis</em>
      <strong>Bold</strong>
    </section>
    </>
  }],
 };