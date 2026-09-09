// config.js
const APP_CONFIG = {
    // অ্যাপের নাম 
    appName: "Rafidul Islam | Live TV",
    
    // প্রক্সি সার্ভার (CORS সমস্যা সমাধানের জন্য)
    proxy: "https://corsproxy.io/?",
    
    // ক্যাটাগরি এবং আইপিটিভি লিংক কন্ট্রোল
    // এখানে আপনি যত খুশি ক্যাটাগরি বা লিংক এড/রিমুভ করতে পারবেন
    categories: [
        { 
            id: "bd", 
            name: "🇧🇩 বাংলাদেশ", 
            url: "https://iptv-org.github.io/iptv/countries/bd.m3u" 
        },
        { 
            id: "in", 
            name: "🇮🇳 ইন্ডিয়া", 
            url: "https://iptv-org.github.io/iptv/countries/in.m3u" 
        },
        { 
            id: "sports", 
            name: "⚽ খেলাধুলা", 
            url: "https://iptv-org.github.io/iptv/categories/sports.m3u" 
        },
        { 
            id: "kids", 
            name: "👶 কার্টুন", 
            url: "https://iptv-org.github.io/iptv/categories/kids.m3u" 
        },
        { 
            id: "movies", 
            name: "🎬 মুভি", 
            url: "https://iptv-org.github.io/iptv/categories/movies.m3u" 
        }
    ]
};

