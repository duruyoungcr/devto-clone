import { useEffect, useState } from 'react'
import TagList from '../TagList'
import styles from './TagListings.module.css'

interface ListingsPropTypes {
    type_of: string
    id: number
    title: string
    description: string
    readable_publish_date: string
    slug: string,
    path: string
    url: string
    comments_count: number
    public_reactions_count: number
    collection_id: null
    published_timestamp: string
    positive_reactions_count: number
    cover_image: string
    social_image: string
    canonical_url: string
    created_at: string
    edited_at: string
    crossposted_at: null
    published_at: string
    last_comment_at: string
    reading_time_minutes: number
    tag_list: [],
    tags: string
    user: {
        name: string,
        profile_image: string
    }
}

interface TagListingsPropTypes {
    tag: string
}
const TagListings = ({ tag }: TagListingsPropTypes) => {
    const [listings, setListings] = useState<Array<ListingsPropTypes>>([])
    useEffect(() => {
        fetchListings()
        return () => {
            fetchListings()
        }
    }, [])
    const baseURL = 'https://dev.to/t/'
    const listingsURL = `https://dev.to/api/articles?${tag}&per_page=5`
    const fetchListings = async () => {
        const result = await fetch(listingsURL).then((res) => res.json())
        setListings(result)
    }
    const handleIsNew = (date: string) => {
        const today = new Date()
        const createdDay = new Date(date)
        const differenceInDays = Math.round(Math.abs(Number(today) - Number(createdDay)) / (1000 * 60 * 60 * 24))
        return differenceInDays < 5 ? true : false;
    }
    return (
        <div className={styles.card}>
            <div className='flex items-center justify-between px-4 py-3 border-b border-b-gray-light'>
                <a href={baseURL + tag}>
                    <h3
                        className='text-lg font-bold text-black duration-300 transition-all ease-in hover:text-purple'
                    >
                        #{tag}
                    </h3>
                </a>
            </div>
            {listings.map(listing => (
                <TagList
                    key={listing.id}
                    title={listing.title}
                    comments={listing.comments_count}
                    href={`${listing.slug}`}
                    isNew={handleIsNew(listing.created_at)}
                />
            ))}
        </div>
    )
}

export default TagListings