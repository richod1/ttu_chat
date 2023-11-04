import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Ionicons,Octicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme || 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="ios-home-outline" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme || 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft:()=>( 
            <Link href="/drawer" asChild>
              <Pressable>
                {({pressed})=>(
                  <Ionicons name="ios-menu" size={24} color={Colors[colorScheme || 'light'].text}
                  style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'explore',
          tabBarIcon: ({ color }) => <FontAwesome name="wpexplorer" size={24} color={color} />,
        }}
      />

<Tabs.Screen
        name="three"
        options={{
          title: 'chat',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />,
          headerRight: () => (
            <Link href="/ai" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Octicons 
                  name="dependabot"
                    size={25}
                    color={Colors[colorScheme || 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />


<Tabs.Screen
        name="four"
        options={{
          title: 'settings',
          tabBarIcon: ({ color }) => <Ionicons name="ios-settings-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
