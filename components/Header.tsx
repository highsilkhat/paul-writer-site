import MenuLink from './MenuLink'
import Newspaper from '../assets/newspaper.svg'

const Header: React.VFC = () => {
    return(
        
        <div
            className="
            py-10 md:py-20
            font-sans
            bg-red-500
            "
        >
            <MenuLink
                href="/bio"
                className='
                group-hover: text-blue-500
                group-hover:text-opacity-100'
                iconComponent={Newspaper}
                iconText="newspaper"
                iconTextStyling='
                text-xs'
            
            />


        </div>
    )
}

export default Header