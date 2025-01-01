import { Button } from './../../generic-components';
import { useNavigate } from "react-router-dom";
import './style.scss';

const PersonalDetailsMainView = () => {
    const navigate = useNavigate();

    const redirectPage = (page: string) => {
        navigate(`/${page}`);
    }

    return (
        <div>
            <div className="personal-details">
                <h1 className="personal-details-title">
                    Hey There 👋 I am
                    <span className="personal-details-title-fullname">Haim Ben-Zaken</span>
                </h1>
                <h2 className="personal-details-profession">
                    Professional
                    <span className="personal-details-profession-title"> Web Engineer</span>
                </h2>
                <p className="personal-details-description">
                    Full Stack Web Developer with over ten years of experience,
                    demonstrating expertise in web project management and product management,
                    creating innovative and user-centric web applications.
                </p>
                <div className="personal-details-cta">
                    <Button
                        text="Contact Me"
                        onClick={() => redirectPage('contact')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4"
                    />
                    <Button
                        text="Learn More"
                        onClick={() => redirectPage('services')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 black"
                    />
                </div>
            </div>
        </div>
    );
}

export default PersonalDetailsMainView;
