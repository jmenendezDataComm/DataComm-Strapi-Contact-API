// Interface automatically generated by schemas-to-ts

export interface Page {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Title: string;
    Description?: string;
    Content?: any;
    slug?: string;
  };
}
export interface Page_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Title: string;
  Description?: string;
  Content?: any;
  slug?: string;
}

export interface Page_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Title: string;
  Description?: string;
  Content?: any;
  slug?: string;
}

export interface Page_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Title: string;
  Description?: string;
  Content?: any;
  slug?: string;
}
