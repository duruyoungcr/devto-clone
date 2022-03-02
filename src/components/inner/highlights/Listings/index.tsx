import { useEffect, useState } from 'react'
import List from '../List'
import styles from './Listings.module.css'

interface ListingsPropTypes {
    type_of: string,
    id: number,
    title: string,
    slug: string,
    body_markdown: string,
    category: string,
    processed_html: string,
    published: boolean,
    listing_category_id: number,
    tag_list: string,
    tags: string[],
    created_at: string,
    user: {
        name: string,
        username: string,
        twitter_username: string,
        github_username: string,
        website_url: string,
        profile_image: string,
        profile_image_90: string,
    },
    organization?: {
        name: string,
        username: string,
        slug: string,
        profile_image: string,
        profile_image_90: string,
    }
}

const Listings = () => {
    const [listings, setListings] = useState<Array<ListingsPropTypes>>([])
    useEffect(() => {
        fetchListings()
        return () => {
            fetchListings()
        }
    }, [])
    const baseURL = 'https://dev.to/'
    const allListingsURL = 'https://dev.to/listings'
    const listingsURL = 'https://dev.to/api/listings?per_page=5'
    const fetchListings = async () => {
        const result = await fetch(listingsURL).then((res) => res.json())
        setListings(result)
    }
    return (
        <div className={styles.card}>
            <div className='flex items-center justify-between px-4 py-3 border-b border-b-gray-light'>
                <h3 className='text-lg font-bold text-black-dark'>Listings</h3>
                <a href={allListingsURL} className='text-purple text-sm font-medium'>See all</a>
            </div>
            {listings.map(listing => (
                <List
                    key={listing.id}
                    title={listing.title}
                    category={listing.category}
                    href={`${baseURL + listing.category}/${listing.slug}`}
                />
            ))}
            <a href={allListingsURL + "/new"}>
                <div className='flex items-center justify-center p-3'>
                    <h3
                        className='text-sm font-medium text-black transition-all duration-300 ease-in hover:text-purple'
                    >
                        Create a Listing
                    </h3>
                </div>
            </a>
        </div>
    )
}

export default Listings