const useAudio = () => {
  const wow = new Audio(require("../assets/wow.mp3"));
  const goodJob = new Audio(require("../assets/good_job.mp3"));
  const soundtrack = new Audio(require("../assets/soundtrack.mp3"));
  const NANI = new Audio(require("../assets/NANI.mp3"));
  const winner = new Audio(require("../assets/winner.mp3"));

  return { wow, goodJob, soundtrack, NANI, winner };
};

export default useAudio;
