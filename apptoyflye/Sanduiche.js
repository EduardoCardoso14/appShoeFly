import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import ListaIdade from './ListaIdade';
import Produtos from './Produtos';
import Compra from './Compra';
import Carrinho from './Carrinho';
import HistoricoCompra from './HistóricoCompra';
import TelaRetorno from './TelaRetorno';
const Drawer = createDrawerNavigator();

function Sanduiche() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#FCF3CF',
                    width: 250,
                },
            }}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Cadastro" component={Cadastro}
                    options={{
                        drawerItemStyle: { display: 'none' }
                    }
                    }
                />
                <Drawer.Screen name="ListaIdade" component={ListaIdade} />
                <Drawer.Screen name="Produtos" component={Produtos}
                    options={{
                        drawerItemStyle: { display: 'none' }
                    }
                    }
                />
                <Drawer.Screen name="Compra" component={Compra}
                    options={{
                        drawerItemStyle: { display: 'none' }
                    }
                    }
                />
                <Drawer.Screen name="TelaRetorno" component={TelaRetorno}
                    options={{
                        drawerItemStyle: { display: 'none' }
                    }
                    }
                />
                <Drawer.Screen name="Carrinho" component={Carrinho}
                />
                <Drawer.Screen name="Historico de compras" component={HistoricoCompra}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default Sanduiche;
