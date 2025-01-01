import { Button as GenericButton } from './../../../generic-components';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DownloadCVButton = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <GenericButton
                text="Download CV"
                onClick={() => handleClickOpen()}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4"
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"CV file is not Available"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        at the moment the CV file is not available for download,
                        you can contact me via the <a href="/contact" className="text-blue-500 underline">contact form</a> in this website or <a href="mailto:benzak@gmail.com" className="text-blue-500 underline">send me email</a>.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DownloadCVButton;