export type TutorProfileType = {
  courseIds: string[];
  resume: {
    education: string;
    workExperiences: string;
    certificationurls: string[];
  };
};

export type UserType = {
  _id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: number;
  profilePic: string;

  // enrolledClassIds: string[];
  tutorProfile: TutorProfileType;

  favorites: string[];
  otpCode: String;
  otpCodeExpires: Date;
};

type Education = {
  universityName: string;
  degree: string[]; //Bachelor-Master-Doctor..
  duration: string; //2010-2015
};

type WorkExperience = {
  jobTitle: string;
  companyName: string;
  duration: string;
};

type Course = {
  _id: string;
  topic: string[]; //language->> Exam/..for children/..Business //Arts->> Digital arts/ visual arts etc
  category: string;
  description: string;
  videoLesson: string;
  price: number;
  level: string; //Beginner-Intermediate-Advanced
  availableDays: string[]; //Mon-Sun
  availableTimes: string[]; //Morning-Afternoon-Evening-Night
  enrolledStudentIds: string[];

  rating: number;
  reviews: Review[];
};

type Review = {
  studentId: string; //find user's details by id
  review: string;
  createdAt: string;
  rating: number;
};
