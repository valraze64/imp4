import { styled } from '@mui/system';
import { theme } from '../../theme/theme';

export const LoginButton = styled('button')(({
    border: 'none',
    borderRadius: theme.spacing(0.5),
    background: theme.palette.primary.main,
    color: '#ffffff',
    fontSize: theme.typography.h2.fontSize,
    fontFamily: theme.typography.h2.fontFamily,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.5),
    cursor: 'pointer',

    [theme.breakpoints.up('xl')]: {
      fontSize: '28px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: theme.typography.h.fontSize,
    },
}));

export const LoginContainer = styled('div')(({
  background: 'transparent',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1),
  width: theme.spacing(50),
  display:'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems: 'center',
  marginTop: '30vh',

  [theme.breakpoints.up('xl')]: {
    width: '460px',
  },
  [theme.breakpoints.up('xxl')]: {
    width: '540px',
  },
}));

export const Text = styled('h2')(({
  fontFamily: theme.typography.h2Bold.fontFamily,
  fontSize: theme.typography.h2Bold.fontSize,
}));

export const Container = styled('div')(({
  display: 'flex',
  justifyContent: 'center',
}));
