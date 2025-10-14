const tourData = [
  {
    venue: "Dickies Arena",
    city: "Fort Worth, TX",
    date: "December 2, 2025",
    artists: "Alex Warren, Jessie Murph, mgk, Nelly, Reneé Rapp, Rachel Chinouriri, Shinedown, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=32.740891&lng=-97.369938&venue=Dickies%20Arena",
    ticketURL: "https://www.ticketmaster.com/1061-kiss-fms-jingle-ball-presented-fort-worth-texas-12-02-2025/event/0C0063368639142B"
  },
  {
    venue: "Intuit Dome",
    city: "Inglewood, CA",
    date: "December 5, 2025",
    artists: "Alex Warren, Audrey Hobert, Conan Gray, Feid, Jackson Wang, Jessie Murph, The Kid LAROI, Leon Thomas, Reneé Rapp, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=33.9438&lng=-118.3422&venue=Intuit%20Dome",
    ticketURL: "https://www.ticketmaster.com/1027-kiis-fms-jingle-ball-presented-inglewood-california-12-05-2025/event/0900632B9E252160"
  },
  {
    venue: "Allstate Arena",
    city: "Rosemont, IL",
    date: "December 8, 2025",
    artists: "Audrey Hobert, Jackson Wang, Jessie Murph, Nelly, Ravyn Lenae, Reneé Rapp, Shinedown, Teddy Swims, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=42.0052&lng=-87.8874&venue=Allstate%20Arena",
    ticketURL: "https://www.ticketmaster.com/1035-kiss-fms-jingle-ball-presented-rosemont-illinois-12-08-2025/event/04006316A390229D"
  },
  {
    venue: "Little Caesars Arena",
    city: "Detroit, MI",
    date: "December 9, 2025",
    artists: "BigXthaPlug, Conan Gray, Jessie Murph, MOLIY, Nelly, Rachel Chinouriri, Ravyn Lenae, Shinedown, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=42.34111&lng=-83.05500&venue=Little%20Caesars%20Arena",
    ticketURL: "https://www.ticketmaster.com/channel-955s-jingle-ball-presented-by-detroit-michigan-12-09-2025/event/08006333CEBD49AD"
  },
  {
    venue: "Madison Square Garden",
    city: "New York, NY",
    date: "December 12, 2025",
    artists: "Alex Warren, BigXthaPlug, Conan Gray, Ed Sheeran, Jessie Murph, Laufey, MONSTA X, Myles Smith, Nelly, Ravyn Lenae, Reneé Rapp, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://customcgs.netlify.app/?lat=40.7505&lng=-73.9934&venue=Madison%20Square%20Garden",
    ticketURL: "https://www.ticketmaster.com/z100s-jingle-ball-presented-by-capital-new-york-new-york-12-12-2025/event/3B006339C9951A53"
  },
  {
    venue: "TD Garden",
    city: "Boston, MA",
    date: "December 14, 2025",
    artists: "Ed Sheeran, Laufey, MOLIY, Myles Smith, Olivia Dean, Ravyn Lenae, Sean Paul, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=42.366291&lng=-71.062630&venue=TD%20Garden",
    ticketURL: "https://www.ticketmaster.com/kiss-108s-jingle-ball-presented-by-boston-massachusetts-12-14-2025/event/0100631D9F8248D4"
  },
  {
    venue: "Xfinity Mobile Arena",
    city: "Philadelphia, PA",
    date: "December 15, 2025",
    artists: "AJR, Alex Warren, BigXthaPlug, Laufey, MONSTA X, Myles Smith, Ravyn Lenae, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=39.9012&lng=-75.1720&venue=Xfinity%20Mobile%20Arena",
    ticketURL: "https://www.ticketmaster.com/q102s-jingle-ball-presented-by-capital-philadelphia-pennsylvania-12-15-2025/event/3000632BF0484A56"
  },
  {
    venue: "Capital One Arena",
    city: "Washington, DC",
    date: "December 16, 2025",
    artists: "AJR, Alex Warren, Conan Gray, Jelly Roll, Laufey, MONSTA X, Myles Smith, Nelly, Olivia Dean, Shinedown, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=38.898060&lng=-77.020830&venue=Capital%20One%20Arena",
    ticketURL: "https://www.ticketmaster.com/hot-995s-jingle-ball-presented-by-washington-district-of-columbia-12-16-2025/event/1500631D80D119DE"
  },
  {
    venue: "State Farm Arena",
    city: "Atlanta, GA",
    date: "December 18, 2025",
    artists: "BigXthaPlug, Jermaine Dupri & Friends, Kehlani, Lil Jon & Friends, Mariah The Scientist, MOLIY and Nelly",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=33.7573&lng=-84.3963&venue=State%20Farm%20Arena",
    ticketURL: "https://www.ticketmaster.com/961-the-beats-jingle-ball-presented-atlanta-georgia-12-18-2025/event/0E0063310C9C6BB0"
  },
  {
    venue: "Kaseya Center",
    city: "Miami, FL",
    date: "December 20, 2025",
    artists: "BigXthaPlug, Feid, Kehlani, mgk, MONSTA X, Nelly, Zara Larsson + KPOP DEMON HUNTERS Sing-Along",
    cityGuide: "https://fantastic-squirrel-0f95b8.netlify.app/?lat=25.7814&lng=-80.187&venue=Kaseya%20Center",
    ticketURL: "https://www.ticketmaster.com/y1007s-jingle-ball-presented-by-capital-miami-florida-12-20-2025/event/0D00632A2FE0611C"
  }
];

const container = document.getElementById('cards-container');

tourData.forEach((stop) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h2>${stop.venue}</h2>
    <p>${stop.city}</p>
    <p><strong>${stop.date}</strong></p>
    <p style="font-size: 13px;">${stop.artists}</p>
    <div class="buttons">
      <button class="city" onclick="window.open('${stop.cityGuide}', '_blank')">City Guide</button>
      <button onclick="window.open('${stop.ticketURL}', '_blank')">Buy Tickets</button>
    </div>
  `;
  container.appendChild(card);
});
