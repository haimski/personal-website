import './style.scss';

export interface WorksGalleryComponentProps {
    works: { imageUrl: string, title: string, description: string }[];
}

const WorksGalleryComponent = ({ works }: WorksGalleryComponentProps) => {
    return (
        <div className="works-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 gap-override py-8">
            {works.map((work, index) => (
                <div key={index} className="works-gallery-column my-2.5">
                    <img src={work.imageUrl} alt={work.title} className="w-full h-64 object-cover" />
                    <div className="works-gallery-column__title bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75">
                        <h3 className="text-lg font-bold">{work.title}</h3>
                        <p className="text-sm">{work.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorksGalleryComponent;
