interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  contract: boolean | undefined;
}

class Director extends Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean
  yearsOfExperience: number;
  location: 'London',
  contract: false,
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
