import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButton = ({ name, activeTab, handleSearchtype }) => (
  <TouchableOpacity style={styles.btn(name, activeTab)}
    onPress={handleSearchtype}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>)

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList data={tabs}
        renderItem={({item}) => (<TabButton name={item} activeTab={activeTab}
          handleSearchtype={() => setActiveTab(item)} />)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs