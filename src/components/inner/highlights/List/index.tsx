
interface ListPropTypes {
    title: string;
    category: string;
    href: string,
    trending?: boolean
}

const List = ({ title, category, href, trending = false }: ListPropTypes) => {
    return (
        <a href={href}>
            <div className={`${!trending && 'border-b border-b-gray-light'} transition-all duration-300 ease-in p-4 group hover:bg-white`}>
                <h3 className='transition-all duration-300 ease-in group-hover:text-purple'>
                    {title}
                </h3>
                {!trending &&
                    <div>
                        <p className='mt-1 text-sm text-black-light'>{category}</p>
                    </div>
                }
            </div>
        </a>
    )
}

export default List