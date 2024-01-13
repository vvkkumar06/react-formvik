import { userEvent, within } from "@storybook/testing-library";
import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Register',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: "Register Data: "
        }
    }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Register: Story = {
    args: {
        preset: 'register'
    },
    play: async ({ canvasElement }) => {
      const registerData = {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            website: "https://www.example.com",
            gen: "male",
            password: "password123",
            confirmPassword: "password123",
            toc: true,
        };
        
        const c = within(canvasElement);

        const firstNameInput = c.getByLabelText('First Name', { selector: 'input ' });
        const lastNameInput = c.getByLabelText('Last Name', { selector: 'input' });
        const emailInput = c.getByLabelText('Email Address', { selector: 'input ' });
        const phoneInput = c.getByLabelText('Phone Number', { selector: 'input' });
        const websiteInput = c.getByLabelText('Website', { selector: 'input ' });
        const genderInput = c.getByLabelText('Gender', { selector: 'select' });
        const passInput = c.getByLabelText('Password', { selector: 'input ' });
        const cPassInput = c.getByLabelText('Confirm Password', { selector: 'input' });
        const tocInput = c.getByRole('checkbox');
        const registerBtn = c.getByRole('button');


        await userEvent.type(firstNameInput, registerData.firstName, { delay: 100 });
        await userEvent.type(lastNameInput, registerData.lastName, { delay: 100 });
        await userEvent.type(emailInput, registerData.email, { delay: 100 });
        await userEvent.type(phoneInput, registerData.phone, { delay: 100 });
        await userEvent.type(websiteInput, registerData.website, { delay: 100 });
        await userEvent.selectOptions(genderInput, registerData.gen);
        await userEvent.type(passInput, registerData.password, { delay: 100 });
        await userEvent.type(cPassInput, registerData.confirmPassword, { delay: 100 });
        await userEvent.click(tocInput, { delay: 100});

        await userEvent.click(registerBtn);
    }
}