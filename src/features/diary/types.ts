export type DiaryMedia = {
  id: string;
  url: string;
  kind: 'image' | 'video';
};

export type DiaryEntry = {
  id: string;
  catId: string;
  title: string;
  note?: string;
  createdAt: string;
  media?: DiaryMedia[];
};
