//src/query/schema.ts
import { gql } from '@apollo/client';

export const GET_COLLEGES = gql`
  query GetColleges {
    colleges {
      data {
        id
        attributes {
          college_name
        }
      }
    }
  }
`;
