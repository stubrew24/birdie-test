export const formatEvent = (name: string) => {
  let arr = name.split('_');
  arr = arr.map(el => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });
  return arr.join(' ');
};

export const formatDate = (date: string) => {
  const fullDate = new Date(date);
  return fullDate.toString().slice(0, 15);
};

const scoreToPercent = (score: number) => {
  return ((score / 2) + 0.5) * 100;
};

export const calculateMood = (data: {mood?: string}[]) => {
  const newdata = data.filter(x => x.mood);
  let score = 0;
  newdata.forEach(x => {
    switch (x.mood) {
      case 'sad':
        return score += -1;
      case 'okay':
        return score += 0;
      case 'happy':
        return score += 1;
      default:
        return;
    }
  });
  const mean = score / newdata.length;
  return scoreToPercent(mean);
};

export const selectMoodColor = (mood: number) => {
  if (!mood) { return 'grey'; }
  if (mood < 20) {
    return 'blue';
  }
  if (mood < 40) {
    return 'teal';
  }
  if (mood < 60) {
    return 'grey';
  }
  if (mood < 80) {
    return 'olive';
  }
  return 'green';
};