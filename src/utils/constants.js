export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7";

export const BCK_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg";

export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const URL_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQwMDUxODc0NWI2NTQwMDdjMWFhMTlhNDBkMGQxMSIsIm5iZiI6MTc0NzkyNDM0MS42MTYsInN1YiI6IjY4MmYzNTc1ZDUzMWU0Yjk0MTY4NDg1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zE2dQyAgUohohWmH7OCivKMuyB_wW70tLycXoeqGc0E'
  }
};

export const VIDEOS_URL = (id) => `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";

export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const languages = [
 { id: "kn", name: "Kannada"},
 { id: "en", name: "English"}
]
