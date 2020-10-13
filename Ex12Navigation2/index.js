/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainBottom from './MainBottom';
import MainDrawer from './MainDrawer';
import MainMaterialTopTab from './MainMaterialTopTab';

AppRegistry.registerComponent(appName, () => MainBottom);
