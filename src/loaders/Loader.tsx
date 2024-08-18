import loaderImage from '../assets/loader/banitsapng.png';

export default function Loader() {
    return (
        <div>
            <div className="loaderImage">
                <img src={loaderImage} alt="Loader" />
            </div>
        </div>
    );
}
