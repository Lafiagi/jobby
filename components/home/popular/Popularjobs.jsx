import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { SIZES, COLORS } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import useFetch from '../../../app/hooks/useFetch';
import axios from 'axios';


const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedjob] = useState()
  const { data, error, isLoading } = useFetch(endpoint = 'search', query = {
    query: 'Python developer in Texas, USA',
    num_pages: '1'

  })
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedjob(item.job_id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size={'large'} color={COLORS.primary} />) : !data ?
          <Text>Something went wrong</Text> : <FlatList data={data}
            renderItem={({ item }) => (<PopularJobCard item={item} handleCardPress={handleCardPress} />)}
            keyExtractor={(item) => { item }}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            showsHorizontalScrollIndicator={false}
            horizontal />}
      </View>
    </View>
  )
}

export default Popularjobs