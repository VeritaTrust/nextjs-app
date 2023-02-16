const RATING_STAR_TEXTS = ['Weak', 'Average', 'Good', 'Very Good', 'Excellent']

const TextSizeNote = {
  BAD: 80,
  AVERAGE: 160,
  GOOD: 240,
  VERY_GOOD: 320,
  EXCELLENT: 400
};

type NoteTextLen = {
  title: string;
  className: string;
}

const getNoteByTextLength = (textLen: number): NoteTextLen => {
  if (textLen < TextSizeNote.AVERAGE) {
    return {title: 'Weak', className: 'bad'};
  } else if (textLen < TextSizeNote.GOOD) {
    return {title: 'Average', className: 'not_bad'};
  } else if (textLen < TextSizeNote.VERY_GOOD) {
    return {title: 'Good', className: 'good'};
  } else if (textLen < TextSizeNote.EXCELLENT) {
    return {title: 'Very Good', className: 'very_good'};
  } else {
    return {title: 'Excellent', className: 'excellent'};
  }
}

const DEFAULT_RATING_STAR = 5

export {getNoteByTextLength, RATING_STAR_TEXTS, DEFAULT_RATING_STAR}
