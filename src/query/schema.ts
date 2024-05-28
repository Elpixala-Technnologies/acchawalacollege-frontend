//src/query/schema.ts
import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          blog_title
        }
      }
    }
  }
`;
