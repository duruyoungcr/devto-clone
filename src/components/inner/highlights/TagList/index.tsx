
interface TagListPropTypes {
    title: string;
    isNew: boolean;
    comments: number
    href: string,
}

const TagList = ({ title, isNew = false, comments, href }: TagListPropTypes) => {
    return (
        <a href={href}>
            <div className='border-b last-of-type:border-b-0 last-of-type:rounded-b-lg border-b-gray-light transition-all duration-300 ease-in p-4 group hover:bg-white'>
                <h3 className='transition-all duration-300 ease-in group-hover:text-purple'>
                    {title}
                </h3>
                <div className='mt-1'>
                    {isNew ?
                        <span className='text-sm rounded-lg p-1 bg-yellow text-yellow-dark'>
                            New
                        </span>
                        :
                        <p>
                            {comments} comment{comments > 1 && 's'}
                        </p>
                    }
                </div>
            </div>
        </a>
    )
}

export default TagList