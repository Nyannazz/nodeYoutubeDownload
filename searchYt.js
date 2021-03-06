const cheerio = require("cheerio");
const request = require("request-promise");


function searchYt(query, page, userAgent) {
    return new Promise((resolve, reject) => {
        if (!query || typeof query !== "string") return reject(new Error("search param q with your search terms is required"))

        request({
            uri: `https://www.youtube.com/results?search_query=${query}${page ? `&page=${page}` : ""}`,
            headers: {
                'user-agent': userAgent
            }
        })
            .then(data => {
                const $ = cheerio.load(data);
                const videos = $('div.yt-lockup.yt-lockup-tile.yt-lockup-video.vve-check.clearfix', data);

                if (videos.length) {

                    const videoList = [];
                    for (let i = 0; i < videos.length; i++) {
                        const listItems = $("li", videos[i]);
                        const thumbnail = $("img", videos[i]).attr("data-thumb");
                        const linkTitle = $("h3>a", videos[i]).first();
                        const listData = []

                        listItems.each(function (i, item) {
                            listData[i] = $(item).text()
                        })

                        const title = linkTitle.text();
                        const link = linkTitle.attr("href");

                        // check if the output array alrady has a video with this link
                        if (videoList.findIndex(video => video.link === link) === -1) {
                            videoList.push({
                                uploaded: listData[0],
                                views: listData[1],
                                thumbnail: thumbnail ? thumbnail : $("img", videos[i]).attr("src"),
                                duration: $("span", videos[i]).first().text().trim("\n"),
                                title: title,
                                link: link
                            })
                        }

                    }
                    const currentPage = page || 1;
                    resolve({
                        query: query,
                        page: currentPage,
                        nextPage: `https://www.youtube.com/results?search_query=${query}&page=${Number(currentPage) + 1}`,
                        videos: videoList
                    });
                } else {
                    reject("The scraper could not find any videos. Most likely lovely Youtube changed their layout again... Feel free to contact me at kantemir.imam@gmail.com if you care")
                }


            })
            .catch(e => reject(e))
    })

}



//searchYt("tool", 2).then(data=>console.log(data)).catch(e=>console.log(e));

module.exports = searchYt