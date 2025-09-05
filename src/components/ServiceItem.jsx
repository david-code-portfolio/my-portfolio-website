function ServiceItem({description, title, number}){
    return(
        <div className="bg-[var(--grey-color)] rounded-2xl p-8 max-sm:p-6 grid grid-cols-[auto_1fr] gap-8">
            <p className="col-span-2 text-xl max-sm:text-[1rem]">
                {description}
            </p>
            <h3 className="text-[2rem] font-semibold self-end max-sm:text-xl">
                {title}
            </h3>
            <p className="justify-self-end text-[2rem] serviceNumber font-semibold self-end max-sm:text-xl">
                {number}
            </p>
        </div>
    )
}
export default ServiceItem;