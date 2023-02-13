const tempInitialState = [
  {
    id: 1,
    title: 'The Batman',
    img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg',
    imdb_id: 'tt1877830',
    watched: 0,
  },
  {
    id: 2,
    title: 'Arrival',
    img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg',
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
