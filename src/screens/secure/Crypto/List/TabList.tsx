import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Exchange, TabListProps } from '.';
import { urls } from '../../../../services/urls';
import { CurrencyExchange } from '../../../../components/CurrencyExchange';
import { styles } from './styles';
import { Colors } from '../../../../utils/colors';



export function TabList(props: TabListProps) {
    const { type } = props;
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch(urls.list, {
            method: 'GET',
        }).then((response) => response.json()).then((responseData) => {
            setData(responseData);
        }).catch((error) => {
            console.error(error);
        }
        );
    }, [type]);

    // eslint-disable-next-line react-native/no-inline-styles
    if (!(data.length > 0)) { return <View style={{ flex: 1 }} ><ActivityIndicator color={Colors.citron} animating={true} /></View>; }

    const renderItem = ({ item }: { item: Exchange }) => {
        return <CurrencyExchange exchange={item} />;
    };

    return <View style={styles.tabListContainer} >
        <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
        />
    </View>;
}
