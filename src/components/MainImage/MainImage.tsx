import { FC } from 'react';
import { Box } from '@mui/material';

export interface MainImageProps {
    src: string;
    alt: string;
}

const MainImage: FC<MainImageProps> = ({ src = '', alt = '' }) => {
    return (
        <Box>
            <img src={src} alt={alt} />
        </Box>
    );
}

export default MainImage;