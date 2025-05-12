import { createSelector } from "@reduxjs/toolkit";

export const selectTransactions = (state) => state.transactions.items;
export const selectSelectedType = (state) => state.transactions.selectedType;
export const selectIsLoading = (state) => state.transactions.isLoading;
export const selectIsError = (state) => state.transactions.isError;

//
//TrasactionsHistoryPage
//

export const selectIsToken = (state) => Boolean(state.auth.token); //move to auth selectors

export const selectUserCurrecy = (state) => state.user.currency; //move to user selectors
export const selectIsDeleteModalOpen = (state) =>
  state.transactions.deleteModal;

export const selectFilter = (state) => state.transactions.filter;

export const selectFilteredTransactions = createSelector(
  [selectTransactions, selectFilter],
  (transactions, filterValue) => {
    const lowerFilter = (filterValue ?? "").toLowerCase();
    if (!lowerFilter) {
      return transactions ?? [];
    }
    return (
      transactions?.filter((transaction) =>
        Object.values(transaction).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(lowerFilter);
          }
          if (typeof value === "object" && value !== null) {
            return Object.values(value).some(
              (item) =>
                typeof item === "string" &&
                item.toLowerCase().includes(lowerFilter)
            );
          }
          return false;
        })
      ) ?? []
    );
  }
);
