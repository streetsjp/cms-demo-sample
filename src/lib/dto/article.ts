export interface ArticleDetailDto extends ArticleDtoBase {
  contentBlocks: any;
  contentHtml: string;
  tags: Tag[];
}

export interface ArticleListDto extends ArticleDtoBase {
  mainImageUrl: string;
}

export interface ArticleDtoBase {
  id: string;
  title: string;
  sammary: string | null;
  slug: string | null;
  language: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export type Tag = {
  id: string;
  name: string;
  teamId: string | null;
  createdAt: string;
  color: string;
}
