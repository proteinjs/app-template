import React from 'react';
import { Page, Form, Fields, textField, FormButtons, clearButton, FormPage, NavMenuItem } from '@proteinjs/ui';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export const helloPage: Page = {
  name: 'Hello',
  path: 'hello',
  component: () => (
    <FormPage>
      <Form<HelloFields, typeof buttons>
        name='Hello'
        createFields={() => new HelloFields()}
        fieldLayout={['name', 'description']}
        buttons={buttons}
      />
    </FormPage>
  ),
};

export const helloNavMenuItem: NavMenuItem = {
  name: 'Hello',
  action: helloPage.path as string,
  icon: WavingHandIcon,
};

class HelloFields extends Fields {
  static create() {
    return new HelloFields();
  }

  name = textField<HelloFields>({
    name: 'name',
    onLoad: async (fields: HelloFields) => {
      console.log(`Running onLoad for name`);
    },
    onChange: async (value: string, fields: HelloFields) => {
      console.log(`Running onChange for name`);
      if (!fields.description.field.accessibility) {
        fields.description.field.accessibility = {};
      }
      if (value == 'a') {
        fields.description.field.accessibility.required = true;
      } else {
        fields.description.field.accessibility.required = false;
      }
    },
  });

  description = textField<HelloFields>({
    name: 'description',
    onLoad: async (fields: HelloFields) => {
      console.log(`Running onLoad for description`);
    },
    isPassword: true,
  });
}

const buttons: FormButtons<HelloFields> = {
  clear: clearButton,
  submit: {
    name: 'submit',
    style: {
      color: 'primary',
      variant: 'contained',
    },
    onClick: async (fields: HelloFields, buttons: FormButtons<HelloFields>) => {
      console.log(`Submitted form, name: ${fields.name.field.value}`);
    },
  },
};
