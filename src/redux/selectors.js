export const selectCampers = (state) => state.campers.campers.items;
export const selectTotalCampers = (state) => state.campers.campers.total;
export const selectLoading = (state) => state.campers.campers.loading;
export const selectError = (state) => state.campers.campers.error;
export const selectFilters = (state) => state.campers.campers.filters;

export const selectCamperDetails = (state) => state.campers.camperDetails.data;

export const selectCamperDetailsLoading = (state) =>
  state.campers.camperDetails.loading;
export const selectCamperDetailsError = (state) =>
  state.campers.camperDetails.error;
