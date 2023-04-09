import React, { useState } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { CryptoDetailScreenProps, DetailTabEnum } from '.';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../utils/colors';
import IconButton from '../../../../components/IconButton/IconButton';
import { formatCurrency } from '../../../../utils/currencyFormatter';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { DetailTabBuy } from './DetailTabBuy';
import { DetailTabSell } from './DetailTabSell';
import { findBaseCurrency } from '../../../../utils/helpers';



export function DetailScreen(props: CryptoDetailScreenProps) {
    const { navigation, route } = props;
    const exchange = route.params.exchange;
    const { t } = useTranslation();
    const layout = useWindowDimensions();
    const baseCurrency = findBaseCurrency(exchange.market.split('/')[1]);
    const [index, setIndex] = useState(DetailTabEnum.Buy);
    const [isFavorite, setIsFavorite] = useState(false);
    const [routes] = useState([
        { key: 'buy', title: t('secure-buy-crypto', { currency: exchange.currency }) },
        { key: 'sell', title: t('secure-sell-crypto', { currency: exchange.currency }) },
    ]);

    const renderDetailTabBuy = () => {
        return <DetailTabBuy exchange={exchange} />;
    };

    const renderDetailTabSell = () => {
        return <DetailTabSell exchange={exchange} />;
    };


    const renderScene = SceneMap({
        buy: renderDetailTabBuy,
        sell: renderDetailTabSell,
    });

    const onBackPress = () => {
        navigation.goBack();
    };

    const onFavoritePress = () => {
        setIsFavorite(!isFavorite);
    };

    const renderTabBar = (tabBarProps: any) => {
        const isBuy = tabBarProps.navigationState.index === DetailTabEnum.Buy;
        return <TabBar {...tabBarProps}
            indicatorContainerStyle={styles.indicatorContainerStyle}
            indicatorStyle={{ backgroundColor: isBuy ? Colors.persianGreen : Colors.darkTerraCotta }}
            pressColor={Colors.citron}
            contentContainerStyle={{ backgroundColor: Colors.white }}
            activeColor={isBuy ? Colors.persianGreen : Colors.darkTerraCotta} inactiveColor={Colors.cloud}
            labelStyle={styles.tabLabelStyle}
        />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <IconButton name="LeftArrow" color={Colors.gunmetal} width={20} height={20} onPress={onBackPress} />
                <Text style={styles.headerTitle}>{exchange.market}</Text>
                <IconButton name={isFavorite ? 'FavoriteFilled' : 'FavoriteEmpty'} color={Colors.saffronMango} width={20} height={20} onPress={onFavoritePress} />
            </View>
            <Text style={styles.currencyValue}>
                {formatCurrency(Number(exchange.value), baseCurrency, 'tr-TR')}
            </Text>
            <View style={styles.divider} />
            <TabView
                style={styles.tabViewContainer}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
                lazy
            />
        </SafeAreaView>
    );
}
