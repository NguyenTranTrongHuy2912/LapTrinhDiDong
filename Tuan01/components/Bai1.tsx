import React, { Component } from 'react'
import { Text, View } from 'react-native'

type UserCardType = {
    name: string,
    age: number,
    isAdmin: boolean
  }
  
 export const UserCard = ({ name, age, isAdmin }: UserCardType) => {
    return (
      <>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text style={{ backgroundColor: isAdmin ? 'red' : 'blue', color: 'white' }}>{isAdmin ? "Admin" : "Not admin"}</Text>
      </>
    )
  }


export default UserCard;
