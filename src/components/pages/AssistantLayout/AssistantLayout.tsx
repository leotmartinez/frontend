import CssBaseline from '@mui/material/CssBaseline';
import Box from '../../atoms/Box/Box';
import AppTheme from '../../shared-theme/AppTheme';
import { AskAssistantPage } from '../AskAssistantPage';
import AppNavbar from '../../organisms/AppNavbarOrganism';

export default function AssistantLayout(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : theme.palette.background.default,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            px: 3,
            py: 5,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <AskAssistantPage />
        </Box>
      </Box>
    </AppTheme>
  );
}

// // src/templates/AssistantLayout.tsx 

// import CssBaseline from '@mui/material/CssBaseline'; // ok deixar direto do MUI
// import AppTheme from '../../shared-theme/AppTheme';

// import Box from '../../atoms/Box/Box';
// import SideMenuOrganism from '../../organisms/SideMenu';
// import AppNavbarOrganism from '../../organisms/AppNavbarOrganism';
// import { AskAssistantPage } from '../AskAssistantPage';

// export default function AssistantLayout(props: { disableCustomTheme?: boolean }) {
//   return (
//     <AppTheme {...props}>
//       <CssBaseline enableColorScheme />
      
//       <Box sx={{ display: 'flex' }}>
//         {/* SideMenu: aparece só no desktop */}
//         <SideMenuOrganism />

//         {/* AppNavbar: aparece só no mobile */}
//         <AppNavbarOrganism />

//         {/* Conteúdo principal */}
//         <Box
//           component="main"
//           sx={(theme) => ({
//             flexGrow: 1,
//             backgroundColor: theme.vars
//               ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
//               : theme.palette.background.default,
//             overflow: 'auto',
//           })}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: '1000px',
//               margin: '0 auto',
//               px: 3,
//               py: 5,
//             }}
//           >
//             <AskAssistantPage />
//           </Box>
//         </Box>
//       </Box>
//     </AppTheme>
//   );
// }


// // src/components/pages/AssistantLayout.tsx
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import AppNavbar from './components/AppNavbar';
// import SideMenu from './components/SideMenu';
// import AppTheme from '../../shared-theme/AppTheme';
// import { AskAssistantPage } from '../AskAssistantPage'; // Importando a página principal

// export default function AssistantLayout(props: { disableCustomTheme?: boolean }) {
//   return (
//     <AppTheme {...props}>
//       <CssBaseline enableColorScheme />
//       <Box sx={{ display: 'flex' }}>
//         <SideMenu />
//         <AppNavbar />
//         {/* Main content */}
//         <Box
//           component="main"
//           sx={(theme) => ({
//             flexGrow: 1,
//             backgroundColor: theme.vars
//               ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
//               : theme.palette.background.default,
//             overflow: 'auto',
//           })}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: '1000px', // você pode aumentar esse valor se quiser mais largo ainda
//               margin: '0 auto',
//               px: 3,
//               py: 5,
//             }}
//           >
//             <AskAssistantPage />
//           </Box>

//         </Box>
//       </Box>
//     </AppTheme>
//   );
// }



