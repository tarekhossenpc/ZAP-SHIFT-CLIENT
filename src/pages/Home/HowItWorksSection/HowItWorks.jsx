import bookingImg from '../../../assets/othersImg/bookingIcon.png'
const HowItWorks = () => {
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h1 className='text-secondary text-[32px] font-extrabold'>How it Works</h1>
            <div className='grid grid-cols-4 gap-6'>
                <div className='bg-white p-8 mt-8 rounded-2xl'>
                    <img src={bookingImg} alt="" />
                    <h3 className=' text-secondary text-xl font-bold my-6 '>Booking Pick & Drop</h3>
                    <p className='text-base text-neutral-accent'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-8 mt-8 rounded-2xl'>
                    <img src={bookingImg} alt="" />
                    <h3 className=' text-secondary text-xl font-bold my-6 '>Cash On Delivery</h3>
                    <p className='text-base text-neutral-accent'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-8 mt-8 rounded-2xl'>
                    <img src={bookingImg} alt="" />
                    <h3 className=' text-secondary text-xl font-bold my-6 '>Delivery Hub</h3>
                    <p className='text-base text-neutral-accent'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-8 mt-8 rounded-2xl'>
                    <img src={bookingImg} alt="" />
                    <h3 className=' text-secondary text-xl font-bold my-6 '>Booking SME & Corporate</h3>
                    <p className='text-base text-neutral-accent'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;