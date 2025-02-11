import { useState, useRef, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MKButton from "components/MKButton";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [open, setOpen] = useState(true); // Modal opens by default

    const handleClose = () => {
        setOpen(false); // Close modal
        audioRef.current.play() // Play music
            .then(() => setIsPlaying(true))
            .catch(error => console.error("Autoplay prevented:", error));
    };

    //     useEffect(() => {
    //         alert(`Dear Visitor,

    // I have customized this website to provide you with an immersive experience about me. As part of this, background music will begin playing automatically.

    // Thank you for visiting!`);
    //         // audioRef.current.play();
    //         // setIsPlaying(true);
    //     }, [])

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/Stillbgm.mp3" type="audio/mpeg" />
            </audio>
            <div className="floating-button">
                <MKButton variant="text" color="info" size="large" iconOnly onClick={() => {
                    togglePlay()
                }}>
                    <AudiotrackIcon></AudiotrackIcon> {isPlaying ? <PauseIcon></PauseIcon> : <PlayArrowIcon></PlayArrowIcon>}
                </MKButton>
            </div>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Dear Visitor</DialogTitle>
                <DialogContent>
                    <Typography>
                        I have customized this website to provide you with an immersive experience.
                        As part of this, background music will begin playing once you close this message.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="white">
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>

            <style jsx>{`
                .floating-button {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000; /* Ensure it stays above other elements */
                }
            `}</style>



        </div>
    );
};

export default MusicPlayer;
