import { createAppContainer , createSwitchNavigator} from 'react-navigator';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
    createSwitchNavigator({ //cria navegação entre duas telas sem feedbvack visual
        Login,
        Main
    })
)