import { createStackNavigator } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import SignIn from "../../screens/SignIn";
import Home from "../../screens/Home";
import Background from "../../components/Background";
import { theme } from "../../global/styles/theme";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
}

export const navigations: RootRouteScreens[] = [
  {
    name: "SignIn",
    component: SignIn,
  },
  {
    name: "Home",
    component: Home,
  },
];

const NavigationStack: React.FC = () => {
  const Stack = createStackNavigator();

  const renderNavigations = navigations.map(
    ({ name, component: Component }) => {
      return (
        <Stack.Screen key={name} name={name}>
          {(props) => (
            <Background>
              <Component key={name} {...props} />
            </Background>
          )}
        </Stack.Screen>
      );
    }
  );

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        // cardStyle: {
        //   backgroundColor: theme.colors.primary,
        // },
      }}
    >
      {renderNavigations}
    </Stack.Navigator>
  );
};

export default NavigationStack;
