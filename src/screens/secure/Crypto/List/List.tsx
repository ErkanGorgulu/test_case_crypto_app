import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import IconButton from '../../../../components/IconButton/IconButton';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { Colors } from '../../../../utils/colors';
import { TabList } from './TabList';



const renderScene = SceneMap({
    //TODO : Change this to dynamic
    ['favorites']: () => <TabList type="favorites" />,
    try: () => <TabList type="try" />,
    usdt: () => <TabList type="usdt" />,
});



export function ListScreen() {
    const { t } = useTranslation();
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'favorites', title: t('secure-favorites') },
        { key: 'try', title: t('secure-try') },
        { key: 'usdt', title: t('secure-usdt') },
    ]);


    const onSearchPress = () => {
        console.log('Search');
    };

    const onSettingsPress = () => {
        console.log('Settings');
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.marketsText}>{t('secure-markets')}</Text>
                <View style={styles.headerIconContainer}>
                    <IconButton name="Search" width={24} height={24} color={Colors.citron} onPress={onSearchPress} />
                    <IconButton name="Settings" width={28} height={28} color={Colors.citron} onPress={onSettingsPress} />
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => <TabBar {...props}
                    indicatorContainerStyle={styles.indicatorContainerStyle}
                    indicatorStyle={{ backgroundColor: Colors.citron }}
                    pressColor={Colors.citron}
                    contentContainerStyle={{ backgroundColor: Colors.white }}
                    activeColor={Colors.citron} inactiveColor={Colors.cloud}
                    labelStyle={styles.tabLabelStyle} />}
                lazy
            />
        </SafeAreaView>
    );
}
