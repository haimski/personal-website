import './style.scss';

export interface SectionTitleProps {
    subtitle: string;
    mainTitle: string;
    description: string;
}

const SectionTitle = ({
    subtitle = '',
    mainTitle = '',
    description = ''
}) => {
    return (
        <div className="section-title">
            <div>
                <div>
                    <span className="sub-title"> {subtitle} </span>
                    <h2 className="main-title">{mainTitle}</h2>
                    <p className="description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default SectionTitle;