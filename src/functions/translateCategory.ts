export const translateCategory = (questionCategory:string) => {
  switch (questionCategory) {
    case "skill":
      return "言語";
    case "work":
      return "職業";
    case "network":
      return "ネットワーク言語";
    case "git":
      return "git用語";
  }
};
