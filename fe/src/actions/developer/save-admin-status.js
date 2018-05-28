import { SAVE_ADMIN_STATUS } from './types';

export const saveAdminStatus = status => ({
	type: SAVE_ADMIN_STATUS,
	payload : status,
});
