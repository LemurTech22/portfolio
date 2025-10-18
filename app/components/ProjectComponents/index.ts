
//taskbar
export {default as Navbar} from '@/app/components/navbar';
export {default as Footer} from '@/app/components/Footer';
export {default as HeroSection} from '@/app/components/ProjectComponents/Hero_Section';

//Accordian Gallery
export { ProjectsGallery } from '@/app/components/ProjectComponents/Accordian_Content/Gallery';
export { ProjectDeepDives } from '@/app/components/ProjectComponents/Accordian_Content/ProjectDives';
export {ProjectAccordion} from "@/app/components/ProjectComponents/Accordian_Content/ProjectAccordian"

//project content
export { projects } from '@/app/components/ProjectComponents/content/projects';
export {ProjectCard} from "@/app/components/ProjectComponents/Accordian_Content/ProjectCards"

//utilities
export type { ProjectID, Category, Project, categoryColors } from '@/app/components/ProjectComponents/utils/project_builder';

//components
export { isProjectID, getCategoryColor, getCategoryIcon} from '@/app/components/ProjectComponents/utils/project_categories';

