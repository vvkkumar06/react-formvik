import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
    title: 'Fields/Multiline Text',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const MultilineText = {
    args: {
        config: {
            fields: [
                {
                    label: "Comment",
                    field: "comment",
                    inputProps: {
                        type: "text",
                        rows: 10,
                        cols: 50
                    },
                    css: {
                        labelClass: 'form-label',
                        inputClass: 'form-control',
                        containerClass: 'mt-4'
                    }
                },

            ]
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const commentInput = canvas.getByLabelText('Comment', {
            selector: 'textarea'
        });

        await userEvent.type(commentInput, "I've been following your work for a while now. Always top-notch!", {
            delay: 50
        })
    }
}