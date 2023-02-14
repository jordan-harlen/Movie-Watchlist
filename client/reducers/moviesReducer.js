const tempInitialState = [
  {
    id: 1,
    title: 'The Batman',
    img: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.6762_AL_.jpg',
    imdb_id: 'tt1877830',
    watched: 0,
  },
  {
    id: 2,
    title: 'Arrival',
    img: 'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_Ratio0.6762_AL_.jpg',
    imdb_id: 'tt2543164',
    watched: 1,
  },
]

export function movieReducer(state = tempInitialState, action) {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}
