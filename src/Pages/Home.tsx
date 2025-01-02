import { Grid2 as Grid } from '@mui/material';
import PersonalDetailsMainView from "../components/PersonalDetails/PersonalDetails.MainView.tsx";
import MainImage from "../components/MainImage/MainImage.tsx";
import Image from '../assets/hero-image.png';
import './style.scss';

const Home = () => {
    return (
        <Grid container className="home  container xl mt-20 flex space-x-4">
            <Grid size={{xs: 12, md: 6}} spacing={2}>
                <PersonalDetailsMainView />
            </Grid>
            <Grid size={{xs: 12, md: 6}} spacing={2}>
                <MainImage
                    src={Image}
                    alt='HBZ'
                />
            </Grid>
        </Grid>
    );
}

export default Home;
