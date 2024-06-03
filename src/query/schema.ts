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

export const GET_COURSES = gql`
  query GetCourses {
    courses {
      data {
        id
        attributes {
          course_name
        }
      }
    }
  }
`;

export const GET_EXAMS = gql`
  query GetExams {
    exams {
      data {
        id
        attributes {
          exam_name
        }
      }
    }
  }
`;

export const GET_EXAMS_LEVEL = gql`
  query GetExamLevel{
    examLevels{
      data{
        id
        attributes{
          exam_level_name
        }
      }
    }
  }
`;