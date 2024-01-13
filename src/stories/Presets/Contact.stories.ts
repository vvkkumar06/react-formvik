import { Meta, StoryObj} from '@storybook/react';
import { userEvent, within } from "@storybook/testing-library";
import Form from '../../components/Form';

const meta = {
    title: 'Presets/Contact Us',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: "Contact Data: "
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const ContactUs: Story = {
    args: {
        name: 'Contact Us',
        preset: 'contactUs'
    },
    play: async ({ canvasElement }) => {
        const c = within(canvasElement);
        const contactUsData = {
            fullName: "Alice Johnson",
            email: "alice.johnson@example.com",
            subject: "Inquiry about your services",
            message: "Hello, I'm interested in learning more about the services you provide. Can you please provide more information?",
        };
        

        const nameInput = c.getByLabelText('Full Name', { selector: 'input ' });
        const emailInput = c.getByLabelText('Email Address', { selector: 'input ' });
        const subInput = c.getByLabelText('Subject', { selector: 'input' });
        const messageInput = c.getByLabelText('Message', { selector: 'textarea' });

        const submitBtn = c.getByRole('button');


        await userEvent.type(nameInput, contactUsData.fullName, { delay: 100 });
        await userEvent.type(emailInput, contactUsData.email, { delay: 100 });
        await userEvent.type(subInput, contactUsData.subject, { delay: 100 });
        await userEvent.type(messageInput, contactUsData.message, { delay: 100 });


        await userEvent.click(submitBtn);
    }
}