export function checkScoreResult(score: number): string {
  switch (score) {
    case 0:
      return "initiator";
    case 1:
    case 2:
    case 3:
      return "starter";
    case 4:
    case 5:
    case 6:
      return "aware";
    case 7:
    case 8:
    case 9:
      return "expert";
    case 10:
      return "master";
    default:
      return "master";
  }
}
