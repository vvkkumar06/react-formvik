import { userEvent, within } from "@storybook/testing-library";
import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Feedback',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Feedback Data:'
        }
    }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Feedback: Story =  {
    args: {
        preset: 'feedback',
        onChange: undefined
    },
    play: async ({ canvasElement }) => {
        const feedbackData = {
            name: "Bob Miller",
            email: "bob.miller@example.com",
            feedbackType: "feature",
            feedback: "I really like your product, but I would love to see more features added, especially in the user interface. Keep up the good work!",
        };

       const c = within(canvasElement);



        const nameInput = c.getByLabelText('Your Name', { selector: 'input ' });
        const emailInput = c.getByLabelText('Email Address', { selector: 'input ' });
        const typeSelect = c.getByLabelText('Feedback Type', { selector: 'select' });
        const feedbackTextArea = c.getByLabelText('Your Feedback', { selector: 'textarea' });

        const submitBtn = c.getByRole('button');

        await userEvent.type(nameInput, feedbackData.name, { delay: 100 });
        await userEvent.type(emailInput, feedbackData.email, { delay: 100 });
        await userEvent.selectOptions(typeSelect, feedbackData.feedbackType, { delay: 100});
        await userEvent.type(feedbackTextArea, feedbackData.feedback, { delay: 100 });


        await userEvent.click(submitBtn);
    }
}