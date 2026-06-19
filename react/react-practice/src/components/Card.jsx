export default function Card(){
    const card = 
        { id: 1, img: "https://assets.prebuiltui.com/images/components/card/card-houseImage1.png", title: "The Ridgewood Apartment", location: "Aspen, Colorado", price: "$2.5 M", specs1: "4 Bed", specs2: "3 Bath" }

    return (
        <>  
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
            </style>

            <div className="flex flex-col items-center justify-center gap-3 py-20 px-4">
                
                    <div key={card.id} className="flex items-center p-2 border border-black/10 hover:border-black/20 transition-colors rounded-xl w-full max-w-[420px]">
                        <img src={card.img} alt="House" className="w-full max-w-[118px] rounded-lg object-cover" />
                        <div className="ml-4">
                            <p className="text-lg text-zinc-900">{card.title}</p>
                            <p className="text-base text-zinc-600">{card.location}</p>
                            <p className="text-lg text-zinc-900 mt-3">{card.price}</p>
                            <div className="text-sm text-zinc-600 flex items-center gap-1.5">
                                {card.specs1}
                                <div className='size-1 rounded-full bg-[#777777]'></div>
                                {card.specs2}
                            </div>
                        </div>
                    </div>
            
            </div>
        </>
    )
}