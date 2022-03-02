import { useEffect, useState } from 'react'
import List from '../List'

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

const TrendingListings = () => {
    const [listings, setListings] = useState<Array<ListingsPropTypes>>([])
    useEffect(() => {
        fetchListings()
        return () => {
            fetchListings()
        }
    }, [])
    const baseURL = 'https://dev.to/'
    const listingsURL = `https://dev.to/api/listings/category/education?per_page=20`
    const fetchListings = async () => {
        const result = await fetch(listingsURL).then((res) => res.json())
        setListings(result)
    }
    return (
        <div className="pb-4 border-b border-gray-light">
            <div className='flex items-center justify-between px-4 py-3'>
                <h6 className='text-[14.4px] font-semibold text-black-darkest'>
                    trending guides/resources
                </h6>
            </div>
            {listings.map(listing => (
                <List
                    key={listing.id}
                    title={listing.title}
                    category={listing.category}
                    href={`${baseURL + listing.category}/${listing.slug}`}
                    trending={true}
                />
            ))}
        </div>
    )
}

export default TrendingListings