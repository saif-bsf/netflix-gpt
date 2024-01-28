export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVATAR =
  "https://occ-0-8003-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfY9vV3c3x-EAKsK5x6UdQRMRgWHU_fGa-IirIEKSaRbbHf3wiKVBs-dte8ZDPUsd8jUtPDEDfXRhdIsZW6oVz_lypVg7Is.png?r=fe5https://occ-0-8003-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfY9vV3c3x-EAKsK5x6UdQRMRgWHU_fGa-IirIEKSaRbbHf3wiKVBs-dte8ZDPUsd8jUtPDEDfXRhdIsZW6oVz_lypVg7Is.png?r=fe5";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg";

export const OPEN_AI_KEYS = process.env.REACT_APP_OPEN_AI_KEY;
