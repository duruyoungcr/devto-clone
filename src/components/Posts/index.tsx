import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import CoverPost from '../inner/posts/CoverPost';
import DevCard from '../inner/posts/DevCard';
import Post from '../inner/posts/Post';
import styles from './Posts.module.css'


const links = [
    {
        title: 'Relevant',
        path: '/'
    },
    {
        title: 'Latest',
        path: '/latest'
    },
    {
        title: 'Top',
        path: '/top/week'
    }
]

interface PostPropTypes {
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
        profile_image: string,
        username: string
    }
}
const Posts = () => {
    const [tab, setTab] = useState<string>('Relevant')
    const [topPosts, setTopPosts] = useState<Array<PostPropTypes>>([])
    const [posts, setPosts] = useState<Array<PostPropTypes>>([])
    const [post, setPost] = useState<PostPropTypes>()
    const [pinnedPost, setPinnedPost] = useState<PostPropTypes>()
    useEffect(() => {
        fetchPosts()
        return () => {
            fetchPosts()
        }
    }, [])
    const postsURL = 'https://dev.to/api/articles?per_page=25'
    const fetchPosts = async () => {
        const result = await fetch(postsURL).then((res) => res.json())
        setTopPosts(result.slice(0, 3))
        setPosts(result.slice(3))
        setPost(result[4])
        setPinnedPost(result[getRandomIndex(result.length)])
    }
    const getRandomIndex = (length: number): number => {
        return Math.floor(Math.random() * length)
    }
    return (
        <section className={styles.container}>
            <Router>
                <div className={styles.links}>
                    {links.map((link, index) => (
                        <Link to={link.path} className={`${styles.link} ${tab === link.title ? 'font-bold' : 'text-black-light'}`} key={index} onClick={() => setTab(link.title)}>
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className={styles.posts}>
                    {pinnedPost &&
                        <Post
                            title={pinnedPost?.title}
                            link={pinnedPost?.url}
                            duration={pinnedPost?.reading_time_minutes}
                            comments={pinnedPost?.comments_count}
                            reactions={pinnedPost?.public_reactions_count}
                            tags={pinnedPost?.tag_list}
                            date={pinnedPost?.readable_publish_date}
                            author={pinnedPost?.user?.name}
                            avatar={pinnedPost?.user?.profile_image}
                            username={pinnedPost?.user?.username}
                            pinned
                        />
                    }
                    {post &&
                        <CoverPost
                            title={post?.title}
                            link={post?.url}
                            duration={post?.reading_time_minutes}
                            comments={post?.comments_count}
                            reactions={post?.public_reactions_count}
                            tags={post?.tag_list}
                            date={post?.readable_publish_date}
                            author={post?.user?.name}
                            avatar={post?.user?.profile_image}
                            coverImage={post?.cover_image}
                            username={post?.user.username}
                        />
                    }
                    {topPosts && topPosts.map(post =>
                        <div key={post.id}>
                            <Post
                                title={post.title}
                                link={post.url}
                                duration={post.reading_time_minutes}
                                comments={post.comments_count}
                                reactions={post.public_reactions_count}
                                tags={post.tag_list}
                                date={post.readable_publish_date}
                                author={post.user?.name}
                                avatar={post.user?.profile_image}
                                username={post?.user.username}
                            />
                        </div>
                    )}
                    <DevCard />
                    {posts ? posts.map((post) => (
                        <div key={post.id}>
                            <Post
                                title={post.title}
                                link={post.url}
                                duration={post.reading_time_minutes}
                                comments={post.comments_count}
                                reactions={post.public_reactions_count}
                                tags={post.tag_list}
                                date={post.readable_publish_date}
                                author={post.user?.name}
                                avatar={post.user?.profile_image}
                                username={post?.user.username}
                            />
                        </div>
                    )) : 'No Posts Available'}
                </div>
            </Router>
        </section>
    )
}

export default Posts