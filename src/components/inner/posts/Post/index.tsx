import styles from './Post.module.css'
import { Button } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react'
import ReactionIcon from '../../../elements/svg/ReactionIcon';
import CommentsIcon from '../../../elements/svg/CommentsIcon';

interface PostPropTypes {
    title: string,
    link: string,
    duration: number,
    comments: number,
    reactions: number,
    tags?: string[],
    date: string,
    author: string,
    avatar: string,
    pinned?: boolean,
    username: string,
}

const Post = ({
    title,
    link,
    duration,
    comments,
    reactions,
    tags,
    date,
    author,
    avatar,
    pinned,
    username
}: PostPropTypes) => {
    const baseURL = 'https://dev.to/'
    return (
        <article className={styles.card}>
            <div className={styles.top}>
                <div className={styles.user}>
                    <a href={baseURL + username}>
                        <Avatar size='sm' name={author} src={avatar} />
                    </a>
                    <div className='flex flex-col ml-2'>
                        <h4 className={styles.name}>{author}</h4>
                        <p className='text-black-light text-xs'>{date}</p>
                    </div>
                </div>
                {pinned &&
                    <div className={styles.pinned}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className="mr-1 align-text-bottom color-accent-brand">
                            <path d="M22.314 10.172l-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.242 1.414-1.415L8.88 8.05l4.242-4.242-.707-.707 1.414-1.415z" fill="#3B49DF"></path>
                        </svg>
                        <p className='ml-2 font-bold'>Pinned</p>
                    </div>
                }
            </div>
            <div className={styles.details}>
                <a className={styles.link} href={link}>
                    {title}
                </a>
                <div className={styles.tags}>
                    {tags?.map((tag, index) => (
                        <a href={`https://dev.to/t/${tag}`} key={index} className={styles.tag}>
                            #{tag}
                        </a>
                    ))}
                </div>
                <div className={styles.bottom}>
                    <div className={styles.stats}>
                        <a href={link} className={styles.stat}>
                            <ReactionIcon />
                            {reactions > 0 ?
                                <p className='ml-2'>{reactions} reaction{reactions > 1 && 's'}</p>
                                :
                                <p className='ml-2'>Add Reaction</p>
                            }
                        </a>
                        <a href={link + '#comments'} className={styles.stat}>
                            <CommentsIcon />
                            {comments > 0 ?
                                <p className='ml-2'>{comments} comment{comments > 1 && 's'}</p>
                                :
                                <p className='ml-2'>Add Comment</p>
                            }
                        </a>
                    </div>
                    <div className={styles.action}>
                        <p className='mr-2 text-xs'>{duration} min read</p>
                        <Button title='Save to reading list' colorScheme='gray' color="bg-gray" className="bg-gray-dark" size={'sm'}>Save</Button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post