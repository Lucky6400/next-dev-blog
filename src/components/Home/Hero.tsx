import Image from 'next/image'

export default function Hero() {
    return (
        <div className="bg-gray-900 text-white overflow-hidden px-0">
            <div className="w-full flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col w-full p-4 lg:w-1/2 justify-center items-start order-2 lg:order-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Welcome to My Blog</h1>
                    <p className="mb-8 text-xl">This is a great place to share your thoughts and ideas.</p>
                    <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded">Read More</button>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 order-1 lg:order-2">
                    <Image src={"/hero.jpg"} alt="Hero Image" layout="responsive" width={500} className='w-full' height={300} />
                </div>
            </div>
        </div>
    )
}
