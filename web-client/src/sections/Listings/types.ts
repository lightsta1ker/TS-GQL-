export interface Listing {
    id: string;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating: number;
  }
  
export interface Listingdata {
    listings : Listing[]
}

export interface deleteListingdata {
  deleteListing : Listing
}

export interface deleteListingdataVariables {
  id : string
}