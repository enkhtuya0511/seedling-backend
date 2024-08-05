type User = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: number;
  avatarUrl?: string;
  birthYear: number;
  activeClassIds: string[];
  createdAt: string;
};
type Tutor = {
  id: string;
  firstName: string;
  lastName: string;
  password: number;
  phone: string;
  email: string;
  avatarUrl?: string;
  birthYear: number;
  createdAt: string;
  rating: number; //1-5
};

type Course = {
  id: string;
  tutorId: string;
  createdAt: string;
  rating: number; //1-5
  basicInfo: {
    title: string;
    categoryIds: string[];
    topic: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    schedule: {
      totalHours: number;
      hoursPerDay: number;
      dates: string[];
      startHour: number;
    };
  };
  advancedInfo: {
    thumbnailUrl: string;
    testVideoUrl: string;
    description: string;
    subjects: Subject[];
    targetAudiences: TargetAudience[];
  };
  curriculum: CurriculumSection[];
  publicationDetails: {
    welcomeMessage: string;
    congratulationsMessage: string;
  };
};

type Subject = {
  name: string;
  subTopics?: string[];
};

type TargetAudience = {
  ageGroup: number;
  additionalGroups?: number[];
};

type CurriculumSection = {
  name: string;
  lectures: Lecture[];
};

type Lecture = {
  id: string;
  title: string;
  videoUrl?: string;
  fileUrl?: string;
  caption?: string;
  description?: string;
  notes?: string;
};
