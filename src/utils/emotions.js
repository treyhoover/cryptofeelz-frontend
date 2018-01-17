import { sample } from "lodash";

const percentEmotionMap = {
  "-25": ["broke", "fml"],
  "-10": ["crying", "stop it", "why"],
  "-5": ["no", "dislike", "shake head", "disappointed", "facepalm"],
  "0": ["whatever", "eye roll", "bored", "shrug", "waiting", "tired"],
  "5": ["k", "thumbs up", "yes"],
  "10": ["party", "good job", "popcorn", "happy"],
  "25": ["rich", "making it rain"],
};

const percentBuckets = Object.keys(percentEmotionMap)
  .map(Number)
  .filter(x => x >= 0) // ignore sign for buckets
  .sort((a, b) => b - a); // reverse so we can find the largest bucket (without going over)

export const percentToEmotion = p => {
  const prefix = p < 0 ? "-" : "";
  const absChange = Math.abs(p);
  const bucket = prefix + String(percentBuckets.find(p => absChange > p));

  return sample(percentEmotionMap[bucket]);
};
