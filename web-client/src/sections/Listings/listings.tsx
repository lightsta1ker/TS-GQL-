import React from "react";
import { server } from '../../lib/api'
import { Listingdata, deleteListingdata, deleteListingdataVariables } from "./types";
const LISTINGS = `
    query Listings{
        listings{
            id
            title
            image
            address
            price
            numOfGuests
            numOfBeds
            numOfBaths
            rating
        }
    }
`

const DELETE_LISTING = `
    mutation DeleteListing($id: ID!){
        deleteListing(id: $id){
            id
        }
    }
`
 interface Props{
     title: string
 }
 export const Listings = ({title}: Props) => {
     const fetchlistings = async() => {
         const {data } = await server.fetch<Listingdata>({ query: LISTINGS})
         console.log(data)
     }

     const deletlistings = async() => {
        const {data } = await server.fetch<deleteListingdata, deleteListingdataVariables>({ query: DELETE_LISTING, variables: {id: '627f91354deae55e24a674c3'}})
        console.log(data)
    }

     return (
            <div>
            <h2>{title}</h2>
            <button onClick={fetchlistings}>Query Listings!</button>
            <button onClick={deletlistings}>delete Listings!</button>
            </div>
            )
 }
