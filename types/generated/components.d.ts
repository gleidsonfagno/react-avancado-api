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

export interface PageConcepts extends Schema.Component {
  collectionName: 'components_page_concepts';
  info: {
    displayName: 'concepts';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
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

export interface PageModules extends Schema.Component {
  collectionName: 'components_page_modules';
  info: {
    displayName: 'modules';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface PagePricingBox extends Schema.Component {
  collectionName: 'components_page_pricing_boxes';
  info: {
    displayName: 'pricingBox';
    icon: 'priceTag';
  };
  attributes: {
    totalPrice: Attribute.Integer & Attribute.Required;
    numberInstallments: Attribute.Integer & Attribute.Required;
    priceInstallmet: Attribute.Integer & Attribute.Required;
    benefits: Attribute.Blocks & Attribute.Required;
    button: Attribute.Component<'page.button'> & Attribute.Required;
  };
}

export interface PageQuestions extends Schema.Component {
  collectionName: 'components_page_questions';
  info: {
    displayName: 'questions';
    icon: 'question';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Blocks & Attribute.Required;
  };
}

export interface PageReviews extends Schema.Component {
  collectionName: 'components_page_reviews';
  info: {
    displayName: 'reviews';
    icon: 'star';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required & Attribute.Private;
    photo: Attribute.Media;
  };
}

export interface PageSectionAboutProject extends Schema.Component {
  collectionName: 'components_page_section_about_projects';
  info: {
    displayName: 'sectionAboutProject';
    icon: 'information';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PageSectionAboutUs extends Schema.Component {
  collectionName: 'components_page_section_aboutuses';
  info: {
    displayName: 'sectionAboutUs';
    icon: 'user';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    authors: Attribute.Relation<
      'page.section-about-us',
      'oneToMany',
      'api::author.author'
    >;
  };
}

export interface PageSectionAgenda extends Schema.Component {
  collectionName: 'components_page_section_agenda';
  info: {
    displayName: 'sectionAgenda';
    icon: 'calendar';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface PageSectionConcepts extends Schema.Component {
  collectionName: 'components_page_section_concepts';
  info: {
    displayName: 'sectionConcepts';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    concepts: Attribute.Component<'page.concepts', true>;
  };
}

export interface PageSectionFaq extends Schema.Component {
  collectionName: 'components_page_section_faqs';
  info: {
    displayName: 'sectionFaq';
    icon: 'question';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    questions: Attribute.Component<'page.questions', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface PageSectionModules extends Schema.Component {
  collectionName: 'components_page_section_modules';
  info: {
    displayName: 'sectionModules';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    modules: Attribute.Component<'page.modules', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface PageSectionReviews extends Schema.Component {
  collectionName: 'components_page_section_reviews';
  info: {
    displayName: 'sectionReviews';
    icon: 'star';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    reviews: Attribute.Component<'page.reviews', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
        },
        number
      >;
  };
}

export interface PageSectionTech extends Schema.Component {
  collectionName: 'components_page_section_teches';
  info: {
    displayName: 'sectionTech';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    techIcons: Attribute.Component<'page.tech-icons', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 5;
          max: 10;
        },
        number
      >;
  };
}

export interface PageSocialLinks extends Schema.Component {
  collectionName: 'components_page_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    title: Attribute.Enumeration<
      ['GitHUb', 'Twitter', 'Dribble', 'Linkedin', 'Facebook']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Twitter'>;
    url: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface PageTechIcons extends Schema.Component {
  collectionName: 'components_page_tech_icons';
  info: {
    displayName: 'techIcons';
    icon: 'manyToOne';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.concepts': PageConcepts;
      'page.header': PageHeader;
      'page.modules': PageModules;
      'page.pricing-box': PagePricingBox;
      'page.questions': PageQuestions;
      'page.reviews': PageReviews;
      'page.section-about-project': PageSectionAboutProject;
      'page.section-about-us': PageSectionAboutUs;
      'page.section-agenda': PageSectionAgenda;
      'page.section-concepts': PageSectionConcepts;
      'page.section-faq': PageSectionFaq;
      'page.section-modules': PageSectionModules;
      'page.section-reviews': PageSectionReviews;
      'page.section-tech': PageSectionTech;
      'page.social-links': PageSocialLinks;
      'page.tech-icons': PageTechIcons;
    }
  }
}
