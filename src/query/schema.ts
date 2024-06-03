//src/query/schema.ts
import { gql } from "@apollo/client";

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
  query GetExamLevel {
    examLevels {
      data {
        id
        attributes {
          exam_level_name
        }
      }
    }
  }
`;

export const GET_HERO_SECTION = gql`
  query GetHomeSection {
    heroSections {
      data {
        id
        attributes {
          homebanner {
            id
            title {
              t1
              t2
              t3
            }
            text1
            button1 {
              text
              href
            }
          }
          section2 {
            card1 {
              icon {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
              title
              text
            }
          }
          partners {
            title
            images {
              data {
                id
                attributes {
                  name
                }
              }
            }
          }
          CounsellingPackages {
            title
            CounsellingPackagesCards {
              id_no
              icon {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
              PackageName
              isPopular
              price
              text1
              lists {
                data {
                  id
                  attributes {
                    isInclude
                    text
                    college {
                      data {
                        id
                        attributes {
                          college_name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          banner1 {
            title
            text1
            button {
              text
              href
              bgImg {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
          banner2 {
            title {
              t1
              t2
              t3
            }
            text
            steps {
              data {
                id
                attributes {
                  text
                  colleges {
                    data {
                      id
                      attributes {
                        college_name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TOP_COLLEGES = gql`
query GetTopColleges{
    colleges(filters:{
      is_top:{eq: true}
    }
     
    ){
      data{
        id
        attributes{
          college_name
        }
      }
    }
  }
  `;