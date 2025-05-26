import { Box, TextField, Typography } from '@mui/material';

interface TextFieldWithLabelProps {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export default function TextFieldWithLabel({
  label,
  name,
  type = 'text',
  placeholder,
  fullWidth = true,
}: TextFieldWithLabelProps) {
  return (
    <Box>
      <Typography variant="body2" gutterBottom>{label}</Typography>
      <TextField
        name={name}
        type={type}
        placeholder={placeholder}
        fullWidth={fullWidth}
        size="small"
      />
    </Box>
  );
}
