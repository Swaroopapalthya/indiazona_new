import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  styled,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface InviteSellerModalProps {
  open: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    width: '100%',
    maxWidth: '480px',
  },
}));

const InviteSellerModal: React.FC<InviteSellerModalProps> = ({ open, onClose }) => {
  const [inviteLink] = React.useState('https://indiazona.com/invite/ABC123');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
   
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6">Invite Sellers & Grow Your Team!</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Unity is power 💪, and teamwork makes the dream work! Invite sellers to join your team, help them earn 💰
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCopyLink}
            sx={{ mt: 2 }}
          >
            Copy Invite Link
          </Button>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default InviteSellerModal;
