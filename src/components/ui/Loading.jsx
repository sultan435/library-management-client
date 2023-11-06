import Lottie from 'lottie-react';
import loadingLottie from '../../assets/Animation - 1699118474090.json'

const Loading = () => {
    return (
        <div className='flex justify-center  items-center '>
            <Lottie animationData={loadingLottie} loop={true}></Lottie>
        </div>
    );
};

export default Loading;