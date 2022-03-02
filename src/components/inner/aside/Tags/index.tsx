import { useEffect, useState } from "react"
import NavLink from "../NavLink"

interface TagPropTypes {
    id: number,
    name: string,
    bg_color_hex: string,
    text_color_hex: string
}

const Tags = () => {
    const [tags, setTags] = useState<Array<TagPropTypes>>([])
    useEffect(() => {
        fetchTags()
        return () => {
            fetchTags()
        }
    }, [])
    const tagsURL = 'https://dev.to/api/tags'
    const tagHref = 'https://dev.to/t/'
    const fetchTags = async () => {
        const result = await fetch(tagsURL).then((res) => res.json())
        setTags(result)
    }
    return (
        <nav className='mb-6'>
            <div>
                <h2 className='px-3 py-2 text-black-dark font-bold'>Popular Tags</h2>
                <div className='max-h-[284px] overflow-y-auto'>
                    {tags.map(tag => (
                        <NavLink key={tag.id} title={'#' + tag.name} href={tagHref + tag.name} />
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Tags