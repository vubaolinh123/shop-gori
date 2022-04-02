const dataGallery = [
    {
        id: 1,
        name: "imgGallery",
        image: "https://theme.hstatic.net/200000015470/1000737480/14/gallery_item_1_img.jpg?v=77",
    },
    {
        id: 2,
        name: "imgGallery",
        image: "https://theme.hstatic.net/200000015470/1000737480/14/gallery_item_2_img.jpg?v=77",
    },
    {
        id: 3,
        name: "Gori imgGallery",
        image: "https://theme.hstatic.net/200000015470/1000737480/14/gallery_item_3_img.jpg?v=77",
    },
    {
        id: 4,
        name: "imgGallery",
        image: "https://theme.hstatic.net/200000015470/1000737480/14/gallery_item_4_img.jpg?v=77",
    },
    {
        id: 5,
        name: "imgGallery",
        image: "https://theme.hstatic.net/200000015470/1000737480/14/gallery_item_5_img.jpg?v=77",
    },
    {
        id: 6,
        name: "imgGallery",
        image: "https://theme.hstatic.net/200000015470/1000737480/14/gallery_item_6_img.jpg?v=77",
    },
]


const Gallery = () => {
    return (
        <>
            <div className="w-full pb-[40px]">
                <a target="_blank" href="https://www.instagram.com/gori_vietnam/" className="w-full flex relative cursor-pointer">
                    {dataGallery.map(data => (

                        <div key={data.id} className="w-[16.666666666%] ">
                            <div className="overflow-hidden">
                                <img className="transition-all duration-[1.5s] hover:scale-150" src={data.image} alt={data.name} />
                            </div>
                        </div>

                    ))}
                    <div className="absolute top-[23%] left-[42.5%] bg-[#ffffffbf]">
                        <div className="font-bold p-[25px] flex flex-col text-[#333] text-[30px]">
                            FOLLOW US
                            <span className="italic">
                                @instagram
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Gallery;