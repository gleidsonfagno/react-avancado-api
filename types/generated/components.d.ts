import type { Schema, Attribute } from '@strapi/strapi';

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'page.button'>;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.header': PageHeader;
    }
  }
}
