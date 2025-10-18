export type ProjectID = 
  | 'Medical'
  | 'Map Navigation'
  | 'Volunteer Management System'
  | 'Pneumonia'
  | 'Chevron'
  | 'Urban_Safety'
  | 'Energy_Forecasting'
  | 'Credit Card Fraud Detection'
  | 'Student GPA Prediction'
  | 'Library';

export type Category = 'fullstack' | 'datascience' | 'datavisual' | 'indevelopment'

// Define project type
export interface Project {
  id: ProjectID;
  title: string;
  category: Category;
  categoryLabel: string;
  tagline: string;
  techStack: string[];
  image?: string;
  github: string;
  demo: string;
  details: {
    overview: string;
    challenge: string;
    technical: string;
    results: string;
    learned: string;
  };
}

export interface categoryColors{
    border:string;
    text:string;
    bg:string;
    button:string;
    learn_more_button:string;
}