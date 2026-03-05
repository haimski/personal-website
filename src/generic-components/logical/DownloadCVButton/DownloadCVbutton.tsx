const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/haimbz/';

const DownloadCVButton = () => {
    return (
        <button
            onClick={() => window.open(LINKEDIN_PROFILE_URL, '_blank')}
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 no-underline cursor-pointer select-none"
        >
            My Resume
        </button>
    );
}

export default DownloadCVButton;