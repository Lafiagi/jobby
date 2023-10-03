import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './nearbyjobcard.style'


const NearbyJobCard = ({ job, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={ handleCardPress}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{ uri: job.employer_logo }} resizeMode='contain' style={styles.logImage} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity >
  )
}

export default NearbyJobCard;