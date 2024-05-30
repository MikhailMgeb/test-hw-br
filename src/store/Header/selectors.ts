import { RootState } from '../store';

export const selectHeaderLogo = (state: RootState) => state.header.LogoImg;
export const selectHeaderUsedGuid = (state: RootState) => state.header.UsedGuid;
export const selectHeaderUserName = (state: RootState) => state.header.UserName;
export const selectHeaderUserError = (state: RootState) => state.header.error;
export const selectHeaderUserStatus = (state: RootState) => state.header.status;
