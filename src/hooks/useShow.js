import { ref } from "vue";

const useShow = () => {
  const show = ref(false);

  function toggleShow() {
    show.value = !show.value;
  }
  function setShow(newShow) {
    show.value = newShow;
  }

  return {
    show,
    toggleShow,
    setShow,
  };
};

export default useShow;
