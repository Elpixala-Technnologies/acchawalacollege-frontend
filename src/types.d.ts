export interface CollegeData {
    colleges: {
      data: Array<{
        id: string;
        attributes: {
            college_name: string;
        };
      }>;
    };
  }

