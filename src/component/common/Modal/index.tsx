import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';



export default function CommonModal({ open, setOpen }: {
     open: boolean,
     setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
     return (
          <Modal
               open={open}
               onClose={() => setOpen(false)}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
          >
               <StyledBox >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                         Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
               </StyledBox>
          </Modal>
     );
}

const StyledBox = styled(Box)`
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 400;
     border: 2px solid #000;
     box-shadow: 24;
`
