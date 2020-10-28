export interface Post {
  postId: string;
  header: string;
  message: string;
  created: number;
  uid: string;
  audience: string[];
  subHeader?: string;
  tags?: string[];
}
