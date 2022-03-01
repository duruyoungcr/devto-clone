import styles from './Post.module.css'
import PushPinIcon from '@mui/icons-material/PushPin';
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
    team?: string,
    teamAvatar?: string
    pinned?: boolean,
    tutorial?: boolean
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
    team,
    teamAvatar,
    pinned,
    tutorial }: PostPropTypes) => {
    return (
        <article className={styles.card}>
            <div className={styles.top}>
                <div className={styles.user}>
                    <Avatar size='sm' name={author} src={avatar} />
                    <div className='flex flex-col ml-2'>
                        <h4 className={styles.name}>{author}</h4>
                        <p className='text-black-light text-xs'>{date}</p>
                    </div>
                </div>
                {pinned &&
                    <div className={styles.pinned}>
                        <PushPinIcon className='rotate-45 text-purple' fontSize='large' />
                        <p>Pinned</p>
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