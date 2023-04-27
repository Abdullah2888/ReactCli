import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

const ShowDates = ({ route }) => {
  const [data, setdata] = useState([])
  const { item } = route.params;
  const targetTime = item.endDate;
  const [timeLeft, setTimeLeft] = useState(moment.duration(moment(targetTime).diff(moment())).asSeconds());



  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);
  return (
    <View>
      <Text>email: {item.email}</Text>
      <Text>key: {item.key}</Text>
      <Text>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</Text>
    </View>
  )
}

export default ShowDates

const styles = StyleSheet.create({})