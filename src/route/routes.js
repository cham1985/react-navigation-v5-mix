// import {t} from '../services/i18n';
// import routeConfig from './config';

export const HOME = 'Home';
export const DetailsScreen = {
  routeName: 'DetailsScreen',
  screenTitle: '详情页',
};

// export function getRoute(name) {
//   return name;
// }

// export function getTitle(name) {
//   // let result = routeConfig.page.filter(item => item.name === name)
//
//   // if (!result.length) {
//   //   result = routeConfig.tabs.filter(item => item.name === name)
//   // }
//   // console.log('result', result)
//   return t(`title:${name.toLowerCase()}`) || t('title:home');
// }

// export function getRouteTitle(routeName) {
//   return getTitle(routeName);
// }

// export function getHeaderConfig(name) {
//   let result = routeConfig.page.filter(item => item.name === name);
//
//   if (!result.length) {
//     result = routeConfig.tabs.filter(item => item.name === name);
//   }
//   // console.log('result++++++++++++++++++++++++++++++++++++++++', name, result)
//   return result.length ? result[0].header || {} : {};
// }

export function push(navigation, {name, data, emitKey = 'UPDATE_PAGE'}, next) {
  navigation.push(name, data);

  // DeviceEventEmitter.emit(emitKey, data);
}

export function navigate(
  navigation,
  {name, data, emitKey = 'UPDATE_PAGE'},
  next,
) {
  navigation.navigate(name, data);

  // DeviceEventEmitter.emit(emitKey, data);
}

export function goback(
  navigation,
  {name, data, emitKey = 'UPDATE_PAGE'},
  next,
) {
  navigation.goBack();

  // DeviceEventEmitter.emit(emitKey, data);
}

export function popToTop(
  navigation,
  {name, data, emitKey = 'UPDATE_PAGE'},
  next,
) {
  navigation.popToTop();

  // DeviceEventEmitter.emit(emitKey, data);
}
