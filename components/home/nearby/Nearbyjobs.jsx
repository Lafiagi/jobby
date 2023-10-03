import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { SIZES, COLORS } from '../../../constants';
import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import useFetch from '../../../app/hooks/useFetch';
import axios from 'axios';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';


const Nearbyjobs = () => {
  const router = useRouter();

  const { data, error, isLoading } = useFetch(endpoint = 'search', query = {
    query: 'Python developer in Texas, USA',
    num_pages: '1'

  }) 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Near by jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size={'large'} color={COLORS.primary} />) : !data ?
          <Text>Something went wrong</Text> : (data.map((job, index)=>(
            <NearbyJobCard job={job} key={`nearby-${index}`} handleCardPress={()=> router.push(`job-details/${job.job_id}`)} />
          )))}
      </View>
    </View>
  )
}

export default Nearbyjobs;