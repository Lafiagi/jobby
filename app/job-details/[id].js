import { useRouter, useGlobalSearchParams, Stack } from "expo-router";
import React from "react";
import { Text, SafeAreaView, ScrollView, ActivityIndicator, View, RefreshControl } from "react-native";
import { useCallback, useState } from "react";

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import useFetch from "../hooks/useFetch";
import { COLORS, icons, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const JobDetails = () => {
    const router = useRouter();
    const params = useGlobalSearchParams();
    const [refreshing, setRefreshing] = useState(false);
    const tabs = ["About", "Qualifications", "Responsibilities"];
    const [active, setActive] = useState(tabs[0])
    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id })
    console.log(`Jon details page rerendered!!!!!`)
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [])
    const displayTabContent = () => {
        switch (active) {
            case 'Qualifications':
                return <Specifics title='Qualifications' points={data[0].job_highlights?.Qualifications ?? ['N/A']} />
            case 'About':
                return <JobAbout info={data[0].job_description ?? 'No data provided'} />
            case 'Responsibilities':
                return <Specifics title='Responsibilities' points={data[0].job_highlights?.Responsibilities ?? ['N/A']} />
            default:
                break
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerBackVisible: false, headerShadowVisible: false, headerTitle: '',
                headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.left} dimension={'60%'} handlePress={() => router.back()} />),
                headerRight: () => (<ScreenHeaderBtn iconUrl={icons.share} dimension={'60%'} handlePress={() => router.back()} />)
            }}>
            </Stack.Screen>
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? <ActivityIndicator size='large' color={COLORS.primary} /> : error ?
                        (<Text>Something went wrong</Text>) : data.length === 0 ?
                            <Text>NO data to render</Text> :
                            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                                <Company jobData={data[0]} />
                                <JobTabs tabs={tabs} activeTab={active} setActiveTab={setActive} />
                                {displayTabContent()}
                            </View>}
                </ScrollView>
                {data[0]?.job_google_link ? <JobFooter url={data[0].job_google_link} /> : null}
            </>
        </SafeAreaView>

    )
}

export default JobDetails;