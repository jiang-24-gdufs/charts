import { reactive, toRefs } from 'vue';

export default function useEditMenu() {
  const state = reactive({
    menuTop: 0,
    menuLeft: 0,
    showMenu: false,
    showContainerMenu: false,
  });

  function handleGridItemContextMenu(event /* , index, item */) {
    handleCloseMenu();
    state.menuTop = event.clientY;
    state.menuLeft = event.clientX;
    state.showMenu = true;
    // state.menuGridItem = item;
    // state.menuGridIndex = index;
  }
  function handleContainerMenu(event) {
    handleCloseMenu();
    state.menuTop = event.clientY;
    state.menuLeft = event.clientX;
    state.showContainerMenu = true;
  }

  function handleCloseMenu() {
    state.showMenu = false;
    state.showContainerMenu = false;
  }

  return {
    ...toRefs(state),

    handleGridItemContextMenu,
    handleContainerMenu,
    handleCloseMenu,
  };
}
