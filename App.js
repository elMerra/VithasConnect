import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome } from "@expo/vector-icons";


import { JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen } from "./screens";
import AddButton from "./components/AddButton";

// https://dribbble.com/shots/7046707-Nav-Bar-Animation
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: JournalScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome name="home" size={35} color="#00a8cc" />
            }
        },
        Servicios: {
            
            screen: MeasuresScreen,
            navigationOptions: {
                //tapBarIcon: <Servicios />  un cop programada l'animació del Servicio
                tabBarIcon: () => <FontAwesome name="heart" size={30} color="#00a8cc" />
            }
        },
         /*Add: {
            screen: () => null,
            navigationOptions: {
                tabBarIcon: <AddButton />
                
            }
        }, */
        Equipo: {
            screen: TreatmentScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome name="user-md" size={35} color="#00a8cc"/>
            }
        },
        Cita: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome name="calendar" size={30} color="#00a8cc"/>
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#FFFFFF',
            showLabel: true,
            style: {
                backgroundColor: "#173F5F",
                height: 60,
        },
            
        }
    }

);

export default createAppContainer(TabNavigator);


