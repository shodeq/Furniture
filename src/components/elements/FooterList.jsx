/* eslint-disable react/prop-types */
const FooterList = ({ children, props }) => {
    return (
        <div className="flex flex-col items-start">
            {props}
            <ul className="mt-[5px] flex flex-col items-start gap-[4px]">
                {children}
            </ul>
        </div>
    )
}

const Title = ({ title }) => {
    return (
        <>
            <h3 className="text-[29px] font-semibold">{title}</h3>
        </>
    )
}

const ListContent = ({ className, content, icon }) => {
    return (
        <li className="text-[23px] list-none">
            <a href="#" className="flex justify-center items-center">
                <i className={`${className}`}>{icon}</i>
                {content}</a>
        </li>
    )
}

FooterList.Title = Title
FooterList.ListContent = ListContent

export default FooterList