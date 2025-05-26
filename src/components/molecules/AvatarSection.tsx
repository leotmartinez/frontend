// src/components/molecules/AvatarSection.tsx
import { Avatar, Box, Stack, Typography } from '@mui/material';
import OptionsMenu from '../pages/AssistantLayout/components/OptionsMenu'; // ou onde estiver

export default function AvatarSection() {
  return (
    <Stack
      direction="row"
      sx={{
        p: 2,
        gap: 1,
        alignItems: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Avatar
        sizes="small"
        alt="User"
        src="/static/images/avatar/7.jpg"
        sx={{ width: 36, height: 36 }}
      />
      <Box sx={{ mr: 'auto' }}>
        <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
          User
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          user@email.com
        </Typography>
      </Box>
      <OptionsMenu />
    </Stack>
  );
}
