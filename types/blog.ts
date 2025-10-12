export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  lang: 'en' | 'gr';
  draft?: boolean;
  readingTime: string;
  content: string;
  author?: {
    name: string;
    avatar?: string;
  };
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  lang: 'en' | 'gr';
  draft?: boolean;
  author?: {
    name: string;
    avatar?: string;
  };
}

