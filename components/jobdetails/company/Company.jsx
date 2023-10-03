import React, { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import { icons } from '../../../constants'
import styles from './company.style'

const Company = ({ jobData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{ uri: jobData.employer_logo }} style={styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox} >
        <Text style={styles.jobTitle}>{jobData.job_title}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {jobData.employer_name}
        </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode='contain' style={styles.locationImage} />
          <Text style={styles.locationName}>
            {jobData.job_country}
          </Text>
        </View>
      </View>

    </View>
  )
}

export default Company