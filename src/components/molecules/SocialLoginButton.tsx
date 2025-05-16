import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

interface Props {
  provider: 'Google' | 'Facebook';
}

export default function SocialLoginButton({ provider }: Props) {
  const icon = provider === 'Google' ? <GoogleIcon /> : <FacebookIcon />;
  return (
    <Button variant="outlined" fullWidth startIcon={icon}>
      Entrar com {provider}
    </Button>
  );
}
