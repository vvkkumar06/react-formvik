import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
    title: 'Presets/Membership Registration',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Membership Registration Data:'
        }
    }
}

export const MembershipRegistration =  {
    args: {
        name: 'Membership Registration',
        preset: 'membershipRegistration'
    },
}