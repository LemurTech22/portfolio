"use client";
import {Code, Database, Brain, Server, React} from '@/app/resources_index'
import { categoryColors, Category, ProjectID } from './project_builder';

export const getCategoryColor = (category: Category): categoryColors => {
  switch(category) {
    case 'fullstack': return {
      border: 'border-purple-600/50',
      text: 'text-purple-400',
      bg: 'bg-purple-500/20',
      button: 'bg-purple-600 hover:bg-purple-700',
      learn_more_button: 'bg-purple-600 hover:bg-slate-700',
    };
    case 'datascience': return {
      border: 'border-emerald-600/50',
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/20',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      learn_more_button: 'bg-emerald-600 hover:bg-slate-700',
    };
    case 'datavisual': return {
      border: 'border-blue-600/50',
      text: 'text-blue-400',
      bg: 'bg-blue-500/20',
      button: 'bg-blue-600 hover:bg-blue-700',
      learn_more_button: 'bg-blue-600 hover:bg-slate-700',
    };
    case 'indevelopment': return {
      border: 'border-orange-600/50',
      text: 'text-orange-400',
      bg: 'bg-orange-500/20',
      button: 'bg-orange-600 hover:bg-orange-800',
      learn_more_button: 'bg-orange-600 hover:bg-slate-700',
    };
    default: return {
      border: 'border-slate-600/50',
      text: 'text-slate-400',
      bg: 'bg-slate-500/20',
      button: 'bg-slate-600 hover:bg-slate-700',
      learn_more_button: 'bg-slate-600 hover:bg-slate-700',
    };
  }
};

export const getCategoryIcon = (category: Category): React.ReactElement => {
  switch(category) {
    case 'fullstack': return <Code size={20} />;
    case 'datascience': return <Database size={20} />;
    case 'datavisual': return <Brain size={20} />;
    default: return <Server size={20} />;
  }
};

export const isProjectID = (id: string): id is ProjectID => {
  return [
    'Medical', 'Map Navigation', 'Volunteer Management System', 'Pneumonia',
    'Chevron', 'Urban_Safety', 'Energy_Forecasting',
    'Credit Card Fraud Detection', 'Student GPA Prediction', 'Library'
  ].includes(id);
};