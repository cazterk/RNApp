import { colors } from '../shared';

export const tabOptions = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      height: 0,
    },
    activeTintColor: colors.blue,
    inactiveTintColor: colors.dark,
    style: {
      backgroundColor: "#D7DBDD",
    },
  },
};

export const stackOptions = title => ({
  title,
  headerTintColor: colors.dark,
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: "#D7DBDD",
    borderBottomWidth: 0,
  },
});
