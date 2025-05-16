import { Box, Button, Typography, Link } from '@mui/material';
import TextFieldWithLabel from '../molecules/TextFieldWithLabel';
import SocialLoginButton from '../molecules/SocialLoginButton';

export default function LoginForm() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextFieldWithLabel label="Email" name="email" type="email" placeholder="your@email.com" />
      <TextFieldWithLabel label="Senha" name="password" type="password" placeholder="••••••" />

      <Link href="#" variant="body2" alignSelf="flex-end">
        Forgot your password?
      </Link>

      <Button variant="contained" fullWidth>
        Sign in
      </Button>

      <Typography variant="body2" textAlign="center">
        ou entre com
      </Typography>

      <SocialLoginButton provider="Google" />
      <SocialLoginButton provider="Facebook" />
    </Box>
  );
}
