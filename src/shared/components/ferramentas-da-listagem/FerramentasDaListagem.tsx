
import { Box,TextField, Button,Paper, useTheme, Icon} from '@mui/material';

interface IFerramentasDaListagemProps {
   textDaBusca?: string,
   mostrarInputBusca?: boolean;
   aoMudarTextoDeBusca?: (novoTexto: string) => void;
   textBotaoNovo?: string,
   mostrarBotaoNovo?: boolean;
   aoClicarEmNovo?: () => void;
   
}
export const  FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
   textDaBusca = '',
   mostrarInputBusca = false,
   aoMudarTextoDeBusca,
   aoClicarEmNovo,
   textBotaoNovo = 'Novo',
   mostrarBotaoNovo = true,
}) => {
    const theme = useTheme();

    return (
     <Box
       height={theme.spacing(5)}
       marginX={1} 
       padding={1} 
       paddingX={2} 
       display="flex" 
       gap={1}
       alignItems="center"
       component={Paper}
       >
         {mostrarInputBusca &&(
               <TextField 
               size='small'
               value={textDaBusca}
               onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
               placeholder='Pesquisar...'
              />
         )}

      <Box flex={1} display="flex" justifyContent="end">
         {mostrarBotaoNovo &&(
            <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicarEmNovo}
            startIcon={<Icon>add</Icon>}
            >{textBotaoNovo}</Button>
         )}
      </Box>   
      
     </Box>
  );
};
