import { FC } from 'react';
import { Box } from '@mui/material';

export interface MainImageProps {
    src: string;
    alt: string;
}

const MainImage: FC<MainImageProps> = ({ src = '', alt = '' }) => {
    return (
        <Box className="xs:mb-4 w-full">
            <img src={src} alt={alt} className="w-full" />
        </Box>
    );
}

export default MainImage;