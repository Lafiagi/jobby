import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';


const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');
  const jobTypes = ['Full-time', 'Contractor', 'Part-Time'];

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Abubakar</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>

      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput value={searchTerm} onChangeText={(text) => setSearchTerm(text)} placeholder='What are you looking for...' style={styles.searchInput}>
          </TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes} renderItem={({ item }) => (
          <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => { setActiveJobType(item); router.push(`/search/${item}`) }}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )} keyExtractor={(item)=>item} contentContainerStyle={{columnGap: SIZES.small}} horizontal />
      </View>
    </View>
  )
}

export default Welcome