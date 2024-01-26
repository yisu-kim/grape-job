type Background = SolidBackground | EmojiBackground;

type SolidBackground = {
  type: "solid";
  color: string;
};

type EmojiBackground = {
  type: "emoji";
  char: string;
};
