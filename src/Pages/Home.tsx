import { Grid2 as Grid } from '@mui/material';
import PersonalDetailsMainView from "../components/PersonalDetails/PersonalDetails.MainView.tsx";
import MainImage from "../components/MainImage/MainImage.tsx";
import Image from '../assets/hero-image.png';
import './style.scss';

const Home = () => {
    return (
        <div className="home  container xl mt-20 flex space-x-4">
            <Grid size={6}>
                <PersonalDetailsMainView />
            </Grid>
            <Grid size={6}>
                <MainImage
                    src={Image}
                    alt='HBZ'
                />
            </Grid>
        </div>
    );
}

export default Home;
