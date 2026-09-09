// config.js
const APP_CONFIG = {
    // আগেকার টিভির ফিল দেওয়ার জন্য নাম পরিবর্তন করা হলো
    pageTitle: "CRT Smart TV",
    headerTitle: "CRT TV",
    headerSub: "Classic TV Experience",
    developerName: "Admin",
    
    // চ্যানেল ক্যাটাগরি এবং লিংক (সরাসরি গিটহাব থেকে লোড হবে, কোনো প্রক্সি ছাড়া)
    categories: [
        { 
            name: "🇧🇩 BD", 
            url: "https://iptv-org.github.io/iptv/countries/bd.m3u" 
        },
        { 
            name: "🇮🇳 India", 
            url: "https://iptv-org.github.io/iptv/countries/in.m3u" 
        },
        { 
            name: "👶 Kids", 
            url: "https://iptv-org.github.io/iptv/categories/kids.m3u" 
        },
        { 
            name: "⚽ Sports", 
            url: "https://iptv-org.github.io/iptv/categories/sports.m3u" 
        }
    ]
};
