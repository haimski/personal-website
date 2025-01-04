import { SectionTitle } from '../generic-components';
import WorksGalleryComponent from '../components/WorksGallery/WorksGalleryComponent';
import works from '../api/works.ts';

export interface WorksProps {
    works: { id: number, title: string, description: string, imageUrl: string }[];
}

const Works = () => {
    return (
        <div className="container xl mt-20">
            <SectionTitle
                subtitle="My Portfolio"
                mainTitle="Recent Works"
                description="Here are some of my recent works. I have worked on various projects and here are some of them."
            />
            <div className="lg:w-3/4 sm:1 mr-auto ml-auto">
                <WorksGalleryComponent works={works} />
            </div>
        </div>
    )
}

export default Works;