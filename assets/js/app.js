
const cl = console.log;

//const img-path ="https://image.tmdb.org/t/p/w1280"
let moviearry =[
			{
				adult: false,
        backdrop_path: "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
        genre_ids: [
          14,
          12
        ],
        id: 12445,
        original_language: "en",
        original_title: "Harry Potter and the Deathly Hallows: Part 2",
        overview: "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
        popularity: 224.212,
        poster_path: "/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
        release_date: "2011-07-07",
        title: "Harry Potter and the Deathly Hallows: Part 2",
        video: false,
        vote_average: 8.1,
        vote_count: 17544
	
			},
			{
				adult: false,
      backdrop_path: "/xnqust9Li4oxfhXD5kcPi3UC8i4.jpg",
      genre_ids: [
        28,
        12,
        878
      ],
      id: 99861,
      original_language: "en",
      original_title: "Avengers: Age of Ultron",
      overview: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
      popularity: 260.597,
      poster_path: "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
      release_date: "2015-04-22",
      title: "Avengers: Age of Ultron",
      video: false,
      vote_average: 7.3,
      vote_count: 20170
			},
			{
				 adult: false,
      backdrop_path: "/5Y0Ut7LMDa60cUMwwsk1p24lnox.jpg",
      genre_ids: [
        28,
        9648,
        12
      ],
      id: 937013,
      original_language: "zh",
      original_title: "老九门之青山海棠",
      overview: "At the beginning of the 20th century, Zhang Qi Shan and his father were subject to experimentation by the traitor Zuo Qian Zhi. Ten years later, Zhang Qi Shan seeks his revenge. He arrives in Changsha for the first time and meets Er Yue Hong. The two join forces to go against Zuo Qian Zhi and the monster that threatens the city.",
      popularity: 315.85,
      poster_path: "/cVWYG9W7jNaElA4U7naT6o9JhdF.jpg",
      release_date: "2022-02-10",
      title: "The Mystic Nine: Begonia from Qingshan",
      video: false,
      vote_average: 4.4,
      vote_count: 5
			},
			{
				adult: false,
      backdrop_path: "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
      genre_ids: [
        28,
        12,
        878
      ],
      id: 497698,
      original_language: "en",
      original_title: "Black Widow",
      overview: "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
      popularity: 274.726,
      poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
      release_date: "2021-07-07",
      title: "Black Widow",
      video: false,
      vote_average: 7.4,
      vote_count: 7936
			}
			
]
let result = ``

for (let i = 0; i < moviearry.length; i++ ){
	result += `<div class="col-md-3">
					<div class="card">
						<figure class="moviecard">
							<img src="https://image.tmdb.org/t/p/w1280${moviearry[i].poster_path}" alt="" title="">
							<figcaption>
								<div class="titleinfo p-4">
									<div class="row">
										<div class="col-10">
											<h4>${moviearry[i].title}</h4>
										</div>
										<div class="col-2">
											<span class="rating alert-danger">${moviearry[i].vote_average}</span>
										</div>
									</div>
								</div>
								<div class="overview p-4">
									<h5>Overview</h5>
									${moviearry[i].overview}
								
							</figcaption>
						</figure>
					</div>
				</div>
	
				`
}

const moviescontainer = document.getElementById("moviescontainer");

moviescontainer.innerHTML = result


