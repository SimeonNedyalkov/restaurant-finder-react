import loaderImage from '../assets/loader/banitsapng.png';

export default function Loader() {
    return (
        <div className='loaderBackground'>
            <div className="loaderImage">
                <img src={loaderImage} alt="Loader" />
            </div>
        </div>
    );
}
